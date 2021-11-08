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
  dragonflies,
  Flies,
  Ants,
  Beetles,
  Bees,
  stickbugs,
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
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};

Spider_Monkey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bonobo = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lemur = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Macaque = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Aye_Aye = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bush_Baby = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Loris = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Howler_Monkey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Capuchin = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Squirrel_Monkey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Orangutan = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Gibbon = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Rare_Primates = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Proboscis_Monkey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Talpoin = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Vervet = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Snub_Nosed_Langur = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Titi = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Ukari = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Saki = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hamadryas = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Colobus = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Douc = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Guenon = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mandrill = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Potto = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mangabey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Tarsier = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Durukuli = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wooly_Monkey = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Marmoset = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wolf = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Bears = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Skunk = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Otter = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Wolverine = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hyena = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Red_Panda = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Raccoon = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Weasel = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Ferret = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mongoose = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Fox = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Badger = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Marten = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Coyote = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Coati = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Civet = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Linsang = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Mink = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Jackal = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Grison = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Polecat = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hog_Badger = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Stoat = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Meerkat = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Aardwolf = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Tiger = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lion = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Panther = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Cougar = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Jaguar = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Cheetah = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Lynx = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Grizzly = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Polar_Bear = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Sun_Bear = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Panda = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Black_Bear = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Elephant = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Rhinoceros = {
  name: "",
  features: [],
  weight: 0,
  lifespan: 0,
};
Hippopotamus = {
  name: "",
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
  Rays,
];

Insectoids = [
  Spiders,
  dragonflies,
  Flies,
  Ants,
  Beetles,
  Bees,
  stickbugs,
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

console.log({ Animals });
