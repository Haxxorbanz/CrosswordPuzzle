// --- Constants ---
const GRID_SIZE = 30; // Initial logical grid size
const EMPTY_CELL = '#'; // Internal marker for empty potential slots
const BLACK_CELL = ''; // Represents a visually empty cell in the output/trimmed grid

// --- DOM Elements ---
const wordInput = document.getElementById('wordInput');
const generateBtn = document.getElementById('generateBtn');
const downloadPdfBtn = document.getElementById('downloadPdfBtn');
const statusP = document.getElementById('status');
const gridDisplayElement = document.getElementById('crossword-grid-display');
const acrossCluesElement = document.getElementById('across-clues');
const downCluesElement = document.getElementById('down-clues');

const predefinedCategories = {
  people: {
    TEACHER: "A person who educates students",
    DOCTOR: "A person who treats the sick",
    NURSE: "Assists doctors in treating patients",
    ENGINEER: "Designs and builds structures or machines",
    LAWYER: "Practices law and advises clients",
    JUDGE: "Makes legal decisions in court",
    ARTIST: "Creates visual art",
    ACTOR: "Performs in movies or plays",
    SINGER: "Performs songs vocally",
    MUSICIAN: "Plays musical instruments",
    DANCER: "Performs dance routines",
    SCIENTIST: "Studies the physical and natural world",
    FARMER: "Grows crops and raises animals",
    CHEF: "Cooks in a professional kitchen",
    BAKER: "Bakes bread, cakes, and pastries",
    POLICE: "Maintains law and order",
    FIREMAN: "Extinguishes fires and rescues people",
    VETERINARIAN: "Treats sick animals",
    ASTRONAUT: "Travels in space",
    PILOT: "Operates aircraft",
    MECHANIC: "Repairs vehicles",
    ELECTRICIAN: "Installs electrical systems",
    PLUMBER: "Fixes pipes and water systems",
    CARPENTER: "Builds and repairs wooden structures",
    TAILOR: "Alters and sews clothes",
    BARBER: "Cuts and styles hair",
    DENTIST: "Takes care of teeth",
    OPTOMETRIST: "Tests and prescribes glasses",
    PHARMACIST: "Dispenses medicines",
    PSYCHOLOGIST: "Studies human behavior",
    THERAPIST: "Helps people manage mental health",
    SOCIAL_WORKER: "Supports people in need",
    LIBRARIAN: "Manages books and information",
    ARCHITECT: "Designs buildings",
    DIRECTOR: "Oversees film or theater",
    PRODUCER: "Manages media productions",
    REPORTER: "Delivers the news",
    PHOTOGRAPHER: "Takes professional photos",
    DESIGNER: "Creates visuals, clothes, or spaces",
    PROGRAMMER: "Writes computer software",
    DEVELOPER: "Builds software or websites",
    DATA_SCIENTIST: "Analyzes complex data",
    CHEMIST: "Studies chemicals and reactions",
    BIOLOGIST: "Studies living organisms",
    MATHEMATICIAN: "Works with mathematics",
    ECONOMIST: "Analyzes economies",
    ACCOUNTANT: "Manages financial records",
    AUDITOR: "Examines financial documents",
    FINANCIAL_ANALYST: "Studies market trends",
    BANKER: "Works in finance and banking",
    CASHIER: "Handles payments",
    SALES_AGENT: "Sells products or services",
    MARKETER: "Promotes products",
    PUBLICIST: "Manages public image",
    EVENT_PLANNER: "Organizes events",
    FLIGHT_ATTENDANT: "Assists passengers on flights",
    TOUR_GUIDE: "Leads travelers",
    TRANSLATOR: "Converts languages",
    INTERPRETER: "Translates spoken words",
    DIPLOMAT: "Represents a country",
    MILITARY_OFFICER: "Leads military forces",
    SOLDIER: "Serves in the army",
    NAVY_OFFICER: "Serves in the navy",
    ATHLETE: "Competes in sports",
    COACH: "Trains athletes",
    REFEREE: "Enforces rules in sports",
    UMPIR: "Officiates games",
    SCOUT: "Finds new talent",
    HISTORIAN: "Studies the past",
    ARCHAEOLOGIST: "Excavates ancient artifacts",
    GEOLOGIST: "Studies Earth’s structure",
    CLIMATOLOGIST: "Studies climate patterns",
    METEOROLOGIST: "Forecasts weather",
    ZOOLOGIST: "Studies animals",
    BOTANIST: "Studies plants",
    ANTHROPOLOGIST: "Studies humans",
    ETHICIST: "Studies moral principles",
    THEOLOGIAN: "Studies religion",
    MINISTER: "Leads religious services",
    PRIEST: "Performs religious duties",
    IMAM: "Leads Islamic prayers",
    MONK: "Lives a religious life",
    NUN: "Female religious devotee",
    CHAUFFEUR: "Drives people professionally",
    DELIVERY_DRIVER: "Delivers packages",
    TAXI_DRIVER: "Transports passengers",
    SECURITY_GUARD: "Protects property or people",
    BOUNCER: "Maintains order at venues",
    JANITOR: "Cleans buildings",
    HOUSEKEEPER: "Cleans homes or hotels",
    BABYSITTER: "Watches children",
    NANNY: "Cares for children full-time",
    CAREGIVER: "Assists the elderly or sick",
    MODEL: "Displays fashion or products",
    INFLUENCER: "Promotes on social media"
 },
  things: {
    TABLE: "Flat surface for working or eating",
    CHAIR: "Used to sit",
    BED: "For sleeping",
    LAMP: "Provides light",
    FAN: "Moves air",
    COMPUTER: "Used for computing",
    MOUSE: "Computer accessory",
    KEYBOARD: "Typing device",
    PHONE: "Used to make calls",
    SMARTPHONE: "Phone with smart features",
    REMOTE: "Controls electronics",
    TELEVISION: "Displays visual media",
    MONITOR: "Displays computer output",
    CAMERA: "Takes pictures",
    HEADPHONES: "Plays sound in ears",
    SPEAKER: "Projects audio",
    WATCH: "Tells time",
    CLOCK: "Wall time device",
    MICROWAVE: "Heats food",
    OVEN: "Cooks food",
    FRIDGE: "Keeps food cold",
    FREEZER: "Keeps food frozen",
    TOASTER: "Toasts bread",
    BLENDER: "Mixes food",
    KETTLE: "Boils water",
    STOVE: "Cooks with heat",
    BOTTLE: "Holds liquid",
    CUP: "Used to drink",
    PLATE: "Holds food",
    SPOON: "Used to eat",
    FORK: "Used to stab food",
    KNIFE: "Cuts food",
    TRAY: "Carries dishes",
    BACKPACK: "Carries items",
    SUITCASE: "For travel",
    WALLET: "Holds money",
    PURSE: "Bag for essentials",
    TOWEL: "Dries things",
    BLANKET: "Provides warmth",
    PILLOW: "Head support",
    MATTRESS: "Soft surface for sleep",
    MIRROR: "Reflects image",
    WINDOW: "Lets in light",
    DOOR: "Allows entry",
    CURTAIN: "Covers window",
    RUG: "Decorative floor covering",
    BROOM: "Sweeps floors",
    MOP: "Cleans floors",
    BUCKET: "Holds water",
    HAMMER: "Hits nails",
    SCREWDRIVER: "Tightens screws",
    WRENCH: "Tightens bolts",
    DRILL: "Makes holes",
    NAIL: "Used in carpentry",
    SCISSORS: "Cuts things",
    TAPE: "Sticks things",
    GLUE: "Adhesive",
    PAPER: "For writing or printing",
    NOTEBOOK: "For taking notes",
    PEN: "Writes ink",
    PENCIL: "Writes graphite",
    MARKER: "Writes in bold ink",
    ERASER: "Removes pencil",
    SHARPENER: "Sharpens pencils",
    CHALK: "Writes on boards",
    RULER: "Measures length",
    CALCULATOR: "Performs math",
    FILE: "Organizes paper",
    ENVELOPE: "Holds letters",
    STAMP: "Used for mailing",
    KEY: "Opens locks",
    LOCK: "Secures something",
    BATTERY: "Powers devices",
    FLASHLIGHT: "Portable light",
    LANTERN: "Outdoor light",
    LIGHTBULB: "Emits light",
    SOCKET: "Electrical outlet",
    SWITCH: "Turns power on/off"
 },
  food: {
    APPLE: "Sweet red or green fruit",
    BANANA: "Long yellow fruit",
    ORANGE: "Citrus fruit",
    GRAPE: "Small round fruit",
    STRAWBERRY: "Red berry",
    BLUEBERRY: "Tiny blue berry",
    PEAR: "Sweet green fruit",
    MANGO: "Tropical fruit",
    WATERMELON: "Juicy summer fruit",
    MELON: "Sweet green fruit",
    CHERRY: "Small red fruit",
    PINEAPPLE: "Tropical spiky fruit",
    LEMON: "Sour yellow fruit",
    LIME: "Sour green fruit",
    BREAD: "Baked staple",
    RICE: "Grain food",
    PASTA: "Italian noodle dish",
    PIZZA: "Flatbread with toppings",
    BURGER: "Sandwich with meat",
    HOTDOG: "Sausage in bun",
    SANDWICH: "Bread with filling",
    CHEESE: "Dairy product",
    MILK: "White drink from cows",
    BUTTER: "Spread from milk",
    EGG: "From chickens",
    MEAT: "Animal flesh",
    CHICKEN: "Poultry meat",
    BEEF: "Cow meat",
    PORK: "Pig meat",
    SAUSAGE: "Seasoned meat tube",
    BACON: "Fried pork slices",
    FISH: "Aquatic meat",
    SHRIMP: "Small seafood",
    CRAB: "Shellfish",
    LOBSTER: "Luxury seafood",
    SALMON: "Pink fish",
    TUNA: "Canned or fresh fish",
    CARROT: "Orange root",
    POTATO: "Starchy root",
    TOMATO: "Used in sauces",
    CUCUMBER: "Green crunchy veg",
    LETTUCE: "Salad leaf",
    SPINACH: "Green leafy vegetable",
    ONION: "Pungent bulb",
    GARLIC: "Flavorful bulb",
    PEPPER: "Spicy or sweet",
    BROCCOLI: "Green veggie",
    CAULIFLOWER: "White veggie",
    CORN: "Yellow kernels",
    BEANS: "Legume",
    PEAS: "Green legume",
    ICECREAM: "Frozen dessert",
    CAKE: "Baked sweet",
    COOKIE: "Baked snack",
    DONUT: "Fried sweet ring",
    PANCAKE: "Flat breakfast cake",
    WAFFLE: "Grid-pattern breakfast",
    CEREAL: "Grain breakfast",
    YOGURT: "Cultured milk",
    HONEY: "Made by bees",
    JAM: "Fruit spread"
 },
  animals: {
    DOG: "A loyal pet",
    CAT: "A small domesticated carnivore",
    HORSE: "Used for riding or work",
    COW: "Gives milk",
    SHEEP: "Produces wool",
    GOAT: "Domesticated for milk or meat",
    PIG: "Farm animal raised for meat",
    CHICKEN: "Lays eggs",
    DUCK: "Waterfowl bird",
    TURKEY: "Large bird often eaten on holidays",
    RABBIT: "Hops and eats vegetables",
    HAMSTER: "Small rodent pet",
    GUINEA_PIG: "Small furry pet",
    MOUSE: "Tiny rodent",
    RAT: "Larger rodent",
    DEER: "Has antlers",
    FOX: "Clever forest animal",
    WOLF: "Wild ancestor of dogs",
    BEAR: "Large and strong mammal",
    LION: "King of the jungle",
    TIGER: "Striped big cat",
    LEOPARD: "Spotted wild cat",
    JAGUAR: "Large cat of the Americas",
    CHEETAH: "Fastest land animal",
    ELEPHANT: "Largest land animal",
    RHINOCEROS: "Large horned mammal",
    HIPPOPOTAMUS: "Large river animal",
    GIRAFFE: "Tallest land animal",
    ZEBRA: "Striped horse-like animal",
    MONKEY: "Tree-dwelling primate",
    APE: "Includes chimpanzees and gorillas",
    GORILLA: "Large powerful ape",
    CHIMPANZEE: "Intelligent primate",
    ORANGUTAN: "Long-armed tree dweller",
    SLOTH: "Very slow tree-dwelling mammal",
    KOALA: "Tree-living marsupial",
    KANGAROO: "Hops with a pouch",
    WALLABY: "Small kangaroo",
    POSSUM: "Nocturnal marsupial",
    ARMADILLO: "Has a hard shell",
    SKUNK: "Sprays bad smell",
    RACCOON: "Masked scavenger",
    BADGER: "Digs burrows",
    OTTER: "Playful water animal",
    BEAVER: "Builds dams",
    WEASEL: "Small carnivore",
    MOLE: "Lives underground",
    BAT: "Flying mammal",
    OWL: "Nocturnal bird",
    EAGLE: "Large bird of prey",
    HAWK: "Sharp-sighted bird",
    FALCON: "Fast bird of prey",
    PARROT: "Talks and is colorful",
    PEACOCK: "Colorful tail feathers",
    PENGUIN: "Flightless swimming bird",
    SEAGULL: "Coastal bird",
    CROW: "Smart black bird",
    SPARROW: "Small brown bird",
    ROBIN: "Bird with red breast",
    DOVE: "Symbol of peace",
    SWAN: "Elegant water bird",
    FLAMINGO: "Pink long-legged bird",
    FROG: "Jumps and croaks",
    TOAD: "Warty amphibian",
    SALAMANDER: "Lizard-like amphibian",
    NEWT: "Small aquatic amphibian",
    TURTLE: "Hard shell and slow",
    TORTOISE: "Land-dwelling turtle",
    LIZARD: "Scaly reptile",
    GECKO: "Climbing lizard",
    IGUANA: "Large green lizard",
    CHAMELEON: "Changes color",
    CROCODILE: "Large water reptile",
    ALLIGATOR: "Looks like a crocodile",
    SNAKE: "Slithers without legs",
    COBRA: "Hooded venomous snake",
    PYTHON: "Large constrictor",
    ANACONDA: "Massive water snake",
    FISH: "Lives in water",
    SHARK: "Predatory fish",
    DOLPHIN: "Smart marine mammal",
    WHALE: "Largest sea creature",
    ORCA: "Killer whale",
    SEAL: "Marine mammal",
    SEA_LION: "Performs tricks",
    WALRUS: "Has tusks and flippers",
    JELLYFISH: "Stings and floats",
    STARFISH: "Five-armed sea creature",
    OCTOPUS: "Eight-armed mollusk",
    SQUID: "Similar to octopus",
    CRAB: "Side-walking shellfish",
    LOBSTER: "Clawed sea animal",
    SNAIL: "Has a shell",
    SLUG: "Shell-less snail",
    BUTTERFLY: "Colorful flying insect",
    MOTH: "Nocturnal relative of butterfly",
    BEE: "Pollinates flowers",
    WASP: "Stinging insect",
    ANT: "Hard-working insect",
    MOSQUITO: "Drinks blood",
    DRAGONFLY: "Fast insect over water",
    GRASSHOPPER: "Jumps and chirps",
    LADYBUG: "Red beetle with spots",
    FIREFLY: "Glows in dark"
  },
  places: {
    SCHOOL: "A place for learning",
    UNIVERSITY: "Higher education institution",
    COLLEGE: "Educational institute",
    KINDERGARTEN: "School for young kids",
    LIBRARY: "A place with books",
    HOSPITAL: "Medical facility",
    CLINIC: "Smaller medical facility",
    DENTAL_CLINIC: "For dental treatments",
    PHARMACY: "Sells medicine",
    BANK: "Handles money",
    ATM: "Automated teller machine",
    POST_OFFICE: "Mail handling",
    POLICE_STATION: "Maintains law and order",
    FIRE_STATION: "Firefighting services",
    COURTHOUSE: "Where legal cases are heard",
    CITY_HALL: "Municipal government",
    MUSEUM: "Displays art or history",
    ART_GALLERY: "Exhibits artwork",
    CINEMA: "Shows movies",
    THEATER: "Performs plays",
    RESTAURANT: "Serves meals",
    CAFE: "Sells coffee and snacks",
    BAKERY: "Sells bread and cakes",
    SUPERMARKET: "Large grocery store",
    GROCERY_STORE: "Sells daily food",
    SHOP: "Sells items",
    MALL: "Shopping center",
    MARKET: "Open area for selling goods",
    FARMERS_MARKET: "Local produce market",
    PARK: "Public recreation area",
    PLAYGROUND: "Children's play area",
    BEACH: "Sandy shore",
    FOREST: "Dense with trees",
    JUNGLE: "Tropical forest",
    DESERT: "Hot sandy area",
    MOUNTAIN: "High elevation land",
    VALLEY: "Low area between hills",
    HILL: "Small raised land",
    PLAINS: "Flat large land area",
    ISLAND: "Land surrounded by water",
    LAKE: "Still water body",
    RIVER: "Flowing water body",
    STREAM: "Small river",
    OCEAN: "Vast body of saltwater",
    SEA: "Part of ocean",
    POND: "Small water body",
    WATERFALL: "Falling water",
    CAVE: "Underground hollow",
    VILLAGE: "Small rural settlement",
    TOWN: "Smaller than a city",
    CITY: "Large populated area",
    CAPITAL: "Main city of a country",
    NEIGHBORHOOD: "Part of a city",
    SUBURB: "Residential outskirts",
    FARM: "Agricultural land",
    BARN: "Storage on a farm",
    FIELD: "Open area of land",
    GARDEN: "Cultivated plants area",
    ZOO: "Keeps animals",
    AQUARIUM: "Displays marine animals",
    AIRPORT: "Planes land and take off",
    TRAIN_STATION: "Train stop",
    BUS_STOP: "Bus pickup area",
    GAS_STATION: "Fuels vehicles",
    GARAGE: "Stores cars",
    WORKSHOP: "Repair or craft work",
    FACTORY: "Manufactures goods",
    OFFICE: "Business workplace",
    HEADQUARTERS: "Main office",
    CONFERENCE_CENTER: "Holds events",
    STADIUM: "Large sports venue",
    GYM: "Exercise facility",
    SWIMMING_POOL: "For swimming",
    SPA: "Relaxation center",
    HOTEL: "Temporary lodging",
    MOTEL: "Roadside hotel",
    RESORT: "Vacation destination",
    HOSTEL: "Cheap lodging",
    CAMP: "Outdoor stay area",
    TENT: "Portable shelter",
    CABIN: "Wooden house",
    CASTLE: "Old fortress",
    PALACE: "Royal residence",
    TEMPLE: "Place of worship",
    CHURCH: "Christian worship",
    MOSQUE: "Islamic worship",
    SYNAGOGUE: "Jewish worship",
    SHRINE: "Sacred place",
    MONASTERY: "Where monks live",
    GRAVEYARD: "Where people are buried",
    CEMETERY: "Burial ground",
    BRIDGE: "Connects two land areas",
    TUNNEL: "Underground passage",
    ROAD: "Path for vehicles",
    HIGHWAY: "Major road",
    SIDEWALK: "Path for walking",
    CROSSWALK: "Pedestrian crossing",
    ROUNDABOUT: "Circular intersection"
 }
};

// --- jsPDF Setup ---
// Ensure jsPDF is loaded before this script runs (included in HTML via CDN)
const { jsPDF } = window.jspdf; // Get the jsPDF constructor from the window.jspdf object

// --- Global storage for generated data ---
let currentCrosswordData = null; // To hold { trimmedGrid, trimmedCluePos, acrossClues, downClues }

// --- Helper Functions ---

    // Toggle dark mode on icon click
    const toggleBtn = document.getElementById('darkModeToggle');

    function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    }

    toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    });

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
    setTheme(savedTheme);
    } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
    }

function getLimitedWords(categoryObject, limit = 10) {
    const entries = Object.entries(categoryObject);
    const shuffled = entries.sort(() => 0.5 - Math.random()); // Shuffle
    const selected = shuffled.slice(0, limit);
    const wordsDefs = {};
    selected.forEach(([word, def]) => {
        wordsDefs[word] = def;
    });
    return wordsDefs;
}

function parseInput() {
    const lines = wordInput.value.trim().split('\n');
    const wordsDefinitions = {};
    const errors = [];
    // Regex: Start (^) must be one or more letters ([a-zA-Z]+), followed by one or more spaces (\s+),
    // then capture the rest of the line (.+) until the end ($).
    const wordPattern = /^([a-zA-Z]+)\s+(.+)$/;

    lines.forEach((line, index) => {
        line = line.trim();
        if (!line) return; // Skip empty lines

        const match = line.match(wordPattern);
        if (match) {
            const word = match[1].toUpperCase(); // Word must be letters only
            const definition = match[2];

            if (wordsDefinitions[word]) {
                console.warn(`Warning: Word '${word}' already entered. Overwriting definition.`);
            }
            wordsDefinitions[word] = definition;
        } else {
            errors.push(`Line ${index + 1}: Invalid format. Use 'WORD definition' (WORD must be letters only, followed by a space). Found: "${line}"`);
        }
    });

    // Clear previous classes
statusP.classList.remove('error', 'success');

if (errors.length > 0) {
    statusP.classList.add('error');
    statusP.textContent = "Input errors:\n" + errors.join('\n');
    downloadPdfBtn.disabled = true;
    return null;
}

if (Object.keys(wordsDefinitions).length === 0) {
    statusP.classList.add('error');
    statusP.textContent = "No valid words entered.";
    downloadPdfBtn.disabled = true;
    return null;
}

// Optional: Success state
statusP.classList.add('success');
statusP.textContent = "Successfully placed " + Object.keys(wordsDefinitions).length + " words.";
return wordsDefinitions;
}

function sortWords(wordsDefs) {
    // Sort words by length, longest first
    return Object.keys(wordsDefs).sort((a, b) => b.length - a.length);
}

// --- Crossword Class (Handles generation logic) ---
class Crossword {
    constructor(wordsDefs, gridSize = GRID_SIZE) {
        this.wordsDefinitions = wordsDefs;
        this.wordsToPlace = sortWords(wordsDefs);
        this.gridSize = gridSize;
        // Initialize grid with EMPTY_CELL
        this.grid = Array.from({ length: gridSize }, () =>
            Array(gridSize).fill(EMPTY_CELL)
        );
        this.placedWords = {}; // word: { row, col, direction, definition, number }
        // Use a string key "r,c" for clue number positions
        this.clueNumbersPos = {}; // "r,c": number
        this.currentClueNumber = 0;
        this.boundaries = { // Keep track of the actual used grid area
            minRow: gridSize, maxRow: -1, minCol: gridSize, maxCol: -1
        };
    }

    _updateBoundaries(r, c) {
        this.boundaries.minRow = Math.min(this.boundaries.minRow, r);
        this.boundaries.maxRow = Math.max(this.boundaries.maxRow, r);
        this.boundaries.minCol = Math.min(this.boundaries.minCol, c);
        this.boundaries.maxCol = Math.max(this.boundaries.maxCol, c);
    }

    _canPlaceWord(word, r, c, direction) {
        const wordLen = word.length;

        for (let i = 0; i < wordLen; i++) {
            const currentR = direction === "down" ? r + i : r;
            const currentC = direction === "across" ? c + i : c;

            // 1. Boundary Check (within the logical grid)
            if (!(currentR >= 0 && currentR < this.gridSize && currentC >= 0 && currentC < this.gridSize)) {
                return false; // Out of bounds
            }

            const existingCell = this.grid[currentR][currentC];
            const letter = word[i];

            // 2. Collision Check
            if (existingCell !== EMPTY_CELL && existingCell !== letter) {
                return false; // Overwrites a different letter
            }

            // 3. Adjacency Check (Prevent parallel words touching without intersection)
            if (existingCell === EMPTY_CELL) { // Only check adjacency if placing into an empty slot
                 if (direction === "down") {
                    // Check left neighbor (if it exists and is not empty)
                    if (currentC > 0 && this.grid[currentR][currentC - 1] !== EMPTY_CELL) return false;
                    // Check right neighbor
                    if (currentC < this.gridSize - 1 && this.grid[currentR][currentC + 1] !== EMPTY_CELL) return false;
                 } else { // direction === "across"
                    // Check top neighbor
                    if (currentR > 0 && this.grid[currentR - 1][currentC] !== EMPTY_CELL) return false;
                     // Check bottom neighbor
                    if (currentR < this.gridSize - 1 && this.grid[currentR + 1][currentC] !== EMPTY_CELL) return false;
                 }
            }

            // 4. Check separation before start and after end
            if (i === 0) { // Check cell *before* the word starts
                if (direction === "down") {
                    if (r > 0 && this.grid[r - 1][c] !== EMPTY_CELL) return false;
                } else { // across
                    if (c > 0 && this.grid[r][c - 1] !== EMPTY_CELL) return false;
                }
            }
            if (i === wordLen - 1) { // Check cell *after* the word ends
                 if (direction === "down") {
                     // Ensure row below exists before checking it
                     if (currentR < this.gridSize - 1 && this.grid[currentR + 1][c] !== EMPTY_CELL) return false;
                 } else { // across
                     // Ensure col after exists before checking it
                     if (currentC < this.gridSize - 1 && this.grid[r][currentC + 1] !== EMPTY_CELL) return false;
                 }
            }
        }
        return true; // Looks placeable
    }

    _placeWord(word, r, c, direction) {
        const posKey = `${r},${c}`;
        let clueNum;

        // Assign clue number if this start position doesn't have one yet
        if (!this.clueNumbersPos[posKey]) {
            this.currentClueNumber++;
            this.clueNumbersPos[posKey] = this.currentClueNumber;
            clueNum = this.currentClueNumber;
        } else {
            // Use existing clue number if another word starts here (e.g., Across and Down)
            clueNum = this.clueNumbersPos[posKey];
        }

        // Store word info
        this.placedWords[word] = {
            row: r, col: c, direction: direction,
            definition: this.wordsDefinitions[word], number: clueNum
        };

        // Put letters onto the grid
        for (let i = 0; i < word.length; i++) {
            const currentR = direction === "down" ? r + i : r;
            const currentC = direction === "across" ? c + i : c;
            this.grid[currentR][currentC] = word[i];
            this._updateBoundaries(currentR, currentC); // Track the extent of placed letters
        }
    }

     _findPlacement(word) {
        let possiblePlacements = []; // Store {r, c, direction, score}

        // Iterate through the entire logical grid
        for (let r = 0; r < this.gridSize; r++) {
            for (let c = 0; c < this.gridSize; c++) {
                const cellLetter = this.grid[r][c];
                // Try intersecting only where there's already a letter
                if (cellLetter !== EMPTY_CELL && word.includes(cellLetter)) {
                    // Find all indices in the word that match the cell letter
                    const indices = [];
                    for(let k=0; k<word.length; k++) { if (word[k] === cellLetter) indices.push(k); }

                    for (const i of indices) { // 'i' is the index within the 'word'
                        // --- Try placing ACROSS ---
                        const startC = c - i; // Calculate potential start column
                        if (this._canPlaceWord(word, r, startC, "across")) {
                            let score = 0; // Score based on number of intersections
                            for (let k = 0; k < word.length; k++) {
                                // Check grid bounds explicitly before accessing grid element
                                if (startC + k >= 0 && startC + k < this.gridSize && this.grid[r][startC + k] !== EMPTY_CELL) {
                                     score++;
                                }
                            }
                            possiblePlacements.push({ r: r, c: startC, direction: 'across', score: score });
                        }

                        // --- Try placing DOWN ---
                        const startR = r - i; // Calculate potential start row
                        if (this._canPlaceWord(word, startR, c, "down")) {
                            let score = 0;
                             for (let k = 0; k < word.length; k++) {
                                 // Check grid bounds explicitly before accessing grid element
                                 if (startR + k >= 0 && startR + k < this.gridSize && this.grid[startR + k][c] !== EMPTY_CELL) {
                                      score++;
                                 }
                             }
                            possiblePlacements.push({ r: startR, c: c, direction: 'down', score: score });
                        }
                    }
                }
            }
        }

        if (possiblePlacements.length === 0) {
            return null; // No intersecting placement found
        }

        // Choose the best placement (highest score -> most intersections)
        possiblePlacements.sort((a, b) => b.score - a.score);
        return possiblePlacements[0];
    }

    generate() {
        if (!this.wordsToPlace || this.wordsToPlace.length === 0) {
            console.error("No words to place.");
            statusP.style.color = '#d9534f';
            statusP.textContent = "Error: No words provided for generation.";
            return false;
        }

        // Place the first word (longest)
        const firstWord = this.wordsToPlace[0];
        // Try placing horizontally near center/top first
        const startR = Math.floor(this.gridSize / 3);
        const startC = Math.floor((this.gridSize - firstWord.length) / 2);

        let firstWordPlaced = false;
        if (this._canPlaceWord(firstWord, startR, startC, "across")) {
            this._placeWord(firstWord, startR, startC, "across");
            console.log(`Placed first word: ${firstWord} (across)`);
            firstWordPlaced = true;
        } else {
             // Fallback: Try placing vertically if horizontal fails
             const vStartR = Math.floor((this.gridSize - firstWord.length) / 2);
             const vStartC = Math.floor(this.gridSize / 3);
             if (this._canPlaceWord(firstWord, vStartR, vStartC, "down")) {
                 this._placeWord(firstWord, vStartR, vStartC, "down");
                 console.log(`Placed first word: ${firstWord} (vertically)`);
                 firstWordPlaced = true;
             }
        }

        if (!firstWordPlaced) {
             console.error(`Could not place the first word '${firstWord}'. Grid might be too small or word too long.`);
             statusP.style.color = '#d9534f';
             statusP.textContent = `Error: Could not place the first word '${firstWord}'. Try fewer/shorter words or increase GRID_SIZE in script.js.`;
             return false; // Critical failure
        }

        // Place remaining words
        let placedCount = 1;
        const unplacedWords = [];
        for (let i = 1; i < this.wordsToPlace.length; i++) {
            const word = this.wordsToPlace[i];
            const placement = this._findPlacement(word);
            if (placement) {
                this._placeWord(word, placement.r, placement.c, placement.direction);
                console.log(`Placed: ${word}`);
                placedCount++;
            } else {
                console.warn(`Could not find placement for: ${word}`);
                unplacedWords.push(word);
            }
        }

        // Report results
        const finalStatus = `Successfully placed ${placedCount} out of ${this.wordsToPlace.length} words.`;
        console.log(finalStatus);
        statusP.style.color = '#333'; // Neutral color for success/partial success
        if (unplacedWords.length > 0) {
            console.warn("Unplaced words:", unplacedWords.join(", "));
             statusP.textContent = `${finalStatus}\nUnplaced: ${unplacedWords.join(", ")}`;
        } else {
             statusP.textContent = finalStatus;
        }
        return true;
    }

    getTrimmedGrid() {
        // If no words were placed, boundaries remain at defaults
        if (this.boundaries.maxRow === -1) {
            return { trimmedGrid: [], trimmedCluePos: {} };
        }

        // Determine the bounds based on placed letters
        const minR = this.boundaries.minRow;
        const maxR = this.boundaries.maxRow;
        const minC = this.boundaries.minCol;
        const maxC = this.boundaries.maxCol;

        // Create the grid containing only the relevant area
        const trimmedGrid = [];
        for (let r = minR; r <= maxR; r++) {
            const rowData = [];
            for (let c = minC; c <= maxC; c++) {
                // If the cell in the original grid wasn't empty, use its letter. Otherwise, use BLACK_CELL.
                rowData.push(this.grid[r][c] === EMPTY_CELL ? BLACK_CELL : this.grid[r][c]);
            }
            trimmedGrid.push(rowData);
        }

        // Adjust clue number positions relative to the trimmed grid's top-left corner (minR, minC)
        const trimmedCluePos = {};
        for (const key in this.clueNumbersPos) {
            const [rStr, cStr] = key.split(',');
            const r = parseInt(rStr, 10);
            const c = parseInt(cStr, 10);

            // Check if this clue position falls within the trimmed boundaries
            if (r >= minR && r <= maxR && c >= minC && c <= maxC) {
                const trimmedR = r - minR; // Row relative to trimmed grid
                const trimmedC = c - minC; // Column relative to trimmed grid
                trimmedCluePos[`${trimmedR},${trimmedC}`] = this.clueNumbersPos[key];
            }
        }

        return { trimmedGrid, trimmedCluePos };
    }

    getClues() {
        const acrossClues = [];
        const downClues = [];

        // Sort placed words by their assigned clue number for ordered lists
        const sortedPlaced = Object.values(this.placedWords).sort((a, b) => a.number - b.number);

        const seenNumbersAcross = new Set(); // Ensure clue number uniqueness per direction
        const seenNumbersDown = new Set();

        for (const info of sortedPlaced) {
            const clueText = `${info.number}. ${info.definition}`;
            if (info.direction === 'across' && !seenNumbersAcross.has(info.number)) {
                acrossClues.push({ number: info.number, text: clueText });
                seenNumbersAcross.add(info.number);
            } else if (info.direction === 'down' && !seenNumbersDown.has(info.number)) {
                downClues.push({ number: info.number, text: clueText });
                 seenNumbersDown.add(info.number);
            }
        }

         // Final sort just in case sorting by value wasn't perfect (unlikely but safe)
         acrossClues.sort((a,b) => a.number - b.number);
         downClues.sort((a,b) => a.number - b.number);

        // Return just the text array for rendering
        return {
            across: acrossClues.map(c => c.text),
            down: downClues.map(c => c.text)
        };
    }
}

// --- Rendering Functions (HTML Display) ---

function renderGridHTML(gridData, cluePositions) {
    gridDisplayElement.innerHTML = ''; // Clear previous grid
    if (!gridData || gridData.length === 0) {
        gridDisplayElement.style.gridTemplateColumns = ''; // Clear grid style if empty
        return;
    }

    const rows = gridData.length;
    const cols = gridData[0].length;

    // Set grid columns using CSS Grid - 'auto' allows cells to take defined width/height
    gridDisplayElement.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell'); // Base class (invisible by default via CSS)
            const cellValue = gridData[r][c];

            if (cellValue !== BLACK_CELL) {
                // It's a letter cell - make it visible by adding the class
                cell.classList.add('letter-cell');
                cell.textContent = cellValue; // Display the letter

                // Check if a clue number starts here (using adjusted trimmed positions)
                const posKey = `${r},${c}`;
                if (cluePositions[posKey]) {
                    const numberSpan = document.createElement('span');
                    numberSpan.classList.add('clue-number');
                    numberSpan.textContent = cluePositions[posKey];
                    cell.appendChild(numberSpan); // Add number inside the cell
                }
            }
            // If cellValue IS BLACK_CELL, it just keeps the default .grid-cell style (transparent, no border)
            gridDisplayElement.appendChild(cell);
        }
    }
}

function renderCluesHTML(acrossClues, downClues) {
    acrossCluesElement.innerHTML = ''; // Clear previous clues
    downCluesElement.innerHTML = '';

    if (acrossClues.length > 0) {
        acrossClues.forEach(clue => {
            const li = document.createElement('li');
            li.textContent = clue;
            acrossCluesElement.appendChild(li);
        });
    } else {
        acrossCluesElement.innerHTML = '<li>None</li>';
    }


    if (downClues.length > 0) {
        downClues.forEach(clue => {
            const li = document.createElement('li');
            li.textContent = clue;
            downCluesElement.appendChild(li);
        });
    } else {
        downCluesElement.innerHTML = '<li>None</li>';
    }
}

// --- PDF Generation Function ---

// Helper function to draw a grid onto the PDF document
function drawGridOnPdf(doc, gridData, cluePositions, startX, startY, cellSize, drawLetters) {
    const rows = gridData.length;
    const cols = gridData[0].length;

    // Font sizes relative to cell size
    const letterFontSize = cellSize * 0.6;
    const numFontSize = cellSize * 0.3;

    // Offsets for placing text/numbers within the cell (adjust as needed)
    const textVerticalOffset = cellSize * 0.68; // Trial and error for vertical centering
    const textHorizontalOffset = cellSize * 0.5; // Center horizontally
    const numXOffset = cellSize * 0.15; // Number offset from left edge
    const numYOffset = cellSize * 0.25; // Number offset from top edge

    doc.setLineWidth(0.1); // Thin lines for cell borders
    doc.setDrawColor(0); // Black lines

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const cellValue = gridData[r][c];
            // Only draw cells that contain letters (or would contain letters in the solution)
            if (cellValue !== BLACK_CELL) {
                const x = startX + c * cellSize;
                const y = startY + r * cellSize;

                // Draw the cell border
                doc.rect(x, y, cellSize, cellSize, 'S'); // 'S' for Stroke (draw border)

                // Draw the letter (only if drawLetters is true)
                if (drawLetters) {
                    doc.setFontSize(letterFontSize);
                    doc.text(cellValue, x + textHorizontalOffset, y + textVerticalOffset, { align: 'center'});
                }

                // Draw the clue number if present (always draw number)
                const posKey = `${r},${c}`;
                if (cluePositions[posKey]) {
                    doc.setFontSize(numFontSize); // Switch to smaller font for number
                    doc.text(String(cluePositions[posKey]), x + numXOffset, y + numYOffset);
                }
            }
            // Do nothing for BLACK_CELLs - leave empty space
        }
    }
}


function generateAndDownloadPdf() {
    if (!currentCrosswordData) {
        alert("Please generate a crossword first.");
        return;
    }
    // Check if jsPDF constructor was successfully obtained
    const jsPDFConstructor = window.jspdf?.jsPDF;
    if (typeof jsPDFConstructor === 'undefined' || !jsPDFConstructor) {
         alert("Error: jsPDF library is not loaded correctly. Cannot create PDF.");
         console.error("jsPDF constructor (window.jspdf.jsPDF) is undefined. Check HTML include and script loading order.");
         return;
    }

    const { trimmedGrid, trimmedCluePos, acrossClues, downClues } = currentCrosswordData;

    if (!trimmedGrid || trimmedGrid.length === 0) {
        alert("Cannot generate PDF for an empty grid.");
        return;
    }

    try {
        const doc = new jsPDFConstructor(); // Default is Portrait, mm units, A4 size
        const pageHeight = doc.internal.pageSize.height;
        const pageWidth = doc.internal.pageSize.width;

        // --- PDF Settings ---
        const margin = 15; // Page margin in mm
        const topMarginForTitle = 15; // Space from very top for main title
        const gridTitleSpacing = 8; // Space above each grid's title
        const gridGap = 10; // Vertical space between the blank and solution grids
        const maxGridWidth = pageWidth - 2 * margin; // Max usable width for grid
        const rows = trimmedGrid.length;
        const cols = trimmedGrid[0].length;

        // --- Cell Size Calculation ---
        // Estimate available height for TWO grids, titles, and gap, leaving space for clues start
        const approxClueStartYEstimate = pageHeight * 0.6; // Assume clues might start around 60% down
        const availableHeightForGrids = approxClueStartYEstimate - topMarginForTitle - (gridTitleSpacing * 2) - gridGap;
        const maxHeightPerGrid = Math.max(availableHeightForGrids / 2, 20); // Ensure at least 20mm height per grid

        let cellSize = Math.min(maxGridWidth / cols, 8); // Start by fitting width, max 8mm
        cellSize = Math.min(cellSize, maxHeightPerGrid / rows); // Then check against available height per grid
        cellSize = Math.max(cellSize, 4); // Minimum cell size 4mm

        const gridWidth = cols * cellSize;
        const gridHeight = rows * cellSize;
        const gridStartX = (pageWidth - gridWidth) / 2; // Center the grid horizontally

        // --- Vertical Positions ---
        let currentY = topMarginForTitle;
        doc.setFontSize(18);
        doc.text("Crossword Puzzle", pageWidth / 2, currentY, { align: 'center' });
        currentY += 10; // Space after main title

        // --- Blank Grid ---
        const blankGridTitleY = currentY + gridTitleSpacing;
        const blankGridStartY = blankGridTitleY + 5; // Small space after title
        doc.setFontSize(14);
        doc.text("Puzzle Grid", gridStartX, blankGridTitleY);
        drawGridOnPdf(doc, trimmedGrid, trimmedCluePos, gridStartX, blankGridStartY, cellSize, false); // false: don't draw letters
        currentY = blankGridStartY + gridHeight; // Update Y to bottom of blank grid

        // --- Solution Grid ---
        const solutionGridTitleY = currentY + gridGap + gridTitleSpacing;
        const solutionGridStartY = solutionGridTitleY + 5;
        // --- Check for page break before drawing solution grid ---
        if (solutionGridStartY + gridHeight > pageHeight - margin) { // Need space for grid + bottom margin
            doc.addPage();
            currentY = margin; // Reset Y for new page
            // Recalculate Y positions for solution grid on new page
            const solutionGridTitleY_newPage = currentY + gridTitleSpacing;
            const solutionGridStartY_newPage = solutionGridTitleY_newPage + 5;
            doc.setFontSize(14);
            doc.text("Solution Grid", gridStartX, solutionGridTitleY_newPage);
            drawGridOnPdf(doc, trimmedGrid, trimmedCluePos, gridStartX, solutionGridStartY_newPage, cellSize, true); // true: draw letters
            currentY = solutionGridStartY_newPage + gridHeight; // Update Y to bottom of solution grid on new page
        } else {
             // Draw on current page
             doc.setFontSize(14);
             doc.text("Solution Grid", gridStartX, solutionGridTitleY);
             drawGridOnPdf(doc, trimmedGrid, trimmedCluePos, gridStartX, solutionGridStartY, cellSize, true); // true: draw letters
             currentY = solutionGridStartY + gridHeight; // Update Y to bottom of solution grid
        }


        currentY += 10; // Add space before clues start

        // --- Draw Clues ---
        doc.setFontSize(12); // Font size for clue text title
        const clueColWidth = (pageWidth - 2 * margin - 10) / 2; // Width for two columns with gap
        const clueStartX1 = margin;
        const clueStartX2 = margin + clueColWidth + 10; // Start X for second column

        // Helper function to add clues, handling column/page breaks
        const addCluesToPdf = (title, clues, startX, startY) => {
            let yPos = startY;
            // Check if we need a new page *before* drawing the title
            if (yPos > pageHeight - 30) { // Need space for title + at least one clue line
                doc.addPage();
                yPos = margin; // Reset Y to top margin
            }

            doc.setFontSize(14); // Title font size
            doc.text(title, startX, yPos);
            yPos += 7; // Space after title
            doc.setFontSize(10); // Clue text font size

            clues.forEach(clue => {
                const lines = doc.splitTextToSize(clue, clueColWidth); // Auto-wrap text
                const linesHeight = lines.length * 4; // Estimate height needed (4mm per line approx)

                // Check if the *entire* clue block fits before drawing it
                if (yPos + linesHeight > pageHeight - margin) { // Check if lines fit on current page
                    doc.addPage();
                    yPos = margin; // Reset Y to top margin for new page
                    // Reprint title on new page if we added a page for this clue block
                    doc.setFontSize(14);
                    doc.text(title, startX, yPos);
                    yPos += 7;
                    doc.setFontSize(10);
                }
                doc.text(lines, startX, yPos);
                yPos += linesHeight + 2; // Move Y down for next clue (add 2mm gap)
            });
            return yPos; // Return the final Y position for this column
        };

        // Add Across clues in the first column
        const acrossEndY = addCluesToPdf("Across", acrossClues, clueStartX1, currentY);

        // Add Down clues, deciding placement based on Across clues end position
        let downStartY = currentY; // Default: start at same Y as Across title (currentY)
        let downStartX = clueStartX2; // Default: start in second column

        // Check if Across finished near the bottom, requiring Down to start on a new page
        if (acrossEndY > pageHeight - 30) {
             downStartY = margin; // Will trigger addPage in addCluesToPdf
             downStartX = clueStartX1; // Start in first column on new page
        }
        // Optional: Check if Across took significant vertical space, maybe start Down below it
        // else if (acrossEndY - currentY > pageHeight / 4) {
        //     downStartY = acrossEndY + 5; // Start below where Across finished in col 1
        //     downStartX = clueStartX1;
        // }
        // Current logic keeps Down starting in the second column unless Across forces a page break.

        addCluesToPdf("Down", downClues, downStartX, downStartY);

        // --- Save PDF ---
        doc.save('crossword.pdf');
        statusP.style.color = '#333'; // Neutral color
        const currentStatus = statusP.textContent;
        // Avoid adding duplicate messages if generating multiple times
        if (!currentStatus.includes("PDF downloaded")) {
             statusP.textContent = currentStatus + "\nPDF downloaded as crossword.pdf";
        }


    } catch (error) {
        console.error("Error generating PDF:", error);
        alert(`An error occurred while generating the PDF: ${error.message}`);
        statusP.style.color = '#d9534f';
        statusP.textContent = `Error generating PDF: ${error.message}`;
    }
}


// --- Event Listeners ---

generateBtn.addEventListener('click', () => {
    // 1. Reset state
    currentCrosswordData = null;
    downloadPdfBtn.disabled = true;
    gridDisplayElement.innerHTML = ''; // Clear grid display
    acrossCluesElement.innerHTML = ''; // Clear clues
    downCluesElement.innerHTML = '';
    statusP.textContent = ''; // Clear status

    // 2. Parse Input

    let wordsDefs = parseInput();
    if (!wordsDefs) {
  const selectedCategory = document.getElementById('categorySelect').value;
  if (selectedCategory && predefinedCategories[selectedCategory]) {
    wordsDefs = getLimitedWords(predefinedCategories[selectedCategory], 10);
        statusP.classList.remove('error');
        statusP.classList.add('success');
        statusP.textContent = `Using default words for category: ${selectedCategory.toUpperCase()}`;
    } else {
        return; // Parsing failed and no valid category selected
    }
    }

    // 3. Show "Generating..." message (using timeout to allow UI update)
    statusP.style.color = '#333'; // Neutral color for generating message
    statusP.textContent = "Generating crossword...";

    setTimeout(() => {
        try {
            // 4. Generate Crossword
            const crossword = new Crossword(wordsDefs, GRID_SIZE);
            const success = crossword.generate(); // This sets the status message on completion/failure

            if (success) {
                // 5. Get Processed Data
                const { trimmedGrid, trimmedCluePos } = crossword.getTrimmedGrid();
                const { across, down } = crossword.getClues();

                // 6. Store data for PDF generation
                currentCrosswordData = { trimmedGrid, trimmedCluePos, acrossClues: across, downClues: down };

                // 7. Render HTML Display
                renderGridHTML(trimmedGrid, trimmedCluePos);
                renderCluesHTML(across, down);

                // 8. Enable PDF button only if a grid was actually generated
                downloadPdfBtn.disabled = !(trimmedGrid && trimmedGrid.length > 0);
            } else {
                // Generation failed (status already set by generate method)
                renderGridHTML([], {}); // Ensure grid/clues are visually cleared
                renderCluesHTML([], []);
                downloadPdfBtn.disabled = true;
                currentCrosswordData = null;
            }
        } catch (error) {
             // Catch unexpected errors during generation/processing
             console.error("Error during crossword generation process:", error);
             statusP.style.color = '#d9534f';
             statusP.textContent = `An unexpected error occurred: ${error.message}`;
             downloadPdfBtn.disabled = true;
             currentCrosswordData = null;
             renderGridHTML([], {}); // Clear grid visually
             renderCluesHTML([], []);
        }
    }, 10); // Small delay (10ms) helps ensure "Generating..." message displays
});

// Add listener for the PDF download button
downloadPdfBtn.addEventListener('click', generateAndDownloadPdf);
downloadPdfBtn.addEventListener('click', generateAndDownloadPdf);