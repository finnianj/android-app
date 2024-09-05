const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Import your Birds array from the TypeScript file (replace './birds' with the actual path)
const data = require('./BirdData');
const Birds = data.default;

// Function to download an image from a URL
const downloadImage = async (url, filepath) => {
    const response = await axios({
        url,
        method: 'GET',
        responseType: 'stream'
    });
    
    return new Promise((resolve, reject) => {
        response.data.pipe(fs.createWriteStream(filepath))
            .on('finish', () => resolve())
            .on('error', e => reject(e));
    });
};

// Function to search Wikimedia Commons for an image using the bird's name
const searchImage = async (birdName) => {
    const searchUrl = `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(birdName)}&title=Special:MediaSearch&go=Go&type=image`;
    
    try {
        const { data } = await axios.get(searchUrl);
        const $ = cheerio.load(data);
        
        // Find the first image result by targeting its src attribute
        const imageUrl = $('img').first().attr('src');
        
        if (imageUrl) {
            // Convert the image URL to a high-res version if necessary (Wikimedia uses thumbnails by default)
            return imageUrl.replace(/thumb\/(\S+)\/\d+px-\S+/, '$1');
        }
        
    } catch (error) {
        console.error(`Error fetching image for ${birdName}:`, error);
    }
    
    return null;
};

// Main function to iterate over the birds and download their images
const downloadBirdImages = async () => {
    for (const bird of Birds) {
        console.log(bird.id);
        const birdName = bird.name;
        console.log(`Searching image for: ${birdName}`);
        
        const imageUrl = await searchImage(birdName);
        
        if (imageUrl) {
            const filepath = path.join(__dirname, 'images', `${birdName.replace(/\s+/g, '_')}.jpg`);
            
            try {
                // Ensure the 'images' directory exists
                if (!fs.existsSync('images')) {
                    fs.mkdirSync('images');
                }
                
                // Download the image
                await downloadImage(imageUrl, filepath);
                console.log(`Downloaded: ${birdName}`);
                
            } catch (error) {
                console.error(`Error downloading image for ${birdName}:`, error);
            }
        } else {
            console.log(`No image found for: ${birdName}`);
        }
    }
};

// Start the process
downloadBirdImages();
