class Card {
  constructor(specs) {
    this.specs = specs;
  }

  get spec() {
    return this.specs;
  }

  get isHero() {
    return this.isType(Types.Hero);
  }
  get isColony() {
    return this.isType(Types.Colony);
  }
  get isShip() {
    return this.isType(Types.Ship);
  }
  get isBase() {
    return this.isType(Types.Base);
  }
  isType(type) {
    return this.specs && this.specs.type && this.specs.type === type;
  }
}

const Types = Object.freeze({
  'Hero':   'Hero',
  'Base':   'Base',
  'Ship':   'Ship',
  'Colony': 'Colony',
})

const Colors = Object.freeze({
  'Attack':         'red',
  'Colonization':   'green',
  'Science':        'blue',
  'Production':     'yellow',
})

const Resources = Object.freeze({
  'Attack':         'Attack',
  'Colonization':   'Colonization',
  'Science':        'Science',
  'Production':     'Colony',
})

class Specs {
  type = 'Ship';
  level = 2;
  klass = 'Attack'
  defense = 2;
  attack = 2;
  colonization = 0;
  production = 0;
  science = 0;

  alternativeType = 'Science';
  alternativeValue = 1;

  utilizationType = 'Production';
  utilizationValue = 1;

  cooperativeType = 'Attack';
  cooperativeValue = '2';
}

export default Card;
