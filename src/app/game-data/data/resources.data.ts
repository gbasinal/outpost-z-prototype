// -1 means not applicable

export const resources: GameResource[] = [
  {
    id: 'food_01',
    name: 'Canned Beans',
    description: 'Provides nutrition. Partially restores hp and fatigue stats',
    category: Category.FoodAndWater,
    quantity: 1,
    durability: -1,
    flavorText : "A humble can of beans, offering sustenance in the darkest of times. Its comforting aroma evokes memories of simpler days."
  },
  {
    id: 'food_02',
    name: 'Bottled Water ',
    description: 'Immediate water source. Partially restores dehydration and fatigue stat ',
    category: Category.FoodAndWater,
    quantity: 1,
    durability: -1,
    flavorText : "Pure, life-sustaining liquid captured in a sturdy bottle. Quench your thirst and replenish your spirit with each refreshing sip."
  },
  {
    id: "food_03",
    name: "Fresh Produce",
    description: "Provides nutrition. Partially restores hp and fatigue stats. Greatly restores hp and fatigue stats when cooked. Can also be grown in the garden",
    category: Category.FoodAndWater,
    quantity : 1,
    durability : -1,
    flavorText : "A rare find in this desolate world, fresh produce offers a taste of vitality amidst the ruins. Handle with care, for its fleeting freshness is a precious commodity."
  },

  {
    id: "food_04",
    name: "Full Meal",
    description: "Provides nutrition. Partially restores hp but fully restores fatigue.",
    category: Category.FoodAndWater,
    quantity : 1,
    durability : -1,
    flavorText : "A hearty feast in a forsaken land, this full meal provides nourishment and warmth to weary souls. Its savory aroma ignites hope and fortifies the body for the challenges ahead"
  },

  {
    id: "medical_01",
    name: "Bandages",
    description: "Partially heals HP.",
    category: Category.MedicalSupplies,
    quantity : 1,
    durability : -1,
    flavorText : "A roll of sterile bandages, a lifeline in times of injury. With each gentle wrap, it offers comfort and protection, aiding in the mending of wounds and the preservation of hope"
  },

  {
    id: "medical_02",
    name: "Antiseptic Solution",
    description: "Used for cleaning wounds and to prevent infections.",
    category: Category.MedicalSupplies,
    quantity : 1,
    durability : -1,
    flavorText : "A potent solution, capable of cleansing wounds and thwarting infection in the unforgiving aftermath of disaster. Its stinging touch promises healing and protection against the lurking dangers of the wasteland"
  },

  {
    id: "medical_03",
    name: "Painkillers",
    description: "Used for managing pain. Does not restore hp. Decreases fatigue levels",
    category: Category.MedicalSupplies,
    quantity : 1,
    durability : -1,
    flavorText : "A small but powerful remedy, these painkillers offer relief from the agony of injuries sustained in the struggle for survival. With each dose, they dull the sharp edges of pain, allowing weary travelers to push forward with renewed resolve"
  },

  {
    id: "building_materials_01",
    name: "Wood",
    description: "Used for crafting,repair and upgrades.",
    category: Category.BuildingMaterials,
    quantity : 1,
    durability : -1,
    flavorText : "From towering trees to remnants of once-grand furniture, wood is a versatile resource in this harsh world. Whether crafting makeshift shelters or reinforcing fortifications, its familiarity brings a semblance of comfort amidst the chaos"
  },

  {
    id: "building_materials_02",
    name: "Metal Scraps",
    description: "Used for crafting,repair and upgrades.",
    category: Category.BuildingMaterials,
    quantity : 1,
    durability : -1,
    flavorText : "Scavenged from the bones of civilization, metal scrap holds the promise of resilience and adaptability. With every twisted piece, opportunities for repair and innovation arise, shaping the foundations of a new era"
  },

  {
    id: "building_materials_03",
    name: "Stone/Concrete",
    description: "Used for crafting,repair and upgrades.",
    category: Category.BuildingMaterials,
    quantity : 1,
    durability : -1,
    flavorText : "As enduring as the ruins that surround it, stone offers strength and stability in a world fractured by disaster. From crude tools to sturdy fortifications, its timeless presence lays the groundwork for rebuilding amidst the rubble"
  },

  {
    id: "clothing_01",
    name: "Makeshift Armor",
    description: "Used for protection. Adds additional layer of shield/health when exploring.",
    category: Category.Equipments,
    quantity : 1,
    durability : -1,
    flavorText : "Forged from scraps of metal, leather, and whatever fabric can be salvaged, makeshift armor offers a patchwork defense against the threats that lurk beyond. Each piece tells a tale of resourcefulness and resilience, a testament to the ingenuity born of necessity"
  },

  {
    id: "clothing_02",
    name: "Durable Clothing",
    description: "Provides protectopm from the environment. Shields from effects of weather",
    category: Category.Equipments,
    quantity : 1,
    durability : -1,
    flavorText : "Amidst the remnants of civilization, durable clothing stands as a shield against the elements, providing comfort and protection against nature's relentless assault. Each thread weaves a tale of survival, a testament to the enduring spirit of humanity amidst the ruins"
  },

  {
    id: "clothing_03",
    name: "Cloth",
    description: "Crafting material for making bandages, clothes or armor.",
    category: Category.Equipments,
    quantity : 1,
    durability : -1,
    flavorText : "Once mundane, now invaluable, cloth is a versatile material born of necessity. From makeshift bandages to protective garments, its soft embrace offers solace and security in a world torn asunder by catastrophe"
  },

  {
    id: "weapon_01",
    name: "Spear",
    description: "Provides basic defense against enemies. Gives additional result when used in hunting",
    category: Category.BasicWeaponry,
    quantity : 1,
    durability : -1,
    flavorText : "Fashioned from sturdy wood, sharpened with care, and bound with strips of cloth for stability, the spear is a primitive yet effective tool of defense and survival. With each thrust, it pierces the veil of uncertainty, offering protection and sustenance in equal measure"
  },

  {
    id: "weapon_02",
    name: "Club",
    description: "Provides basic defense against enemies. Gives additional result when used in hunting.",
    category: Category.BasicWeaponry,
    quantity : 1,
    durability : -1,
    flavorText : "Rudimentary yet reliable, the club is a blunt instrument of defense, crafted from the raw materials scavenged from a world in chaos. Its weight brings a sense of security in uncertain times, a reminder of humanity's primal instinct to protect and survive"
  },

  {
    id: "weapon_03",
    name: "Improvised Bow",
    description: "Provides basic ranged defense against enemies. Gives additional result when used in hunting.",
    category: Category.BasicWeaponry,
    quantity : 1,
    durability : -1,
    flavorText : "Born of necessity and ingenuity, the improvised bow is a testament to resourcefulness in the face of adversity. Crafted from humble materials and bound with makeshift string, it offers a silent means of hunting and defense, bridging the gap between survival and extinction"
  },

  {
    id: "weapon_04",
    name: "Arrow",
    description: "Used as ammunition for bows.",
    category: Category.BasicWeaponry,
    quantity : 1,
    durability : -1,
    flavorText : "A slender shaft of wood, tipped with stone or metal, the arrow is a deadly projectile unleashed by the string of a bow. Each flight carries the hopes of the hunter, seeking sustenance amidst the desolation of a world forever changed"
  },

  {
    id: "weapon_05",
    name: "Knife",
    description: "Can be used as a weapon or tool.",
    category: Category.BasicWeaponry,
    quantity : 1,
    durability : -1,
    flavorText : "A ubiquitous tool in the remnants of civilization, the knife is a versatile companion in the struggle for survival. Whether used for defense or utility, its sharp edge cuts through the darkness, offering a glimmer of hope in the face of uncertainty"
  },

  {
    id: "firearms_01",
    name: "Pistol",
    description: "A compact and versatile firearm, the pistol offers reliability and ease of use in close-quarters combat. Boosts a small amount of points to the overall result.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : "A trusty companion in the unforgiving wasteland, the pistol embodies reliability and efficiency. Its sleek design belies its deadly capability, offering a sense of security in a world where danger lurks around every corner"
  },

  {
    id: "firearms_02",
    name: "Shotgun",
    description: "A formidable weapon renowned for its stopping power, the shotgun delivers devastating close-range firepower. Boosts a huge amount of points to the overall result when near an enemy. The further the enemy is, the smaller the boost will be.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : "A weapon of brute force and undeniable power, the shotgun commands respect in the hands of those who wield it. Its thunderous roar echoes through the desolation, a harbinger of swift justice against the encroaching darkness."
  },

  {
    id: "firearms_03",
    name: "Rifle",
    description: "A single-shot or semi-automatic weapon that offers accuracy and range, making it ideal for picking off targets from a distance. Boosts a huge amount of points when far from the enemy. The nearer the enemy is, the smaller the boost will be.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : "A symbol of precision and long-range dominance, the rifle stands as a beacon of hope for those who value accuracy over brute force. With each well-placed shot, it reaffirms humanity's enduring quest for order amidst the chaos"
  },

  {
    id: "firearms_04",
    name: "Assault Rifle",
    description: "A versatile and adaptable firearm, the assault rifle combines rapid-fire capability with moderate recoil, making it effective in a variety of combat situations. Boosts moderate amount of points to the overall result.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : "A weapon born of necessity in a world consumed by conflict, the assault rifle epitomizes versatility and adaptability. Its rapid-fire capability echoes the heartbeat of survival, a testament to the resilience of those who refuse to yield to despair."
  },

  {
    id: "firearms_05",
    name: "SMG",
    description: "Compact and lightweight, the SMG excels in close-quarters engagements where speed and maneuverability are paramount. Boosts moderate amount of points to the overall result",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : "Compact yet deadly, the SMG is a relentless force in the hands of those who dare to wield it. Its rapid bursts of fire cut through the silence of the wasteland, a reminder that in this unforgiving world, speed is often the difference between life and death"
  },

  {
    id: "firearms_06",
    name: "9mm Pistol Bullet",
    description: "Provides ammunition for Pistols.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  {
    id: "firearms_07",
    name: "Shotgun Shell",
    description: "Provides ammunition for Shotguns.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  {
    id: "firearms_08",
    name: "Rifle Round",
    description: "Provides ammunition for Rifles.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  {
    id: "firearms_09",
    name: "5.56mm Assault Rifle Round",
    description: "Provides ammunition for Assault Rifles.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  {
    id: "firearms_10",
    name: "9mm SMG Bullet",
    description: "Provides ammunition for SMGs.",
    category: Category.Firearms,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  {
    id: "food_01",
    name: "Canned Beans",
    description: "Provides nutrition.",
    category: Category.FoodAndWater,
    quantity : 1,
    durability : -1,
    flavorText : ""
  },

  // Add more items for each category
];
