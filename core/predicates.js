export const PREDICATES = {
  isSBlock: (el) => el.block === "s",
  isPBlock: (el) => el.block === "p",
  isDBlock: (el) => el.block === "d",
  isFBlock: (el) => el.block === "f",

  isAlkali: (el) => el.family === "alkali",
  isAlkalineEarth: (el) => el.family === "alkaline earth",
  isTransitionMetal: (el) => el.family === "transition",
  isPostTransition: (el) => el.family === "post-transition",
  isChalcogen: (el) => el.family === "chalcogen",
  isHalogen: (el) => el.family === "halogen" || el.group === 17,
  isNobleGas: (el) => el.family === "noble gas" || el.group === 18,

  isNonmetal: (el) => el.type === "nonmetal",
  isMetal: (el) => el.type === "metal",
  isMetalloid: (el) => el.type === "metalloid",

  isLanthanide: (el) => el.family === "lanthanide",
  isActinide: (el) => el.family === "actinide",
};

export const PREDICATE_KEYWORDS = {
  // Blocks
  "s-block": "isSBlock",
  sblock: "isSBlock",
  "p-block": "isPBlock",
  pblock: "isPBlock",
  "d-block": "isDBlock",
  dblock: "isDBlock",
  "f-block": "isFBlock",
  fblock: "isFBlock",

  // Common types
  metal: "isMetal",
  nonmetal: "isNonmetal",
  metalloid: "isMetalloid",

  // Common Families
  alkali: "isAlkali",
  "alkaline-earth": "isAlkalineEarth",
  alkalineearth: "isAlkalineEarth",

  transition: "isTransitionMetal",
  "transition-metal": "isTransitionMetal",
  "post-transition": "isPostTransition",
  chalcogen: "isChalcogen",
  halogen: "isHalogen",

  // noble gases
  "noble-gas": "isNobleGas",
  noblegas: "isNobleGas",
  noble: "isNobleGas",
  inert: "isNobleGas",

  // lanth / act
  lanthanide: "isLanthanide",
  lanthanoid: "isLanthanide",
  actinide: "isActinide",
  actinoid: "isActinide",
};
