# Chimaerium

This is a work in progress.  I am currently trying to decide which method to use to hold the data on the animals.  Javascript variables, inherited classes, or pure JSON?  The goal is to be able to reference this list when a chimera egg is hatching.

The egg only has the following information: Mother's 2 species, Father's 2 species, and a weight.  With this information I will need to find 2 species for the new chimera.

For the chimera's primary species, I want to filter the list of animals to only include animals that:

a) have a weight roughly 50 times the size of the egg
b) shares a 'family' value with at least one of the four parent species.
c) is weighted havily towards 'common' species and away from 'rare' and 'obscure' species.

The secondary species can be any weight, but follows B and C above.
