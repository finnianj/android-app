export interface BirdDataType {
    id: string;
    name: string;
    scientificName: string;
    description: string;
    image: string;
    audio: string;
}

const Birds: BirdDataType[] = [
    {
        id: "1",
        name: "House Sparrow",
        scientificName: "Passer domesticus",
        description: "A small bird found in most parts of the world, commonly seen in urban areas.",
        image: "House_Sparrow.jpg",
        audio: "House_Sparrow.ogg"
    },
    {
        id: "2",
        name: "Great Tit",
        scientificName: "Parus major",
        description: "A widespread and familiar garden bird, known for its black head and distinctive call.",
        image: "Great_Tit.jpg",
        audio: "Great_Tit.ogg"
    },
    {
        id: "3",
        name: "Blackbird",
        scientificName: "Turdus merula",
        description: "A common thrush species in Europe, known for its melodious song and all-black males.",
        image: "Blackbird.jpg",
        audio: "Blackbird.ogg"
    },
    {
        id: "4",
        name: "Blue Tit",
        scientificName: "Cyanistes caeruleus",
        description: "A small and acrobatic bird, recognized by its blue and yellow plumage, commonly seen in gardens.",
        image: "Blue_Tit.jpg",
        audio: "Blue_Tit.ogg"
    },
    {
        id: "5",
        name: "Starling",
        scientificName: "Sturnus vulgaris",
        description: "A bird with iridescent feathers that often gathers in large, noisy flocks.",
        image: "Starling.jpg",
        audio: "Starling.ogg"
    },
    {
        id: "6",
        name: "Chaffinch",
        scientificName: "Fringilla coelebs",
        description: "A colorful finch with a distinctive song, commonly found across Europe and parts of Asia.",
        image: "Chaffinch.jpg",
        audio: "Chaffinch.ogg"
    },
    {
        id: "7",
        name: "Eurasian Tree Sparrow",
        scientificName: "Passer montanus",
        description: "A small sparrow species often found in rural areas and gardens, known for its chestnut-brown head.",
        image: "Eurasian_Tree_Sparrow.jpg",
        audio: "Eurasian_Tree_Sparrow.ogg"
    },
    {
        id: "8",
        name: "Brown-eared Bulbul",
        scientificName: "Hypsipetes amaurotis",
        description: "A common bird in East Asia, recognized by its grey-brown plumage and loud, distinctive calls.",
        image: "Brown-eared_Bulbul.jpg",
        audio: "Brown-eared_Bulbul.ogg"
    },
    {
        id: "9",
        name: "Large-billed Crow",
        scientificName: "Corvus macrorhynchos",
        description: "A large crow species, known for its robust size and adaptability in urban and rural areas.",
        image: "Large-billed_Crow.jpg",
        audio: "Large-billed_Crow.mp3"
    },
    {
        id: "10",
        name: "Oriental Turtle Dove",
        scientificName: "Streptopelia orientalis",
        description: "A medium-sized dove with a distinctively patterned neck, found across Asia.",
        image: "Oriental_Turtle_Dove.jpg",
        audio: "Oriental_Turtle_Dove.mp3"
    },
    {
        id: "11",
        name: "Australian Magpie",
        scientificName: "Gymnorhina tibicen",
        description: "A large, black-and-white passerine bird known for its complex vocalizations and territorial behavior.",
        image: "Australian_Magpie.jpg",
        audio: "Australian_Magpie.ogg"
    },
    {
        id: "12",
        name: "Rainbow Lorikeet",
        scientificName: "Trichoglossus moluccanus",
        description: "A brightly colored parrot found in Australia, known for its vibrant plumage and playful nature.",
        image: "Rainbow_Lorikeet.jpg",
        audio: "Rainbow_Lorikeet.ogg"
    },
    {
        id: "13",
        name: "Laughing Kookaburra",
        scientificName: "Dacelo novaeguineae",
        description: "A bird famous for its loud, laughing call, commonly found in woodlands and urban areas in Australia.",
        image: "Laughing_Kookaburra.jpg",
        audio: "Laughing_Kookaburra.mp3"
    },
    {
        id: "14",
        name: "Sulphur-crested Cockatoo",
        scientificName: "Cacatua galerita",
        description: "A large, white parrot with a distinctive yellow crest, commonly seen in flocks.",
        image: "Sulphur-crested_Cockatoo.jpg",
        audio: "Sulphur-crested_Cockatoo.ogg"
    },
    {
        id: "15",
        name: "Common Bulbul",
        scientificName: "Pycnonotus barbatus",
        description: "A widespread species in Africa, known for its distinctive song and adaptability to various habitats.",
        image: "Common_Bulbul.jpg",
        audio: "Common_Bulbul.ogg"
    },
    {
        id: "16",
        name: "Superb Starling",
        scientificName: "Lamprotornis superbus",
        description: "A brilliantly colored bird native to East Africa, with metallic blue-green plumage.",
        image: "Superb_Starling.jpg",
        audio: "Superb_Starling.ogg"
    },
    {
        id: "17",
        name: "Great Kiskadee",
        scientificName: "Pitangus sulphuratus",
        description: "A large tyrant flycatcher found in the Americas, known for its bold behavior and loud calls.",
        image: "Great_Kiskadee.jpg",
        audio: "Great_Kiskadee.ogg"
    },
    {
        id: "18",
        name: "Northern Cardinal",
        scientificName: "Cardinalis cardinalis",
        description: "A strikingly red bird commonly found across North America, recognized for its sharp crest and melodious song.",
        image: "Northern_Cardinal.jpg",
        audio: "Northern_Cardinal.ogg"
    },
    {
        id: "19",
        name: "American Robin",
        scientificName: "Turdus migratorius",
        description: "A common sight in gardens and woodlands across North America, known for its orange-red breast.",
        image: "American_Robin.jpg",
        audio: "American_Robin.ogg"
    },
    {
        id: "20",
        name: "Yellow-vented Bulbul",
        scientificName: "Pycnonotus goiavier",
        description: "A tropical bird found in Southeast Asia, known for its yellow-tinged underparts.",
        image: "Yellow-vented_Bulbul.jpg",
        audio: "Yellow-vented_Bulbul.ogg"
    }
];

export default Birds;