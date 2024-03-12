enum Category {
  FoodAndWater = 'Food and Water',
  MedicalSupplies = 'Medical Supplies',
  BuildingMaterials = 'Building Materials',
  Equipments = 'Basic Equipment & Clothing',
  BasicWeaponry = 'Basic Weaponry',
  Firearms = 'Firearms',
  PowerEnergyMechanicalMaterials = 'Power / Energy / Mechanical Related',
  FarmingSupplies = 'Farming / Planting Supplies',
  MiscellaneousItems = 'Miscellaneous Items',
  SpecialItems = 'Special Items'
}

interface GameResource {
  id: string;
  name: string;
  description: string;
  category: Category;
  quantity : number,
  durability : number,
  flavorText : string
  // Add other relevant fields
}
