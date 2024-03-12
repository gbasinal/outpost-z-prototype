export interface EquipmentModel {
  headgear: EquipmentItem;
  armor: EquipmentItem;
  arms: EquipmentItem;
  footwear: EquipmentItem;
  weaponOne: EquipmentItem;
  weaponTwo: EquipmentItem;
  weaponThree: EquipmentItem;
}

export interface EquipmentItem {
  name: string;
  stats: {
    durability: number;
    bonusStats: BonusStat[];
  };
}

export interface BonusStat {
  statName: string;
  value: number;
}
