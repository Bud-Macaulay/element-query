const PERIODIC_TABLE = {
  H: {
    name: "Hydrogen",
    block: "s",
    group: 1,
    period: 1,
    type: "nonmetal",
    family: "none",
  },
  He: {
    name: "Helium",
    block: "s",
    group: 18,
    period: 1,
    type: "nonmetal",
    family: "noble gas",
  },
  Li: {
    name: "Lithium",
    block: "s",
    group: 1,
    period: 2,
    type: "metal",
    family: "alkali",
  },
  Be: {
    name: "Beryllium",
    block: "s",
    group: 2,
    period: 2,
    type: "metal",
    family: "alkaline earth",
  },
  B: {
    name: "Boron",
    block: "p",
    group: 13,
    period: 2,
    type: "metalloid",
    family: "none",
  },
  C: {
    name: "Carbon",
    block: "p",
    group: 14,
    period: 2,
    type: "nonmetal",
    family: "none",
  },
  N: {
    name: "Nitrogen",
    block: "p",
    group: 15,
    period: 2,
    type: "nonmetal",
    family: "none",
  },
  O: {
    name: "Oxygen",
    block: "p",
    group: 16,
    period: 2,
    type: "nonmetal",
    family: "chalcogen",
  },
  F: {
    name: "Fluorine",
    block: "p",
    group: 17,
    period: 2,
    type: "nonmetal",
    family: "halogen",
  },
  Ne: {
    name: "Neon",
    block: "p",
    group: 18,
    period: 2,
    type: "nonmetal",
    family: "noble gas",
  },
  Na: {
    name: "Sodium",
    block: "s",
    group: 1,
    period: 3,
    type: "metal",
    family: "alkali",
  },
  Mg: {
    name: "Magnesium",
    block: "s",
    group: 2,
    period: 3,
    type: "metal",
    family: "alkaline earth",
  },
  Al: {
    name: "Aluminium",
    block: "p",
    group: 13,
    period: 3,
    type: "metal",
    family: "post-transition",
  },
  Si: {
    name: "Silicon",
    block: "p",
    group: 14,
    period: 3,
    type: "metalloid",
    family: "none",
  },
  P: {
    name: "Phosphorus",
    block: "p",
    group: 15,
    period: 3,
    type: "nonmetal",
    family: "none",
  },
  S: {
    name: "Sulfur",
    block: "p",
    group: 16,
    period: 3,
    type: "nonmetal",
    family: "chalcogen",
  },
  Cl: {
    name: "Chlorine",
    block: "p",
    group: 17,
    period: 3,
    type: "nonmetal",
    family: "halogen",
  },
  Ar: {
    name: "Argon",
    block: "p",
    group: 18,
    period: 3,
    type: "nonmetal",
    family: "noble gas",
  },
  K: {
    name: "Potassium",
    block: "s",
    group: 1,
    period: 4,
    type: "metal",
    family: "alkali",
  },
  Ca: {
    name: "Calcium",
    block: "s",
    group: 2,
    period: 4,
    type: "metal",
    family: "alkaline earth",
  },
  Sc: {
    name: "Scandium",
    block: "d",
    group: 3,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Ti: {
    name: "Titanium",
    block: "d",
    group: 4,
    period: 4,
    type: "metal",
    family: "transition",
  },
  V: {
    name: "Vanadium",
    block: "d",
    group: 5,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Cr: {
    name: "Chromium",
    block: "d",
    group: 6,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Mn: {
    name: "Manganese",
    block: "d",
    group: 7,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Fe: {
    name: "Iron",
    block: "d",
    group: 8,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Co: {
    name: "Cobalt",
    block: "d",
    group: 9,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Ni: {
    name: "Nickel",
    block: "d",
    group: 10,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Cu: {
    name: "Copper",
    block: "d",
    group: 11,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Zn: {
    name: "Zinc",
    block: "d",
    group: 12,
    period: 4,
    type: "metal",
    family: "transition",
  },
  Ga: {
    name: "Gallium",
    block: "p",
    group: 13,
    period: 4,
    type: "metal",
    family: "post-transition",
  },
  Ge: {
    name: "Germanium",
    block: "p",
    group: 14,
    period: 4,
    type: "metalloid",
    family: "none",
  },
  As: {
    name: "Arsenic",
    block: "p",
    group: 15,
    period: 4,
    type: "metalloid",
    family: "none",
  },
  Se: {
    name: "Selenium",
    block: "p",
    group: 16,
    period: 4,
    type: "nonmetal",
    family: "chalcogen",
  },
  Br: {
    name: "Bromine",
    block: "p",
    group: 17,
    period: 4,
    type: "nonmetal",
    family: "halogen",
  },
  Kr: {
    name: "Krypton",
    block: "p",
    group: 18,
    period: 4,
    type: "nonmetal",
    family: "noble gas",
  },
  Rb: {
    name: "Rubidium",
    block: "s",
    group: 1,
    period: 5,
    type: "metal",
    family: "alkali",
  },
  Sr: {
    name: "Strontium",
    block: "s",
    group: 2,
    period: 5,
    type: "metal",
    family: "alkaline earth",
  },
  Y: {
    name: "Yttrium",
    block: "d",
    group: 3,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Zr: {
    name: "Zirconium",
    block: "d",
    group: 4,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Nb: {
    name: "Niobium",
    block: "d",
    group: 5,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Mo: {
    name: "Molybdenum",
    block: "d",
    group: 6,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Tc: {
    name: "Technetium",
    block: "d",
    group: 7,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Ru: {
    name: "Ruthenium",
    block: "d",
    group: 8,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Rh: {
    name: "Rhodium",
    block: "d",
    group: 9,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Pd: {
    name: "Palladium",
    block: "d",
    group: 10,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Ag: {
    name: "Silver",
    block: "d",
    group: 11,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  Cd: {
    name: "Cadmium",
    block: "d",
    group: 12,
    period: 5,
    type: "metal",
    family: "transition metal",
  },
  In: {
    name: "Indium",
    block: "p",
    group: 13,
    period: 5,
    type: "metal",
    family: "post-transition",
  },
  Sn: {
    name: "Tin",
    block: "p",
    group: 14,
    period: 5,
    type: "metal",
    family: "post-transition",
  },
  Sb: {
    name: "Antimony",
    block: "p",
    group: 15,
    period: 5,
    type: "metalloid",
    family: "none",
  },
  Te: {
    name: "Tellurium",
    block: "p",
    group: 16,
    period: 5,
    type: "metalloid",
    family: "chalcogen",
  },
  I: {
    name: "Iodine",
    block: "p",
    group: 17,
    period: 5,
    type: "nonmetal",
    family: "halogen",
  },
  Xe: {
    name: "Xenon",
    block: "p",
    group: 18,
    period: 5,
    type: "nonmetal",
    family: "noble gas",
  },
  Cs: {
    name: "Cesium",
    block: "s",
    group: 1,
    period: 6,
    type: "metal",
    family: "alkali",
  },
  Ba: {
    name: "Barium",
    block: "s",
    group: 2,
    period: 6,
    type: "metal",
    family: "alkaline earth",
  },

  // Lanthanides (usually placed separately but period 6 technically)
  La: {
    name: "Lanthanum",
    block: "d",
    group: 3,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Ce: {
    name: "Cerium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Pr: {
    name: "Praseodymium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Nd: {
    name: "Neodymium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Pm: {
    name: "Promethium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Sm: {
    name: "Samarium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Eu: {
    name: "Europium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Gd: {
    name: "Gadolinium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Tb: {
    name: "Terbium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Dy: {
    name: "Dysprosium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Ho: {
    name: "Holmium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Er: {
    name: "Erbium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Tm: {
    name: "Thulium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Yb: {
    name: "Ytterbium",
    block: "f",
    group: null,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },
  Lu: {
    name: "Lutetium",
    block: "d",
    group: 3,
    period: 6,
    type: "metal",
    family: "lanthanide",
  },

  Hf: {
    name: "Hafnium",
    block: "d",
    group: 4,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Ta: {
    name: "Tantalum",
    block: "d",
    group: 5,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  W: {
    name: "Tungsten",
    block: "d",
    group: 6,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Re: {
    name: "Rhenium",
    block: "d",
    group: 7,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Os: {
    name: "Osmium",
    block: "d",
    group: 8,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Ir: {
    name: "Iridium",
    block: "d",
    group: 9,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Pt: {
    name: "Platinum",
    block: "d",
    group: 10,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Au: {
    name: "Gold",
    block: "d",
    group: 11,
    period: 6,
    type: "metal",
    family: "transition metal",
  },
  Hg: {
    name: "Mercury",
    block: "d",
    group: 12,
    period: 6,
    type: "metal",
    family: "transition metal",
  },

  Tl: {
    name: "Thallium",
    block: "p",
    group: 13,
    period: 6,
    type: "metal",
    family: "post-transition",
  },
  Pb: {
    name: "Lead",
    block: "p",
    group: 14,
    period: 6,
    type: "metal",
    family: "post-transition",
  },
  Bi: {
    name: "Bismuth",
    block: "p",
    group: 15,
    period: 6,
    type: "metal",
    family: "post-transition",
  },
  Po: {
    name: "Polonium",
    block: "p",
    group: 16,
    period: 6,
    type: "metalloid",
    family: "chalcogen",
  },
  At: {
    name: "Astatine",
    block: "p",
    group: 17,
    period: 6,
    type: "metalloid",
    family: "halogen",
  },
  Rn: {
    name: "Radon",
    block: "p",
    group: 18,
    period: 6,
    type: "nonmetal",
    family: "noble gas",
  },
  Fr: {
    name: "Francium",
    block: "s",
    group: 1,
    period: 7,
    type: "metal",
    family: "alkali",
  },
  Ra: {
    name: "Radium",
    block: "s",
    group: 2,
    period: 7,
    type: "metal",
    family: "alkaline earth",
  },

  // Actinides (period 7 f-block)
  Ac: {
    name: "Actinium",
    block: "d",
    group: 3,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Th: {
    name: "Thorium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Pa: {
    name: "Protactinium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  U: {
    name: "Uranium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Np: {
    name: "Neptunium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Pu: {
    name: "Plutonium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Am: {
    name: "Americium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Cm: {
    name: "Curium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Bk: {
    name: "Berkelium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Cf: {
    name: "Californium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Es: {
    name: "Einsteinium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Fm: {
    name: "Fermium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Md: {
    name: "Mendelevium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  No: {
    name: "Nobelium",
    block: "f",
    group: null,
    period: 7,
    type: "metal",
    family: "actinide",
  },
  Lr: {
    name: "Lawrencium",
    block: "d",
    group: 3,
    period: 7,
    type: "metal",
    family: "actinide",
  },

  Rf: {
    name: "Rutherfordium",
    block: "d",
    group: 4,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Db: {
    name: "Dubnium",
    block: "d",
    group: 5,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Sg: {
    name: "Seaborgium",
    block: "d",
    group: 6,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Bh: {
    name: "Bohrium",
    block: "d",
    group: 7,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Hs: {
    name: "Hassium",
    block: "d",
    group: 8,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Mt: {
    name: "Meitnerium",
    block: "d",
    group: 9,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Ds: {
    name: "Darmstadtium",
    block: "d",
    group: 10,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Rg: {
    name: "Roentgenium",
    block: "d",
    group: 11,
    period: 7,
    type: "metal",
    family: "transition metal",
  },
  Cn: {
    name: "Copernicium",
    block: "d",
    group: 12,
    period: 7,
    type: "metal",
    family: "transition metal",
  },

  Nh: {
    name: "Nihonium",
    block: "p",
    group: 13,
    period: 7,
    type: "metal",
    family: "post-transition",
  },
  Fl: {
    name: "Flerovium",
    block: "p",
    group: 14,
    period: 7,
    type: "metal",
    family: "post-transition",
  },
  Mc: {
    name: "Moscovium",
    block: "p",
    group: 15,
    period: 7,
    type: "metal",
    family: "post-transition",
  },
  Lv: {
    name: "Livermorium",
    block: "p",
    group: 16,
    period: 7,
    type: "metal",
    family: "post-transition",
  },
  Ts: {
    name: "Tennessine",
    block: "p",
    group: 17,
    period: 7,
    type: "metalloid",
    family: "halogen",
  },
  Og: {
    name: "Oganesson",
    block: "p",
    group: 18,
    period: 7,
    type: "nonmetal",
    family: "noble gas",
  },
};

export default PERIODIC_TABLE;
