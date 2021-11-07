/*declare all the variables first*/

let Mammals, Birds,  Reptiles_Amphibians, Aquatic_Vertebrates, Insectoids, Aquatic_Invertebrates, Songbirds, Hunting_Birds, Wading_Birds, Flightless_Birds, Tropical_Birds, Swimming_Birds, Hummingbirds, Chickens, Seabirds, Large_Seabirds, Common_Birds, Snakes, Lizards, Turtles, Alligators, Frogs, Salamanders, Primates, Carnivores, Rodents, Bats, Horselike_Mammals, Behemoths, Sloths, Wallabies, Rabbits, Pigs, Armored_Mammals, Obscure_Mammals, Thick_Finned_Fish, Thin_Finned_Fish, Aquatic_Mammals, Sharks, Lampreys, Jawless, Seahorses, Rays, Spiders, dragonflies, Flies, Ants, Beetles, Bees, stickbugs, Ticks, Gnats, Worms, Pillbugs, Snails, Slugs, Leeches, Scorpions, Butterflies, Grasshoppers, Lacewings,Caddisflies, Cockroaches, Termites, Thrips, Lice, Stoneflies, Mayflies, Mantis, Flea, Earwigs, Scorpionflies, Silverfish, Aphids, Spittlebugs, Shieldbugs, Planthoppers, Thornbugs, Cicadas, Octopi, Shrimp, Crustaceans, Squid, Jellyfish, Urchins, Sponges, Starfish, Anemones, Molluscs, Barnacles, Clams, Sea_Cucumbers, Humanoid, Chimpanzee, Gorilla, Baboon, Spider_Monkey, Bonobo, Lemur, Macaque, Aye_Aye, Bush_Baby, Loris, Howler_Monkey,  Capuchin, Squirrel_Monkey, Orangutan, Gibbon, Rare_Primates, Proboscis_Monkey, Talpoin, Vervet, Snub_Nosed_Langur, Titi, Ukari, Saki, Hamadryas, Colobus, Douc, Guenon, Mandrill, Potto, Mangabey, Tarsier, Durukuli, Wooly_Monkey, Marmoset, Housecats, Dog_Breeds, Big_Cats, Wolf, Bears, Skunk, Otter, Wolverine, Hyena, Red_Panda, Raccoon, Weasel, Ferret, Mongoose, Fox, Badger, Marten, Coyote, Coati, Civet, Linsang, Mink, Jackal, Grison, Polecat, Hog_Badger, Stoat, Meerkat, Aardwolf, Tiger, Lion, Panther, Cougar, Jaguar, Cheetah, Lynx, Grizzly, Polar_Bear, Sun_Bear, Panda, Black_Bear, Elephant, Rhinoceros, Hippopotamus


/* need to use desktop to initialize all these objects
 Humanoid = {name: "Humanoid"}
 Chimpanzee = {name:  "Chimpanzee"}
 Gorilla = {name:  }
Baboon = {name:  }
Spider_Monkey= {name:  }
Bonobo, Lemur, Macaque, Aye_Aye, Bush_Baby, Loris, Howler_Monkey,  Capuchin, Squirrel_Monkey, Orangutan, Gibbon, Rare_Primates, Proboscis_Monkey, Talpoin, Vervet, Snub_Nosed_Langur, Titi, Ukari, Saki, Hamadryas, Colobus, Douc, Guenon, Mandrill, Potto, Mangabey, Tarsier, Durukuli, Wooly_Monkey, Marmoset, Housecats, Dog_Breeds, Big_Cats, Wolf, Bears, Skunk, Otter, Wolverine, Hyena, Red_Panda, Raccoon, Weasel, Ferret, Mongoose, Fox, Badger, Marten, Coyote, Coati, Civet, Linsang, Mink, Jackal, Grison, Polecat, Hog_Badger, Stoat, Meerkat, Aardwolf, Tiger, Lion, Panther, Cougar, Jaguar, Cheetah, Lynx, Grizzly, Polar_Bear, Sun_Bear, Panda, Black_Bear, Elephant, Rhinoceros, Hippopotamus*/

Rare_Primates = [Proboscis_Monkey, Talpoin, Vervet, Snub_Nosed_Langur, Titi, Ukari, Saki, Hamadryas, Colobus, Douc, Guenon, Macaque, Mandrill, Potto, Mangabey, Tarsier, Durukuli, Wooly_Monkey, Marmoset]

Primates =[Humanoid, Chimpanzee, Gorilla, Baboon, Spider_Monkey, Bonobo, Lemur, Aye_Aye, Bush_Baby, Loris, Howler_Monkey,  Capuchin, Squirrel_Monkey, Orangutan, Gibbon, Rare_Primates ]



Housecats =[]
Dog_Breeds = []
Big_Cats = [Tiger, Lion, Panther, Cougar, Jaguar, Cheetah, Lynx]
Bears =[Grizzly, Polar_Bear, Sun_Bear, Panda, Black_Bear]
Carnivores=[Housecats, Dog_Breeds, Big_Cats, Wolf, Bears, Skunk, Otter, Wolverine, Hyena, Red_Panda, Raccoon, Weasel, Ferret, Mongoose, Fox, Badger, Marten, Coyote, Coati, Civet, Linsang, Mink, Jackal, Grison, Polecat, Hog_Badger, Stoat, Meerkat, Aardwolf]


Rodents =[]
Aquatic_Mammals=[]
Bats=[]
Horselike_Mammals=[]
Behemoths=[Elephant, Rhinoceros, Hippopotamus]
Sloths=[]
Wallabies=[]
Rabbits=[]
Pigs=[]
Armored_Mammals=[]
Obscure_Mammals=[]

Mammals = [Primates, Carnivores, Rodents, Aquatic_Mammals, Bats, Horselike_Mammals, Behemoths, Sloths, Wallabies, Rabbits, Pigs, Armored_Mammals, Obscure_Mammals]

Birds = [Songbirds, Hunting_Birds, Wading_Birds, Flightless_Birds, Tropical_Birds, Swimming_Birds, Hummingbirds, Chickens, Seabirds, Large_Seabirds, Common_Birds]

Reptiles_Amphibians = [Snakes, Lizards, Turtles, Alligators, Frogs, Salamanders]

Aquatic_Vertebrates = [Thick_Finned_Fish, Thin_Finned_Fish, Aquatic_Mammals, Sharks, Lampreys, Jawless, Seahorses, Rays]

Insectoids = [Spiders, dragonflies, Flies, Ants, Beetles, Bees, stickbugs, Ticks, Gnats, Worms, Pillbugs, Snails, Slugs, Leeches, Scorpions, Butterflies, Grasshoppers, Lacewings,Caddisflies, Cockroaches, Termites, Thrips,Lice, Stoneflies, Mayflies, Mantis, Flea, Earwigs, Scorpionflies, Silverfish, Aphids, Spittlebugs, Shieldbugs, Planthoppers, Thornbugs, Cicadas ]

Aquatic_Invertebrates = [Octopi, Shrimp, Crustaceans, Squid, Jellyfish, Urchins, Sponges, Starfish, Anemones, Molluscs, Barnacles, Clams, Sea_Cucumbers]

let Animals = [Mammals, Birds,  Reptiles_Amphibians, Aquatic_Vertebrates, Insectoids, Aquatic_Invertebrates]




let string = ""
printAll(Animals)

function printAll(array) {
 for (i=0; i<array.length; i++){
 
   
   string += array[i]
  
  }
 let div = document.getElementById('01');
 div.innerHTML += string;
}

