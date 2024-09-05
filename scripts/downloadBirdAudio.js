const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Import your Birds array from the TypeScript file (replace './birds' with the actual path)
const data = require('./BirdData');
const Birds = data.default;

// Function to download audio from a URL
const downloadAudio = async (url, filepath) => {
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

const puppeteer = require('puppeteer');

const searchAudio = async (birdName) => {
    const searchUrl = `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(birdName)}&title=Special:MediaSearch&go=Go&type=audio`;
    
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(searchUrl, { waitUntil: 'networkidle2' });

        // Wait for the audio results to be loaded
        await page.waitForSelector('div.sdms-audio-result');
        
        // Extract audio results
        const audioResults = await page.evaluate(() => {
            const results = [];
            const audioElements = document.querySelectorAll('div.sdms-audio-result');
            
            audioElements.forEach(element => {
                if (!element) return;
                const titleLinkElement = element.querySelector('h3.sdms-audio-result__title a');
                const durationText = element.querySelector('span.sdms-audio-result__duration__text')?.textContent.trim();
                const duration = durationText ? durationText.split(':').map(Number).reduce((acc, curr) => acc * 60 + curr, 0) : null;
                
                if (titleLinkElement && duration < 30 && duration > 10) {
                    results.push({
                        titleLink: titleLinkElement.href,
                        duration
                    });
                }
            });

            return results;
        });

        console.log('Extracted audio results:', audioResults.length);  // Debugging output

        await browser.close();
        
        // Check if audioResults is an array
        if (!Array.isArray(audioResults)) {
            throw new TypeError('audioResults is not an array');
        }
        
        // Process results and fetch the download link
        for (const result of audioResults) {
            const { titleLink } = result;
            
            if (titleLink) {
                const audioPageUrl = titleLink;
                const browser = await puppeteer.launch();
                const page = await browser.newPage();
                await page.goto(audioPageUrl, { waitUntil: 'networkidle2' });

                // Extract the download link
                const downloadUrl = await page.evaluate(() => {
                    // Locate the <dd> element containing "Audio file"
                    const ddElements = Array.from(document.querySelectorAll('dd'));
                    const audioDd = ddElements.find(dd => dd.textContent.includes('Audio file:'));
                    
                    if (audioDd) {
                        const link = audioDd.querySelector('a');
                        return link ? link.href : null;
                    }
                    
                    return null;
                });

                await browser.close();
                
                if (downloadUrl) {
                    return downloadUrl.startsWith('http') ? downloadUrl : `https:${downloadUrl}`;
                }
            }
        }
    } catch (error) {
        console.error(`Error fetching audio for ${birdName}:`, error);
    }
    
    return null;
};


// Main function to iterate over the birds and download their audio files
const downloadBirdAudio = async () => {
    for (const bird of Birds) {

        const birdName = bird.name;
        console.log(`Searching audio for: ${birdName}`);
        
        const audioUrl = await searchAudio(birdName);
        
        if (audioUrl) {
            const filepath = path.join(__dirname, 'audio', `${birdName.replace(/\s+/g, '_')}.ogg`);
            
            try {
                // Ensure the 'audio' directory exists
                if (!fs.existsSync('audio')) {
                    fs.mkdirSync('audio');
                }
                
                // Download the audio file
                await downloadAudio(audioUrl, filepath);
                console.log(`Downloaded: ${birdName}`);
                
            } catch (error) {
                console.error(`Error downloading audio for ${birdName}:`, error);
            }
        } else {
            console.log(`No audio found for: ${birdName}`);
        }
    }
};

// Start the process
downloadBirdAudio();
