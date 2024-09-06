export interface BirdDataType {
    id: number;
    name: string;
    scientificName: string;
    description: string;
    image: string;
    audio: string;
}

const Birds: BirdDataType[] = [
    {
        id: 1,
        name: "House Sparrow",
        scientificName: "Passer domesticus",
        description: "A small bird found in most parts of the world, commonly seen in urban areas.",
        image: "House_Sparrow.jpg",
        audio: "House_Sparrow.ogg"
    },
    {
        id: 2,
        name: "Great Tit",
        scientificName: "Parus major",
        description: "A widespread and familiar garden bird, known for its black head and distinctive call.",
        image: "Great_Tit.jpg",
        audio: "Great_Tit.ogg"
    },
    {
        id: 3,
        name: "Blackbird",
        scientificName: "Turdus merula",
        description: "A common thrush species in Europe, known for its melodious song and all-black males.",
        image: "Blackbird.jpg",
        audio: "Blackbird.ogg"
    },
    {
        id: 4,
        name: "Blue Tit",
        scientificName: "Cyanistes caeruleus",
        description: "A small and acrobatic bird, recognized by its blue and yellow plumage, commonly seen in gardens.",
        image: "Blue_Tit.jpg",
        audio: "Blue_Tit.ogg"
    },
    {
        id: 5,
        name: "Starling",
        scientificName: "Sturnus vulgaris",
        description: "A bird with iridescent feathers that often gathers in large, noisy flocks.",
        image: "Starling.jpg",
        audio: "Starling.ogg"
    },
    {
        id: 6,
        name: "Chaffinch",
        scientificName: "Fringilla coelebs",
        description: "A colorful finch with a distinctive song, commonly found across Europe and parts of Asia.",
        image: "Chaffinch.jpg",
        audio: "Chaffinch.ogg"
    },
    {
        id: 7,
        name: "Eurasian Tree Sparrow",
        scientificName: "Passer montanus",
        description: "A small sparrow species often found in rural areas and gardens, known for its chestnut-brown head.",
        image: "Eurasian_Tree_Sparrow.jpg",
        audio: "Eurasian_Tree_Sparrow.ogg"
    },
    {
        id: 8,
        name: "Brown-eared Bulbul",
        scientificName: "Hypsipetes amaurotis",
        description: "A common bird in East Asia, recognized by its grey-brown plumage and loud, distinctive calls.",
        image: "Brown-eared_Bulbul.jpg",
        audio: "Brown-eared_Bulbul.ogg"
    },
    {
        id: 9,
        name: "Large-billed Crow",
        scientificName: "Corvus macrorhynchos",
        description: "A large crow species, known for its robust size and adaptability in urban and rural areas.",
        image: "Large-billed_Crow.jpg",
        audio: "Large-billed_Crow.mp3"
    },
    {
        id: 10,
        name: "Oriental Turtle Dove",
        scientificName: "Streptopelia orientalis",
        description: "A medium-sized dove with a distinctively patterned neck, found across Asia.",
        image: "Oriental_Turtle_Dove.jpg",
        audio: "Oriental_Turtle_Dove.mp3"
    },
    {
        id: 11,
        name: "Australian Magpie",
        scientificName: "Gymnorhina tibicen",
        description: "A large, black-and-white passerine bird known for its complex vocalizations and territorial behavior.",
        image: "Australian_Magpie.jpg",
        audio: "Australian_Magpie.ogg"
    },
    {
        id: 12,
        name: "Rainbow Lorikeet",
        scientificName: "Trichoglossus moluccanus",
        description: "A brightly colored parrot found in Australia, known for its vibrant plumage and playful nature.",
        image: "Rainbow_Lorikeet.jpg",
        audio: "Rainbow_Lorikeet.ogg"
    },
    {
        id: 13,
        name: "Laughing Kookaburra",
        scientificName: "Dacelo novaeguineae",
        description: "A bird famous for its loud, laughing call, commonly found in woodlands and urban areas in Australia.",
        image: "Laughing_Kookaburra.jpg",
        audio: "Laughing_Kookaburra.mp3"
    },
    {
        id: 14,
        name: "Sulphur-crested Cockatoo",
        scientificName: "Cacatua galerita",
        description: "A large, white parrot with a distinctive yellow crest, commonly seen in flocks.",
        image: "Sulphur-crested_Cockatoo.jpg",
        audio: "Sulphur-crested_Cockatoo.ogg"
    },
    {
        id: 15,
        name: "Common Bulbul",
        scientificName: "Pycnonotus barbatus",
        description: "A widespread species in Africa, known for its distinctive song and adaptability to various habitats.",
        image: "Common_Bulbul.jpg",
        audio: "Common_Bulbul.ogg"
    },
    {
        id: 16,
        name: "Superb Starling",
        scientificName: "Lamprotornis superbus",
        description: "A brilliantly colored bird native to East Africa, with metallic blue-green plumage.",
        image: "Superb_Starling.jpg",
        audio: "Superb_Starling.ogg"
    },
    {
        id: 17,
        name: "Great Kiskadee",
        scientificName: "Pitangus sulphuratus",
        description: "A large tyrant flycatcher found in the Americas, known for its bold behavior and loud calls.",
        image: "Great_Kiskadee.jpg",
        audio: "Great_Kiskadee.ogg"
    },
    {
        id: 18,
        name: "Northern Cardinal",
        scientificName: "Cardinalis cardinalis",
        description: "A strikingly red bird commonly found across North America, recognized for its sharp crest and melodious song.",
        image: "Northern_Cardinal.jpg",
        audio: "Northern_Cardinal.ogg"
    },
    {
        id: 19,
        name: "American Robin",
        scientificName: "Turdus migratorius",
        description: "A common sight in gardens and woodlands across North America, known for its orange-red breast.",
        image: "American_Robin.jpg",
        audio: "American_Robin.ogg"
    },
    {
        id: 20,
        name: "Yellow-vented Bulbul",
        scientificName: "Pycnonotus goiavier",
        description: "A tropical bird found in Southeast Asia, known for its yellow-tinged underparts.",
        image: "Yellow-vented_Bulbul.jpg",
        audio: "Yellow-vented_Bulbul.ogg"
    },
    {
        id: 21,
        name: "Eurasian Magpie",
        scientificName: "Pica pica",
        description: "A highly intelligent bird, common in Europe and parts of Asia, known for its black and white plumage.",
        image: "Eurasian_Magpie.jpg",
        audio: "Eurasian_Magpie.ogg"
    },
    {
        id: 22,
        name: "Barn Swallow",
        scientificName: "Hirundo rustica",
        description: "A common migratory bird found across the world, known for its distinctive forked tail.",
        image: "Barn_Swallow.jpg",
        audio: "Barn_Swallow.mp3"
    },
    {
        id: 23,
        name: "Red-winged Blackbird",
        scientificName: "Agelaius phoeniceus",
        description: "A common sight in wetlands across North America, recognizable by the red patches on its wings.",
        image: "Red-winged_Blackbird.png",
        audio: "Red-winged_Blackbird.ogg"
    },
    {
        id: 24,
        name: "European Robin",
        scientificName: "Erithacus rubecula",
        description: "A small, friendly bird, known for its orange-red breast, commonly seen across Europe.",
        image: "European_Robin.jpg",
        audio: "European_Robin.ogg"
    },
    {
        id: 25,
        name: "Rock Pigeon",
        scientificName: "Columba livia",
        description: "One of the most widespread bird species, found in cities and rural areas worldwide.",
        image: "Rock_Pigeon.jpg",
        audio: "Rock_Pigeon.ogg"
    },
    {
        id: 26,
        name: "Zebra Dove",
        scientificName: "Geopelia striata",
        description: "A small, peaceful bird common in Southeast Asia, recognized by its zebra-like stripes.",
        image: "Zebra_Dove.jpg",
        audio: "Zebra_Dove.ogg"
    },
    {
        id: 27,
        name: "Eastern Bluebird",
        scientificName: "Sialia sialis",
        description: "A colorful bird found in North America, known for its blue plumage and melodious song.",
        image: "Eastern_Bluebird.jpg",
        audio: "Eastern_Bluebird.mp3"
    },
    {
        id: 28,
        name: "Pied Bushchat",
        scientificName: "Saxicola caprata",
        description: "A small bird common in South and Southeast Asia, known for its upright stance and dark plumage.",
        image: "Pied_Bushchat.jpg",
        audio: "Pied_Bushchat.mp3"
    },
    {
        id: 29,
        name: "Common Myna",
        scientificName: "Acridotheres tristis",
        description: "A highly adaptable bird found across Asia, known for its loud calls and urban presence.",
        image: "Common_Myna.jpg",
        audio: "Common_Myna.mp3"
    },
    {
        id: 30,
        name: "Mallard",
        scientificName: "Anas platyrhynchos",
        description: "A familiar duck species, found in wetlands across the Northern Hemisphere.",
        image: "Mallard.jpg",
        audio: "Mallard.ogg"
    }
];

// export const AUDIO_FILES: { [key: string]: any } = {
//     // "Great_Tit.ogg": require("@/assets/birdsong/Great_Tit.ogg"),
//     // "House_Sparrow.ogg": require("@/assets/birdsong/House_Sparrow.ogg"),
//     "Large-billed_Crow.mp3": require("@/assets/birdsong/Large-billed_Crow.mp3"),
//     "Blackbird.ogg": BlackBird,
//     "Blue_Tit.ogg": require("@/assets/birdsong/Blue_Tit.ogg"),
//     "Starling.ogg": require("@/assets/birdsong/Starling.ogg"),
//     "Chaffinch.ogg": require("@/assets/birdsong/Chaffinch.ogg"),
//     "Eurasian_Tree_Sparrow.ogg": require("@/assets/birdsong/Eurasian_Tree_Sparrow.ogg"),
//     "Brown-eared_Bulbul.ogg": require("@/assets/birdsong/Brown-eared_Bulbul.ogg"),
//     "Oriental_Turtle_Dove.mp3": require("@/assets/birdsong/Oriental_Turtle_Dove.mp3"),
//     "Australian_Magpie.ogg": require("@/assets/birdsong/Australian_Magpie.ogg"),
//     "Rainbow_Lorikeet.ogg": require("@/assets/birdsong/Rainbow_Lorikeet.ogg"),
//     "Laughing_Kookaburra.mp3": require("@/assets/birdsong/Laughing_Kookaburra.mp3"),
//     // "Sulphur-crested_Cockatoo.ogg": require("@/assets/birdsong/Sulphur-crested_Cockatoo.ogg"),
//     "Common_Bulbul.ogg": require("@/assets/birdsong/Common_Bulbul.ogg"),
//     "Superb_Starling.ogg": require("@/assets/birdsong/Superb_Starling.ogg"),
//     "Great_Kiskadee.ogg": require("@/assets/birdsong/Great_Kiskadee.ogg"),
//     "Northern_Cardinal.ogg": require("@/assets/birdsong/Northern_Cardinal.ogg"),
//     "American_Robin.ogg": require("@/assets/birdsong/American_Robin.ogg"),
//     // "Yellow-vented_Bulbul.ogg": require("@/assets/birdsong/Yellow-vented_Bulbul.ogg")
// };


export default Birds;