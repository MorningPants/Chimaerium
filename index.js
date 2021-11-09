/*declare all the variables first*/

let Mammals,
  Birds,
  Reptiles_Amphibians,
  Aquatic_Vertebrates,
  Insectoids,
  Aquatic_Invertebrates,
  Songbirds,
  Hunting_Birds,
  Wading_Birds,
  Flightless_Birds,
  Tropical_Birds,
  Swimming_Birds,
  Hummingbirds,
  Chickens,
  Seabirds,
  Large_Seabirds,
  Common_Birds,
  Snakes,
  Lizards,
  Turtles,
  Alligators,
  Frogs,
  Salamanders,
  Primates,
  Carnivores,
  Rodents,
  Bats,
  Horselike_Mammals,
  Behemoths,
  Sloths,
  Wallabies,
  Rabbits,
  Pigs,
  Armored_Mammals,
  Obscure_Mammals,
  Thick_Finned_Fish,
  Thin_Finned_Fish,
  Aquatic_Mammals,
  Sharks,
  Lampreys,
  Jawless,
  Seahorses,
  Rays,
  Spiders,
  Dragonflies,
  Flies,
  Ants,
  Beetles,
  Bees,
  Stickbugs,
  Ticks,
  Gnats,
  Worms,
  Pillbugs,
  Snails,
  Slugs,
  Leeches,
  Scorpions,
  Butterflies,
  Grasshoppers,
  Lacewings,
  Caddisflies,
  Cockroaches,
  Termites,
  Thrips,
  Lice,
  Stoneflies,
  Mayflies,
  Mantis,
  Flea,
  Earwigs,
  Scorpionflies,
  Silverfish,
  Aphids,
  Spittlebugs,
  Shieldbugs,
  Planthoppers,
  Thornbugs,
  Cicadas,
  Octopi,
  Shrimp,
  Crustaceans,
  Squid,
  Jellyfish,
  Urchins,
  Sponges,
  Starfish,
  Anemones,
  Molluscs,
  Barnacles,
  Clams,
  Sea_Cucumbers,
  Humanoid,
  Chimpanzee,
  Gorilla,
  Baboon,
  Spider_Monkey,
  Bonobo,
  Lemur,
  Macaque,
  Aye_Aye,
  Bush_Baby,
  Loris,
  Howler_Monkey,
  Capuchin,
  Squirrel_Monkey,
  Orangutan,
  Gibbon,
  Rare_Primates,
  Proboscis_Monkey,
  Talpoin,
  Vervet,
  Snub_Nosed_Langur,
  Titi,
  Ukari,
  Saki,
  Hamadryas,
  Colobus,
  Douc,
  Guenon,
  Mandrill,
  Potto,
  Mangabey,
  Tarsier,
  Durukuli,
  Wooly_Monkey,
  Marmoset,
  Housecats,
  Dog_Breeds,
  Big_Cats,
  Wolf,
  Bears,
  Skunk,
  Otter,
  Wolverine,
  Hyena,
  Red_Panda,
  Raccoon,
  Weasel,
  Ferret,
  Mongoose,
  Fox,
  Badger,
  Marten,
  Coyote,
  Coati,
  Civet,
  Linsang,
  Mink,
  Jackal,
  Grison,
  Polecat,
  Hog_Badger,
  Stoat,
  Meerkat,
  Aardwolf,
  Tiger,
  Lion,
  Panther,
  Cougar,
  Jaguar,
  Cheetah,
  Lynx,
  Grizzly,
  Polar_Bear,
  Sun_Bear,
  Panda,
  Black_Bear,
  Elephant,
  Rhinoceros,
  Hippopotamus;

/*Declare all the features too*/

let VerticalSpine,
  HorizontalSpine,
  NoSpine,
  Exoskeleton,
  Head,
  Arm,
  Leg,
  Horn,
  Claw,
  Tusk,
  Fang,
  Spikes,
  Fin,
  Fur,
  Scaled,
  Feathered,
  Slime,
  Shell,
  Antler,
  Wing,
  Hoof,
  Paw,
  Quadruped,
  Biped,
  Flying,
  Swimming,
  Immobile,
  Hand,
  Finger,
  Foot,
  Face,
  Mane,
  Neck,
  ThroatSac,
  Decoration,
  Eye,
  Nose,
  Mouth,
  Teeth,
  Tail,
  Ear,
  Tongue,
  Mandible,
  Snout,
  Beak,
  Whiskers,
  Gills,
  Antennae,
  Talon;
/*Add all the animals and stats */

Humanoid = {
  name: "Humanoid",
  iconic_features: [Hand, VerticalSpine, Nose],
  features: { spine: VerticalSpine, skin: Fur, hands: Hand, feet: Foot },
  weight: 150,
  lifespan: 70,
};

Chimpanzee = {
  name: "Chimpanzee",
  features: [],
  weight: 150 /*TODO: list every animal's weight in lbs and lifespan in yrs.*/,
  lifespan: 70,
};
Gorilla = {
  name: "Gorilla",
  features: [],
  weight: 150,
  lifespan: 70,
};
Baboon = {
  name: "Baboon",
  features: [],
  weight: 0,
  lifespan: 0,
};

Spider_Monkey = {
  name: "Spider Monkey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bonobo = {
  name: "Bonobo",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lemur = {
  name: "Lemur",
  features: [],
  weight: 0,
  lifespan: 0,
};
Macaque = {
  name: "Macaque",
  features: [],
  weight: 0,
  lifespan: 0,
};
Aye_Aye = {
  name: "Aye-Aye",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bush_Baby = {
  name: "Bush Baby",
  features: [],
  weight: 0,
  lifespan: 0,
};
Loris = {
  name: "Loris",
  features: [],
  weight: 0,
  lifespan: 0,
};
Howler_Monkey = {
  name: "Howler Monkey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Capuchin = {
  name: "Capuchin",
  features: [],
  weight: 0,
  lifespan: 0,
};
Squirrel_Monkey = {
  name: "Squirrel Monkey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Orangutan = {
  name: "Orangutan",
  features: [],
  weight: 0,
  lifespan: 0,
};
Gibbon = {
  name: "Gibbon",
  features: [],
  weight: 0,
  lifespan: 0,
};
Proboscis_Monkey = {
  name: "Proboscis Monkey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Talpoin = {
  name: "Talpoin",
  features: [],
  weight: 0,
  lifespan: 0,
};
Vervet = {
  name: "Vervet",
  features: [],
  weight: 0,
  lifespan: 0,
};
Snub_Nosed_Langur = {
  name: "Snub-Nosed Langur",
  features: [],
  weight: 0,
  lifespan: 0,
};
Titi = {
  name: "Titi",
  features: [],
  weight: 0,
  lifespan: 0,
};
Ukari = {
  name: "Ukari",
  features: [],
  weight: 0,
  lifespan: 0,
};
Saki = {
  name: "Saki",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hamadryas = {
  name: "Hamadryas",
  features: [],
  weight: 0,
  lifespan: 0,
};
Colobus = {
  name: "Colobus",
  features: [],
  weight: 0,
  lifespan: 0,
};
Douc = {
  name: "Douc",
  features: [],
  weight: 0,
  lifespan: 0,
};
Guenon = {
  name: "Guenon",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mandrill = {
  name: "Mandrill",
  features: [],
  weight: 0,
  lifespan: 0,
};
Potto = {
  name: "Potto",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mangabey = {
  name: "Mangabey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Tarsier = {
  name: "Tarsier",
  features: [],
  weight: 0,
  lifespan: 0,
};
Durukuli = {
  name: "Durukuli",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wooly_Monkey = {
  name: "Wooly Monkey",
  features: [],
  weight: 0,
  lifespan: 0,
};
Marmoset = {
  name: "Marmoset",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wolf = {
  name: "Wolf",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bears = {
  name: "Bears",
  features: [],
  weight: 0,
  lifespan: 0,
};
Skunk = {
  name: "Skunk",
  features: [],
  weight: 0,
  lifespan: 0,
};
Otter = {
  name: "Otter",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wolverine = {
  name: "Wolverine",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hyena = {
  name: "Hyena",
  features: [],
  weight: 0,
  lifespan: 0,
};
Red_Panda = {
  name: "Red Panda",
  features: [],
  weight: 0,
  lifespan: 0,
};
Raccoon = {
  name: "Raccoon",
  features: [],
  weight: 0,
  lifespan: 0,
};
Weasel = {
  name: "Weasel",
  features: [],
  weight: 0,
  lifespan: 0,
};
Ferret = {
  name: "Ferret",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mongoose = {
  name: "Mongoose",
  features: [],
  weight: 0,
  lifespan: 0,
};
Fox = {
  name: "Fox",
  features: [],
  weight: 0,
  lifespan: 0,
};
Badger = {
  name: "Badger",
  features: [],
  weight: 0,
  lifespan: 0,
};
Marten = {
  name: "Marten",
  features: [],
  weight: 0,
  lifespan: 0,
};
Coyote = {
  name: "Coyote",
  features: [],
  weight: 0,
  lifespan: 0,
};
Coati = {
  name: "Coati",
  features: [],
  weight: 0,
  lifespan: 0,
};
Civet = {
  name: "Civet",
  features: [],
  weight: 0,
  lifespan: 0,
};
Linsang = {
  name: "Linsang",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mink = {
  name: "Mink",
  features: [],
  weight: 0,
  lifespan: 0,
};
Jackal = {
  name: "Jackal",
  features: [],
  weight: 0,
  lifespan: 0,
};
Grison = {
  name: "Grison",
  features: [],
  weight: 0,
  lifespan: 0,
};
Polecat = {
  name: "Polecat",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hog_Badger = {
  name: "Hog Badger",
  features: [],
  weight: 0,
  lifespan: 0,
};
Stoat = {
  name: "Stoat",
  features: [],
  weight: 0,
  lifespan: 0,
};
Meerkat = {
  name: "Meerkat",
  features: [],
  weight: 0,
  lifespan: 0,
};
Aardwolf = {
  name: "Aardwolf",
  features: [],
  weight: 0,
  lifespan: 0,
};
Tiger = {
  name: "Tiger",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lion = {
  name: "Lion",
  features: [],
  weight: 0,
  lifespan: 0,
};
Panther = {
  name: "Panther",
  features: [],
  weight: 0,
  lifespan: 0,
};
Cougar = {
  name: "Cougar",
  features: [],
  weight: 0,
  lifespan: 0,
};
Jaguar = {
  name: "Jaguar",
  features: [],
  weight: 0,
  lifespan: 0,
};
Cheetah = {
  name: "Cheetah",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lynx = {
  name: "Lynx",
  features: [],
  weight: 0,
  lifespan: 0,
};
Grizzly = {
  name: "Grizzly Bear",
  features: [],
  weight: 0,
  lifespan: 0,
};
Polar_Bear = {
  name: "Polar Bear",
  features: [],
  weight: 0,
  lifespan: 0,
};
Sun_Bear = {
  name: "Sun Bear",
  features: [],
  weight: 0,
  lifespan: 0,
};
Panda = {
  name: "Panda",
  features: [],
  weight: 0,
  lifespan: 0,
};
Black_Bear = {
  name: "Black Bear",
  features: [],
  weight: 0,
  lifespan: 0,
};
Elephant = {
  name: "Elephant",
  features: [],
  weight: 0,
  lifespan: 0,
};
Rhinoceros = {
  name: "Rhinoceros",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hippopotamus = {
  name: "Hippopotamus",
  features: [],
  weight: 0,
  lifespan: 0,
};

/*first organize by microtype*/

Rare_Primates = [
  Proboscis_Monkey,
  Talpoin,
  Vervet,
  Snub_Nosed_Langur,
  Titi,
  Ukari,
  Saki,
  Hamadryas,
  Colobus,
  Douc,
  Guenon,
  Macaque,
  Mandrill,
  Potto,
  Mangabey,
  Tarsier,
  Durukuli,
  Wooly_Monkey,
  Marmoset,
];

Housecats = [];
Dog_Breeds = [];
Big_Cats = [Tiger, Lion, Panther, Cougar, Jaguar, Cheetah, Lynx];
Bears = [Grizzly, Polar_Bear, Sun_Bear, Panda, Black_Bear];

/*then organize by family*/

Primates = [
  Humanoid,
  Chimpanzee,
  Gorilla,
  Baboon,
  Spider_Monkey,
  Bonobo,
  Lemur,
  Aye_Aye,
  Bush_Baby,
  Loris,
  Howler_Monkey,
  Capuchin,
  Squirrel_Monkey,
  Orangutan,
  Gibbon,
  Rare_Primates,
];

Carnivores = [
  Housecats,
  Dog_Breeds,
  Big_Cats,
  Wolf,
  Bears,
  Skunk,
  Otter,
  Wolverine,
  Hyena,
  Red_Panda,
  Raccoon,
  Weasel,
  Ferret,
  Mongoose,
  Fox,
  Badger,
  Marten,
  Coyote,
  Coati,
  Civet,
  Linsang,
  Mink,
  Jackal,
  Grison,
  Polecat,
  Hog_Badger,
  Stoat,
  Meerkat,
  Aardwolf,
];

Rodents = [];
Aquatic_Mammals = [];
Bats = [];
Horselike_Mammals = [];
Behemoths = [Elephant, Rhinoceros, Hippopotamus];
Sloths = [];
Wallabies = [];
Rabbits = [];
Pigs = [];
Armored_Mammals = [];
Obscure_Mammals = [];
 Songbirds= [];
  Hunting_Birds= [];
  Wading_Birds= [];
  Flightless_Birds= [];
  Tropical_Birds= [];
  Swimming_Birds= [];
  Hummingbirds= [];
  Chickens= [];
  Seabirds= [];
  Large_Seabirds= [];
  Common_Birds= [];
  Snakes= [];
  Lizards= [];
  Turtles= [];
  Alligators= [];
  Frogs= [];
  Salamanders= [];
  Thick_Finned_Fish= [];
  Thin_Finned_Fish= [];
  Aquatic_Mammals= [];
  Sharks= [];
  Lampreys= [];
  Jawless= [];
  Seahorses= [];
  Rays= [];
  Spiders= [];
  Dragonflies= [];
  Flies= [];
  Ants= [];
  Beetles= [];
  Bees= [];
  Stickbugs= [];
  Ticks= [];
  Gnats= [];
  Worms= [];
  Pillbugs= [];
  Snails= [];
  Slugs= [];
  Leeches= [];
  Scorpions= [];
  Butterflies= [];
  Grasshoppers= [];
  Lacewings= [];
  Caddisflies= [];
  Cockroaches= [];
  Termites= [];
  Thrips= [];
  Lice= [];
  Stoneflies= [];
  Mayflies= [];
  Mantis= [];
  Flea= [];
  Earwigs= [];
  Scorpionflies= [];
  Silverfish= [];
  Aphids= [];
  Spittlebugs= [];
  Shieldbugs= [];
  Planthoppers= [];
  Thornbugs= [];
  Cicadas= [];
   Octopi= [];
  Shrimp= [];
  Crustaceans= [];
  Squid= [];
  Jellyfish= [];
  Urchins= [];
  Sponges= [];
  Starfish= [];
  Anemones= [];
  Molluscs= [];
  Barnacles= [];
  Clams= [];
  Sea_Cucumbers= [];

/*finally organize by Kingdom*/

Mammals = [
  Primates,
  Carnivores,
  Rodents,
  Aquatic_Mammals,
  Bats,
  Horselike_Mammals,
  Behemoths,
  Sloths,
  Wallabies,
  Rabbits,
  Pigs,
  Armored_Mammals,
  Obscure_Mammals,
];

Birds = [
  Songbirds,
  Hunting_Birds,
  Wading_Birds,
  Flightless_Birds,
  Tropical_Birds,
  Swimming_Birds,
  Hummingbirds,
  Chickens,
  Seabirds,
  Large_Seabirds,
  Common_Birds,
];

Reptiles_Amphibians = [
  Snakes,
  Lizards,
  Turtles,
  Alligators,
  Frogs,
  Salamanders,
];

Aquatic_Vertebrates = [
  Thick_Finned_Fish,
  Thin_Finned_Fish,
  Aquatic_Mammals,
  Sharks,
  Lampreys,
  Jawless,
  Seahorses,
  Rays
];

Insectoids = [
  Spiders,
  Dragonflies,
  Flies,
  Ants,
  Beetles,
  Bees,
  Stickbugs,
  Ticks,
  Gnats,
  Worms,
  Pillbugs,
  Snails,
  Slugs,
  Leeches,
  Scorpions,
  Butterflies,
  Grasshoppers,
  Lacewings,
  Caddisflies,
  Cockroaches,
  Termites,
  Thrips,
  Lice,
  Stoneflies,
  Mayflies,
  Mantis,
  Flea,
  Earwigs,
  Scorpionflies,
  Silverfish,
  Aphids,
  Spittlebugs,
  Shieldbugs,
  Planthoppers,
  Thornbugs,
  Cicadas,
];

Aquatic_Invertebrates = [
  Octopi,
  Shrimp,
  Crustaceans,
  Squid,
  Jellyfish,
  Urchins,
  Sponges,
  Starfish,
  Anemones,
  Molluscs,
  Barnacles,
  Clams,
  Sea_Cucumbers,
];

let Animals = [
  Mammals,
  Birds,
  Reptiles_Amphibians,
  Aquatic_Vertebrates,
  Insectoids,
  Aquatic_Invertebrates,
];



isArray = (a) => !!a && a.constructor === Array;
isObject = (a) => !!a && a.constructor === Object;

randomArrayItem = (array) => {
  if (isArray(array)) {
    return array[Math.floor(Math.random() * array.length)];
  }
  else return 'error'
};

let randomKingdom = randomArrayItem(Animals);
let randomFamily = randomArrayItem(randomKingdom);
function randomAnimal(family) {
    let familyMember = randomArrayItem(family);
    if (isObject(familyMember)) {
        return familyMember.name;
    } else if (isArray(familyMember)) {
        return randomArrayItem(familyMember).name;
    } else
        return "error";
}

generateChimera = () =>
  (document.getElementById("01").innerHTML = `${randomAnimal(Primates)} - ${randomAnimal(Primates)} `);

  console.log(`${randomAnimal(Primates)} - ${randomAnimal(Primates)} `);
