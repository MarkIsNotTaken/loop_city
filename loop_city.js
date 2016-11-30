var count;

for (count = 0; count < 101; count++){
  console.log(count);
}

var animalCount;

for (animalCount = 0; animalCount < 6; animalCount++){
  console.log("There are " + animalCount + " animals in Noahs Arc");
}

var partyAnimal = ["Lizard", "Gerbil", "Tucan", "Apacher Helicopter", "Hedgehog"]

for (var animalia = 0; animalia < 5; animalia++){
  console.log(partyAnimal[animalia]);
}

var weaponChest = ["Mace", "Sorcerer's Stone", "Excalibur"]

var hero = {
  wizard : "Merlin",
  weapon : weaponChest[1],
  power : 30
}

function kingdom(arty){
  if(hero.wizard == "Merlin" && hero.weapon == "Sorcerer's Stone"){
    console.log(hero.wizard + " shall slay the dragon with the " + hero.weapon)
    console.log(hero.wizard + " is ready for war with the " + hero.weapon)
	}
}

kingdom();


