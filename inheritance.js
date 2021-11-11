class Animal {
  constructor() {
    this.features = [];
    this.weight = 0;
    this.height = 0;
    this.lifespan = 0;
    this.speed = 0;
    this.iconicFeatures = [];
    this.family = [];
  }
}

class Land_Vertebrate extends Animal {
  constructor() {
    this.spine = true;
    this.hindlimb_count = 2;
    this.forelimb_count = 2;
  }
}

class Mammal extends Land_Vertebrate {
  constructor() {
    this.skin = "fur";
  }
}

class Primate extends Mammal {
  constructor() {
    this.forelimb = "arm"
    this.movement = "biped"
  }
}

