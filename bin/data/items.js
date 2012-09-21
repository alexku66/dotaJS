define({"DOTAAbilities": {
    "Version": "1",
    "item_blink": {
        "ID": "1",
        "AbilityName": "item_blink",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "14.0",
        "AbilityManaCost": "75",
        "ItemCost": "2150",
        "ItemShopTags": "teleport",
        "ItemQuality": "component",
        "SideShop": "1",
        "InvalidHeroes": "npc_dota_hero_vengefulspirit;npc_dota_hero_pudge",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "blink_range": "1200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "blink_damage_cooldown": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "blink_range_clamp": "960"
            }
        }
    },
    "item_blades_of_attack": {
        "ID": "2",
        "AbilityName": "item_blades_of_attack",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "450",
        "ItemShopTags": "damage;tutorial",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "9"
        }}
    },
    "item_broadsword": {
        "ID": "3",
        "AbilityName": "item_broadsword",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1200",
        "ItemShopTags": "damage",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "18"
        }}
    },
    "item_chainmail": {
        "ID": "4",
        "AbilityName": "item_chainmail",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "550",
        "ItemShopTags": "armor",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_armor": "5"
        }}
    },
    "item_claymore": {
        "ID": "5",
        "AbilityName": "item_claymore",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1400",
        "ItemShopTags": "damage",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "21"
        }}
    },
    "item_helm_of_iron_will": {
        "ID": "6",
        "AbilityName": "item_helm_of_iron_will",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "950",
        "ItemShopTags": "armor;regen_health",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_regen": "3"
            }
        }
    },
    "item_javelin": {
        "ID": "7",
        "AbilityName": "item_javelin",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1500",
        "ItemShopTags": "damage",
        "ItemQuality": "component",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_chance": "20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_chance_damage": "40"
            }
        }
    },
    "item_mithril_hammer": {
        "ID": "8",
        "AbilityName": "item_mithril_hammer",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1600",
        "ItemShopTags": "damage",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "24"
        }}
    },
    "item_platemail": {
        "ID": "9",
        "AbilityName": "item_platemail",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1400",
        "ItemShopTags": "armor",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_armor": "10"
        }}
    },
    "item_quarterstaff": {
        "ID": "10",
        "AbilityName": "item_quarterstaff",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "900",
        "ItemShopTags": "damage;attack_speed",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_speed": "10"
            }
        }
    },
    "item_quelling_blade": {
        "ID": "11",
        "AbilityName": "item_quelling_blade",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_TREE",
        "AbilityCastRange": "165",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "5.0",
        "AbilityManaCost": "0",
        "ItemCost": "225",
        "ItemShopTags": "damage",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_bonus": "32"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_bonus_ranged": "12"
            }
        }
    },
    "item_ring_of_protection": {
        "ID": "12",
        "AbilityName": "item_ring_of_protection",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "175",
        "ItemShopTags": "armor",
        "ItemQuality": "component",
        "ItemAliases": "rop",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_armor": "2"
        }}
    },
    "item_stout_shield": {
        "ID": "182",
        "AbilityName": "item_stout_shield",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "250",
        "ItemShopTags": "block",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_block_melee": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_block_ranged": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "block_chance": "60"
            }
        }
    },
    "item_gauntlets": {
        "ID": "13",
        "AbilityName": "item_gauntlets",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "150",
        "ItemShopTags": "str",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_strength": "3"
        }}
    },
    "item_slippers": {
        "ID": "14",
        "AbilityName": "item_slippers",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "150",
        "ItemShopTags": "agi",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_agility": "3"
        }}
    },
    "item_mantle": {
        "ID": "15",
        "AbilityName": "item_mantle",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "150",
        "ItemShopTags": "int",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_intellect": "3"
        }}
    },
    "item_branches": {
        "ID": "16",
        "AbilityName": "item_branches",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "53",
        "ItemShopTags": "agi;int;str",
        "ItemQuality": "component",
        "ItemAliases": "gg branch",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_all_stats": "1"
        }}
    },
    "item_belt_of_strength": {
        "ID": "17",
        "AbilityName": "item_belt_of_strength",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "450",
        "ItemShopTags": "str",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_strength": "6"
        }}
    },
    "item_boots_of_elves": {
        "ID": "18",
        "AbilityName": "item_boots_of_elves",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "450",
        "ItemShopTags": "agi",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_agility": "6"
        }}
    },
    "item_robe": {
        "ID": "19",
        "AbilityName": "item_robe",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "450",
        "ItemShopTags": "int",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_intellect": "6"
        }}
    },
    "item_circlet": {
        "ID": "20",
        "AbilityName": "item_circlet",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "185",
        "ItemShopTags": "agi;int;str",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_all_stats": "2"
        }}
    },
    "item_ogre_axe": {
        "ID": "21",
        "AbilityName": "item_ogre_axe",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1000",
        "ItemShopTags": "str",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_strength": "10"
        }}
    },
    "item_blade_of_alacrity": {
        "ID": "22",
        "AbilityName": "item_blade_of_alacrity",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1000",
        "ItemShopTags": "agi",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_agility": "10"
        }}
    },
    "item_staff_of_wizardry": {
        "ID": "23",
        "AbilityName": "item_staff_of_wizardry",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1000",
        "ItemShopTags": "int",
        "ItemQuality": "component",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_intellect": "10"
        }}
    },
    "item_ultimate_orb": {
        "ID": "24",
        "AbilityName": "item_ultimate_orb",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2100",
        "ItemShopTags": "agi;int;str",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_all_stats": "10"
        }}
    },
    "item_gloves": {
        "ID": "25",
        "AbilityName": "item_gloves",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "500",
        "ItemShopTags": "attack_speed",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_attack_speed": "15"
        }}
    },
    "item_lifesteal": {
        "ID": "26",
        "AbilityName": "item_lifesteal",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "900",
        "ItemShopTags": "unique",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "lifesteal_percent": "15"
        }}
    },
    "item_ring_of_regen": {
        "ID": "27",
        "AbilityName": "item_ring_of_regen",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "350",
        "ItemShopTags": "regen_health",
        "ItemQuality": "component",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "SideShop": "1",
        "ItemAliases": "ror",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_health_regen": "2"
        }}
    },
    "item_sobi_mask": {
        "ID": "28",
        "AbilityName": "item_sobi_mask",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "325",
        "ItemShopTags": "regen_mana",
        "ItemQuality": "component",
        "SideShop": "1",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_mana_regen": "50"
        }}
    },
    "item_boots": {
        "ID": "29",
        "AbilityName": "item_boots",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "500",
        "ItemShopTags": "move_speed",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_movement_speed": "55"
        }}
    },
    "item_gem": {
        "ID": "30",
        "AbilityName": "item_gem",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "Model": "models/props_gameplay/gem01.mdl",
        "ItemCost": "700",
        "ItemShopTags": "see_invis",
        "ItemQuality": "component",
        "ItemSellable": "0",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "ItemDeclaresPurchase": "1",
        "ItemStockMax": "1",
        "ItemStockTime": "480.0",
        "ItemSupport": "1",
        "UIPickupSound": "Item.PickUpGemShop",
        "UIDropSound": "Item.DropGemShop",
        "WorldDropSound": "Item.DropGemWorld",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "radius": "1100"
        }}
    },
    "item_cloak": {
        "ID": "31",
        "AbilityName": "item_cloak",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "550",
        "ItemShopTags": "magic_resist",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_magical_armor": "115"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "tooltip_resist": "15"
            }
        }
    },
    "item_talisman_of_evasion": {
        "ID": "32",
        "AbilityName": "item_talisman_of_evasion",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1800",
        "ItemShopTags": "evasion",
        "ItemQuality": "component",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_evasion": "25"
        }}
    },
    "item_cheese": {
        "ID": "33",
        "AbilityName": "item_cheese",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "Model": "models/props_gameplay/cheese.mdl",
        "ItemCost": "1000",
        "ItemShopTags": "",
        "ItemQuality": "epic",
        "ItemPurchasable": "0",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_restore": "2500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "mana_restore": "1000"
            }
        }
    },
    "item_magic_stick": {
        "ID": "34",
        "AbilityName": "item_magic_stick",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "13.0",
        "AbilitySharedCooldown": "magicwand",
        "ItemCost": "200",
        "ItemShopTags": "regen_health;regen_mana;boost_health;boost_mana",
        "ItemQuality": "component",
        "ItemRequiresCharges": "1",
        "ItemDisplayCharges": "1",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_charges": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "charge_radius": "1200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "restore_per_charge": "15"
            }
        }
    },
    "item_recipe_magic_wand": {
        "ID": "35",
        "AbilityName": "item_recipe_magic_wand",
        "ItemCost": "150",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_magic_wand",
        "ItemRequirements": {"01": "item_branches;item_branches;item_branches;item_magic_stick"}
    },
    "item_magic_wand": {
        "ID": "36",
        "AbilityName": "item_magic_wand",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "13.0",
        "AbilitySharedCooldown": "magicwand",
        "ItemCost": "509",
        "ItemShopTags": "regen_health;regen_mana;boost_health;boost_mana;int;agi;str",
        "ItemQuality": "common",
        "ItemRequiresCharges": "1",
        "ItemDisplayCharges": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_charges": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "charge_radius": "1200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "restore_per_charge": "15"
            }
        }
    },
    "item_ghost": {
        "ID": "37",
        "AbilityName": "item_ghost",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCooldown": "30.0",
        "AbilitySharedCooldown": "ethereal",
        "ItemCost": "1600",
        "ItemShopTags": "int;agi;str;hard_to_tag",
        "ItemQuality": "component",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "7"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "extra_spell_damage_percent": "40"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0"
            }
        }
    },
    "item_clarity": {
        "ID": "38",
        "AbilityName": "item_clarity",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "100",
        "AbilityCastPoint": "0.0",
        "ItemCost": "50",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "buff_duration": "30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "total_mana": "100"
            }
        }
    },
    "item_flask": {
        "ID": "39",
        "AbilityName": "item_flask",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "100",
        "AbilityCastPoint": "0.0",
        "ItemCost": "100",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "buff_duration": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "total_health": "400"
            }
        }
    },
    "item_dust": {
        "ID": "40",
        "AbilityName": "item_dust",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "60.0",
        "AbilityManaCost": "5",
        "ItemCost": "180",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "0",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "2",
        "ItemDeclaresPurchase": "1",
        "ItemSupport": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "duration": "12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "1050"
            }
        }
    },
    "item_bottle": {
        "ID": "41",
        "AbilityName": "item_bottle",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "Model": "models/props_gameplay/bottle_blue.mdl",
        "AbilityCooldown": "0.5",
        "ItemCost": "600",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "0",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "1",
        "ItemInitialCharges": "3",
        "ItemDisplayCharges": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_restore": "135"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "mana_restore": "70"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "restore_time": "3"
            }
        }
    },
    "item_ward_observer": {
        "ID": "42",
        "AbilityName": "item_ward_observer",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.0",
        "ItemCost": "200",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE_STACKING",
        "ItemPermanent": "0",
        "ItemInitialCharges": "2",
        "ItemStockMax": "2",
        "ItemStockTime": "360.0",
        "ItemDeclaresPurchase": "1",
        "ItemSupport": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "lifetime": "360"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "vision_range": "1600"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "health": "200"
            }
        }
    },
    "item_ward_sentry": {
        "ID": "43",
        "AbilityName": "item_ward_sentry",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.0",
        "ItemCost": "200",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE_STACKING",
        "ItemPermanent": "0",
        "ItemInitialCharges": "2",
        "ItemDeclaresPurchase": "1",
        "ItemSupport": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "lifetime": "180"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "vision_range": "0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "true_sight_range": "950"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "health": "200"
            }
        }
    },
    "item_tango": {
        "ID": "44",
        "AbilityName": "item_tango",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_TREE",
        "AbilityCastRange": "165",
        "AbilityCastPoint": "0.0",
        "ItemCost": "90",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "buff_duration": "16.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "total_heal": "115"
            }
        }
    },
    "item_courier": {
        "ID": "45",
        "AbilityName": "item_courier",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "ItemDeclaresPurchase": "1",
        "ItemCost": "150",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemAliases": "donkey;chicken",
        "ItemStockMax": "1",
        "ItemStockTime": "7.0",
        "ItemSupport": "1"
    },
    "item_tpscroll": {
        "ID": "46",
        "AbilityName": "item_tpscroll",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_NOASSIST | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_BUILDING",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_INVULNERABLE",
        "Model": "models/props_gameplay/tpscroll01.mdl",
        "AbilityCastRange": "0",
        "AbilityCooldown": "65.0",
        "AbilitySharedCooldown": "teleport",
        "AbilityChannelTime": "3.0",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "75",
        "ItemCost": "135",
        "ItemShopTags": "consumable;tutorial",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "1",
        "SideShop": "1",
        "ItemAliases": "tp",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "minimun_distance": "70"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "maximum_distance": "525"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "200"
            }
        }
    },
    "item_recipe_travel_boots": {
        "ID": "47",
        "AbilityName": "item_recipe_travel_boots",
        "ItemCost": "2000",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_travel_boots",
        "ItemRequirements": {"01": "item_boots"}
    },
    "item_travel_boots": {
        "ID": "48",
        "AbilityName": "item_travel_boots",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP | DOTA_UNIT_TARGET_MECHANICAL | DOTA_UNIT_TARGET_BUILDING",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_INVULNERABLE",
        "AbilityCooldown": "60.0",
        "AbilitySharedCooldown": "teleport",
        "AbilityChannelTime": "3.0",
        "AbilityManaCost": "75",
        "ItemCost": "2500",
        "ItemShopTags": "teleport;move_speed",
        "ItemQuality": "common",
        "ItemAliases": "bot",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_movement_speed": "100"
        }}
    },
    "item_recipe_phase_boots": {
        "ID": "49",
        "AbilityName": "item_recipe_phase_boots",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_phase_boots",
        "ItemRequirements": {"01": "item_boots;item_blades_of_attack;item_blades_of_attack"}
    },
    "item_phase_boots": {
        "ID": "50",
        "AbilityName": "item_phase_boots",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "8.0",
        "ItemCost": "1400",
        "ItemShopTags": "damage;move_speed;hard_to_tag",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "phase_duration": "4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "phase_movement_speed": "16"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "60"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "24"
            }
        }
    },
    "item_demon_edge": {
        "ID": "51",
        "AbilityName": "item_demon_edge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2400",
        "ItemShopTags": "damage",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "46"
        }}
    },
    "item_eagle": {
        "ID": "52",
        "AbilityName": "item_eagle",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "3300",
        "ItemShopTags": "agi",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_agility": "25"
        }}
    },
    "item_reaver": {
        "ID": "53",
        "AbilityName": "item_reaver",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "3200",
        "ItemShopTags": "str",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_strength": "25"
        }}
    },
    "item_relic": {
        "ID": "54",
        "AbilityName": "item_relic",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "3800",
        "ItemShopTags": "damage",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "60"
        }}
    },
    "item_hyperstone": {
        "ID": "55",
        "AbilityName": "item_hyperstone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2100",
        "ItemShopTags": "attack_speed",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_attack_speed": "55"
        }}
    },
    "item_ring_of_health": {
        "ID": "56",
        "AbilityName": "item_ring_of_health",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "875",
        "ItemShopTags": "regen_health",
        "ItemQuality": "secret_shop",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "SecretShop": "1",
        "SideShop": "1",
        "ItemAliases": "roh",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_health_regen": "5"
        }}
    },
    "item_void_stone": {
        "ID": "57",
        "AbilityName": "item_void_stone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "875",
        "ItemShopTags": "regen_mana",
        "ItemQuality": "secret_shop",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_mana_regen": "100"
        }}
    },
    "item_mystic_staff": {
        "ID": "58",
        "AbilityName": "item_mystic_staff",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2700",
        "ItemShopTags": "int",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_intellect": "25"
        }}
    },
    "item_energy_booster": {
        "ID": "59",
        "AbilityName": "item_energy_booster",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1000",
        "ItemShopTags": "mana_pool",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "SideShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_mana": "250"
        }}
    },
    "item_point_booster": {
        "ID": "60",
        "AbilityName": "item_point_booster",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1200",
        "ItemShopTags": "mana_pool;health_pool",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "200"
            }
        }
    },
    "item_vitality_booster": {
        "ID": "61",
        "AbilityName": "item_vitality_booster",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1100",
        "ItemShopTags": "health_pool",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_health": "250"
        }}
    },
    "item_recipe_power_treads": {
        "ID": "62",
        "AbilityName": "item_recipe_power_treads",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_power_treads",
        "ItemRequirements": {
            "01": "item_gloves;item_boots;item_belt_of_strength",
            "02": "item_gloves;item_boots;item_robe",
            "03": "item_gloves;item_boots;item_boots_of_elves"
        }
    },
    "item_power_treads": {
        "ID": "63",
        "AbilityName": "item_power_treads",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "ItemCost": "1450",
        "ItemShopTags": "attack_speed;move_speed;int;agi;str",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_stat": "8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "25"
            }
        }
    },
    "item_recipe_hand_of_midas": {
        "ID": "64",
        "AbilityName": "item_recipe_hand_of_midas",
        "ItemCost": "1400",
        "ItemShopTags": "",
        "ItemAliases": "hom",
        "ItemRecipe": "1",
        "ItemResult": "item_hand_of_midas",
        "ItemRequirements": {"01": "item_gloves"}
    },
    "item_hand_of_midas": {
        "ID": "65",
        "AbilityName": "item_hand_of_midas",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS | DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "100.0",
        "AbilityManaCost": "0",
        "ItemCost": "1900",
        "ItemShopTags": "attack_speed;hard_to_tag",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "30"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "xp_multiplier": "2.5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold": "190"
            }
        }
    },
    "item_recipe_oblivion_staff": {
        "ID": "66",
        "AbilityName": "item_recipe_oblivion_staff",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_oblivion_staff",
        "ItemRequirements": {"01": "item_quarterstaff;item_sobi_mask;item_robe"}
    },
    "item_oblivion_staff": {
        "ID": "67",
        "AbilityName": "item_oblivion_staff",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1675",
        "ItemShopTags": "damage;int;attack_speed;regen_mana",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "75"
            }
        }
    },
    "item_recipe_pers": {
        "ID": "68",
        "AbilityName": "item_recipe_pers",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_pers",
        "ItemRequirements": {"01": "item_ring_of_health;item_void_stone"}
    },
    "item_pers": {
        "ID": "69",
        "AbilityName": "item_pers",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "1750",
        "ItemShopTags": "damage;regen_health;regen_mana",
        "ItemQuality": "common",
        "ItemDisassemblable": "1",
        "ItemShareability": "ITEM_PARTIALLY_SHAREABLE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "125"
            }
        }
    },
    "item_recipe_poor_mans_shield": {
        "ID": "70",
        "AbilityName": "item_recipe_poor_mans_shield",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_poor_mans_shield",
        "ItemRequirements": {"01": "item_slippers;item_slippers;item_stout_shield"}
    },
    "item_poor_mans_shield": {
        "ID": "71",
        "AbilityName": "item_poor_mans_shield",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "550",
        "ItemShopTags": "agi;block",
        "ItemQuality": "common",
        "ItemAliases": "pms",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_block_melee": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_block_ranged": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "block_chance": "60"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "block_chance_hero": "100"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "6"
            }
        }
    },
    "item_recipe_bracer": {
        "ID": "72",
        "AbilityName": "item_recipe_bracer",
        "ItemCost": "190",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_bracer",
        "ItemRequirements": {"01": "item_circlet;item_gauntlets"}
    },
    "item_bracer": {
        "ID": "73",
        "AbilityName": "item_bracer",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "525",
        "ItemShopTags": "damage;int;agi;str",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "3"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "3"
            }
        }
    },
    "item_recipe_wraith_band": {
        "ID": "74",
        "AbilityName": "item_recipe_wraith_band",
        "ItemCost": "150",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_wraith_band",
        "ItemRequirements": {"01": "item_circlet;item_slippers"}
    },
    "item_wraith_band": {
        "ID": "75",
        "AbilityName": "item_wraith_band",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "485",
        "ItemShopTags": "damage;int;agi;str",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "3"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "3"
            }
        }
    },
    "item_recipe_null_talisman": {
        "ID": "76",
        "AbilityName": "item_recipe_null_talisman",
        "ItemCost": "170",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_null_talisman",
        "ItemRequirements": {"01": "item_circlet;item_mantle"}
    },
    "item_null_talisman": {
        "ID": "77",
        "AbilityName": "item_null_talisman",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "505",
        "ItemShopTags": "damage;int;agi;str",
        "ItemQuality": "common",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "6"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "3"
            }
        }
    },
    "item_recipe_mekansm": {
        "ID": "78",
        "AbilityName": "item_recipe_mekansm",
        "ItemCost": "900",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_mekansm",
        "ItemRequirements": {"01": "item_headdress;item_buckler"}
    },
    "item_mekansm": {
        "ID": "79",
        "AbilityName": "item_mekansm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "45.0",
        "AbilityManaCost": "150",
        "ItemCost": "2306",
        "ItemShopTags": "agi;int;str;armor;boost_health",
        "ItemQuality": "rare",
        "ItemAliases": "mechanism",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "750"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "aura_health_regen": "4"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "heal_amount": "250"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "heal_radius": "750"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "heal_bonus_armor": "2"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "heal_armor_duration": "25.0"
            }
        }
    },
    "item_recipe_vladmir": {
        "ID": "80",
        "AbilityName": "item_recipe_vladmir",
        "ItemCost": "300",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_vladmir",
        "ItemRequirements": {"01": "item_ring_of_regen;item_ring_of_basilius;item_lifesteal"}
    },
    "item_vladmir": {
        "ID": "81",
        "AbilityName": "item_vladmir",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2050",
        "ItemShopTags": "lifesteal;damage;armor;regen_mana",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "vampiric_aura": "16"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_aura": "15"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "armor_aura": "5"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "mana_regen_aura": "0.8"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "hp_regen": "2"
            }
        }
    },
    "item_flying_courier": {
        "ID": "84",
        "AbilityName": "item_flying_courier",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemDeclaresPurchase": "1",
        "ItemCost": "220",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemAliases": "crow",
        "ItemStockMax": "1",
        "ItemStockTime": "7.0",
        "ItemSupport": "1"
    },
    "item_recipe_buckler": {
        "ID": "85",
        "AbilityName": "item_recipe_buckler",
        "ItemCost": "200",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_buckler",
        "ItemRequirements": {"01": "item_chainmail;item_branches"}
    },
    "item_buckler": {
        "ID": "86",
        "AbilityName": "item_buckler",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "25.0",
        "AbilityManaCost": "10",
        "ItemCost": "803",
        "ItemShopTags": "armor;boost_armor",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_aoe_radius": "700"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_aoe_armor": "2"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "bonus_aoe_duration": "30.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "bonus_aoe_duration_hero": "25.0"
            }
        }
    },
    "item_recipe_ring_of_basilius": {
        "ID": "87",
        "AbilityName": "item_recipe_ring_of_basilius",
        "ItemCost": "0",
        "ItemShopTags": "",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "ItemRecipe": "1",
        "ItemResult": "item_ring_of_basilius",
        "ItemRequirements": {"01": "item_sobi_mask;item_ring_of_protection"}
    },
    "item_ring_of_basilius": {
        "ID": "88",
        "AbilityName": "item_ring_of_basilius",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
        "ItemCost": "500",
        "ItemShopTags": "damage;regen_mana;armor",
        "ItemQuality": "rare",
        "ItemDisassemblable": "1",
        "ItemAliases": "rob",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "aura_mana_regen": "0.65"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "aura_bonus_armor": "2"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "1"
            }
        }
    },
    "item_recipe_pipe": {
        "ID": "89",
        "AbilityName": "item_recipe_pipe",
        "ItemCost": "900",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_pipe",
        "ItemRequirements": {"01": "item_hood_of_defiance;item_headdress"}
    },
    "item_pipe": {
        "ID": "90",
        "AbilityName": "item_pipe",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "60.0",
        "AbilityManaCost": "100",
        "ItemCost": "3628",
        "ItemShopTags": "regen_health;boost_magic_resist",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_regen": "11"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "magic_resistance": "130"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "barrier_radius": "500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "barrier_block": "400"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "barrier_duration": "10.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "barrier_debuff_duration": "50.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "tooltip_resist": "30"
            }
        }
    },
    "item_recipe_urn_of_shadows": {
        "ID": "91",
        "AbilityName": "item_recipe_urn_of_shadows",
        "ItemCost": "250",
        "ItemShopTags": "",
        "ItemDeclaresPurchase": "1",
        "ItemRecipe": "1",
        "ItemResult": "item_urn_of_shadows",
        "ItemRequirements": {"01": "item_sobi_mask;item_gauntlets;item_gauntlets"}
    },
    "item_urn_of_shadows": {
        "ID": "92",
        "AbilityName": "item_urn_of_shadows",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "950",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "10.0",
        "ItemRequiresCharges": "1",
        "ItemDisplayCharges": "1",
        "ItemStackable": "0",
        "ItemPermanent": "1",
        "ItemCost": "875",
        "ItemShopTags": "regen_mana;str;boost_health",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_regen": "50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "soul_radius": "1400"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "soul_initial_charge": "2"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "soul_additional_charges": "1"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "soul_heal_amount": "400"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "soul_heal_duration": "8.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "soul_damage_amount": "150"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "soul_damage_duration": "8.0"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "soul_heal_interval": "0.25"
            }
        }
    },
    "item_recipe_headdress": {
        "ID": "93",
        "AbilityName": "item_recipe_headdress",
        "ItemCost": "200",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_headdress",
        "ItemRequirements": {"01": "item_ring_of_regen;item_branches"}
    },
    "item_headdress": {
        "ID": "94",
        "AbilityName": "item_headdress",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "603",
        "ItemShopTags": "str;int;agi;regen_health",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "500"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_health_regen": "3"
            }
        }
    },
    "item_recipe_sheepstick": {
        "ID": "95",
        "AbilityName": "item_recipe_sheepstick",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_sheepstick",
        "ItemRequirements": {"01": "item_mystic_staff;item_ultimate_orb;item_void_stone"}
    },
    "item_sheepstick": {
        "ID": "96",
        "AbilityName": "item_sheepstick",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "35.0",
        "AbilityManaCost": "100",
        "ItemCost": "5675",
        "ItemShopTags": "int;regen_mana;agi;hard_to_tag",
        "ItemQuality": "rare",
        "ItemAliases": "hex;sheepstick",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "35"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "150"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "sheep_duration": "3.5"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "sheep_movement_speed": "100"
            }
        }
    },
    "item_recipe_orchid": {
        "ID": "97",
        "AbilityName": "item_recipe_orchid",
        "ItemCost": "775",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_orchid",
        "ItemRequirements": {"01": "item_oblivion_staff;item_oblivion_staff"}
    },
    "item_orchid": {
        "ID": "98",
        "AbilityName": "item_orchid",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "18.0",
        "AbilityManaCost": "100",
        "ItemCost": "5025",
        "ItemShopTags": "int;attack_speed;damage;regen_mana;damage;hard_to_tag",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "150"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "silence_duration": "5"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "silence_damage_percent": "25"
            }
        }
    },
    "item_recipe_cyclone": {
        "ID": "99",
        "AbilityName": "item_recipe_cyclone",
        "ItemCost": "600",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_cyclone",
        "ItemRequirements": {"01": "item_staff_of_wizardry;item_sobi_mask;item_void_stone"}
    },
    "item_cyclone": {
        "ID": "100",
        "AbilityName": "item_cyclone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "30.0",
        "AbilityManaCost": "75",
        "ItemCost": "2800",
        "ItemShopTags": "int;regen_mana;move_speed;hard_to_tag",
        "ItemQuality": "rare",
        "ItemAliases": "cyclone euls",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "150"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "30"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cyclone_duration": "2.5"
            }
        }
    },
    "item_recipe_force_staff": {
        "ID": "101",
        "AbilityName": "item_recipe_force_staff",
        "ItemCost": "300",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_force_staff",
        "ItemRequirements": {"01": "item_staff_of_wizardry;item_quarterstaff"}
    },
    "item_force_staff": {
        "ID": "102",
        "AbilityName": "item_force_staff",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "20.0",
        "AbilityManaCost": "25",
        "ItemCost": "2200",
        "ItemShopTags": "int;damage;attack_speed;hard_to_tag",
        "ItemQuality": "rare",
        "ItemAliases": "fs",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "push_length": "600"
            }
        }
    },
    "item_recipe_dagon": {
        "ID": "103",
        "AbilityName": "item_recipe_dagon",
        "ItemCost": "1300",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_dagon",
        "ItemRequirements": {"01": "item_staff_of_wizardry;item_null_talisman"}
    },
    "item_recipe_dagon_2": {
        "ID": "197",
        "AbilityName": "item_recipe_dagon_2",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_dagon_2",
        "ItemRequirements": {"02": "item_dagon;item_recipe_dagon"}
    },
    "item_recipe_dagon_3": {
        "ID": "198",
        "AbilityName": "item_recipe_dagon_3",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_dagon_3",
        "ItemRequirements": {"02": "item_dagon_2;item_recipe_dagon"}
    },
    "item_recipe_dagon_4": {
        "ID": "199",
        "AbilityName": "item_recipe_dagon_4",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_dagon_4",
        "ItemRequirements": {"02": "item_dagon_3;item_recipe_dagon"}
    },
    "item_recipe_dagon_5": {
        "ID": "200",
        "AbilityName": "item_recipe_dagon_5",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_dagon_5",
        "ItemRequirements": {"02": "item_dagon_4;item_recipe_dagon"}
    },
    "item_dagon": {
        "ID": "104",
        "AbilityName": "item_dagon",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600 650 700 750 800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "40.0 36.0 32.0 28.0 24.0",
        "AbilitySharedCooldown": "dagon",
        "MaxUpgradeLevel": "5",
        "ItemBaseLevel": "1",
        "AbilityManaCost": "180 160 140 120 100",
        "ItemCost": "2850",
        "ItemShopTags": "damage;int;str;agi;hard_to_tag",
        "ItemQuality": "rare",
        "UpgradesItems": "item_dagon;item_dagon_2;item_dagon_3;item_dagon_4",
        "UpgradeRecipe": "item_recipe_dagon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "13 15 17 19 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "400 500 600 700 800"
            }
        }
    },
    "item_dagon_2": {
        "ID": "201",
        "AbilityName": "item_dagon_2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600 650 700 750 800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "40.0 36.0 32.0 28.0 24.0",
        "AbilitySharedCooldown": "dagon",
        "MaxUpgradeLevel": "5",
        "ItemBaseLevel": "2",
        "AbilityManaCost": "180 160 140 120 100",
        "ItemCost": "2850",
        "ItemShopTags": "damage;int;str;agi;hard_to_tag",
        "ItemQuality": "rare",
        "UpgradesItems": "item_dagon_2;item_dagon_3;item_dagon_4",
        "UpgradeRecipe": "item_recipe_dagon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "13 15 17 19 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "400 500 600 700 800"
            }
        }
    },
    "item_dagon_3": {
        "ID": "202",
        "AbilityName": "item_dagon_3",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600 650 700 750 800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "40.0 36.0 32.0 28.0 24.0",
        "AbilitySharedCooldown": "dagon",
        "MaxUpgradeLevel": "5",
        "ItemBaseLevel": "3",
        "AbilityManaCost": "180 160 140 120 100",
        "ItemCost": "2850",
        "ItemShopTags": "damage;int;str;agi;hard_to_tag",
        "ItemQuality": "rare",
        "UpgradesItems": "item_dagon_3;item_dagon_4",
        "UpgradeRecipe": "item_recipe_dagon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "13 15 17 19 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "400 500 600 700 800"
            }
        }
    },
    "item_dagon_4": {
        "ID": "203",
        "AbilityName": "item_dagon_4",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600 650 700 750 800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "40.0 36.0 32.0 28.0 24.0",
        "AbilitySharedCooldown": "dagon",
        "MaxUpgradeLevel": "5",
        "ItemBaseLevel": "4",
        "AbilityManaCost": "180 160 140 120 100",
        "ItemCost": "2850",
        "ItemShopTags": "damage;int;str;agi;hard_to_tag",
        "ItemQuality": "rare",
        "UpgradesItems": "item_dagon_4",
        "UpgradeRecipe": "item_recipe_dagon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "13 15 17 19 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "400 500 600 700 800"
            }
        }
    },
    "item_dagon_5": {
        "ID": "204",
        "AbilityName": "item_dagon_5",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600 650 700 750 800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "40.0 36.0 32.0 28.0 24.0",
        "AbilitySharedCooldown": "dagon",
        "MaxUpgradeLevel": "5",
        "ItemBaseLevel": "5",
        "AbilityManaCost": "180 160 140 120 100",
        "ItemCost": "2850",
        "ItemShopTags": "damage;int;str;agi;hard_to_tag",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "13 15 17 19 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "400 500 600 700 800"
            }
        }
    },
    "item_recipe_necronomicon": {
        "ID": "105",
        "AbilityName": "item_recipe_necronomicon",
        "ItemCost": "1250",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_necronomicon",
        "ItemRequirements": {"01": "item_staff_of_wizardry;item_belt_of_strength"}
    },
    "item_recipe_necronomicon_2": {
        "ID": "191",
        "AbilityName": "item_recipe_necronomicon_2",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemBaseLevel": "2",
        "ItemRecipe": "1",
        "ItemResult": "item_necronomicon_2",
        "ItemRequirements": {"01": "item_necronomicon;item_recipe_necronomicon"}
    },
    "item_recipe_necronomicon_3": {
        "ID": "192",
        "AbilityName": "item_recipe_necronomicon_3",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemBaseLevel": "3",
        "ItemRecipe": "1",
        "ItemResult": "item_necronomicon_3",
        "ItemRequirements": {"01": "item_necronomicon_2;item_recipe_necronomicon"}
    },
    "item_necronomicon": {
        "ID": "106",
        "AbilityName": "item_necronomicon",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "80.0",
        "AbilitySharedCooldown": "necronomicon",
        "AbilityManaCost": "50",
        "ItemCost": "2700",
        "ItemShopTags": "int;str;hard_to_tag;see_invis",
        "ItemQuality": "rare",
        "MaxUpgradeLevel": "3",
        "ItemBaseLevel": "1",
        "UpgradesItems": "item_necronomicon;item_necronomicon_2",
        "UpgradeRecipe": "item_recipe_necronomicon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "15 21 24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "8 12 16"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "summon_duration": "35.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "warrior_mana_feedback": "20 50 75"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "warrior_truesight": "1000"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "archer_mana_burn": "125 175 225"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed": "3 6 9"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed_radius": "400"
            }
        }
    },
    "item_necronomicon_2": {
        "ID": "193",
        "AbilityName": "item_necronomicon_2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "80.0",
        "AbilitySharedCooldown": "necronomicon",
        "AbilityManaCost": "50",
        "ItemCost": "2700",
        "ItemShopTags": "int;str;hard_to_tag;see_invis",
        "ItemQuality": "rare",
        "MaxUpgradeLevel": "3",
        "ItemBaseLevel": "2",
        "UpgradesItems": "item_necronomicon_2",
        "UpgradeRecipe": "item_recipe_necronomicon",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "15 21 24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "8 12 16"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "summon_duration": "35.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "warrior_mana_feedback": "20 50 75"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "warrior_truesight": "1000"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "archer_mana_burn": "125 175 225"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed": "3 6 9"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed_radius": "400"
            }
        }
    },
    "item_necronomicon_3": {
        "ID": "194",
        "AbilityName": "item_necronomicon_3",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "80.0",
        "AbilitySharedCooldown": "necronomicon",
        "AbilityManaCost": "50",
        "ItemCost": "2700",
        "ItemShopTags": "int;str;hard_to_tag;see_invis",
        "ItemQuality": "rare",
        "MaxUpgradeLevel": "3",
        "ItemBaseLevel": "3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "15 21 24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "8 12 16"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "summon_duration": "35.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "warrior_mana_feedback": "20 50 75"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "warrior_truesight": "1000"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "archer_mana_burn": "125 175 225"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed": "3 6 9"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "archer_attack_speed_radius": "400"
            }
        }
    },
    "item_recipe_ultimate_scepter": {
        "ID": "107",
        "AbilityName": "item_recipe_ultimate_scepter",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_ultimate_scepter",
        "ItemRequirements": {"01": "item_point_booster;item_staff_of_wizardry;item_ogre_axe;item_blade_of_alacrity"}
    },
    "item_ultimate_scepter": {
        "ID": "108",
        "AbilityName": "item_ultimate_scepter",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "4200",
        "ItemShopTags": "int;str;agi;mana_pool;health_pool;hard_to_tag",
        "ItemQuality": "rare",
        "ItemAliases": "ultimate",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "150"
            }
        }
    },
    "item_recipe_refresher": {
        "ID": "109",
        "AbilityName": "item_recipe_refresher",
        "ItemCost": "1875",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_refresher",
        "ItemRequirements": {"01": "item_oblivion_staff;item_pers"}
    },
    "item_refresher": {
        "ID": "110",
        "AbilityName": "item_refresher",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "160.0",
        "AbilityManaCost": "375",
        "ItemCost": "5300",
        "ItemShopTags": "regen_health;regen_mana;damage;hard_to_tag",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "40"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_int": "6"
            }
        }
    },
    "item_recipe_assault": {
        "ID": "111",
        "AbilityName": "item_recipe_assault",
        "ItemCost": "1300",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_assault",
        "ItemRequirements": {"01": "item_platemail;item_hyperstone;item_chainmail"}
    },
    "item_assault": {
        "ID": "112",
        "AbilityName": "item_assault",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5350",
        "ItemShopTags": "attack_speed;armor;hard_to_tag",
        "ItemQuality": "epic",
        "ItemAliases": "ac",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "35"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900 "
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "aura_attack_speed": "20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "aura_positive_armor": "5"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "aura_negative_armor": "-5"
            }
        }
    },
    "item_recipe_heart": {
        "ID": "113",
        "AbilityName": "item_recipe_heart",
        "ItemCost": "1200",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_heart",
        "ItemRequirements": {"01": "item_reaver;item_vitality_booster"}
    },
    "item_heart": {
        "ID": "114",
        "AbilityName": "item_heart",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "6.0",
        "ItemCost": "5500",
        "ItemShopTags": "str;regen_health;health_pool",
        "ItemQuality": "epic",
        "ItemAliases": "hot",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "health_regen_rate": "2"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cooldown_melee": "4"
            }
        }
    },
    "item_recipe_black_king_bar": {
        "ID": "115",
        "AbilityName": "item_recipe_black_king_bar",
        "ItemCost": "1300",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_black_king_bar",
        "ItemRequirements": {"01": "item_ogre_axe;item_mithril_hammer"}
    },
    "item_black_king_bar": {
        "ID": "116",
        "AbilityName": "item_black_king_bar",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "80 75 70 65 60 55",
        "ItemCost": "3900",
        "ItemShopTags": "str;damage;hard_to_tag",
        "ItemQuality": "epic",
        "ItemAliases": "bkb",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "24"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0 9.0 8.0 7.0 6.0 5.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "max_level": "5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "model_scale": "30"
            }
        }
    },
    "item_aegis": {
        "ID": "117",
        "AbilityName": "item_aegis",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "Model": "models/props_gameplay/aegis.mdl",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemQuality": "artifact",
        "ItemPurchasable": "0",
        "ItemDroppable": "0",
        "ItemSellable": "0",
        "ItemKillable": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "reincarnate_time": "5.0"
        }}
    },
    "item_recipe_shivas_guard": {
        "ID": "118",
        "AbilityName": "item_recipe_shivas_guard",
        "ItemCost": "600",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_shivas_guard",
        "ItemRequirements": {"01": "item_platemail;item_mystic_staff"}
    },
    "item_shivas_guard": {
        "ID": "119",
        "AbilityName": "item_shivas_guard",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "30",
        "AbilityManaCost": "100",
        "ItemCost": "4700",
        "ItemShopTags": "int;armor;hard_to_tag",
        "ItemQuality": "epic",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "1000"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "aura_attack_speed": "-25"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "blast_radius": "719"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "blast_speed": "300"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "blast_damage": "200"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "blast_movement_speed": "-40"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "blast_debuff_duration": "4.0"
            }
        }
    },
    "item_recipe_bloodstone": {
        "ID": "120",
        "AbilityName": "item_recipe_bloodstone",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_bloodstone",
        "ItemRequirements": {"01": "item_pers;item_soul_booster"}
    },
    "item_bloodstone": {
        "ID": "121",
        "AbilityName": "item_bloodstone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5050",
        "ItemShopTags": "regen_health;regen_mana;mana_pool;health_pool",
        "ItemQuality": "epic",
        "ItemInitialCharges": "6",
        "ItemDisplayCharges": "1",
        "ItemAliases": "bs",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "9"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "200"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "charge_range": "1600"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "heal_on_death_range": "1675"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "heal_on_death_base": "400"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "heal_on_death_per_charge": "30"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "vision_on_death_radius": "1800"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "respawn_time_reduction": "4.0"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "death_gold_reduction": "25"
            },
            "12": {
                "var_type": "FIELD_FLOAT",
                "on_death_removal": "0.67"
            }
        }
    },
    "item_recipe_sphere": {
        "ID": "122",
        "AbilityName": "item_recipe_sphere",
        "ItemCost": "1325",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_sphere",
        "ItemRequirements": {"01": "item_ultimate_orb;item_pers"}
    },
    "item_sphere": {
        "ID": "123",
        "AbilityName": "item_sphere",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5175",
        "ItemShopTags": "regen_health;regen_mana;str;agi;int;hard_to_tag",
        "ItemQuality": "epic",
        "ItemAliases": "ls",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "150"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "block_cooldown": "20.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10"
            }
        }
    },
    "item_recipe_vanguard": {
        "ID": "124",
        "AbilityName": "item_recipe_vanguard",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_vanguard",
        "ItemRequirements": {"01": "item_ring_of_health;item_vitality_booster;item_stout_shield"}
    },
    "item_vanguard": {
        "ID": "125",
        "AbilityName": "item_vanguard",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2225",
        "ItemShopTags": "regen_health;block;health_pool",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "block_chance": "70"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "block_damage_ranged": "20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "block_damage_melee": "40"
            }
        }
    },
    "item_recipe_blade_mail": {
        "ID": "126",
        "AbilityName": "item_recipe_blade_mail",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_blade_mail",
        "ItemRequirements": {"01": "item_broadsword;item_chainmail;item_robe"}
    },
    "item_blade_mail": {
        "ID": "127",
        "AbilityName": "item_blade_mail",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "22.0",
        "AbilityManaCost": "25",
        "ItemCost": "2200",
        "ItemShopTags": "damage;armor;int;hard_to_tag",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "22"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "10"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0"
            }
        }
    },
    "item_recipe_soul_booster": {
        "ID": "128",
        "AbilityName": "item_recipe_soul_booster",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_soul_booster",
        "ItemRequirements": {"01": "item_vitality_booster;item_energy_booster;item_point_booster"}
    },
    "item_soul_booster": {
        "ID": "129",
        "AbilityName": "item_soul_booster",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "3300",
        "ItemShopTags": "regen_health;regen_mana;health_pool;mana_pool",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "450"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "4"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "100"
            }
        }
    },
    "item_recipe_hood_of_defiance": {
        "ID": "130",
        "AbilityName": "item_recipe_hood_of_defiance",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_hood_of_defiance",
        "ItemRequirements": {"01": "item_ring_of_health;item_cloak;item_ring_of_regen;item_ring_of_regen"}
    },
    "item_hood_of_defiance": {
        "ID": "131",
        "AbilityName": "item_hood_of_defiance",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2125",
        "ItemShopTags": "regen_health;magic_resist",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_spell_resist": "130"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "tooltip_resist": "30"
            }
        }
    },
    "item_recipe_rapier": {
        "ID": "132",
        "AbilityName": "item_recipe_rapier",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_rapier",
        "ItemRequirements": {"01": "item_relic;item_demon_edge"}
    },
    "item_rapier": {
        "ID": "133",
        "AbilityName": "item_rapier",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "6200",
        "ItemShopTags": "damage",
        "ItemQuality": "epic",
        "ItemShareability": "ITEM_NOT_SHAREABLE",
        "ItemSellable": "0",
        "ItemKillable": "0",
        "ItemDeclaresPurchase": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_damage": "300"
        }}
    },
    "item_recipe_monkey_king_bar": {
        "ID": "134",
        "AbilityName": "item_recipe_monkey_king_bar",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_monkey_king_bar",
        "ItemRequirements": {"01": "item_demon_edge;item_javelin;item_javelin"}
    },
    "item_monkey_king_bar": {
        "ID": "135",
        "AbilityName": "item_monkey_king_bar",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5400",
        "ItemShopTags": "damage;attack_speed;hard_to_tag",
        "ItemQuality": "epic",
        "ItemAliases": "mkb",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "88"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bash_chance": "35"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bash_damage": "100"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "bash_stun": "0.01"
            }
        }
    },
    "item_recipe_radiance": {
        "ID": "136",
        "AbilityName": "item_recipe_radiance",
        "ItemCost": "1350",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_radiance",
        "ItemRequirements": {"01": "item_relic"}
    },
    "item_radiance": {
        "ID": "137",
        "AbilityName": "item_radiance",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
        "ItemCost": "5150",
        "ItemShopTags": "damage",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "650"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_damage": "40"
            }
        }
    },
    "item_recipe_butterfly": {
        "ID": "138",
        "AbilityName": "item_recipe_butterfly",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_butterfly",
        "ItemRequirements": {"01": "item_talisman_of_evasion;item_quarterstaff;item_eagle"}
    },
    "item_butterfly": {
        "ID": "139",
        "AbilityName": "item_butterfly",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "6000",
        "ItemShopTags": "agi;damage;evasion;attack_speed",
        "ItemQuality": "epic",
        "ItemAliases": "bfly",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_evasion": "35"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "30"
            }
        }
    },
    "item_recipe_greater_crit": {
        "ID": "140",
        "AbilityName": "item_recipe_greater_crit",
        "ItemCost": "1200",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_greater_crit",
        "ItemRequirements": {"01": "item_lesser_crit;item_demon_edge"}
    },
    "item_greater_crit": {
        "ID": "141",
        "AbilityName": "item_greater_crit",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5750",
        "ItemShopTags": "damage;crit",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "81"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "crit_multiplier": "250"
            }
        }
    },
    "item_recipe_basher": {
        "ID": "142",
        "AbilityName": "item_recipe_basher",
        "InvalidHeroes": "npc_dota_hero_spirit_breaker;npc_dota_hero_faceless_void;npc_dota_hero_slardar",
        "ItemCost": "1000",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_basher",
        "ItemRequirements": {"01": "item_belt_of_strength;item_javelin"}
    },
    "item_basher": {
        "ID": "143",
        "AbilityName": "item_basher",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "2.0",
        "ItemCost": "2950",
        "ItemShopTags": "damage;str;hard_to_tag",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bash_chance_melee": "25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bash_chance_ranged": "10"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "bash_duration": "1.4"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "bash_cooldown": "2.0"
            }
        }
    },
    "item_recipe_bfury": {
        "ID": "144",
        "AbilityName": "item_recipe_bfury",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_bfury",
        "ItemRequirements": {"01": "item_broadsword;item_claymore;item_pers"}
    },
    "item_bfury": {
        "ID": "145",
        "AbilityName": "item_bfury",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "4350",
        "ItemShopTags": "damage;health_regen;mana_regen;hard_to_tag",
        "ItemQuality": "epic",
        "ItemAliases": "bf",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "65"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen": "150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "cleave_damage_percent": "35"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "cleave_radius": "225"
            }
        }
    },
    "item_recipe_manta": {
        "ID": "146",
        "AbilityName": "item_recipe_manta",
        "ItemCost": "650",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_manta",
        "ItemRequirements": {"01": "item_yasha;item_ultimate_orb"}
    },
    "item_manta": {
        "ID": "147",
        "AbilityName": "item_manta",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCooldown": "50.0",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "165",
        "ItemCost": "4900",
        "ItemShopTags": "agi;str;int;attack_speed;move_speed;hard_to_tag",
        "ItemQuality": "epic",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "26"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "10"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "images_count": "2"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "images_do_damage_percent_melee": "-67"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "images_take_damage_percent_melee": "250"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "images_do_damage_percent_ranged": "-72"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "images_take_damage_percent_ranged": "300"
            },
            "11": {
                "var_type": "FIELD_FLOAT",
                "cooldown_melee": "35.0"
            },
            "12": {
                "var_type": "FIELD_FLOAT",
                "cooldown_melee": "50.0"
            },
            "13": {
                "var_type": "FIELD_FLOAT",
                "invuln_duration": "0.1"
            },
            "14": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "1000"
            },
            "15": {
                "var_type": "FIELD_INTEGER",
                "tooltip_outgoing_melee": "33"
            },
            "16": {
                "var_type": "FIELD_INTEGER",
                "tooltip_outgoing_range": "28"
            }
        }
    },
    "item_recipe_lesser_crit": {
        "ID": "148",
        "AbilityName": "item_recipe_lesser_crit",
        "ItemCost": "500",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_lesser_crit",
        "ItemRequirements": {"01": "item_broadsword;item_blades_of_attack"}
    },
    "item_lesser_crit": {
        "ID": "149",
        "AbilityName": "item_lesser_crit",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2150",
        "ItemShopTags": "damage;crit",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "35"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "crit_multiplier": "175"
            }
        }
    },
    "item_recipe_armlet": {
        "ID": "150",
        "AbilityName": "item_recipe_armlet",
        "ItemCost": "700",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_armlet",
        "ItemRequirements": {"01": "item_helm_of_iron_will;item_gloves;item_blades_of_attack"}
    },
    "item_armlet": {
        "ID": "151",
        "AbilityName": "item_armlet",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "5.0",
        "ItemCost": "2600",
        "ItemShopTags": "damage;attack_speed;armor;regen_health;hard_to_tag",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "unholy_bonus_damage": "31"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "unholy_bonus_attack_speed": "10"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "unholy_bonus_strength": "25"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "unholy_health_drain": "37"
            }
        }
    },
    "item_recipe_invis_sword": {
        "ID": "183",
        "AbilityName": "item_recipe_invis_sword",
        "ItemCost": "1000",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_invis_sword",
        "ItemRequirements": {"01": "item_quarterstaff;item_claymore"}
    },
    "item_invis_sword": {
        "ID": "152",
        "AbilityName": "item_invis_sword",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "18.0",
        "AbilityManaCost": "75",
        "ItemCost": "3300",
        "ItemShopTags": "damage;attack_speed;movespeed;hard_to_tag",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "38"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "10"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "windwalk_duration": "9.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "windwalk_movement_speed": "20"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "windwalk_fade_time": "0.3"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "windwalk_bonus_damage": "150"
            }
        }
    },
    "item_recipe_sange_and_yasha": {
        "ID": "153",
        "AbilityName": "item_recipe_sange_and_yasha",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_sange_and_yasha",
        "ItemRequirements": {"01": "item_yasha;item_sange"}
    },
    "item_sange_and_yasha": {
        "ID": "154",
        "AbilityName": "item_sange_and_yasha",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "4300",
        "ItemShopTags": "damage;str;agi;attack_speed;unique",
        "ItemQuality": "artifact",
        "ItemAliases": "sny;s&y;sy",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "16"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "16"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_percent_bonus": "12"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "maim_chance": "15"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "maim_slow_movement": "-30"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "maim_slow_attack": "-30"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "maim_duration": "4.0"
            }
        }
    },
    "item_recipe_satanic": {
        "ID": "155",
        "AbilityName": "item_recipe_satanic",
        "ItemCost": "1100",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_satanic",
        "ItemRequirements": {"01": "item_reaver;item_helm_of_the_dominator"}
    },
    "item_satanic": {
        "ID": "156",
        "AbilityName": "item_satanic",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "35.0",
        "ItemCost": "6150",
        "ItemShopTags": "damage;str;armor;unique;hard_to_tag",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "lifesteal_percent": "25"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "unholy_lifesteal_percent": "175"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "unholy_duration": "3.5"
            }
        }
    },
    "item_recipe_mjollnir": {
        "ID": "157",
        "AbilityName": "item_recipe_mjollnir",
        "ItemCost": "600",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_mjollnir",
        "ItemRequirements": {"01": "item_hyperstone;item_maelstrom"}
    },
    "item_mjollnir": {
        "ID": "158",
        "AbilityName": "item_mjollnir",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "35.0",
        "AbilityManaCost": "50",
        "ItemCost": "5400",
        "ItemShopTags": "damage;attack_speed;unique",
        "ItemQuality": "artifact",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "80"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "static_duration": "20.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "static_chance": "20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "static_strikes": "2"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "static_damage": "200"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "static_primary_radius": "600"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "static_seconary_radius": "900"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "static_radius": "300"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "static_cooldown": "1.0"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "chain_chance": "25"
            },
            "12": {
                "var_type": "FIELD_INTEGER",
                "chain_damage": "160"
            },
            "13": {
                "var_type": "FIELD_INTEGER",
                "chain_strikes": "8"
            },
            "14": {
                "var_type": "FIELD_INTEGER",
                "chain_radius": "500"
            },
            "15": {
                "var_type": "FIELD_FLOAT",
                "chain_delay": "0.25"
            }
        }
    },
    "item_recipe_skadi": {
        "ID": "159",
        "AbilityName": "item_recipe_skadi",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_skadi",
        "ItemRequirements": {"01": "item_ultimate_orb;item_ultimate_orb;item_point_booster;item_orb_of_venom"}
    },
    "item_skadi": {
        "ID": "160",
        "AbilityName": "item_skadi",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "5850",
        "ItemShopTags": "agi;str;int;hard_to_tag;mana_pool;health_pool;unique",
        "ItemQuality": "artifact",
        "ItemAliases": "eos",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "cold_movement_speed": "-30"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "cold_attack_speed": "-20"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "cold_duration_melee": "5.0"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "cold_duration_ranged": "3.0"
            }
        }
    },
    "item_recipe_sange": {
        "ID": "161",
        "AbilityName": "item_recipe_sange",
        "ItemCost": "700",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_sange",
        "ItemRequirements": {"01": "item_ogre_axe;item_belt_of_strength"}
    },
    "item_sange": {
        "ID": "162",
        "AbilityName": "item_sange",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2150",
        "ItemShopTags": "damage;str;unique",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "16"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "maim_chance": "15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "maim_movement_speed": "-20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "maim_attack_speed": "-20"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "maim_duration": "4.0"
            }
        }
    },
    "item_recipe_helm_of_the_dominator": {
        "ID": "163",
        "AbilityName": "item_recipe_helm_of_the_dominator",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_helm_of_the_dominator",
        "ItemRequirements": {"01": "item_lifesteal;item_helm_of_iron_will"}
    },
    "item_helm_of_the_dominator": {
        "ID": "164",
        "AbilityName": "item_helm_of_the_dominator",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "300.0",
        "AbilityManaCost": "75",
        "ItemCost": "1850",
        "ItemShopTags": "damage;armor;unique;hard_to_tag",
        "ItemQuality": "artifact",
        "ItemDisassemblable": "1",
        "ItemAliases": "hotd",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "lifesteal_percent": "15"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "dominate_duration": "1200.0"
            }
        }
    },
    "item_recipe_maelstrom": {
        "ID": "165",
        "AbilityName": "item_recipe_maelstrom",
        "ItemCost": "600",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_maelstrom",
        "ItemRequirements": {"01": "item_gloves;item_mithril_hammer"}
    },
    "item_maelstrom": {
        "ID": "166",
        "AbilityName": "item_maelstrom",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2700",
        "ItemShopTags": "damage;attack_speed;unique",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "chain_chance": "25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "chain_strikes": "4"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "chain_damage": "120"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "chain_radius": "500"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "chain_delay": "0.25"
            }
        }
    },
    "item_recipe_desolator": {
        "ID": "167",
        "AbilityName": "item_recipe_desolator",
        "ItemCost": "900",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_desolator",
        "ItemRequirements": {"01": "item_mithril_hammer;item_mithril_hammer"}
    },
    "item_desolator": {
        "ID": "168",
        "AbilityName": "item_desolator",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "4100",
        "ItemShopTags": "damage;unique",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "corruption_armor": "-6"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "corruption_duration": "7.0"
            }
        }
    },
    "item_recipe_yasha": {
        "ID": "169",
        "AbilityName": "item_recipe_yasha",
        "ItemCost": "700",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_yasha",
        "ItemRequirements": {"01": "item_blade_of_alacrity;item_boots_of_elves"}
    },
    "item_yasha": {
        "ID": "170",
        "AbilityName": "item_yasha",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "2150",
        "ItemShopTags": "agi;attack_speed;move_speed",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "16"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_percent_bonus": "10"
            }
        }
    },
    "item_recipe_mask_of_madness": {
        "ID": "171",
        "AbilityName": "item_recipe_mask_of_madness",
        "ItemCost": "1000",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_mask_of_madness",
        "ItemRequirements": {"01": "item_lifesteal"}
    },
    "item_mask_of_madness": {
        "ID": "172",
        "AbilityName": "item_mask_of_madness",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "25.0",
        "AbilityManaCost": "25",
        "ItemCost": "1900",
        "ItemShopTags": "unique;hard_to_tag",
        "ItemQuality": "artifact",
        "ItemAliases": "mom",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "lifesteal_percent": "17"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "berserk_bonus_attack_speed": "100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "berserk_bonus_movement_speed": "25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "berserk_extra_damage": "30"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "berserk_duration": "12.0"
            }
        }
    },
    "item_recipe_diffusal_blade": {
        "ID": "173",
        "AbilityName": "item_recipe_diffusal_blade",
        "ItemCost": "850",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_diffusal_blade",
        "ItemRequirements": {"01": "item_blade_of_alacrity;item_blade_of_alacrity;item_robe"}
    },
    "item_recipe_diffusal_blade_2": {
        "ID": "195",
        "AbilityName": "item_recipe_diffusal_blade_2",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_diffusal_blade_2",
        "ItemRequirements": {"01": "item_diffusal_blade;item_recipe_diffusal_blade"}
    },
    "item_diffusal_blade": {
        "ID": "174",
        "AbilityName": "item_diffusal_blade",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "12.0",
        "AbilitySharedCooldown": "diffusal",
        "AbilityManaCost": "0",
        "ItemCost": "3300",
        "ItemShopTags": "agi;int;unique;hard_to_tag",
        "ItemQuality": "artifact",
        "ItemPermanent": "1",
        "ItemInitialCharges": "8",
        "ItemRequiresCharges": "1",
        "ItemDisplayCharges": "1",
        "MaxUpgradeLevel": "2",
        "ItemBaseLevel": "1",
        "UpgradesItems": "item_diffusal_blade",
        "UpgradeRecipe": "item_recipe_diffusal_blade",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "22 26"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "6 10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "initial_charges": "8"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "feedback_mana_burn": "20 36"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "purge_summoned_damage": "99999"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "purge_rate": "5"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "purge_root_duration": "3.0"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "purge_slow_duration": "4.0"
            }
        }
    },
    "item_diffusal_blade_2": {
        "ID": "196",
        "AbilityName": "item_diffusal_blade",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "12.0",
        "AbilitySharedCooldown": "diffusal",
        "AbilityManaCost": "0",
        "ItemCost": "3300",
        "ItemShopTags": "agi;int;unique;hard_to_tag",
        "ItemQuality": "artifact",
        "ItemPermanent": "1",
        "ItemInitialCharges": "8",
        "ItemRequiresCharges": "1",
        "ItemDisplayCharges": "1",
        "MaxUpgradeLevel": "2",
        "ItemBaseLevel": "2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "22 26"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "6 10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "initial_charges": "8"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "feedback_mana_burn": "20 36"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "purge_summoned_damage": "99999"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "purge_rate": "5"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "purge_root_duration": "3.0"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "purge_slow_duration": "4.0"
            }
        }
    },
    "item_recipe_ethereal_blade": {
        "ID": "175",
        "AbilityName": "item_recipe_ethereal_blade",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_ethereal_blade",
        "ItemRequirements": {"01": "item_eagle;item_ghost"}
    },
    "item_ethereal_blade": {
        "ID": "176",
        "AbilityName": "item_ethereal_blade",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "30.0",
        "AbilitySharedCooldown": "ethereal",
        "AbilityManaCost": "50",
        "ItemCost": "4900",
        "ItemShopTags": "agi;str;int;hard_to_tag",
        "ItemQuality": "epic",
        "ItemDisassemblable": "1",
        "ItemAliases": "eb",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "blast_movement_slow": "-80"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "blast_agility_multiplier": "2.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "blast_damage_base": "75"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "ethereal_damage_bonus": "40"
            }
        }
    },
    "item_recipe_soul_ring": {
        "ID": "177",
        "AbilityName": "item_recipe_soul_ring",
        "ItemCost": "125",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_soul_ring",
        "ItemRequirements": {"01": "item_ring_of_regen;item_sobi_mask"}
    },
    "item_soul_ring": {
        "ID": "178",
        "AbilityName": "item_soul_ring",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCooldown": "25.0",
        "AbilityManaCost": "0",
        "ItemCost": "800",
        "ItemShopTags": "regen_health;boost_mana",
        "ItemQuality": "common",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_regen": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "mana_regen": "50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "health_sacrifice": "150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "mana_gain": "150"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0"
            }
        }
    },
    "item_recipe_arcane_boots": {
        "ID": "179",
        "AbilityName": "item_recipe_arcane_boots",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_arcane_boots",
        "ItemRequirements": {"01": "item_energy_booster;item_boots"}
    },
    "item_arcane_boots": {
        "ID": "180",
        "AbilityName": "item_arcane_boots",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "45.0",
        "AbilityManaCost": "25",
        "ItemCost": "1500",
        "ItemShopTags": "move_speed;boost_mana;mana_pool",
        "ItemQuality": "rare",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement": "65"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "replenish_radius": "600"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "replenish_amount": "135"
            }
        }
    },
    "item_orb_of_venom": {
        "ID": "181",
        "AbilityName": "item_orb_of_venom",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "ItemCost": "350",
        "ItemShopTags": "hard_to_tag",
        "ItemQuality": "secret_shop",
        "SecretShop": "1",
        "SideShop": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "poison_movement_speed_melee": "-12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "poison_movement_speed_range": "-4"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "poison_duration": "4.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "poison_damage": "3.0"
            }
        }
    },
    "item_recipe_ancient_janggo": {
        "ID": "184",
        "AbilityName": "item_recipe_ancient_janggo",
        "ItemCost": "750",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_ancient_janggo",
        "ItemRequirements": {
            "01": "item_bracer;item_robe",
            "02": "item_ancient_janggo"
        }
    },
    "item_ancient_janggo": {
        "ID": "185",
        "AbilityName": "item_ancient_janggo",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "ItemPermanent": "1",
        "AbilityCooldown": "30.0",
        "ItemCost": "1725",
        "ItemShopTags": "str;agi;int;damage;move_speed;attack_speed;hard_to_tag",
        "ItemQuality": "rare",
        "ItemInitialCharges": "4",
        "ItemDisplayCharges": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_stats": "9"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_aura_attack_speed_pct": "5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_aura_movement_speed_pct": "5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed_pct": "10"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed_pct": "10"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "duration": "6.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "item_recipe_medallion_of_courage": {
        "ID": "186",
        "AbilityName": "item_recipe_medallion_of_courage",
        "ItemCost": "200",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_medallion_of_courage",
        "ItemRequirements": {"01": "item_chainmail;item_sobi_mask"}
    },
    "item_medallion_of_courage": {
        "ID": "187",
        "AbilityName": "item_medallion_of_courage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastRange": "800",
        "AbilityCooldown": "7.0",
        "ItemCost": "1075",
        "ItemShopTags": "armor;regen_mana;hard_to_tag",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana_regen_pct": "50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "-6"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "7.0"
            }
        }
    },
    "item_smoke_of_deceit": {
        "ID": "188",
        "AbilityName": "item_smoke_of_deceit",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCooldown": "90.0",
        "ItemCost": "100",
        "ItemShopTags": "consumable",
        "ItemQuality": "consumable",
        "ItemStackable": "1",
        "ItemShareability": "ITEM_FULLY_SHAREABLE",
        "ItemPermanent": "0",
        "ItemInitialCharges": "1",
        "ItemDisplayCharges": "1",
        "ItemStockMax": "3",
        "ItemStockTime": "720.0",
        "ItemDeclaresPurchase": "1",
        "ItemSupport": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "application_radius": "1200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "visibility_radius": "1025"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "15"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "40.0"
            }
        }
    },
    "item_recipe_veil_of_discord": {
        "ID": "189",
        "AbilityName": "item_recipe_veil_of_discord",
        "ItemCost": "1250",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_veil_of_discord",
        "ItemRequirements": {"01": "item_helm_of_iron_will;item_robe"}
    },
    "item_veil_of_discord": {
        "ID": "190",
        "AbilityName": "item_veil_of_discord",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCooldown": "30",
        "AbilityCastRange": "875",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "75",
        "ItemCost": "2650",
        "ItemShopTags": "int;armor;regen_health;hard_to_tag",
        "ItemQuality": "rare",
        "ItemAliases": "vod",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "12"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "debuff_radius": "500"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "resist_debuff": "25"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "resist_debuff_duration": "20.0"
            }
        }
    },
    "item_recipe_rod_of_atos": {
        "ID": "205",
        "AbilityName": "item_recipe_rod_of_atos",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_rod_of_atos",
        "ItemRequirements": {"01": "item_staff_of_wizardry;item_staff_of_wizardry;item_vitality_booster"}
    },
    "item_rod_of_atos": {
        "ID": "206",
        "AbilityName": "item_rod_of_atos",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCooldown": "20",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "50",
        "ItemCost": "3100",
        "ItemShopTags": "int;armor;regen_health",
        "ItemQuality": "rare",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_intellect": "25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow": "50"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "4"
            }
        }
    },
    "item_recipe_abyssal_blade": {
        "ID": "207",
        "AbilityName": "item_recipe_abyssal_blade",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_abyssal_blade",
        "ItemRequirements": {"01": "item_basher;item_relic"}
    },
    "item_abyssal_blade": {
        "ID": "208",
        "AbilityName": "item_abyssal_blade",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCooldown": "60",
        "AbilityCastRange": "140",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "150",
        "ItemCost": "6750",
        "ItemShopTags": "damage;str;hard_to_tag",
        "ItemQuality": "epic",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "100"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bash_chance_melee": "25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bash_chance_ranged": "10"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "bash_duration": "1.4"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "bash_cooldown": "2.0"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "2"
            }
        }
    },
    "item_recipe_heavens_halberd": {
        "ID": "209",
        "AbilityName": "item_recipe_heavens_halberd",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_heavens_halberd",
        "ItemRequirements": {"01": "item_sange;item_talisman_of_evasion"}
    },
    "item_heavens_halberd": {
        "ID": "210",
        "AbilityName": "item_heavens_halberd",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCooldown": "30",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0",
        "AbilityManaCost": "100",
        "ItemCost": "3950",
        "ItemShopTags": "str;damage;evasion",
        "ItemQuality": "artifact",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "maim_chance": "15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "maim_movement_speed": "-20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "maim_attack_speed": "-20"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "maim_duration": "4.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bonus_evasion": "25"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "disarm_range": "4.0"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "disarm_melee": "3.0"
            }
        }
    },
    "item_recipe_ring_of_aquila": {
        "ID": "211",
        "AbilityName": "item_recipe_ring_of_aquila",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_ring_of_aquila",
        "ItemRequirements": {"01": "item_wraith_band;item_ring_of_basilius"}
    },
    "item_ring_of_aquila": {
        "ID": "212",
        "AbilityName": "item_ring_of_aquila",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
        "ItemCost": "985",
        "ItemShopTags": "",
        "ItemQuality": "rare",
        "ItemShareability": "",
        "ItemDisassemblable": "1",
        "ItemAliases": "roa",
        "UIPickupSound": "Item.PickUpRingShop",
        "UIDropSound": "Item.DropRingShop",
        "WorldDropSound": "Item.DropRingWorld",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "9"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_all_stats": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "3"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "1"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "aura_mana_regen": "0.65"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "aura_bonus_armor": "2"
            }
        }
    },
    "item_recipe_tranquil_boots": {
        "ID": "213",
        "AbilityName": "item_recipe_tranquil_boots",
        "ItemCost": "0",
        "ItemShopTags": "",
        "ItemRecipe": "1",
        "ItemResult": "item_tranquil_boots",
        "ItemRequirements": {"01": "item_boots;item_ring_of_protection;item_ring_of_regen"}
    },
    "item_tranquil_boots": {
        "ID": "214",
        "AbilityName": "item_tranquil_boots",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "40.0",
        "AbilityManaCost": "25",
        "ItemCost": "1025",
        "ItemShopTags": "move_speed;regen_health;armor",
        "ItemQuality": "rare",
        "ItemDisassemblable": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "80"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "3"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "heal_duration": "10.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "heal_amount": "170"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "heal_interval": "0.334"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "break_time": "10"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "break_count": "4"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "break_threshold": "20"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "broken_movement_speed": "55"
            }
        }
    }
}});