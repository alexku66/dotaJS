define({"DOTAAbilities": {
    "Version": "1",
    "ability_base": {
        "ID": "0",
        "AbilityName": "base",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NONE",
        "OnCastbar": "1",
        "OnLearnbar": "1",
        "AbilityCastRange": "0",
        "AbilityCastRangeBuffer": "250",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityChannelTime": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "0.0 0.0 0.0 0.0",
        "AbilityDuration": "0.0 0.0 0.0 0.0",
        "AbilitySharedCooldown": "",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "0 0 0 0",
        "AbilityModifierSupportValue": "1.0",
        "AbilityModifierSupportBonus": "0",
        "ItemCost": "0",
        "ItemInitialCharges": "0",
        "ItemCombinable": "1",
        "ItemPermanent": "1",
        "ItemStackable": "0",
        "ItemRecipe": "0",
        "ItemDroppable": "1",
        "ItemPurchasable": "1",
        "ItemSellable": "1",
        "ItemRequiresCharges": "0",
        "ItemKillable": "1",
        "ItemDisassemblable": "0",
        "ItemShareability": "ITEM_NOT_SHAREABLE",
        "ItemDeclaresPurchase": "0"
    },
    "default_attack": {
        "ID": "5001",
        "AbilityName": "default_attack",
        "AbilitySpecial": {}
    },
    "attribute_bonus": {
        "ID": "5002",
        "AbilityName": "attribute_bonus",
        "AbilityType": "DOTA_ABILITY_TYPE_ATTRIBUTES",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "attribute_bonus_per_level": "2.0"
        }}
    },
    "antimage_mana_break": {
        "ID": "5003",
        "AbilityName": "antimage_mana_break",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_per_burn": "0.6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "mana_per_hit": "28 40 52 64"
            }
        }
    },
    "antimage_blink": {
        "ID": "5004",
        "AbilityName": "antimage_blink",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
        "AbilityCastPoint": "0.33 0.33 0.33 0.33",
        "AbilityCooldown": "12.0 9.0 7.0 5.0",
        "AbilityManaCost": "60 60 60 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "blink_range": "1000 1075 1150 1150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "min_blink_range": "200"
            }
        }
    },
    "antimage_spell_shield": {
        "ID": "5005",
        "AbilityName": "antimage_spell_shield",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "spell_shield_resistance": "26 34 42 50"
        }}
    },
    "antimage_mana_void": {
        "ID": "5006",
        "AbilityName": "antimage_mana_void",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "70.0 70.0 70.0",
        "AbilityManaCost": "125 200 275",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "mana_void_damage_per_mana": "0.6 0.85 1.1"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "mana_void_ministun": "0.1 0.2 0.3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mana_void_aoe_radius": "300"
            }
        }
    },
    "axe_berserkers_call": {
        "ID": "5007",
        "AbilityName": "axe_berserkers_call",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "80 90 100 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "30 30 30 30"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.5 2.0 2.5 3.0"
            }
        }
    },
    "axe_battle_hunger": {
        "ID": "5008",
        "AbilityName": "axe_battle_hunger",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "20.0 15.0 10.0 5.0",
        "AbilityDamage": "15 21 27 33",
        "AbilityManaCost": "75 85 95 105",
        "AbilityCastRange": "900",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0 13.0 16.0 19.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow": "-10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed_bonus": "4"
            }
        }
    },
    "axe_counter_helix": {
        "ID": "5009",
        "AbilityName": "axe_counter_helix",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCooldown": "0.65 0.6 0.55 0.50",
        "AbilityDamage": "100 130 160 190",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "trigger_chance": "17"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "cooldown": "0.65 0.6 0.55 0.50"
            }
        }
    },
    "axe_culling_blade": {
        "ID": "5010",
        "AbilityName": "axe_culling_blade",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "75.0 65.0 55.0",
        "AbilityManaCost": "120 160 200",
        "AbilityCastRange": "150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "kill_threshold": "300 450 625"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "150 250 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed_bonus": "25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "speed_duration": "6"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "speed_aoe": "600"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "6.0 6.0 6.0"
            }
        }
    },
    "bane_enfeeble": {
        "ID": "5012",
        "AbilityName": "bane_enfeeble",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDuration": "20.0 20.0 20.0 20.0",
        "AbilityManaCost": "95 105 115 125",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "enfeeble_attack_reduction": "-25 -50 -75 -100"
        }}
    },
    "bane_brain_sap": {
        "ID": "5011",
        "AbilityName": "bane_brain_sap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCastRange": "600",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityDamage": "90 160 230 300",
        "AbilityManaCost": "125 150 175 200",
        "AbilitySpecial": {}
    },
    "bane_fiends_grip": {
        "ID": "5013",
        "AbilityName": "bane_fiends_grip",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "625",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityChannelTime": "5.0 5.0 5.0",
        "AbilityCooldown": "100.0 100.0 100.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fiend_grip_tick_interval": "1.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "fiend_grip_mana_drain": "5"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "fiend_grip_duration": "5.0 5.0 5.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "fiend_grip_damage": "100 155 215"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "fiend_grip_mana_drain_scepter": "10"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "fiend_grip_duration_scepter": "6.0 6.0 6.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "fiend_grip_damage_scepter": "155 215 270"
            }
        }
    },
    "bane_nightmare": {
        "ID": "5014",
        "AbilityName": "bane_nightmare",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_HP_REMOVAL",
        "AbilityCastRange": "500 550 600 650",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "4.0 5.0 6.0 7.0",
        "AbilityDamage": "20 20 20 20",
        "AbilityManaCost": "165 165 165 165",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "nightmare_dot_interval": "1.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "nightmare_invuln_time": "1.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 5.0 6.0 7.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "animation_rate": "0.2 0.2 0.2 0.2"
            }
        }
    },
    "bloodseeker_bloodrage": {
        "ID": "5015",
        "AbilityName": "bloodseeker_bloodrage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.6 0.6 0.6 0.6",
        "AbilityCooldown": "12.0 10.0 8.0 6.0",
        "AbilityDamage": "20 20 20 20",
        "AbilityManaCost": "80 80 80 80",
        "AbilityCastRange": "600",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "6.0 7.0 8.0 9.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_increase_pct": "20 40 60 80"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "1.0"
            }
        }
    },
    "bloodseeker_blood_bath": {
        "ID": "5016",
        "AbilityName": "bloodseeker_blood_bath",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_bonus_pct": "10 20 30 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_bonus_creep_pct": "10 15 20 25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage_assist_factor": "0.5"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_assist_aoe": "225"
            }
        }
    },
    "bloodseeker_thirst": {
        "ID": "5017",
        "AbilityName": "bloodseeker_thirst",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "1500 3000 4500 6000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "visibility_threshold_pct": "40"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "11 22 33 44"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "invis_threshold_pct": "20"
            }
        }
    },
    "bloodseeker_rupture": {
        "ID": "5018",
        "AbilityName": "bloodseeker_rupture",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastPoint": "0.6 0.6 0.6 0.6",
        "AbilityCooldown": "70.0 60.0 50.0",
        "AbilityDamage": "150 250 350",
        "AbilityManaCost": "150 200 250",
        "AbilityCastRange": "1000",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "7.0 8.0 9.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_damage_pct": "20 40 60"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_cap_amount": "200"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_cap_interval": "0.25"
            }
        }
    },
    "drow_ranger_frost_arrows": {
        "ID": "5019",
        "AbilityName": "drow_ranger_frost_arrows",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityCastRange": "625",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "0.0 0.0 0.0 0.0",
        "AbilityDuration": "1.5 1.5 1.5 1.5",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "12 12 12 12",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "frost_arrows_creep_duration": "7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "frost_arrows_movement_speed": "-11 -24 -37 -50"
            }
        }
    },
    "drow_ranger_silence": {
        "ID": "5020",
        "AbilityName": "drow_ranger_silence",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "3.0 4.0 5.0 6.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "90 90 90 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "silence_radius": "300"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 4.0 5.0 6.0"
            }
        }
    },
    "drow_ranger_trueshot": {
        "ID": "5021",
        "AbilityName": "drow_ranger_trueshot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityCastRange": "900",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "trueshot_aura_radius": "900"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "trueshot_ranged_damage": "7 14 21 28"
            }
        }
    },
    "drow_ranger_marksmanship": {
        "ID": "5022",
        "AbilityName": "drow_ranger_marksmanship",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "marksmanship_agility_bonus": "15 30 45"
        }}
    },
    "earthshaker_fissure": {
        "ID": "5023",
        "AbilityName": "earthshaker_fissure",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1200",
        "AbilityCastPoint": "0.69 0.69 0.69 0.69",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "1.0 1.25 1.5 1.75",
        "AbilityDamage": "125 175 225 275",
        "AbilityManaCost": "125 140 155 170",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fissure_duration": "8.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "fissure_radius": "225"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.25 1.5 1.75"
            }
        }
    },
    "earthshaker_enchant_totem": {
        "ID": "5024",
        "AbilityName": "earthshaker_enchant_totem",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.69 0.69 0.69 0.69",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityDuration": "14.0 14.0 14.0 14.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "totem_damage_percentage": "75 150 225 300"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "14.0 14.0 14.0 14.0"
            }
        }
    },
    "earthshaker_aftershock": {
        "ID": "5025",
        "AbilityName": "earthshaker_aftershock",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDuration": "0.3 0.7 1.2 1.5",
        "AbilityDamage": "25 45 75 115",
        "AbilityModifierSupportBonus": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aftershock_range": "300"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "0.3 0.7 1.2 1.5"
            }
        }
    },
    "earthshaker_echo_slam": {
        "ID": "5026",
        "AbilityName": "earthshaker_echo_slam",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "150.0 130.0 110.0",
        "AbilityDamage": "200 265 340",
        "AbilityManaCost": "145 205 265",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "echo_slam_damage_range": "500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "echo_slam_echo_search_range": "550"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "echo_slam_echo_range": "500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "echo_slam_echo_damage": "40 55 70"
            }
        }
    },
    "juggernaut_blade_dance": {
        "ID": "5027",
        "AbilityName": "juggernaut_blade_dance",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "blade_dance_crit_mult": "200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "blade_dance_crit_chance": "15 20 25 35"
            }
        }
    },
    "juggernaut_blade_fury": {
        "ID": "5028",
        "AbilityName": "juggernaut_blade_fury",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "30.0 28.0 26.0 24.0",
        "AbilityDuration": "5.0 5.0 5.0 5.0",
        "AbilityDamage": "80 100 120 140",
        "AbilityManaCost": "110 110 110 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "blade_fury_damage_tick": "0.2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "blade_fury_radius": "250"
            }
        }
    },
    "juggernaut_healing_ward": {
        "ID": "5029",
        "AbilityName": "juggernaut_healing_ward",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "350",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "60.0 60.0 60.0 60.0",
        "AbilityDuration": "25.0 25.0 25.0 25.0",
        "AbilityManaCost": "80 100 120 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "healing_ward_heal_amount": "2 3 4 5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "healing_ward_aura_radius": "500"
            }
        }
    },
    "juggernaut_omni_slash": {
        "ID": "5030",
        "AbilityName": "juggernaut_omni_slash",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "450",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "130.0 120.0 110.0",
        "AbilityManaCost": "200 275 350",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "omni_slash_damage": "175 250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "omni_slash_jumps": "3 6 9"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "omni_slash_radius": "425"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "omni_slash_bounce_tick": "0.4"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "omni_slash_cooldown_scepter": "110.0 100.0 90.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "omni_slash_jumps_scepter": "6 9 12"
            }
        }
    },
    "kunkka_torrent": {
        "ID": "5031",
        "AbilityName": "kunkka_torrent",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1500",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDamage": "120 180 240 300",
        "AbilityManaCost": "120 120 120 120",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "215 215 215 215"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed_bonus": "-35"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "1.0 2.0 3.0 4.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.53 1.53 1.53 1.53"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "delay": "1.6 1.6 1.6 1.6"
            }
        }
    },
    "kunkka_tidebringer": {
        "ID": "5032",
        "AbilityName": "kunkka_tidebringer",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCooldown": "13.0 10.0 7.0 4.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_bonus": "15 30 45 60"
            }
        }
    },
    "kunkka_x_marks_the_spot": {
        "ID": "5033",
        "AbilityName": "kunkka_x_marks_the_spot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "500 650 800 950",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "16.0",
        "AbilityManaCost": "80 90 100 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.0 2.0 3.0 4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "500 650 800 950"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "fow_range": "1000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "fow_duration": "5.94"
            }
        }
    },
    "kunkka_return": {
        "ID": "5034",
        "AbilityName": "kunkka_return",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "5.0 5.0 5.0 5.0",
        "AbilityManaCost": "50 50 50 50"
    },
    "kunkka_ghostship": {
        "ID": "5035",
        "AbilityName": "kunkka_ghostship",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityCooldown": "90.0 80.0 70.0",
        "AbilityDamage": "300 400 500",
        "AbilityManaCost": "150 200 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "ghostship_speed": "650 650 650"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "ghostship_width": "400 400 400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "ghostship_distance": "1000 1000 1000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.4 1.4 1.4"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movespeed_bonus": "10 10 10"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "buff_duration": "8"
            }
        }
    },
    "lina_dragon_slave": {
        "ID": "5040",
        "AbilityName": "lina_dragon_slave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.45 0.45 0.45 0.45",
        "AbilityCooldown": "8.5 8.5 8.5 8.5",
        "AbilityDuration": "0.6875 0.6875 0.6875 0.6875",
        "AbilityDamage": "100 170 230 280",
        "AbilityManaCost": "90 105 125 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "dragon_slave_speed": "1200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "dragon_slave_width_initial": "275"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "dragon_slave_width_end": "150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "dragon_slave_distance": "1075"
            }
        }
    },
    "lina_light_strike_array": {
        "ID": "5041",
        "AbilityName": "lina_light_strike_array",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.45 0.45 0.45 0.45",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityDuration": "1.6 1.6 1.6 1.6",
        "AbilityDamage": "90 150 210 280",
        "AbilityManaCost": "90 100 110 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "light_strike_array_aoe": "225"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "light_strike_array_delay_time": "0.5"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "light_strike_array_stun_duration": "1.6"
            }
        }
    },
    "lina_fiery_soul": {
        "ID": "5042",
        "AbilityName": "lina_fiery_soul",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityDuration": "7 7 7 7",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "fiery_soul_attack_speed_bonus": "40 50 60 70"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "fiery_soul_move_speed_bonus": "4 5 6 7"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "fiery_soul_max_stacks": "3"
            }
        }
    },
    "lina_laguna_blade": {
        "ID": "5043",
        "AbilityName": "lina_laguna_blade",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.45 0.45 0.45",
        "AbilityCooldown": "120.0 90.0 55.0",
        "AbilityManaCost": "280 420 680",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "450 675 950"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "600 925 1250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "900 900 900"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_delay": "0.25"
            }
        }
    },
    "lion_impale": {
        "ID": "5044",
        "AbilityName": "lion_impale",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "100 120 145 170",
        "AbilityDamage": "60 130 200 260",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "width": "125 125 125 125"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.02 1.52 2.02 2.52"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "length": "825 825 825 825"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "1600 1600 1600 1600"
            }
        }
    },
    "lion_voodoo": {
        "ID": "5045",
        "AbilityName": "lion_voodoo",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityManaCost": "125 150 175 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.75 2.5 3.25 4"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed": "100 100 100 100"
            }
        }
    },
    "lion_mana_drain": {
        "ID": "5046",
        "AbilityName": "lion_mana_drain",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE",
        "AbilityCastRange": "600 650 700 750",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityChannelTime": "4.1 4.1 4.1 4.1",
        "AbilityCooldown": "25.0 20.0 15.0 10.0",
        "AbilityManaCost": "10 10 10 10",
        "AbilityModifierSupportValue": "5.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 4.0 4.0 4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "mana_per_second": "20 40 60 120"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "break_distance": "800 800 800 800"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "illusion_kill_time": "0.25"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "0.25"
            }
        }
    },
    "lion_finger_of_death": {
        "ID": "5047",
        "AbilityName": "lion_finger_of_death",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "150.0 90.0 55.0",
        "AbilityManaCost": "200 420 650",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "500 650 850"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "600 800 1025"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mana_cost_scepter": "200 420 625"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "150 90 50"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "damage_delay": "0.25"
            }
        }
    },
    "mirana_arrow": {
        "ID": "5048",
        "AbilityName": "mirana_arrow",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "3000",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "25.0 25.0 25.0 25.0",
        "AbilityDuration": "3.11 3.11 3.11 3.11",
        "AbilityDamage": "90 180 270 360",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "arrow_speed": "857.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "arrow_width": "115"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "arrow_range": "3000"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "arrow_max_stunrange": "1500"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "arrow_min_stun": "0.5"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "arrow_max_stun": "5.0"
            }
        }
    },
    "mirana_invis": {
        "ID": "5049",
        "AbilityName": "mirana_invis",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "160.0 140.0 120.0",
        "AbilityManaCost": "175 175 175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fade_delay": "2.5 2.0 1.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "11.0 11.0 11.0"
            }
        }
    },
    "mirana_leap": {
        "ID": "5050",
        "AbilityName": "mirana_leap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "30.0 26.0 22.0 18.0",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "40 35 30 20",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "leap_distance": "630 690 780 840"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "leap_speed": "2000.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "leap_acceleration": "7000.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "leap_radius": "775"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "leap_speedbonus": "4 8 12 16"
            }
        }
    },
    "mirana_starfall": {
        "ID": "5051",
        "AbilityName": "mirana_starfall",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "100 120 140 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "starfall_radius": "625"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "starfall_secondary_radius": "175"
            }
        }
    },
    "morphling_waveform": {
        "ID": "5052",
        "AbilityName": "morphling_waveform",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "11.0 11.0 11.0 11.0",
        "AbilityDamage": "100 175 250 325",
        "AbilityManaCost": "140 155 160 165",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "speed": "1250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "width": "255"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "1000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "0.94"
            }
        }
    },
    "morphling_adaptive_strike": {
        "ID": "5053",
        "AbilityName": "morphling_adaptive_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600 700 800 900",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10",
        "AbilityManaCost": "100 100 100 100",
        "AbilityModifierSupportValue": "0.3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_min": "0.25 0.25 0.25 0.25"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_max": "0.75 1.5 2.25 3.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage_min": "0.25 0.25 0.25 0.25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_max": "0.50 1.0 1.5 2.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "knockback_min": "100"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "knockback_max": "300"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "damage_base": "20.0 40.0 60.0 80.0"
            }
        }
    },
    "morphling_morph": {
        "ID": "5054",
        "AbilityName": "morphling_morph",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_attributes": "3 4 5 6"
        }}
    },
    "morphling_morph_agi": {
        "ID": "5055",
        "AbilityName": "morphling_morph_agi",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE",
        "AbilityCooldown": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_cost": "20 20 20 20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "points_per_tick": "2 2 2 2"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "morph_cooldown": "1.0 0.5 0.33 0.25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attributes": "3 4 5 6"
            }
        }
    },
    "morphling_morph_str": {
        "ID": "5056",
        "AbilityName": "morphling_morph_str",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE",
        "AbilityCooldown": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_cost": "20 20 20 20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "points_per_tick": "2 2 2 2"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "morph_cooldown": "1.0 0.5 0.33 0.25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attributes": "3 4 5 6"
            }
        }
    },
    "morphling_replicate": {
        "ID": "5057",
        "AbilityName": "morphling_replicate",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "700 1100 1500",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "80.0 80.0 80.0",
        "AbilityManaCost": "25 25 25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "30.0 45.0 60.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_out_pct": "-50 -50 -50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_in_pct": "0 0 0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "tooltip_cast_range": "700 1100 1500"
            }
        }
    },
    "morphling_morph_replicate": {
        "ID": "5058",
        "AbilityName": "morphling_morph_replicate",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityManaCost": "150 150 150",
        "AbilityCastPoint": "0.3 0.3 0.3"
    },
    "nevermore_shadowraze1": {
        "ID": "5059",
        "AbilityName": "nevermore_shadowraze1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.67 0.67 0.67 0.67",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_radius": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_range": "200"
            }
        }
    },
    "nevermore_shadowraze2": {
        "ID": "5060",
        "AbilityName": "nevermore_shadowraze2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "OnLearnbar": "0",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.67 0.67 0.67 0.67",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_radius": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_range": "450"
            }
        }
    },
    "nevermore_shadowraze3": {
        "ID": "5061",
        "AbilityName": "nevermore_shadowraze3",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "OnLearnbar": "0",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.67 0.67 0.67 0.67",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_radius": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "shadowraze_range": "700"
            }
        }
    },
    "nevermore_necromastery": {
        "ID": "5062",
        "AbilityName": "nevermore_necromastery",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "OnCastbar": "0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "necromastery_damage_per_soul": "2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "necromastery_max_souls": "12 20 28 36"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "necromastery_soul_release": "0.5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "necromastery_souls_hero_bonus": "5"
            }
        }
    },
    "nevermore_dark_lord": {
        "ID": "5063",
        "AbilityName": "nevermore_dark_lord",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "OnCastbar": "0",
        "AbilityCastRange": "900",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "presence_armor_reduction": "-2 -3 -4 -5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "presence_radius": "900"
            }
        }
    },
    "nevermore_requiem": {
        "ID": "5064",
        "AbilityName": "nevermore_requiem",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "1.67 1.67 1.67",
        "AbilityCooldown": "120.0 110.0 100.0",
        "AbilityDuration": "5.0 5.0 5.0",
        "AbilityDamage": "80 120 160",
        "AbilityManaCost": "150 175 200",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "requiem_radius": "975 1000 1025"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "requiem_reduction": "-15 -20 -25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "requiem_reduction_tooltip": "-15 -20 -25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "requiem_reduction_radius": "700 700 700"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "requiem_soul_conversion": "2 2 2"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "requiem_line_width_start": "75 100 125"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "requiem_line_width_end": "400 425 450"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "requiem_line_speed": "700 700 700"
            }
        }
    },
    "phantom_lancer_spirit_lance": {
        "ID": "5065",
        "AbilityName": "phantom_lancer_spirit_lance",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityDamage": "100 150 200 250",
        "AbilityManaCost": "125 130 135 140",
        "AbilityCastRange": "750",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "lance_speed": "1000 1000 1000 1000"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.0 3.0 3.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "-10 -20 -30 -40"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "2.0 4.0 6.0 8.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_out_pct": "-75 -75 -75 -75"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_in_pct": "300 300 300 300"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "tooltip_illusion_damage": "25 25 25 25"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "fake_lance_distance": "1000 1000 1000 1000"
            }
        }
    },
    "phantom_lancer_doppelwalk": {
        "ID": "5066",
        "AbilityName": "phantom_lancer_doppelwalk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "30.0 25.0 20.0 15.0",
        "AbilityManaCost": "150 120 90 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "15"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "20.0 20.0 20.0 20.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_out_pct": "-75 -75 -75 -75"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_in_pct": "300 300 300 300"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_illusion_damage": "25 25 25 25"
            }
        }
    },
    "phantom_lancer_juxtapose": {
        "ID": "5067",
        "AbilityName": "phantom_lancer_juxtapose",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "proc_chance_pct": "12 12 12 12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_illusions": "2 4 6 8"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "20.0 20.0 20.0 20.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_out_pct": "-75 -75 -75 -75"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_in_pct": "350 350 350 350"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_illusion_damage": "25 25 25 25"
            }
        }
    },
    "phantom_lancer_phantom_edge": {
        "ID": "5068",
        "AbilityName": "phantom_lancer_phantom_edge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "magic_resistance_pct": "10 15 20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "illusion_dupicate_chance": "3 5 7"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "juxtapose_bonus": "2 4 6"
            }
        }
    },
    "puck_illusory_orb": {
        "ID": "5069",
        "AbilityName": "puck_illusory_orb",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.1 0.1 0.1 0.1",
        "AbilityCastRange": "3000",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityDamage": "70 140 210 280",
        "AbilityManaCost": "150 150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_distance": "1800 1800 1800 1800"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "orb_speed": "600 600 600 600"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "orb_vision": "800 800 800 800"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34 3.34 3.34 3.34"
            }
        }
    },
    "puck_ethereal_jaunt": {
        "ID": "5070",
        "AbilityName": "puck_ethereal_jaunt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0"
    },
    "puck_waning_rift": {
        "ID": "5071",
        "AbilityName": "puck_waning_rift",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.1 0.1 0.1 0.1",
        "AbilityCooldown": "16.0 16.0 16.0 16.0",
        "AbilityDamage": "60 120 180 240",
        "AbilityManaCost": "100 110 120 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "silence_duration": "0.75 1.5 2.25 3.0"
            }
        }
    },
    "puck_phase_shift": {
        "ID": "5072",
        "AbilityName": "puck_phase_shift",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityChannelTime": "0.75 1.50 2.25 3.25",
        "AbilityCooldown": "6.0 6.0 6.0 6.0",
        "AbilityManaCost": "0 0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "0.75 1.50 2.25 3.25"
        }}
    },
    "puck_dream_coil": {
        "ID": "5073",
        "AbilityName": "puck_dream_coil",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "750",
        "AbilityCastPoint": "0.1 0.1 0.1",
        "AbilityCooldown": "85.0 85.0 85.0",
        "AbilityManaCost": "100 150 200",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "0.5 0.5 0.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "coil_stun_duration": "1.5 2.25 3.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "coil_radius": "375 375 375"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "coil_break_radius": "600 600 600"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "coil_duration": "5.0 5.0 5.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "coil_break_damage": "100 150 200"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "coil_duration_scepter": "7.0 7.0 7.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "coil_break_damage_scepter": "200 250 300"
            }
        }
    },
    "pudge_flesh_heap": {
        "ID": "5074",
        "AbilityName": "pudge_flesh_heap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "flesh_heap_magic_resist": "4 8 12 16"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "flesh_heap_strength_buff_amount": "0.9 1.2 1.5 1.8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "flesh_heap_range": "450"
            }
        }
    },
    "pudge_meat_hook": {
        "ID": "5075",
        "AbilityName": "pudge_meat_hook",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "700 900 1100 1300",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "14.0 13.0 12.0 11.0",
        "AbilityDamage": "90 180 270 360",
        "AbilityManaCost": "110 120 130 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "hook_speed": "1600.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "hook_width": "100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "hook_distance": "700 900 1100 1300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "500 500 500 500"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "4.0 4.0 4.0 4.0"
            }
        }
    },
    "pudge_rot": {
        "ID": "5076",
        "AbilityName": "pudge_rot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityDamage": "35 60 85 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "rot_radius": "250"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "rot_tick": "0.2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "rot_slow": "-20"
            }
        }
    },
    "pudge_dismember": {
        "ID": "5077",
        "AbilityName": "pudge_dismember",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "160",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityChannelTime": "2.95 2.95 2.95",
        "AbilityCooldown": "30.0 30.0 30.0",
        "AbilityManaCost": "100 130 170",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "dismember_damage": "75 125 175"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "strength_damage_scepter": "0.75"
            }
        }
    },
    "shadow_shaman_ether_shock": {
        "ID": "5078",
        "AbilityName": "shadow_shaman_ether_shock",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityDamage": "140 200 260 320",
        "AbilityManaCost": "95 105 135 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "start_radius": "200 200 200 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "end_radius": "300 300 300 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "end_distance": "500 500 500 500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "targets": "1 3 5 7"
            }
        }
    },
    "shadow_shaman_voodoo": {
        "ID": "5079",
        "AbilityName": "shadow_shaman_voodoo",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityManaCost": "110 140 170 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movespeed": "100 100 100 100"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.25 2.0 2.75 3.5"
            }
        }
    },
    "shadow_shaman_shackles": {
        "ID": "5080",
        "AbilityName": "shadow_shaman_shackles",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityChannelTime": "2.5 3.25 4.0 4.75",
        "AbilityCooldown": "16.0 16.0 16.0 16.0",
        "AbilityDamage": "40 40 40 40",
        "AbilityManaCost": "110 130 155 185",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "0.1 0.1 0.1 0.1"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "channel_time": "2.5 3.25 4.0 4.75"
            }
        }
    },
    "shadow_shaman_mass_serpent_ward": {
        "ID": "5081",
        "AbilityName": "shadow_shaman_mass_serpent_ward",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "550",
        "AbilityCooldown": "110.0 110.0 110.0",
        "AbilityManaCost": "200 350 600",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "ward_count": "8 8 8"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "full_splash_radius": "50 75 85"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mid_splash_radius": "75 100 110"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "min_splash_radius": "150 200 220"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage_min": "39 54 69"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage_max": "43 58 73"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "duration": "45.0 45.0 45.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "damage_min_scepter": "53 74 94"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "damage_max_scepter": "59 79 100"
            }
        }
    },
    "razor_plasma_field": {
        "ID": "5082",
        "AbilityName": "razor_plasma_field",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityManaCost": "125 125 125 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_min": "80 120 160 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_max": "140 210 280 350"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "700"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "636"
            }
        }
    },
    "razor_static_link": {
        "ID": "5083",
        "AbilityName": "razor_static_link",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "25.0",
        "AbilityManaCost": "20 30 40 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "drain_length": "8.0 8.0 8.0 8.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "drain_duration": "18.0 18.0 18.0 18.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "drain_rate": "7 14 21 28"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "drain_range": "675 675 675 675"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900 900"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800 800 800 800"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34 3.34 3.34 3.34"
            }
        }
    },
    "razor_unstable_current": {
        "ID": "5084",
        "AbilityName": "razor_unstable_current",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDamage": "40 70 100 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "3 6 9 12"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "0.3 0.6 0.9 1.2"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "pause_duration": "0.3 0.3 0.3 0.3"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "purge_frequency": "1 1 1 1"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "slow_amount": "-100 -100 -100 -100"
            }
        }
    },
    "razor_eye_of_the_storm": {
        "ID": "5085",
        "AbilityName": "razor_eye_of_the_storm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "80.0 70.0 60.0",
        "AbilityManaCost": "100 150 200",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "500 500 500"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0 25.0 30.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "strike_interval": "0.85 0.75 0.6"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "1 1 1"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage": "37 50 63"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "strike_interval_scepter": "0.7 0.6 0.5"
            }
        }
    },
    "skeleton_king_hellfire_blast": {
        "ID": "5086",
        "AbilityName": "skeleton_king_hellfire_blast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "525",
        "AbilityCastPoint": "0.35 0.35 0.35 0.35",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityDamage": "50 100 150 200",
        "AbilityManaCost": "140 140 140 140",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "blast_speed": "1000"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "blast_stun_duration": "2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "blast_slow": "-15"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "blast_dot_duration": "4"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "blast_dot_damage": "15 30 40 50"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "tooltip_slow_duration": "2"
            }
        }
    },
    "skeleton_king_vampiric_aura": {
        "ID": "5087",
        "AbilityName": "skeleton_king_vampiric_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "vampiric_aura_radius": "900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "vampiric_aura": "15 20 25 30"
            }
        }
    },
    "skeleton_king_critical_strike": {
        "ID": "5088",
        "AbilityName": "skeleton_king_critical_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_mult": "125 175 225 275"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "15"
            }
        }
    },
    "skeleton_king_reincarnation": {
        "ID": "5089",
        "AbilityName": "skeleton_king_reincarnation",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "260 160 60",
        "AbilityManaCost": "140 140 140",
        "AbilityModifierSupportValue": "0.2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "reincarnate_time": "3.0 3.0 3.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow_radius": "700 700 700"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movespeed": "-30 -30 -30"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "4.0"
            }
        }
    },
    "death_prophet_carrion_swarm": {
        "ID": "5090",
        "AbilityName": "death_prophet_carrion_swarm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityDamage": "100 175 250 300",
        "AbilityManaCost": "105 120 140 165",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "start_radius": "110 110 110 110"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "end_radius": "300 300 300 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "810 810 810 810"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "1000 1000 1000 1000"
            }
        }
    },
    "death_prophet_silence": {
        "ID": "5091",
        "AbilityName": "death_prophet_silence",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "3.0 4.0 5.0 6.0",
        "AbilityManaCost": "80 80 80 80",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 275 350 350"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 4.0 5.0 6.0"
            }
        }
    },
    "death_prophet_witchcraft": {
        "ID": "5092",
        "AbilityName": "death_prophet_witchcraft",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "4 8 12 16"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "carrion_swarm_mana_cost_adjust": "-10 -15 -20 -25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "carrion_swarm_cooldown_adjust": "-1.0 -2.0 -3.0 -4.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "silence_mana_cost_adjust": "-10 -15 -20 -25"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "silence_cooldown_adjust": "-1.0 -2.0 -3.0 -4.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "exorcism_1_extra_spirits": "3 4 5 6"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "exorcism_2_extra_spirits": "3 4 5 6"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "exorcism_3_extra_spirits": "3 4 5 6"
            }
        }
    },
    "death_prophet_exorcism": {
        "ID": "5093",
        "AbilityName": "death_prophet_exorcism",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "100.0 100.0 100.0",
        "AbilityDuration": "30.0 30.0 30.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "700 700 700"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "spirits": "4 10 18"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "spirit_speed": "500 500 500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "max_distance": "2000 2000 2000"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "give_up_distance": "1200 1200 1200"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "min_damage": "43 43 43"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "max_damage": "48 48 48"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "heal_percent": "25 25 25"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "average_damage": "45 45 45"
            }
        }
    },
    "sven_storm_bolt": {
        "ID": "5094",
        "AbilityName": "sven_storm_bolt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDamage": "100 175 250 325",
        "AbilityManaCost": "140 140 140 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bolt_speed": "1000"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "bolt_stun_duration": "2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bolt_aoe": "255 255 255 255"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34"
            }
        }
    },
    "sven_great_cleave": {
        "ID": "5095",
        "AbilityName": "sven_great_cleave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "great_cleave_radius": "200.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "great_cleave_damage": "30 40 50 60"
            }
        }
    },
    "sven_warcry": {
        "ID": "5096",
        "AbilityName": "sven_warcry",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "36.0 30.0 24.0 18.0",
        "AbilityDuration": "8.0 8.0 8.0 8.0",
        "AbilityManaCost": "25 25 25 25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "warcry_armor": "3 6 9 12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "warcry_movespeed": "12"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "warcry_radius": "700"
            }
        }
    },
    "sven_gods_strength": {
        "ID": "5097",
        "AbilityName": "sven_gods_strength",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "80.0 80.0 80.0",
        "AbilityDuration": "25.0 25.0 25.0",
        "AbilityManaCost": "100 150 200",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "gods_strength_damage": "100 140 180"
        }}
    },
    "storm_spirit_static_remnant": {
        "ID": "5098",
        "AbilityName": "storm_spirit_static_remnant",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "4.0 4.0 4.0 4.0",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityDamage": "140 180 220 260",
        "AbilityManaCost": "70 80 90 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "static_remnant_radius": "235"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "static_remnant_damage_radius": "260"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "static_remnant_delay": "1.0"
            }
        }
    },
    "storm_spirit_electric_vortex": {
        "ID": "5099",
        "AbilityName": "storm_spirit_electric_vortex",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "300",
        "AbilityCooldown": "20.0 20.0 20.0 20.0",
        "AbilityDuration": "1.0 1.5 2.0 2.5",
        "AbilityManaCost": "100 110 120 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "electric_vortex_pull_units_per_second": "100"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "electric_vortex_pull_tether_range": "1200.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "electric_vortex_self_slow": "-50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "electric_vortex_self_slow_duration": "3.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.0 1.5 2.0 2.5"
            }
        }
    },
    "storm_spirit_overload": {
        "ID": "5100",
        "AbilityName": "storm_spirit_overload",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDuration": "0.6 0.6 0.6 0.6",
        "AbilityDamage": "30 50 70 90",
        "AbilityModifierSupportBonus": "40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "overload_aoe": "275"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "overload_move_slow": "-80"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "overload_attack_slow": "-50"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "0.6 0.6 0.6 0.6"
            }
        }
    },
    "storm_spirit_ball_lightning": {
        "ID": "5101",
        "AbilityName": "storm_spirit_ball_lightning",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityManaCost": "15 15 15 15",
        "AbilityDamage": "8 12 16",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_initial_mana_percentage": "7"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_initial_mana_base": "15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_move_speed": "1250 1875 2500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_aoe": "125 200 275"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_travel_cost_base": "10"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_travel_cost_percent": "1"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "ball_lightning_vision_radius": "1000"
            }
        }
    },
    "sandking_burrowstrike": {
        "ID": "5102",
        "AbilityName": "sandking_burrowstrike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "350 450 550 650",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "11.0 11.0 11.0 11.0",
        "AbilityManaCost": "110 120 130 140",
        "AbilityDamage": "100 160 220 280",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "burrow_width": "150"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "burrow_duration": "2.17"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "burrow_speed": "2000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "burrow_anim_time": "0.52"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "350 450 550 650"
            }
        }
    },
    "sandking_sand_storm": {
        "ID": "5103",
        "AbilityName": "sandking_sand_storm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityDuration": "20.0 40.0 60.0 80.0",
        "AbilityCooldown": "40.0 30.0 20.0 10.0",
        "AbilityChannelTime": "20.0 40.0 60.0 80.0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityDamage": "20 40 60 80",
        "AbilityManaCost": "60 50 40 30",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "sand_storm_invis_delay": "0.3 0.6 0.9 1.5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "sand_storm_radius": "275 325 375 525"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "AbilityDuration": "20.0 40.0 60.0 80.0"
            }
        }
    },
    "sandking_caustic_finale": {
        "ID": "5104",
        "AbilityName": "sandking_caustic_finale",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDuration": "8.0 8.0 8.0 8.0",
        "AbilityDamage": "90 130 170 220",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "caustic_finale_radius": "400"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "caustic_finale_damage": "90 130 170 220"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "caustic_finale_duration": "8.0 8.0 8.0 8.0"
            }
        }
    },
    "sandking_epicenter": {
        "ID": "5105",
        "AbilityName": "sandking_epicenter",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "140.0 120.0 100.0",
        "AbilityDuration": "3.0 3.0 3.0",
        "AbilityChannelTime": "2.0 2.0 2.0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "175 250 325",
        "AbilityModifierSupportValue": "0.2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "epicenter_radius": "275 325 375 425 475 525 575 650 675 700 775 825"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "epicenter_pulses": "6 8 10"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "epicenter_damage": "110 110 110"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "epicenter_slow": "-30 -30 -30"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "epicenter_pulses_scepter": "8 10 12"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "epicenter_cooldown_scepter": "120.0 100.0 80.0"
            }
        }
    },
    "tiny_avalanche": {
        "ID": "5106",
        "AbilityName": "tiny_avalanche",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "17.0 17.0 17.0 17.0",
        "AbilityDuration": "2.0 2.0 2.0 2.0",
        "AbilityDamage": "100 180 260 300",
        "AbilityManaCost": "120 120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 275 275 275"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "0.25 0.25 0.25 0.25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "num_ticks": "4 4 4 4"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "projectile_duration": "0.5"
            }
        }
    },
    "tiny_toss": {
        "ID": "5107",
        "AbilityName": "tiny_toss",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700 900 1100 1300",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "120 120 120 120",
        "AbilityModifierSupportValue": "0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "duration": "1.0 1.0 1.0 1.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "grab_radius": "250 250 250 250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 275 275 275"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "20 20 20 20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "grow_bonus_damage_pct": "35 50 65 80"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "700 900 1100 1300"
            }
        }
    },
    "tiny_craggy_exterior": {
        "ID": "5108",
        "AbilityName": "tiny_craggy_exterior",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDamage": "25 35 45 55",
        "AbilityModifierSupportBonus": "35",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "stun_chance": "6 12 18 24"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.2 1.2 1.2 1.2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "2 3 4 5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius": "300 300 300 300"
            }
        }
    },
    "tiny_grow": {
        "ID": "5109",
        "AbilityName": "tiny_grow",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "50 100 150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "-20 -35 -50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "20 40 60"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "grow_bonus_damage_pct": "35 50 65"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_range_scepter": "107"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "bonus_cleave_radius_scepter": "400"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bonus_cleave_damage_scepter": "50"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "bonus_building_damage_scepter": "75"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "grow_bonus_damage_pct_scepter": "50 65 80"
            }
        }
    },
    "zuus_arc_lightning": {
        "ID": "5110",
        "AbilityName": "zuus_arc_lightning",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityDamage": "85 100 115 145",
        "AbilityCooldown": "2.0 2.0 2.0 2.0",
        "AbilityManaCost": "65 70 75 80",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "500 500 500 500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "jump_count": "5 7 9 15"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25 0.25 0.25 0.25"
            }
        }
    },
    "zuus_lightning_bolt": {
        "ID": "5111",
        "AbilityName": "zuus_lightning_bolt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityDamage": "100 175 275 350",
        "AbilityCooldown": "6.0 6.0 6.0 6.0",
        "AbilityManaCost": "75 95 115 135",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "true_sight_radius": "900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "sight_radius_day": "1000 1000 1000 1000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "sight_radius_night": "1000 1000 1000 1000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "sight_duration": "3.0 3.0 3.0 3.0"
            }
        }
    },
    "zuus_static_field": {
        "ID": "5112",
        "AbilityName": "zuus_static_field",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "1000 1000 1000 1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_health_pct": "5 7 9 11"
            }
        }
    },
    "zuus_thundergods_wrath": {
        "ID": "5113",
        "AbilityName": "zuus_thundergods_wrath",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "120.0 120.0 120.0",
        "AbilityManaCost": "225 325 450",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "true_sight_radius": "900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "sight_radius_day": "1000 1000 1000 1000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "sight_radius_night": "1000 1000 1000 1000"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "sight_duration": "3.0 3.0 3.0 3.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage": "210 335 460"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "400 500 600"
            }
        }
    },
    "slardar_sprint": {
        "ID": "5114",
        "AbilityName": "slardar_sprint",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_speed": "20 27 33 40"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0 20.0 20.0 20.0"
            }
        }
    },
    "slardar_slithereen_crush": {
        "ID": "5115",
        "AbilityName": "slardar_slithereen_crush",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.35 0.35 0.35 0.35",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityDuration": "1.0 1.5 2.0 2.5",
        "AbilityDamage": "50 100 150 200",
        "AbilityManaCost": "80 95 105 115",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crush_radius": "350"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crush_extra_slow": "-20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "crush_extra_slow_duration": "2.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.5 2.0 2.5"
            }
        }
    },
    "slardar_bash": {
        "ID": "5116",
        "AbilityName": "slardar_bash",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityModifierSupportBonus": "25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "chance": "10 15 20 25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "40 50 60 70"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration_creep": "2.0"
            }
        }
    },
    "slardar_amplify_damage": {
        "ID": "5117",
        "AbilityName": "slardar_amplify_damage",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.35 0.35 0.35",
        "AbilityCooldown": "10.0 10.0 10.0",
        "AbilityManaCost": "25 25 25",
        "AbilityModifierSupportValue": "6.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "-8 -12 -16"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "25.0 25.0 25.0"
            }
        }
    },
    "tidehunter_gush": {
        "ID": "5118",
        "AbilityName": "tidehunter_gush",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityDamage": "110 160 210 260",
        "AbilityManaCost": "120 120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "4000 4000 4000 4000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "-40 -40 -40 -40"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "armor_bonus": "-2 -3 -4 -5"
            }
        }
    },
    "tidehunter_kraken_shell": {
        "ID": "5119",
        "AbilityName": "tidehunter_kraken_shell",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_reduction": "7 14 21 28"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_cleanse": "600 600 600 600"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage_reset_interval": "6.0 6.0 6.0 6.0"
            }
        }
    },
    "tidehunter_anchor_smash": {
        "ID": "5120",
        "AbilityName": "tidehunter_anchor_smash",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "7.0 6.0 5.0 4.0",
        "AbilityDamage": "75 125 175 225",
        "AbilityManaCost": "30 40 50 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_reduction": "-40 -40 -40 -40"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "reduction_duration": "6.0 6.0 6.0 6.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            }
        }
    },
    "tidehunter_ravage": {
        "ID": "5121",
        "AbilityName": "tidehunter_ravage",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "150.0 150.0 150.0",
        "AbilityDamage": "250 350 450",
        "AbilityManaCost": "150 225 325",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "825 925 1025"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.02 2.32 2.77"
            }
        }
    },
    "vengefulspirit_magic_missile": {
        "ID": "5122",
        "AbilityName": "vengefulspirit_magic_missile",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "100 175 250 325",
        "AbilityManaCost": "110 120 130 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "magic_missile_speed": "1250"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "magic_missile_stun": "1.45 1.55 1.65 1.75"
            }
        }
    },
    "vengefulspirit_command_aura": {
        "ID": "5123",
        "AbilityName": "vengefulspirit_command_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityCastRange": "900",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "12 20 28 36"
            }
        }
    },
    "vengefulspirit_wave_of_terror": {
        "ID": "5124",
        "AbilityName": "vengefulspirit_wave_of_terror",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_HP_REMOVAL",
        "AbilityCastRange": "1400",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "20.0 20.0 20.0 20.0",
        "AbilityDamage": "18.75 37.5 56.25 75",
        "AbilityManaCost": "40 40 40 40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "wave_speed": "2000.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "wave_width": "300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "-2 -3 -4 -5"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "vision_aoe": "500 500 500 500"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.0 3.0 3.0 3.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "20.0 20.0 20.0 20.0"
            }
        }
    },
    "vengefulspirit_nether_swap": {
        "ID": "5125",
        "AbilityName": "vengefulspirit_nether_swap",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "600 900 1200",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "45.0 45.0 45.0",
        "AbilityManaCost": "100 150 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "600 900 1200"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "nether_swap_cooldown_scepter": "10.0 10.0 10.0"
            }
        }
    },
    "crystal_maiden_crystal_nova": {
        "ID": "5126",
        "AbilityName": "crystal_maiden_crystal_nova",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDamage": "100 150 200 250",
        "AbilityManaCost": "100 120 140 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.5 4.0 4.5 5.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-20"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "6.0"
            }
        }
    },
    "crystal_maiden_frostbite": {
        "ID": "5127",
        "AbilityName": "crystal_maiden_frostbite",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDamage": "70 70 70 70",
        "AbilityManaCost": "115 125 140 150",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.5 2.0 2.5 3.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "creep_duration": "10.0 10.0 10.0 10.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "creep_duration": "10"
            }
        }
    },
    "crystal_maiden_brilliance_aura": {
        "ID": "5128",
        "AbilityName": "crystal_maiden_brilliance_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "mana_regen": "0.5 1.0 1.5 2.0"
        }}
    },
    "crystal_maiden_freezing_field": {
        "ID": "5129",
        "AbilityName": "crystal_maiden_freezing_field",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityChannelTime": "4.0 4.0 4.0",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "150.0 120.0 90.0",
        "AbilityDuration": "4.0 4.0 4.0",
        "AbilityManaCost": "200 400 600",
        "AbilityModifierSupportValue": "0.35",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "685 685 685"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "explosion_radius": "215 215 215"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "explosion_count": "40"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "explosion_interval": "0.1"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-30"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "attack_slow": "-20"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "1.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "explosion_min_dist": "195"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "explosion_max_dist": "635"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "damage": "105 170 250"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "170 250 310"
            }
        }
    },
    "windrunner_shackleshot": {
        "ID": "5130",
        "AbilityName": "windrunner_shackleshot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "90 100 110 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fail_stun_duration": "0.75 0.75 0.75 0.75"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.5 2.25 3.0 3.75"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "shackle_distance": "525 525 525 525"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "arrow_speed": "1515"
            }
        }
    },
    "windrunner_powershot": {
        "ID": "5131",
        "AbilityName": "windrunner_powershot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "9.0 9.0 9.0 9.0",
        "AbilityChannelTime": "1.0 1.0 1.0 1.0",
        "AbilityDamage": "120 200 280 360",
        "AbilityManaCost": "90 100 110 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_reduction": "0.1 0.1 0.1 0.1"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "speed_reduction": "0.1 0.1 0.1 0.1"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "arrow_width": "125 125 125 125"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "arrow_range": "1825"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "arrow_speed": "3000.0 3000.0 3000.0 3000.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "tree_width": "75 75 75 75"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800 800 800 800"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34 3.34 3.34 3.34"
            }
        }
    },
    "windrunner_windrun": {
        "ID": "5132",
        "AbilityName": "windrunner_windrun",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDuration": "2.75 3.50 4.25 5.0",
        "AbilityManaCost": "100 100 100 100",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movespeed_bonus_pct": "50 50 50 50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "enemy_movespeed_bonus_pct": "-8 -16 -24 -30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "300 300 300 300"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.75 3.50 4.25 5.0"
            }
        }
    },
    "windrunner_focusfire": {
        "ID": "5133",
        "AbilityName": "windrunner_focusfire",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_ALL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "60.0 60.0 60.0",
        "AbilityDuration": "20.0 20.0 20.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "focusfire_damage_reduction": "-50 -40 -30"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "15.0 15.0 15.0"
            }
        }
    },
    "lich_frost_nova": {
        "ID": "5134",
        "AbilityName": "lich_frost_nova",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "9.25 9.25 9.25 8.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityDamage": "50 100 150 200",
        "AbilityManaCost": "125 150 170 190",
        "AbilityModifierSupportValue": "0.3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aoe_damage": "75 100 125 150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed": "-30 -30 -30 -30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed": "-20 -20 -20 -20"
            }
        }
    },
    "lich_frost_armor": {
        "ID": "5135",
        "AbilityName": "lich_frost_armor",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "5.0 5.0 5.0 5.0",
        "AbilityDuration": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilityModifierSupportValue": "0.3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "armor_bonus": "3 5 7 9"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "2.0 2.0 2.0 2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed": "-30 -30 -30 -30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed": "-20 -20 -20 -20"
            }
        }
    },
    "lich_dark_ritual": {
        "ID": "5136",
        "AbilityName": "lich_dark_ritual",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED | DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS | DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "35.0 30.0 25.0 20.0",
        "AbilityManaCost": "25 25 25 25",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "health_conversion": "15 30 45 60"
        }}
    },
    "lich_chain_frost": {
        "ID": "5137",
        "AbilityName": "lich_chain_frost",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "750",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "145.0 115.0 60.0",
        "AbilityManaCost": "200 325 500",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "jumps": "7 7 7"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "4.0 4.0 4.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed": "-30 -30 -30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed": "-20 -20 -20"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "jump_range": "575 575 575"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "675 675 675"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "1000 1000 1000"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "damage": "280 370 460"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "370 460 550"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "850 850 850"
            }
        }
    },
    "witch_doctor_paralyzing_cask": {
        "ID": "5138",
        "AbilityName": "witch_doctor_paralyzing_cask",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.35 0.35 0.35 0.35",
        "AbilityCooldown": "20.0 18.0 16.0 14.0",
        "AbilityDamage": "75 100 125 150",
        "AbilityManaCost": "110 120 130 140",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "hero_duration": "1.0 1.0 1.0 1.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "creep_duration": "5.0 5.0 5.0 5.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "hero_damage": "50 50 50 50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bounce_range": "575 575 575 575"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bounces": "3 5 7 9"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "speed": "1000"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "bounce_delay": "0.3"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "bounces_tooltip": "2 4 6 8"
            }
        }
    },
    "witch_doctor_voodoo_restoration": {
        "ID": "5139",
        "AbilityName": "witch_doctor_voodoo_restoration",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "25 50 75 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_per_second": "8 14 20 26"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "350 350 350 350"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "heal": "16 24 32 40"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "heal_interval": "0.33 0.33 0.33 0.33"
            }
        }
    },
    "witch_doctor_maledict": {
        "ID": "5140",
        "AbilityName": "witch_doctor_maledict",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.35 0.35 0.35 0.35",
        "AbilityCooldown": "35.0 35.0 35.0 35.0",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityDamage": "5 10 15 20",
        "AbilityManaCost": "120 120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "10 20 30 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_threshold": "100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "ticks": "3"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "duration_tooltip": "12"
            }
        }
    },
    "witch_doctor_death_ward": {
        "ID": "5141",
        "AbilityName": "witch_doctor_death_ward",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "300 350 400",
        "AbilityCastPoint": "0.35 0.35 0.35",
        "AbilityCooldown": "90.0 90.0 90.0",
        "AbilityChannelTime": "8.0 8.0 8.0",
        "AbilityManaCost": "200 200 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bounces": "0 0 1"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "60 90 120"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "90 120 150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "scepter_bounces": "0 1 0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "scepter_targets": "0 0 2"
            }
        }
    },
    "riki_smoke_screen": {
        "ID": "5142",
        "AbilityName": "riki_smoke_screen",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "425",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityDuration": "6.0 6.0 6.0 6.0",
        "AbilityManaCost": "75 80 85 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "250 275 300 325"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "miss_rate": "40 50 60 70"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_reduction": "25 25 25 25"
            },
            "04\t": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_reduction": "25 25 25 25"
            }
        }
    },
    "riki_blink_strike": {
        "ID": "5143",
        "AbilityName": "riki_blink_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "20 15 10 5",
        "AbilityDamage": "30 60 90 120",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "tooltip_range": "700"
        }}
    },
    "riki_backstab": {
        "ID": "5144",
        "AbilityName": "riki_backstab",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_multiplier": "0.5 0.75 1.0 1.25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "backstab_angle": "105 105 105 105"
            }
        }
    },
    "riki_permanent_invisibility": {
        "ID": "5145",
        "AbilityName": "riki_permanent_invisibility",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.0 0.0 0.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_delay": "3.0 2.25 1.5"
            }
        }
    },
    "enigma_malefice": {
        "ID": "5146",
        "AbilityName": "enigma_malefice",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityManaCost": "110 130 150 160",
        "AbilityModifierSupportValue": "0.33",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "tick_rate": "2.0 2.0 2.0 2.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.0 1.0 1.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "30 40 65 80"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "0.0 2.0 2.0 4.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "tooltip_stuns": "1 2 2 3"
            }
        }
    },
    "enigma_demonic_conversion": {
        "ID": "5147",
        "AbilityName": "enigma_demonic_conversion",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "35.0 35.0 35.0 35.0",
        "AbilityDuration": "35.0 35.0 35.0 35.0",
        "AbilityManaCost": "170 170 170 170",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "spawn_count": "3 3 3 3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "split_attack_count": "6 6 6 6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "eidolon_hp_tooltip": "180 200 220 240"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "life_extension": "2.0 2.0 2.0 2.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "eidolon_dmg_tooltip": "20 28 38 47"
            }
        }
    },
    "enigma_midnight_pulse": {
        "ID": "5148",
        "AbilityName": "enigma_midnight_pulse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "25.0 25.0 25.0 25.0",
        "AbilityManaCost": "95 110 125 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_percent": "3 4 5 6"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            }
        }
    },
    "enigma_black_hole": {
        "ID": "5149",
        "AbilityName": "enigma_black_hole",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "250",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityChannelTime": "4.0 4.0 4.0",
        "AbilityCooldown": "200.0 190.0 180.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "pull_radius": "375 375 375"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "pull_speed": "40 40 40"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "far_radius": "500 500 500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "near_radius": "150 150 150"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "far_damage": "30 50 70"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "near_damage": "60 100 140"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "tick_rate": "0.1 0.1 0.1"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 4.0 4.0"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800 800 800"
            }
        }
    },
    "tinker_laser": {
        "ID": "5150",
        "AbilityName": "tinker_laser",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "550",
        "AbilityCastPoint": "0.53 0.53 0.53 0.53",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityDamage": "80 160 240 320",
        "AbilityManaCost": "95 120 145 170",
        "AbilityModifierSupportValue": "0.3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration_hero": "3.0 3.0 3.0 3.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_creep": "6.0 6.0 6.0 6.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "miss_rate": "100 100 100 100"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900 900"
            }
        }
    },
    "tinker_heat_seeking_missile": {
        "ID": "5151",
        "AbilityName": "tinker_heat_seeking_missile",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "25.0 25.0 25.0 25.0",
        "AbilityDamage": "100 175 250 325",
        "AbilityManaCost": "120 140 160 180",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "2500 2500 2500 2500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "targets": "2 2 2 2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900 900"
            }
        }
    },
    "tinker_march_of_the_machines": {
        "ID": "5152",
        "AbilityName": "tinker_march_of_the_machines",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "300",
        "AbilityCastPoint": "0.53 0.53 0.53 0.53",
        "AbilityCooldown": "35.0 35.0 35.0 35.0",
        "AbilityDamage": "16 24 32 40",
        "AbilityManaCost": "145 150 165 190",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "collision_radius": "50 50 50 50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "splash_radius": "150 150 150 150"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "6.0 6.0 6.0 6.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "speed": "400 400 400 400"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "machines_per_sec": "24 24 24 24"
            }
        }
    },
    "tinker_rearm": {
        "ID": "5153",
        "AbilityName": "tinker_rearm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.53 0.53 0.53 0.53",
        "AbilityChannelTime": "3.0 2.0 1.0",
        "AbilityCooldown": "0.0 0.0 0.0",
        "AbilityManaCost": "150 250 350",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "channel_tooltip": "3 2 1"
        }}
    },
    "sniper_shrapnel": {
        "ID": "5154",
        "AbilityName": "sniper_shrapnel",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1200",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityDamage": "12 24 36 48",
        "AbilityManaCost": "120 120 120 120",
        "AbilityModifierSupportValue": "0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed": "-15 -20 -25 -30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "350 350 350 350"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "building_damage_pct": "33 33 33 33"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "damage_delay": "0.8 0.8 0.8 0.8"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "2.0 2.0 2.0 2.0"
            }
        }
    },
    "sniper_headshot": {
        "ID": "5155",
        "AbilityName": "sniper_headshot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityDamage": "30 40 50 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "0.01 0.1 0.2 0.2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "proc_chance": "25 30 35 40"
            }
        }
    },
    "sniper_take_aim": {
        "ID": "5156",
        "AbilityName": "sniper_take_aim",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "bonus_attack_range": "65 130 195 260"
        }}
    },
    "sniper_assassinate": {
        "ID": "5157",
        "AbilityName": "sniper_assassinate",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1500 2000 2500",
        "AbilityCastRangeBuffer": "600",
        "AbilityCastPoint": "2.0 2.0 2.0",
        "AbilityCooldown": "20.0 15.0 10.0",
        "AbilityDamage": "355 505 655",
        "AbilityManaCost": "175 275 375",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "2500 2500 2500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "1500 2000 2500"
            }
        }
    },
    "necrolyte_death_pulse": {
        "ID": "5158",
        "AbilityName": "necrolyte_death_pulse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "8.0 7.0 6.0 5.0",
        "AbilityDamage": "75 125 200 275",
        "AbilityManaCost": "125 145 165 185",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "475"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "heal": "50 75 100 130"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "400"
            }
        }
    },
    "necrolyte_heartstopper_aura": {
        "ID": "5159",
        "AbilityName": "necrolyte_heartstopper_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitDamageType": "DAMAGE_TYPE_HP_REMOVAL",
        "AbilityCastRange": "1000",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "1000"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "aura_damage": "0.6 0.8 1.0 1.2"
            }
        }
    },
    "necrolyte_sadist": {
        "ID": "5160",
        "AbilityName": "necrolyte_sadist",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana": "12 24 36 60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "hero_mana": "0 0 0 600"
            }
        }
    },
    "necrolyte_reapers_scythe": {
        "ID": "5161",
        "AbilityName": "necrolyte_reapers_scythe",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "100.0 85.0 70.0",
        "AbilityManaCost": "175 340 500",
        "AbilityCastRange": "600",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_per_health": "0.4 0.6 0.9"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.0 1.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mana_cost_scepter": "150 340 500"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "70 70 70"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "damage_per_health_scepter": "0.6 0.9 1.2"
            }
        }
    },
    "warlock_fatal_bonds": {
        "ID": "5162",
        "AbilityName": "warlock_fatal_bonds",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_HP_REMOVAL",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "25.0 25.0 25.0 25.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "120 120 120 120",
        "AbilityCastRange": "800",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "count": "3 4 5 6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_share_percentage": "20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "25.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "search_aoe": "575"
            }
        }
    },
    "warlock_shadow_word": {
        "ID": "5163",
        "AbilityName": "warlock_shadowword",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "20.0 20.0 20.0 20.0",
        "AbilityDamage": "10 20 30 40",
        "AbilityManaCost": "90 110 130 150",
        "AbilityCastRange": "500",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "9.0 9.0 9.0 9.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "1.0"
            }
        }
    },
    "warlock_upheaval": {
        "ID": "5164",
        "AbilityName": "warlock_upheaval",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityChannelTime": "10.0 10.0 10.0 10.0",
        "AbilityCooldown": "50.0 50.0 50.0 50.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "100 110 120 130",
        "AbilityCastRange": "700",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "aoe": "650 650 650 650"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow_rate": "7 14 21 28"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "max_slow": "84"
            }
        }
    },
    "warlock_rain_of_chaos": {
        "ID": "5165",
        "AbilityName": "warlock_rain_of_chaos",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "165 165 165",
        "AbilityManaCost": "200 250 300",
        "AbilityCastRange": "1200",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "golem_duration": "60 60 60"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aoe": "600"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "golem_hp_tooltip": "900 1200 1500"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "golem_dmg_tooltip": "50 75 100"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "golem_armor_tooltip": "5 7 10"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "damage": "100"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "number_of_golems_scepter": "2"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "hp_dmg_reduction_scepter": "25"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "bounty_reduction_scepter": "50"
            }
        }
    },
    "warlock_golem_flaming_fists": {
        "ID": "5166",
        "AbilityName": "warlock_golem_flaming_fists",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "MaxLevel": "3",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 150 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "chance": "60 60 60"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "300 300 300"
            }
        }
    },
    "warlock_golem_permanent_immolation": {
        "ID": "5167",
        "AbilityName": "warlock_golem_permanent_immolation",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "MaxLevel": "3",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "250 250 250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "aura_damage": "30 40 50"
            }
        }
    },
    "beastmaster_wild_axes": {
        "ID": "5168",
        "AbilityName": "beastmaster_wild_axes",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_COMPOSITE",
        "AbilityCastRange": "1300",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityDamage": "90 120 150 180",
        "AbilityManaCost": "120 120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "140 140 140 140"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "spread": "353 353 353 353"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "1300 1300 1300 1300"
            }
        }
    },
    "beastmaster_call_of_the_wild": {
        "ID": "5169",
        "AbilityName": "beastmaster_call_of_the_wild",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "25 25 25 25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "hawk_duration": "60 70 80 80"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "boar_duration": "0 70 80 90"
            }
        }
    },
    "beastmaster_hawk_invisibility": {
        "ID": "5170",
        "AbilityName": "beastmaster_hawk_invisibility",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "1.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "idle_invis_delay": "4.0"
            }
        }
    },
    "beastmaster_boar_poison": {
        "ID": "5171",
        "AbilityName": "beastmaster_boar_poison",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attack_speed": "-20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "-20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            }
        }
    },
    "beastmaster_greater_boar_poison": {
        "ID": "5352",
        "AbilityName": "beastmaster_greater_boar_poison",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attack_speed": "-35"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "-35"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            }
        }
    },
    "beastmaster_inner_beast": {
        "ID": "5172",
        "AbilityName": "beastmaster_inner_beast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "1000 1000 1000 1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "18 26 32 40"
            }
        }
    },
    "beastmaster_primal_roar": {
        "ID": "5177",
        "AbilityName": "beastmaster_primal_roar",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "80.0 75.0 70.0",
        "AbilityManaCost": "150 175 200",
        "AbilityCastRange": "600",
        "AbilityModifierSupportValue": "0.6",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.5 4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "200 250 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "side_damage": "100 200 300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "slow_radius": "225 225 225"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage_radius": "250 250 250"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed_pct": "-50 -50 -50"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed_pct": "-50 -50 -50"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "push_distance": "240 240 240"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "push_duration": "0.4 0.4 0.4"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "2.0 3.0 4.0"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "950 950 950"
            },
            "12": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "45.0 45.0 45.0"
            }
        }
    },
    "queenofpain_shadow_strike": {
        "ID": "5173",
        "AbilityName": "queenofpain_shadow_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.452 0.452 0.452 0.452",
        "AbilityCooldown": "20.0 16.0 12.0 8.0",
        "AbilityDuration": "15.0 15.0 15.0 15.0",
        "AbilityManaCost": "80 100 120 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "strike_damage": "50 75 100 125"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "duration_damage": "30 40 50 60"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "-20 -30 -40 -50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "900"
            }
        }
    },
    "queenofpain_blink": {
        "ID": "5174",
        "AbilityName": "queenofpain_blink",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.33 0.33 0.33 0.33",
        "AbilityCooldown": "12.0 10.0 8.0 6.0",
        "AbilityManaCost": "60 60 60 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "blink_range": "700 850 1000 1150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "min_blink_range": "200"
            }
        }
    },
    "queenofpain_scream_of_pain": {
        "ID": "5175",
        "AbilityName": "queenofpain_scream_of_pain",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityDamage": "85 165 225 300",
        "AbilityManaCost": "110 120 130 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "475"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "900"
            }
        }
    },
    "queenofpain_sonic_wave": {
        "ID": "5176",
        "AbilityName": "queenofpain_sonic_wave",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.452 0.452 0.452",
        "AbilityCooldown": "135 135 135",
        "AbilityManaCost": "250 360 500",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "starting_aoe": "100"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "distance": "900"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "final_aoe": "300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "800"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage": "350 475 600"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "100 70 40"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "350 530 725"
            }
        }
    },
    "venomancer_venomous_gale": {
        "ID": "5178",
        "AbilityName": "venomancer_venomous_gale",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "22.0 22.0 22.0 22.0",
        "AbilityManaCost": "90 105 120 135",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 15.0 15.0 15.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "strike_damage": "50 70 70 100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "tick_damage": "10 20 40 50"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "3.0 3.0 3.0 3.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "-50 -50 -50 -50"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "radius": "125 125 125 125"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "speed": "1200 1200 1200 1200"
            }
        }
    },
    "venomancer_poison_sting": {
        "ID": "5179",
        "AbilityName": "venomancer_poison_sting",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "7.0 7.0 7.0 7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "5 10 15 20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "-11 -12 -13 -14"
            }
        }
    },
    "venomancer_plague_ward": {
        "ID": "5180",
        "AbilityName": "venomancer_plague_ward",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "850",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "5.0 5.0 5.0 5.0",
        "AbilityManaCost": "20 20 20 20",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "40.0 40.0 40.0 40.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "ward_hp_tooltip": "75 200 325 450"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "ward_damage_tooltip": "10 19 29 38"
            }
        }
    },
    "venomancer_poison_nova": {
        "ID": "5181",
        "AbilityName": "venomancer_poison_nova",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.0 0.0 0.0",
        "AbilityCooldown": "140.0 120.0 100.0",
        "AbilityManaCost": "200 300 400",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "830 830 830"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "start_radius": "255 255 255"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "12.0 14.0 15.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "36 58 81"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "140.0 120.0 60.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "duration_scepter": "14.0 15.0 16.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "58 81 108"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "speed": "500 500 500"
            }
        }
    },
    "faceless_void_time_walk": {
        "ID": "5182",
        "AbilityName": "faceless_void_time_walk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "700 900 1100 1300",
        "AbilityCastPoint": "0.35 0.35 0.35 0.35",
        "AbilityCooldown": "19.0 17.0 15.0 13.0",
        "AbilityManaCost": "120 120 120 120",
        "AbilityModifierSupportValue": "0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "speed": "3000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "300"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "-25 -30 -35 -40"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_pct": "-25 -30 -35 -40"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "700 900 1100 1300"
            }
        }
    },
    "faceless_void_backtrack": {
        "ID": "5183",
        "AbilityName": "faceless_void_backtrack",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "dodge_chance_pct": "10 15 20 25"
        }}
    },
    "faceless_void_time_lock": {
        "ID": "5184",
        "AbilityName": "faceless_void_backtrack",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityModifierSupportBonus": "25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_creep": "2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "chance_pct": "10 15 20 25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "40 50 60 70"
            }
        }
    },
    "faceless_void_chronosphere": {
        "ID": "5185",
        "AbilityName": "faceless_void_chronosphere",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.35 0.35 0.35",
        "AbilityCooldown": "120.0 110.0 100.0",
        "AbilityManaCost": "150 175 200",
        "AbilityModifierSupportBonus": "50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 4.5 5.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration_scepter": "4.0 5.0 6.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "60.0 60.0 60.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "1000 1000 1000"
            }
        }
    },
    "pugna_nether_blast": {
        "ID": "5186",
        "AbilityName": "pugna_nether_blast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "5.5 5.5 5.5 5.5",
        "AbilityDamage": "100 175 250 325",
        "AbilityManaCost": "85 105 125 145",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "structure_damage_mod": "0.33"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "delay": "0.9 0.9 0.9 0.9"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            }
        }
    },
    "pugna_decrepify": {
        "ID": "5187",
        "AbilityName": "pugna_decrepify",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "700 700 700 700",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "13.0 11.0 9.0 7.0",
        "AbilityDuration": "2.0 2.5 3.0 3.5",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_spell_damage_pct": "40 40 40 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-50 -50 -50 -50"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "2.0 2.5 3.0 3.5"
            }
        }
    },
    "pugna_nether_ward": {
        "ID": "5188",
        "AbilityName": "pugna_nether_ward",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "35.0 35.0 35.0 35.0",
        "AbilityDuration": "25.0 25.0 25.0 25.0",
        "AbilityManaCost": "80 80 80 80",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "700 1000 1300 1600"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "mana_regen": "-1.5 -3.0 -4.5 -6.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "mana_multiplier": "0.75 1.00 1.25 1.50"
            }
        }
    },
    "pugna_life_drain": {
        "ID": "5189",
        "AbilityName": "pugna_life_drain",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "850",
        "AbilityCastPoint": "0.2 0.2 0.2",
        "AbilityChannelTime": "10.0",
        "AbilityCooldown": "22.0 22.0 22.0",
        "AbilityManaCost": "125 175 225",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_drain": "120 160 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_drain_scepter": "180 240 300"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "scepter_cooldown": "0.0 0.0 0.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "tick_rate": "0.25 0.25 0.25"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_range_scepter": "50"
            }
        }
    },
    "phantom_assassin_stifling_dagger": {
        "ID": "5190",
        "AbilityName": "phantom_assassin_stifling_dagger",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "1200",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "8 8 8 8",
        "AbilityDuration": "1.0 2.0 3.0 4.0",
        "AbilityManaCost": "30 25 20 15",
        "AbilityDamage": "50 100 150 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "move_slow": "-50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "dagger_speed": "1000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "duration": "1 2 3 4"
            }
        }
    },
    "phantom_assassin_phantom_strike": {
        "ID": "5191",
        "AbilityName": "phantom_assassin_phantom_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastRange": "1000 1000 1000 1000",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "14 11 8 5",
        "AbilityDuration": "3 3 3 3",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "100 100 100 100"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_max_attack_count": "4"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "1000 1000 1000 1000"
            }
        }
    },
    "phantom_assassin_blur": {
        "ID": "5192",
        "AbilityName": "phantom_assassin_blur",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_evasion": "20 25 30 35"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "transparency_fade": "1.5 1.5 1.5 1.5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "1600 1600 1600 1600"
            }
        }
    },
    "phantom_assassin_coup_de_grace": {
        "ID": "5193",
        "AbilityName": "phantom_assassin_coup_de_grace",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_bonus": "250 325 400"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "15 15 15"
            }
        }
    },
    "templar_assassin_refraction": {
        "ID": "5194",
        "AbilityName": "templar_assassin_refraction",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "17.0 17.0 17.0 17.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "instances": "3 4 5 6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20 40 60 80"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_threshold": "5 5 5 5"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "17.0 17.0 17.0 17.0"
            }
        }
    },
    "templar_assassin_meld": {
        "ID": "5195",
        "AbilityName": "templar_assassin_meld",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "50 100 150 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "-2 -4 -6 -8"
            }
        }
    },
    "templar_assassin_psi_blades": {
        "ID": "5196",
        "AbilityName": "templar_assassin_psi_blades",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_range": "60 120 180 240"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_spill_range": "590 630 670 710"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "attack_spill_width": "80 80 80 80"
            }
        }
    },
    "templar_assassin_psionic_trap": {
        "ID": "5197",
        "AbilityName": "templar_assassin_psionic_trap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "2000",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "11.0 9.0 7.0",
        "AbilityManaCost": "15 15 15",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_traps": "5 8 11"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "trap_fade_time": "2.0 2.0 2.0"
            }
        }
    },
    "templar_assassin_trap": {
        "ID": "5198",
        "AbilityName": "templar_assassin_trap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "MaxLevel": "1",
        "AbilityCastPoint": "0.3",
        "AbilityCastRange": "2100",
        "AbilityCooldown": "0.5",
        "AbilityManaCost": "0",
        "AbilityModifierSupportBonus": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_bonus": "-50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "trap_radius": "375"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "trap_duration": "5.0"
            }
        }
    },
    "templar_assassin_self_trap": {
        "ID": "5199",
        "AbilityName": "templar_assassin_self_trap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "1",
        "AbilityCastPoint": "0.3",
        "AbilityCooldown": "0.5",
        "AbilityManaCost": "0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_bonus": "-50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "trap_radius": "400"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "trap_duration": "5.0"
            }
        }
    },
    "viper_poison_attack": {
        "ID": "5218",
        "AbilityName": "viper_poison_attack",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "4.0 3.0 0.0 0.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "20 20 20 20",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.0 2.0 2.0 2.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "10 16 22 28"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-10 -20 -30 -40"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "-10 -20 -30 -40"
            }
        }
    },
    "viper_nethertoxin": {
        "ID": "5219",
        "AbilityName": "viper_nethertoxin",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "2 4 6 8"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "non_hero_damage_pct": "50 50 50 50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "max_damage_tooltip": "32 64 96 128"
            }
        }
    },
    "viper_corrosive_skin": {
        "ID": "5220",
        "AbilityName": "viper_corrosive_skin",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityModifierSupportBonus": "10",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.0 3.0 3.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-10 -15 -20 -25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "-10 -15 -20 -25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_magic_resistance": "10 15 20 25"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage": "10 15 20 25"
            }
        }
    },
    "viper_viper_strike": {
        "ID": "5221",
        "AbilityName": "viper_viper_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "80.0 50.0 30.0",
        "AbilityManaCost": "125 175 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.1 5.1 5.1"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "60 100 145"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-40 -60 -80"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "-40 -60 -80"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "mana_cost_scepter": "125 125 125"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "12.0 12.0 12.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "800 800 800"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "1200"
            }
        }
    },
    "luna_lucent_beam": {
        "ID": "5222",
        "AbilityName": "luna_lucent_beam",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.6 0.6 0.6 0.6",
        "AbilityCooldown": "6.0 6.0 6.0 6.0",
        "AbilityDamage": "75 150 225 300",
        "AbilityManaCost": "90 100 110 120",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "stun_duration": "0.6 0.6 0.6 0.6"
        }}
    },
    "luna_moon_glaive": {
        "ID": "5223",
        "AbilityName": "luna_moon_glaive",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "range": "500 500 500 500"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bounces": "1 2 3 4"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_reduction_percent": "30 30 30 30"
            }
        }
    },
    "luna_lunar_blessing": {
        "ID": "5224",
        "AbilityName": "luna_lunar_blessing",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "14 20 26 32"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_night_vision": "1000 1000 1000 1000"
            }
        }
    },
    "luna_eclipse": {
        "ID": "5225",
        "AbilityName": "luna_eclipse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.6 0.6 0.6",
        "AbilityCooldown": "160.0 150.0 140.0",
        "AbilityManaCost": "150 200 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "675 675 675"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "beam_interval": "0.6 0.6 0.6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "beams": "4 7 10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "hit_count": "4 4 4"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration_tooltip": "1.8 3.6 5.4"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "beams_scepter": "4 8 12"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "hit_count_scepter": "6 6 6"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "duration_tooltip_scepter": "1.8 4.2 6.6"
            }
        }
    },
    "dragon_knight_breathe_fire": {
        "ID": "5226",
        "AbilityName": "dragon_knight_breathe_fire",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDamage": "90 170 240 300",
        "AbilityManaCost": "100 110 120 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "start_radius": "150 150 150 150"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "end_radius": "250 250 250 250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "650 650 650 650"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900 900"
            }
        }
    },
    "dragon_knight_dragon_tail": {
        "ID": "5227",
        "AbilityName": "dragon_knight_dragon_tail",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "150",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "9.0 9.0 9.0 9.0",
        "AbilityDamage": "25 50 75 100",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "2.5 2.75 3.0 3.25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "dragon_cast_range": "400"
            }
        }
    },
    "dragon_knight_dragon_blood": {
        "ID": "5228",
        "AbilityName": "dragon_knight_dragon_blood",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "2 3 4 5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "2 4 6 8"
            }
        }
    },
    "dragon_knight_elder_dragon_form": {
        "ID": "5229",
        "AbilityName": "dragon_knight_elder_dragon_form",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "115.0 115.0 115.0",
        "AbilityManaCost": "50 50 50",
        "AbilityModifierSupportValue": "0.35",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "60.0 60.0 60.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "25 25 25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_range": "372 372 372"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "0 5 14"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "corrosive_breath_damage": "20 20 20"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "corrosive_breath_duration": "5.0 5.0 5.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "splash_radius": "75 150 250"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "splash_damage_percent": "100 75 50"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "frost_bonus_movement_speed": "-30 -30 -30"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "frost_bonus_attack_speed": "-20 -20 -20"
            },
            "11": {
                "var_type": "FIELD_FLOAT",
                "frost_duration": "3.0 3.0 3.0"
            },
            "12": {
                "var_type": "FIELD_FLOAT",
                "frost_aoe": "250"
            }
        }
    },
    "dragon_knight_frost_breath": {
        "ID": "5232",
        "AbilityName": "dragon_knight_frost_breath",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "-20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            }
        }
    },
    "dazzle_poison_touch": {
        "ID": "5233",
        "AbilityName": "dazzle_poison_touch",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15 13 11 9",
        "AbilityManaCost": "100 115 130 145",
        "AbilityDamage": "8 16 24 32",
        "AbilityDuration": "8 9 10 10",
        "AbilityModifierSupportValue": "0.35",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "set_time": "1 2 3 3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow": "-33"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "1300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "should_stun": "0 0 1 1"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "duration_tooltip": "8 9 10 10"
            }
        }
    },
    "dazzle_shallow_grave": {
        "ID": "5234",
        "AbilityName": "dazzle_shallow_grave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "400 600 800 1000",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "60 45 30 15",
        "AbilityManaCost": "140 130 120 110",
        "AbilityDuration": "5 5 5 5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration_tooltip": "5 5 5 5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "range_tooltip": "400 600 800 1000"
            }
        }
    },
    "dazzle_shadow_wave": {
        "ID": "5235",
        "AbilityName": "dazzle_shadow_wave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12 10 8 6",
        "AbilityManaCost": "80 90 100 110",
        "AbilityDamage": "80 100 120 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bounce_radius": "475"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_radius": "170"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "max_targets": "3 3 4 5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "80 100 120 140"
            }
        }
    },
    "dazzle_weave": {
        "ID": "5236",
        "AbilityName": "dazzle_weave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "2000",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "40 40 40",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "575 575 575"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "vision": "800"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "armor_per_second": "1"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "12.0 18.0 24.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "radius_scepter": "775 775 775"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "duration_scepter": "18 24 30"
            }
        }
    },
    "rattletrap_battery_assault": {
        "ID": "5237",
        "AbilityName": "rattletrap_battery_assault",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "32.0 28.0 24.0 20.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilityDamage": "15 35 55 75",
        "AbilityModifierSupportValue": "0.2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 275 275 275"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.5 10.5 10.5 10.5"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "interval": "0.75 0.75 0.75 0.75"
            }
        }
    },
    "rattletrap_power_cogs": {
        "ID": "5238",
        "AbilityName": "rattletrap_power_cogs",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityManaCost": "50 60 70 80",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "190 190 190 190"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 4.0 5.0 6.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "drain_amount": "60 90 120 150"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attacks_to_destroy": "3 3 3 3"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "push_length": "252"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "push_speed": "300"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "spacing": "160 160 160 160"
            }
        }
    },
    "rattletrap_rocket_flare": {
        "ID": "5239",
        "AbilityName": "rattletrap_rocket_flare",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "0",
        "AbilityCooldown": "20.0 18.0 16.0 14.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilityDamage": "80 120 160 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "575 575 575 575"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0 10.0 10.0 10.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed": "1500 1500 1500 1500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "600"
            }
        }
    },
    "rattletrap_hookshot": {
        "ID": "5240",
        "AbilityName": "rattletrap_hookshot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "2000 2500 3000",
        "AbilityCooldown": "70.0 55.0 40.0",
        "AbilityManaCost": "150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "latch_radius": "125 125 125"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "stun_radius": "175 175 175"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.0 1.5 2.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "4000 5000 6000"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "2000 2500 3000"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 200 300"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "15.0 15.0 15.0"
            }
        }
    },
    "leshrac_split_earth": {
        "ID": "5241",
        "AbilityName": "leshrac_split_earth",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "750",
        "AbilityCastPoint": "0.7 0.7 0.7 0.7",
        "AbilityCooldown": "9 9 9 9",
        "AbilityManaCost": "100 125 140 160",
        "AbilityDamage": "120 180 240 300",
        "AbilityDuration": "2 2 2 2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "delay": "0.35"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "150 175 200 225"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "duration": "2"
            }
        }
    },
    "leshrac_diabolic_edict": {
        "ID": "5242",
        "AbilityName": "leshrac_diabolic_edict",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_BUILDING",
        "AbilityUnitDamageType": "DAMAGE_TYPE_COMPOSITE",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "22 22 22 22",
        "AbilityManaCost": "95 120 135 155",
        "AbilityDamage": "12.5 25 37.5 50",
        "AbilityDuration": "8 8 8 8",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "num_explosions": "32"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "500"
            }
        }
    },
    "leshrac_lightning_storm": {
        "ID": "5243",
        "AbilityName": "leshrac_lightning_storm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.7 0.7 0.7 0.7",
        "AbilityCooldown": "5.5 5.5 5.5 5.5",
        "AbilityManaCost": "100 115 130 145",
        "AbilityDamage": "80 145 205 265",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "jump_count": "4 6 7 8"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "650 650 650 650"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25 0.25 0.25 0.25"
            }
        }
    },
    "leshrac_pulse_nova": {
        "ID": "5244",
        "AbilityName": "leshrac_pulse_nova",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "1.0 1.0 1.0 1.0",
        "AbilityManaCost": "110 110 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_cost_per_second": "20 40 60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "450"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "66 100 144"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "88 133 177"
            }
        }
    },
    "furion_sprout": {
        "ID": "5245",
        "AbilityName": "furion_sprout",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "11 10 9 8",
        "AbilityManaCost": "100 120 140 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "vision_range": "1000"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.75 4.5 5.25"
            }
        }
    },
    "furion_teleportation": {
        "ID": "5246",
        "AbilityName": "furion_teleportation",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "3 3 3 3",
        "AbilityCooldown": "50 40 30 20",
        "AbilityManaCost": "50 50 50 50"
    },
    "furion_force_of_nature": {
        "ID": "5247",
        "AbilityName": "furion_force_of_nature",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityCastRange": "750",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "37 37 37 37",
        "AbilityManaCost": "160 160 160 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "150 225 300 375"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_treants": "2 3 4 5"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "60 60 60 60"
            }
        }
    },
    "furion_wrath_of_nature": {
        "ID": "5248",
        "AbilityName": "furion_wrath_of_nature",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "90 75 60",
        "AbilityManaCost": "150 200 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_targets": "16 16 16"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "140 180 225"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_percent_add": "7"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "max_targets_scepter": "18 18 18"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "155 210 275"
            }
        }
    },
    "life_stealer_rage": {
        "ID": "5249",
        "AbilityName": "life_stealer_rage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCastRange": "0",
        "AbilityCooldown": "15 15 15 15",
        "AbilityManaCost": "75 75 75 75",
        "AbilityDuration": "2.5 3.25 4 4.75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_bonus": "30 45 60 80"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.5 3.25 4 4.75"
            }
        }
    },
    "life_stealer_feast": {
        "ID": "5250",
        "AbilityName": "life_stealer_feast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "hp_leech_percent": "4 5 6 7"
        }}
    },
    "life_stealer_open_wounds": {
        "ID": "5251",
        "AbilityName": "life_stealer_feast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCastRange": "600",
        "AbilityCooldown": "24 20 16 12",
        "AbilityDuration": "8 8 8 8",
        "AbilityManaCost": "110 110 110 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_steps": "-70 -70 -60 -50 -30 -10 -10 -10"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "heal_percent": "15 20 25 30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow_tooltip": "70"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "duration": "8"
            }
        }
    },
    "life_stealer_infest": {
        "ID": "5252",
        "AbilityName": "life_stealer_infest",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "100 100 100",
        "AbilityManaCost": "50 50 50",
        "AbilityCastRange": "150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "700 700 700"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "150 275 400"
            }
        }
    },
    "life_stealer_consume": {
        "ID": "5253",
        "AbilityName": "life_stealer_consume",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_UNRESTRICTED",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0"
    },
    "dark_seer_vacuum": {
        "ID": "5255",
        "AbilityName": "dark_seer_vacuum",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "550",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "16.0 16.0 16.0 16.0",
        "AbilityManaCost": "100 130 160 190",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 375 475 575"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "0.4 0.4 0.4 0.4"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "40 80 120 160"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius_tree": "275"
            }
        }
    },
    "dark_seer_ion_shell": {
        "ID": "5256",
        "AbilityName": "dark_seer_ion_shell",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "10",
        "AbilityManaCost": "70 90 110 130",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_per_second": "30 50 70 90"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "20"
            }
        }
    },
    "dark_seer_surge": {
        "ID": "5257",
        "AbilityName": "dark_seer_surge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "12.0 11.0 10.0 9.0",
        "AbilityManaCost": "20 30 40 50",
        "AbilityModifierSupportValue": "2.5",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "3.0 4.5 6.0 7.5"
        }}
    },
    "dark_seer_wall_of_replica": {
        "ID": "5258",
        "AbilityName": "dark_seer_wall_of_replica",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500 900 1300",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityCooldown": "100.0 100.0 100.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 30.0 45.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "150 150 150"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "replica_damage_incoming": "300 300 300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "replica_damage_outgoing": "-30 -20 -10"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "width": "1000 1000 1000"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "replica_damage_outgoing_scepter": "0 20 40"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "tooltip_outgoing": "70 80 90"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "replica_scale": "0"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "tooltip_outgoing_scepter": "100 120 140"
            }
        }
    },
    "clinkz_strafe": {
        "ID": "5259",
        "AbilityName": "clinkz_strafe",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "60.0 50.0 40.0 30.0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "90 90 90 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 6.0 8.0 10.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_bonus_pct": "110 110 110 110"
            }
        }
    },
    "clinkz_searing_arrows": {
        "ID": "5260",
        "AbilityName": "clinkz_searing_arrows",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL | DOTA_UNIT_TARGET_BUILDING",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "8 8 8 8",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "damage_bonus": "20 30 40 50"
        }}
    },
    "clinkz_wind_walk": {
        "ID": "5261",
        "AbilityName": "clinkz_wind_walk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityCooldown": "20.0 20.0 20.0 20.0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0 25.0 30.0 35.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.6 0.6 0.6 0.6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "move_speed_bonus_pct": "11 22 33 44"
            }
        }
    },
    "clinkz_death_pact": {
        "ID": "5262",
        "AbilityName": "clinkz_death_pact",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS | DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "400",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "45.0 45.0 45.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "35.0 35.0 35.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_gain_pct": "50 65 80"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage_gain_pct": "5.0 6.5 8.0"
            }
        }
    },
    "omniknight_purification": {
        "ID": "5263",
        "AbilityName": "omniknight_purification",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "400 500 600 700",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "100 120 140 160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "heal": "90 180 270 360"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "225 225 225 225"
            }
        }
    },
    "omniknight_repel": {
        "ID": "5264",
        "AbilityName": "omniknight_repel",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilityModifierSupportValue": "3.0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "6.0 8.0 10.0 12.0"
        }}
    },
    "omniknight_degen_aura": {
        "ID": "5265",
        "AbilityName": "omniknight_degen_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityCastRange": "300",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "speed_bonus": "-7 -14 -21 -28"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "300 300 300 300"
            }
        }
    },
    "omniknight_guardian_angel": {
        "ID": "5266",
        "AbilityName": "omniknight_guardian_angel",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "150.0 150.0 150.0",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityManaCost": "125 175 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.0 6.0 7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_regen": "25 25 25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "600 600 600"
            }
        }
    },
    "enchantress_untouchable": {
        "ID": "5267",
        "AbilityName": "enchantress_untouchable",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityDuration": "3.0 3.0 3.0 3.0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "slow_attack_speed": "-20 -40 -60 -80"
        }}
    },
    "enchantress_enchant": {
        "ID": "5268",
        "AbilityName": "enchantress_enchant",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "30.0 25.0 20.0 15.0",
        "AbilityDuration": "5.5 5.5 5.5 5.5",
        "AbilityManaCost": "65 65 65 65",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed": "-20 -30 -40 -50"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "dominate_duration": "80.0 80.0 80.0 80.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "5.5 5.5 5.5 5.5"
            }
        }
    },
    "enchantress_natures_attendants": {
        "ID": "5269",
        "AbilityName": "enchantress_natures_attendants",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "45.0 45.0 45.0 45.0",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "125 140 155 170",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "heal_interval": "1.0 1.0 1.0 1.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "heal": "10.0 10.0 10.0 10.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 275 275 275"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "wisp_count": "3 5 7 9"
            }
        }
    },
    "enchantress_impetus": {
        "ID": "5270",
        "AbilityName": "enchantress_impetus",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "550",
        "AbilityCastPoint": "0.0 0.0 0.0",
        "AbilityCooldown": "0.0 0.0 0.0",
        "AbilityDuration": "1.5 1.5 1.5",
        "AbilityManaCost": "55 60 65",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "distance_damage_pct": "15.0 20.0 25.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "distance_damage_cap": "375 500 625"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_range_scepter": "165 165 165"
            }
        }
    },
    "huskar_inner_vitality": {
        "ID": "5271",
        "AbilityName": "huskar_inner_vitality",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "450",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "25 25 25 25",
        "AbilityDuration": "16 16 16 16",
        "AbilityManaCost": "170 170 170 170",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "heal": "2 4 6 8"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "attrib_bonus": "0.05 0.1 0.15 0.20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "hurt_attrib_bonus": "0.15 0.3 0.45 0.60"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "hurt_percent": "0.40"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "tooltip_attrib_bonus": "5 10 15 20"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_hurt_attrib_bonus": "15 30 45 60"
            }
        }
    },
    "huskar_burning_spear": {
        "ID": "5272",
        "AbilityName": "huskar_burning_spear",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "450",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "0.0 0.0 0.0 0.0",
        "AbilityDuration": "6 6 6 6",
        "AbilityDamage": "4 8 12 16",
        "AbilityManaCost": "0 0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "health_cost": "15"
        }}
    },
    "huskar_berserkers_blood": {
        "ID": "5273",
        "AbilityName": "huskar_berserkers_blood",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_bonus_per_stack": "3 6 9 12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_per_stack": "2 4 6 8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "missing_percent": "7"
            }
        }
    },
    "huskar_life_break": {
        "ID": "5274",
        "AbilityName": "huskar_life_break",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "45 30 15",
        "AbilityManaCost": "0 0 0",
        "AbilityCastRange": "550",
        "AbilityDuration": "5 5 5 ",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "health_cost_percent": ".35 .30 .25"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "health_damage": "0.50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movespeed": "-50"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "health_damage_scepter": "0.65"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "charge_speed": "1600"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "tooltip_health_cost_percent": "35 30 25"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "tooltip_health_damage": "50"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "24 16 8"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "tooltip_health_damage_scepter": "65"
            }
        }
    },
    "night_stalker_void": {
        "ID": "5275",
        "AbilityName": "night_stalker_void",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "525",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "8 8 8 8",
        "AbilityManaCost": "80 90 100 110",
        "AbilityDamage": "90 160 255 335",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration_day": "2.0 2.0 2.0 2.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_night": "4.0 4.0 4.0 4.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-50 -50 -50 -50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-35 -35 -35 -35"
            }
        }
    },
    "night_stalker_crippling_fear": {
        "ID": "5276",
        "AbilityName": "night_stalker_crippling_fear",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12 12 12 12",
        "AbilityManaCost": "90 90 90 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration_day": "3.0 3.0 3.0 3.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_night": "5.0 6.0 7.0 8.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "miss_rate_day": "10 10 10 10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "miss_rate_night": "40 40 40 40"
            }
        }
    },
    "night_stalker_hunter_in_the_night": {
        "ID": "5277",
        "AbilityName": "night_stalker_hunter_in_the_night",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed_pct_night": "20 25 30 35"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed_night": "30 45 60 75"
            }
        }
    },
    "night_stalker_darkness": {
        "ID": "5278",
        "AbilityName": "night_stalker_darkness",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "180 150 120",
        "AbilityManaCost": "0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "25.0 50.0 80.0"
        }}
    },
    "broodmother_spawn_spiderlings": {
        "ID": "5279",
        "AbilityName": "broodmother_spawn_spiderlings",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "120 120 120 120",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "buff_duration": "2.0 2.0 2.0 2.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "spiderling_duration": "60.0 60.0 60.0 60.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "75 150 225 300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "count": "1 2 3 3"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "1200"
            }
        }
    },
    "broodmother_poison_sting": {
        "ID": "5284",
        "AbilityName": "broodmother_poison_sting",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityModifierSupportBonus": "15",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "6.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_hero": "2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_per_second": "4"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "-15"
            }
        }
    },
    "broodmother_spawn_spiderite": {
        "ID": "5283",
        "AbilityName": "broodmother_spawn_spiderite",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "spiderite_duration": "60.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "buff_duration": "2.0"
            }
        }
    },
    "broodmother_spin_web": {
        "ID": "5280",
        "AbilityName": "broodmother_spin_web",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "30.0 30.0 30.0 30.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "650 650 650 650"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "count": "2 4 6 8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "heath_regen": "2 4 6 8"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed": "20 25 30 35"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "fade_delay": "2.0 2.0 2.0 2.0"
            }
        }
    },
    "broodmother_incapacitating_bite": {
        "ID": "5281",
        "AbilityName": "broodmother_incapacitating_bite",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "miss_chance": "10 15 20 25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed": "-10 -20 -30 -40"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "2 4 6 8"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.0 2.0 2.0 2.0"
            }
        }
    },
    "broodmother_insatiable_hunger": {
        "ID": "5282",
        "AbilityName": "broodmother_insatiable_hunger",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.2 0.2 0.2",
        "AbilityCooldown": "60.0 45.0 30.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "60 80 100"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "lifesteal_pct": "40 60 80"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "14.0 14.0 14.0"
            }
        }
    },
    "bounty_hunter_shuriken_toss": {
        "ID": "5285",
        "AbilityName": "bounty_hunter_shuriken_toss",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "650",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "90 115 135 155",
        "AbilityModifierSupportValue": "0.1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "100 200 250 325"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "speed": "1000 1000 1000 1000"
            }
        }
    },
    "bounty_hunter_jinada": {
        "ID": "5286",
        "AbilityName": "bounty_hunter_jinada",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "12.0 10.0 8.0 6.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_multiplier": "150 175 200 225"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed": "-25 -25 -25 -25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_attackspeed": "-25 -25 -25 -25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.0 3.0 3.0"
            }
        }
    },
    "bounty_hunter_wind_walk": {
        "ID": "5287",
        "AbilityName": "bounty_hunter_wind_walk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCooldown": "15.0 15.0 15.0 15.0",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 20.0 25.0 30.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "1.0 0.75 0.5 0.25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "30 60 90 120"
            }
        }
    },
    "bounty_hunter_track": {
        "ID": "5288",
        "AbilityName": "bounty_hunter_track",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "900 1050 1200",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "10.0 7.0 5.0",
        "AbilityManaCost": "70 60 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_move_speed_pct": "20 20 20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "-1 -3 -5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold_radius": "925 925 925"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold_self": "150 200 250"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold": "50 100 150"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "duration": "30.0 30.0 30.0"
            }
        }
    },
    "weaver_the_swarm": {
        "ID": "5289",
        "AbilityName": "weaver_the_swarm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "3000",
        "AbilityCooldown": "36.0 33.0 30.0 27.0",
        "AbilityManaCost": "100 100 100 100",
        "AbilityModifierSupportValue": "0.2",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "15 20 25 30"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "attack_rate": "1.5 1.5 1.5 1.5"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 12.0 16.0 20.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "count": "12 12 12 12"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "1 1 1 1"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "destroy_attacks": "8 8 8 8"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "radius": "100 100 100 100"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "speed": "600 600 600 600"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "spawn_radius": "300 300 300 300"
            }
        }
    },
    "weaver_shukuchi": {
        "ID": "5290",
        "AbilityName": "weaver_shukuchi",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "12.0 10.0 8.0 6.0",
        "AbilityManaCost": "60 60 60 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "90 100 110 120"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "175 175 175 175"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.25 0.25 0.25 0.25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 4.0 4.0 4.0"
            }
        }
    },
    "weaver_geminate_attack": {
        "ID": "5291",
        "AbilityName": "weaver_geminate_attack",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "6.0 5.0 4.0 2.5"
    },
    "weaver_time_lapse": {
        "ID": "5292",
        "AbilityName": "weaver_time_lapse",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "60 50 40",
        "AbilityManaCost": "150 75 0"
    },
    "jakiro_dual_breath": {
        "ID": "5297",
        "AbilityName": "jakiro_dual_breath",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.65 0.65 0.65 0.65",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityDamage": "35 70 105 140",
        "AbilityManaCost": "135 140 155 170",
        "AbilityModifierSupportValue": "0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "start_radius": "200 200 200 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "end_radius": "250 250 250 250"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "700 700 700 700"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "1000 1000 1000 1000"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "fire_delay": "0.3 0.3 0.3 0.3"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "burn_damage": "5 10 15 20"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed_pct": "-30 -30 -30 -30"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed_pct": "-20 -20 -20 -20"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "tooltip_duration": "4 4 4 4"
            }
        }
    },
    "jakiro_ice_path": {
        "ID": "5298",
        "AbilityName": "jakiro_ice_path",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "1100",
        "AbilityCastPoint": "0.65 0.65 0.65 0.65",
        "AbilityCooldown": "12.0 11.0 10.0 9.0",
        "AbilityDuration": "1.0 1.33 1.66 2.0",
        "AbilityDamage": "0 0 0 0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "path_delay": "0.5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "path_radius": "150"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "1.0 1.33 1.66 2.0"
            }
        }
    },
    "jakiro_liquid_fire": {
        "ID": "5299",
        "AbilityName": "jakiro_liquid_fire",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "20 15 10 5",
        "AbilityDuration": "5.0 5.0 5.0 5.0",
        "AbilityModifierSupportBonus": "35",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_attack_speed_pct": "-20 -30 -40 -50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "175 175 175 175"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "10 15 20 25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "tooltip_duration": "5 5 5 5"
            }
        }
    },
    "jakiro_macropyre": {
        "ID": "5300",
        "AbilityName": "jakiro_macropyre",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.65 0.65 0.65 0.65",
        "AbilityCooldown": "60 60 60",
        "AbilityDuration": "7.0 7.0 7.0",
        "AbilityManaCost": "220 330 440",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "path_radius": "225"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 140 180"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "burn_interval": "0.5 0.5 0.5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "tooltip_duration": "7 7 7"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "125 175 225"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "1350 1350 1350"
            }
        }
    },
    "batrider_sticky_napalm": {
        "ID": "5320",
        "AbilityName": "batrider_sticky_napalm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "3.0 3.0 3.0 3.0",
        "AbilityManaCost": "20 20 20 20",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "10 15 20 25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "375 375 375 375"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "-3 -5 -7 -9"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "turn_rate_pct": "-70 -70 -70 -70"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "max_stacks": "10 10 10 10"
            }
        }
    },
    "batrider_flamebreak": {
        "ID": "5321",
        "AbilityName": "batrider_flamebreak",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "11.0 11.0 11.0 11.0",
        "AbilityManaCost": "80 100 120 140",
        "AbilityModifierSupportValue": "1.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "75 150 225 300"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "explosion_radius": "375 375 375 375"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "collision_radius": "100 100 100 100"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "0.5 0.5 0.5 0.5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "speed": "900 900 900 900"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "knockback_distance": "300 300 300 300"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "knockback_height": "100 100 100 100"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "knockback_duration": "0.25 0.25 0.25 0.25"
            }
        }
    },
    "batrider_firefly": {
        "ID": "5322",
        "AbilityName": "batrider_firefly",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCooldown": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_per_second": "20 40 60 80"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 15.0 15.0 15.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "tick_interval": "0.5 0.5 0.5 0.5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "tree_radius": "100 100 100 100"
            }
        }
    },
    "batrider_flaming_lasso": {
        "ID": "5323",
        "AbilityName": "batrider_flaming_lasso",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "175",
        "AbilityCooldown": "90.0 70.0 50.0",
        "AbilityManaCost": "150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.5 4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "drag_distance": "300 300 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "break_distance": "400 400 400"
            }
        }
    },
    "chen_penitence": {
        "ID": "5328",
        "AbilityName": "chen_penitence",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "7.0 7.0 7.0 7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "speed": "2000 2000 2000 2000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "-8 -16 -24 -32"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_taken": "7 14 21 28"
            }
        }
    },
    "chen_test_of_faith": {
        "ID": "5329",
        "AbilityName": "chen_test_of_faith",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCooldown": "24.0 24.0 24.0 24.0",
        "AbilityManaCost": "175 175 175 175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_min": "50 100 150 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_max": "100 200 300 400"
            }
        }
    },
    "chen_holy_persuasion": {
        "ID": "5330",
        "AbilityName": "chen_holy_persuasion",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "900 900 900 900",
        "AbilityCooldown": "30.0 26.0 22.0 18.0",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_units": "1 1 2 3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_bonus": "75 150 225 300"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "hero_teleport_delay": "6.0 5.0 4.0 3.0"
            }
        }
    },
    "chen_hand_of_god": {
        "ID": "5331",
        "AbilityName": "chen_hand_of_god",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "120.0 120.0 120.0",
        "AbilityManaCost": "200 300 400",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "heal_amount": "200 300 400"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "30.0 30.0 30.0"
            }
        }
    },
    "spectre_spectral_dagger": {
        "ID": "5334",
        "AbilityName": "spectre_spectral_dagger",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "2000 2000 2000 2000",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "16.0 16.0 16.0 16.0",
        "AbilityManaCost": "130 140 150 160",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "50 100 150 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed": "5 9 14 18"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "dagger_path_duration": "12.0 12.0 12.0 12.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "hero_path_duration": "7.0 7.0 7.0 7.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "buff_persistence": "4.0 4.0 4.0 4.0"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "dagger_radius": "125 125 125 125"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "path_radius": "175 175 175 175"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "500 500 500 500"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "speed": "857 857 857 857"
            }
        }
    },
    "spectre_desolate": {
        "ID": "5335",
        "AbilityName": "spectre_desolate",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20 30 40 50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "325 325 325 325"
            }
        }
    },
    "spectre_dispersion": {
        "ID": "5336",
        "AbilityName": "spectre_dispersion",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "min_radius": "300 300 300 300"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_radius": "1000 1000 1000 1000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_reflection_pct": "10 14 18 22"
            }
        }
    },
    "spectre_haunt": {
        "ID": "5337",
        "AbilityName": "spectre_haunt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "120.0 120.0 120.0",
        "AbilityManaCost": "150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.0 6.0 7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_incoming": "100 100 100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage_outgoing": "-60 -60 -60"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "attack_delay": "1.0 1.0 1.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "tooltip_outgoing": "40 40 40"
            }
        }
    },
    "spectre_reality": {
        "ID": "5338",
        "AbilityName": "spectre_reality",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "MaxLevel": "1",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0"
    },
    "doom_bringer_devour": {
        "ID": "5339",
        "AbilityName": "doom_bringer_devour",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "300 300 300 300",
        "AbilityCooldown": "60.0 55.0 50.0 45.0",
        "AbilityManaCost": "60 60 60 60",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "creep_level": "2 4 5 6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold": "40 60 80 100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "health_per_second": "20 20 20 20"
            }
        }
    },
    "doom_bringer_scorched_earth": {
        "ID": "5340",
        "AbilityName": "doom_bringer_scorched_earth",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCooldown": "60.0 55.0 50.0 45.0",
        "AbilityManaCost": "60 65 70 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_per_second": "12 16 20 24"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "600 600 600 600"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed_pct": "16 16 16 16"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0 12.0 14.0 16.0"
            }
        }
    },
    "doom_bringer_lvl_death": {
        "ID": "5341",
        "AbilityName": "doom_bringer_lvl_death",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityManaCost": "110 110 110 110",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 150 200 250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "lvl_bonus_damage": "275 275 275 275"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "lvl_bonus_multiple": "6 5 4 3"
            }
        }
    },
    "doom_bringer_doom": {
        "ID": "5342",
        "AbilityName": "doom_bringer_doom",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCastRange": "550 550 550",
        "AbilityCooldown": "110.0 110.0 110.0",
        "AbilityManaCost": "150 200 250",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "13.0 13.0 13.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "30 50 70"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration_scepter": "14.0 14.0 14.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_scepter": "50 80 110"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "deniable_pct": "25 25 25"
            }
        }
    },
    "doom_bringer_empty1": {
        "ID": "5343",
        "AbilityName": "doom_bringer_empty",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "doom_bringer_empty2": {
        "ID": "5344",
        "AbilityName": "doom_bringer_empty",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "ancient_apparition_cold_feet": {
        "ID": "5345",
        "AbilityName": "ancient_apparition_cold_feet",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700 700 700 700",
        "AbilityCastPoint": "0.01 0.01 0.01 0.01",
        "AbilityCooldown": "15.0 13.0 11.0 9.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityManaCost": "150 150 150 150",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage": "37.5 50 62.5 75"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "break_distance": "740 740 740 740"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.25 2.0 2.75 3.5"
            }
        }
    },
    "ancient_apparition_ice_vortex": {
        "ID": "5346",
        "AbilityName": "ancient_apparition_ice_vortex",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "1500 1500 1500 1500",
        "AbilityCastPoint": "0.01 0.01 0.01 0.01",
        "AbilityCooldown": "6.0 6.0 6.0 6.0",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "80 90 100 110",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "275 275 275 275"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed_pct": "-18 -22 -26 -30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "spell_resist_pct": "10 15 20 25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_aoe": "200 200 200 200"
            }
        }
    },
    "ancient_apparition_chilling_touch": {
        "ID": "5347",
        "AbilityName": "ancient_apparition_chilling_touch",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800 800 800 800",
        "AbilityCastPoint": "0.01 0.01 0.01 0.01",
        "AbilityCooldown": "50.0 46.0 42.0 38.0",
        "AbilityDuration": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "140 140 140 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "450 450 450 450"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_attacks": "2 3 4 5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "40 50 60 70"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_pct": "-15 -15 -15 -15"
            }
        }
    },
    "ancient_apparition_ice_blast": {
        "ID": "5348",
        "AbilityName": "ancient_apparition_ice_blast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.01 0.01 0.01",
        "AbilityCastRange": "0",
        "AbilityCooldown": "45.0 45.0 45.0",
        "AbilityManaCost": "100 125 150",
        "AbilityDamage": "250 350 450",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius_min": "225 225 225"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "radius_grow": "50.0 50.0 50.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius_max": "1000 1000 1000"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "path_radius": "275 275 275"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "frostbite_duration": "8.0 9.0 10.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "dot_damage": "12.5 20.0 32.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "speed": "1500 1500 1500 1500"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "kill_pct": "10.0 11.0 12.0"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "target_sight_radius": "500 500 500"
            }
        }
    },
    "ancient_apparition_ice_blast_release": {
        "ID": "5349",
        "AbilityName": "ancient_apparition_ice_blast_release",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "MaxLevel": "1",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "1.0 1.0 1.0"
    },
    "spirit_breaker_charge_of_darkness": {
        "ID": "5353",
        "AbilityName": "spirit_breaker_charge_of_darkness",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastPoint": "0.47 0.47 0.47 0.47",
        "AbilityCastRange": "0",
        "AbilityCooldown": "35",
        "AbilityManaCost": "100 100 100 100",
        "AbilityModifierSupportValue": ".30",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "425 500 575 650"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.2 1.6 2.0 2.4"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "debuff_range": "3000 3000 3000 3000"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bash_radius": "300 300 300 300"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "400 400 400 400"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "0.94 0.94 0.94 0.94"
            }
        }
    },
    "spirit_breaker_empowering_haste": {
        "ID": "5354",
        "AbilityName": "spirit_breaker_empowering_haste",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed_pct": "6 8 10 12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "4 8 12 16"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "aura_radius": "900 900 900 900"
            }
        }
    },
    "spirit_breaker_greater_bash": {
        "ID": "5355",
        "AbilityName": "spirit_breaker_greater_bash",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "1.5 1.5 1.5 1.5",
        "AbilityModifierSupportBonus": "40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "chance_pct": "17 17 17 17"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage": "25 50 75 100"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "0.95 1.15 1.35 1.55"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "knockback_duration": "0.5 0.5 0.5 0.5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "knockback_distance": "100 100 100 100"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "knockback_height": "50 50 50 50"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed_pct": "15 15 15 15"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "movespeed_duration": "3.0 3.0 3.0 3.0"
            }
        }
    },
    "spirit_breaker_nether_strike": {
        "ID": "5356",
        "AbilityName": "spirit_breaker_nether_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.47 0.47 0.47",
        "AbilityCastRange": "400 550 700",
        "AbilityCooldown": "75.0 75.0 75.0",
        "AbilityManaCost": "125 150 175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "150 250 350"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "1.0 1.0 1.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "tooltip_range": "400 550 700"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "550 700 850"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bash_radius_scepter": "250 250 250"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "20.0 20.0 20.0"
            }
        }
    },
    "ursa_earthshock": {
        "ID": "5357",
        "AbilityName": "ursa_earthshock",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "6.0 6.0 6.0 6.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityDamage": "90 140 190 240",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "shock_radius": "385"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "-25 -35 -45 -55"
            }
        }
    },
    "ursa_overpower": {
        "ID": "5358",
        "AbilityName": "ursa_overpower",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityDuration": "15.0 15.0 15.0 15.0",
        "AbilityManaCost": "45 55 65 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_attacks": "3 4 5 6"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_bonus_pct": "400 400 400 400"
            }
        }
    },
    "ursa_fury_swipes": {
        "ID": "5359",
        "AbilityName": "ursa_fury_swipes",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "bonus_reset_time": "6.0 6.0 6.0 6.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_per_stack": "15 20 25 30"
            }
        }
    },
    "ursa_enrage": {
        "ID": "5360",
        "AbilityName": "ursa_enrage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.0 0.0 0.0",
        "AbilityCooldown": "25.0 25.0 25.0",
        "AbilityDuration": "15.0 15.0 15.0",
        "AbilityManaCost": "0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "life_damage_bonus_percent": "5 6 7"
        }}
    },
    "gyrocopter_rocket_barrage": {
        "ID": "5361",
        "AbilityName": "gyrocopter_rocket_barrage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "7.0 6.5 6 5.5",
        "AbilityDuration": "3 3 3 3",
        "AbilityDamage": "11 14 17 20",
        "AbilityManaCost": "90 90 90 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "rockets_per_second": "10"
            }
        }
    },
    "gyrocopter_homing_missile": {
        "ID": "5362",
        "AbilityName": "gyrocopter_homing_missile",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1050",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "20 17 14 11",
        "AbilityManaCost": "120 130 140 150",
        "AbilityDamage": "110 220 330 440",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "2.5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_bonus_pct": "400 400 400 400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "min_damage": "50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "max_distance": "2000"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "pre_flight_time": "3"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "hero_damage": "34"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "speed": "340"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "acceleration": "20"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "enemy_vision_time": "4"
            }
        }
    },
    "gyrocopter_flak_cannon": {
        "ID": "5363",
        "AbilityName": "gyrocopter_flak_cannon",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "20 20 20 20",
        "AbilityManaCost": "50 50 50 50",
        "AbilityDuration": "15 15 15 15",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "800"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_attacks": "3 4 5 6"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "800"
            }
        }
    },
    "gyrocopter_call_down": {
        "ID": "5364",
        "AbilityName": "gyrocopter_call_down",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "55 50 45",
        "AbilityManaCost": "125 125 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_duration_first": "2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow_duration_second": "3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_first": "250 300 350"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_second": "100 150 200"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "slow_first": "20"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "slow_second": "50"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "radius": "400"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "range_scepter": "0"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "damage_second_scepter": "175 225 275"
            }
        }
    },
    "alchemist_acid_spray": {
        "ID": "5365",
        "AbilityName": "alchemist_acid_spray",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_COMPOSITE",
        "AbilityCastPoint": "0.2",
        "AbilityCastRange": "900",
        "AbilityCooldown": "22.0",
        "AbilityManaCost": "160",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "625"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "16.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "8 16 24 32"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "3 4 5 6"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "tick_rate": "1.0"
            }
        }
    },
    "alchemist_unstable_concoction": {
        "ID": "5366",
        "AbilityName": "alchemist_unstable_concoction",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "16.0",
        "AbilityManaCost": "120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "brew_time": "5.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "brew_explosion": "7.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "min_stun": "0.25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "max_stun": "1.75 2.5 3.25 4.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "min_damage": "0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "max_damage": "130 200 270 340"
            }
        }
    },
    "alchemist_unstable_concoction_throw": {
        "ID": "5367",
        "AbilityName": "alchemist_unstable_concoction_throw",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityCastRange": "775",
        "AbilityCastPoint": "0.2",
        "AbilityModifierSupportBonus": "120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "brew_time": "5.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "min_stun": "0.25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "max_stun": "1.75 2.5 3.25 4.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "min_damage": "0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "max_damage": "130 200 270 340"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "900"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "vision_range": "400"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "midair_explosion_radius": "175"
            }
        }
    },
    "alchemist_goblins_greed": {
        "ID": "5368",
        "AbilityName": "alchemist_goblins_greed",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold": "2 4 6 8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_bonus_gold": "2"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_gold_cap": "26"
            }
        }
    },
    "alchemist_chemical_rage": {
        "ID": "5369",
        "AbilityName": "alchemist_chemical_rage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "45.0",
        "AbilityManaCost": "50 100 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "25.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "transformation_time": "0.35"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "base_attack_time": "1.45 1.3 1.15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_health": "300 600 900"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_health_regen": "15 30 60"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "bonus_mana_regen": "3.0 7.5 12.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bonus_movespeed": "30 40 60"
            }
        }
    },
    "invoker_quas": {
        "ID": "5370",
        "AbilityName": "invoker_quas",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "7",
        "AbilityCooldown": "0",
        "AbilityManaCost": "0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "health_regen_per_instance": "1.0 2.0 3.0 4.0 5.0 6.0 7.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_strength": "2 4 6 8 10 12 14"
            }
        }
    },
    "invoker_wex": {
        "ID": "5371",
        "AbilityName": "invoker_wex",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "7",
        "AbilityCooldown": "0",
        "AbilityManaCost": "0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_per_instance": "2 4 6 8 10 12 14"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "move_speed_per_instance": "1 2 3 4 5 6 7"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_agility": "2 4 6 8 10 12 14"
            }
        }
    },
    "invoker_exort": {
        "ID": "5372",
        "AbilityName": "invoker_exort",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "7",
        "AbilityCooldown": "0",
        "AbilityManaCost": "0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_per_instance": "3 6 9 12 15 18 21"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_intelligence": "2 4 6 8 10 12 14"
            }
        }
    },
    "invoker_empty1": {
        "ID": "5373",
        "AbilityName": "invoker_empty1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "invoker_empty2": {
        "ID": "5374",
        "AbilityName": "invoker_empty2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "invoker_invoke": {
        "ID": "5375",
        "AbilityName": "invoker_invoke",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "MaxLevel": "4",
        "AbilityCooldown": "22 17 12 5",
        "AbilityManaCost": "20 40 60 80",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_invoked_spells": "1 2 2 2"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "16 8 4 2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mana_cost_scepter": "0"
            }
        }
    },
    "invoker_cold_snap": {
        "ID": "5376",
        "AbilityName": "invoker_cold_snap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "Y",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "20",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.5 4.0 4.5 5.0 5.5 6.0",
                "levelkey": "quaslevel"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "initial_freeze_damage": "60.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "freeze_duration": "0.4"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "freeze_cooldown": "0.77 0.74 0.71 0.69 0.66 0.63 0.60",
                "levelkey": "quaslevel"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "freeze_damage": "30.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "damage_trigger": "10.0"
            }
        }
    },
    "invoker_ghost_walk": {
        "ID": "5381",
        "AbilityName": "invoker_ghost_walk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "MaxLevel": "1",
        "HotKeyOverride": "V",
        "AbilityCooldown": "60",
        "AbilityManaCost": "200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "400"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "enemy_slow": "-20 -23 -26 -30 -33 -36 -40",
                "levelkey": "quaslevel"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "self_slow": "-30 -25 -20 -15 -10 -5 0",
                "levelkey": "wexlevel"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "100.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "aura_fade_time": "2.0"
            }
        }
    },
    "invoker_tornado": {
        "ID": "5382",
        "AbilityName": "invoker_tornado",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "X",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "2000",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "30",
        "AbilityManaCost": "150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "travel_distance": "800 1200 1600 2000 2400 2800 3200",
                "levelkey": "wexlevel"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "travel_speed": "1000"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "200"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_distance": "1200"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "end_vision_duration": "1.75"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "lift_duration": "0.8 1.1 1.4 1.7 2.0 2.3 2.5",
                "levelkey": "quaslevel"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "base_damage": "70"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "quas_damage": "20 40 60 80 100 120 140",
                "levelkey": "quaslevel"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "wex_damage": "20 40 60 80 100 120 140",
                "levelkey": "wexlevel"
            }
        }
    },
    "invoker_emp": {
        "ID": "5383",
        "AbilityName": "invoker_emp",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AOE",
        "MaxLevel": "1",
        "HotKeyOverride": "C",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "950",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "30",
        "AbilityManaCost": "125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "delay": "3.7 3.4 3.15 2.85 2.6 2.3 2",
                "levelkey": "wexlevel"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "675"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "mana_burned": "100 150 200 250 300 350 400",
                "levelkey": "wexlevel"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_per_mana_pct": "50"
            }
        }
    },
    "invoker_alacrity": {
        "ID": "5384",
        "AbilityName": "invoker_alacrity",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "MaxLevel": "1",
        "HotKeyOverride": "Z",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "650",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "15",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "20 30 40 50 60 70 80",
                "levelkey": "wexlevel"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20 30 40 50 60 70 80",
                "levelkey": "exortlevel"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "9"
            }
        }
    },
    "invoker_chaos_meteor": {
        "ID": "5385",
        "AbilityName": "invoker_chaos_meteor",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "D",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "55",
        "AbilityManaCost": "200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "land_time": "1.3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "travel_distance": "465 615 780 930 1095 1245 1410",
                "levelkey": "wexlevel"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "travel_speed": "300"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "275"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "damage_interval": "0.5"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "vision_distance": "500"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "end_vision_duration": "3.0"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "main_damage": "57.5 75 92.5 110 127.5 145 162.5",
                "levelkey": "exortlevel"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "burn_duration": "3.0"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "burn_dps": "11.5 15 18.5 22 25.5 29 32.5",
                "levelkey": "exortlevel"
            }
        }
    },
    "invoker_sun_strike": {
        "ID": "5386",
        "AbilityName": "invoker_sun_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_AOE",
        "MaxLevel": "1",
        "HotKeyOverride": "T",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "0",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "30",
        "AbilityManaCost": "175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "area_of_effect": "175"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "delay": "1.7"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage": "100 162.5 225 287.5 350 412.5 475",
                "levelkey": "exortlevel"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "vision_distance": "400"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "4.0"
            }
        }
    },
    "invoker_forge_spirit": {
        "ID": "5387",
        "AbilityName": "invoker_forge_spirit",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "F",
        "AbilityCooldown": "30",
        "AbilityManaCost": "75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "spirit_damage": "29 38 47 56 65 74 83",
                "levelkey": "exortlevel"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "spirit_hp": "300 400 500 600 700 800 900",
                "levelkey": "exortlevel"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "spirit_armor": "2 3 4 5 6 7 8",
                "levelkey": "exortlevel"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "spirit_attack_range": "300 400 500 600 700 800 900",
                "levelkey": "quaslevel"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "spirit_mana": "100 150 200 250 300 350 400",
                "levelkey": "quaslevel"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "spirit_duration": "20 30 40 50 60 70 80",
                "levelkey": "quaslevel"
            }
        }
    },
    "forged_spirit_melting_strike": {
        "ID": "5388",
        "AbilityName": "forged_spirit_melting_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "AbilityManaCost": "40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "armor_removed": "1"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_armor_removed": "10"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "5"
            }
        }
    },
    "invoker_ice_wall": {
        "ID": "5389",
        "AbilityName": "invoker_ice_wall",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "G",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "25",
        "AbilityManaCost": "175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 4.5 6.0 7.5 9.0 10.5 12.0",
                "levelkey": "quaslevel"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "slow": "-20 -40 -60 -80 -100 -120 -140",
                "levelkey": "quaslevel"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "damage_per_second": "6 12 18 24 30 36 42",
                "levelkey": "exortlevel"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "wall_place_distance": "200"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "num_wall_elements": "15"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "wall_element_spacing": "80"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "wall_element_radius": "105"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "2.0"
            }
        }
    },
    "invoker_deafening_blast": {
        "ID": "5390",
        "AbilityName": "invoker_deafening_blast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "HotKeyOverride": "B",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1000",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "40",
        "AbilityManaCost": "200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "travel_distance": "1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "travel_speed": "1100"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius_start": "175"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius_end": "225"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "vision_distance": "1200"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "end_vision_duration": "1.75"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "damage": "40 80 120 160 200 240 280",
                "levelkey": "exortlevel"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "knockback_duration": "0.25 0.5 0.75 1.0 1.25 1.5 1.75",
                "levelkey": "quaslevel"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "disarm_duration": "1.0 1.5 2.0 2.5 3.0 3.5 4.0",
                "levelkey": "wexlevel"
            }
        }
    },
    "silencer_curse_of_the_silent": {
        "ID": "5377",
        "AbilityName": "silencer_curse_of_the_silent",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "20.0 18.0 16.0 14.0",
        "AbilityDuration": "5.0 6.0 7.0 8.0",
        "AbilityManaCost": "75 95 115 135",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_damage": "10 15 20 25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_damage": "20 30 40 50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "350 350 350 350"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "tooltip_duration": "5 6 7 8"
            }
        }
    },
    "silencer_glaives_of_wisdom": {
        "ID": "5378",
        "AbilityName": "silencer_glaives_of_wisdom",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityDuration": "0.0 0.0 0.0 0.0",
        "AbilityCastRange": "600",
        "AbilityManaCost": "15 15 15 15",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "intellect_damage_pct": "30.0 45.0 60.0 75.0"
        }}
    },
    "silencer_last_word": {
        "ID": "5379",
        "AbilityName": "silencer_last_word",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityDuration": "0.75 1.5 2.25 3.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "750 750 750 750"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "0.75 1.5 2.25 3.0"
            }
        }
    },
    "silencer_global_silence": {
        "ID": "5380",
        "AbilityName": "silencer_global_silence",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "160.0 160.0 160.0",
        "AbilityDuration": "3.0 4.0 5.0",
        "AbilityManaCost": "250 350 450",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "tooltip_duration": "3.0 4.0 5.0"
        }}
    },
    "obsidian_destroyer_arcane_orb": {
        "ID": "5391",
        "AbilityName": "obsidian_destroyer_arcane_orb",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCastRange": "450",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "mana_pool_damage_pct": "6.0 7.0 8.0 9.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "illusion_damage": "100 200 300 400"
            }
        }
    },
    "obsidian_destroyer_astral_imprisonment": {
        "ID": "5392",
        "AbilityName": "obsidian_destroyer_astral_imprisonment",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY | DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO | DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityDuration": "1.0 2.0 3.0 4.0",
        "AbilityCooldown": "18.0 16.0 14.0 12.0",
        "AbilityCastRange": "550",
        "AbilityCastPoint": "0.25 0.25 0.25 0.25",
        "AbilityManaCost": "120 140 160 180",
        "AbilityModifierSupportValue": "0.5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "int_steal": "2 4 6 8"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "steal_duration": "60.0 60.0 60.0 60.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "prison_duration": "1.0 2.0 3.0 4.0"
            }
        }
    },
    "obsidian_destroyer_essence_aura": {
        "ID": "5393",
        "AbilityName": "obsidian_destroyer_essence_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "1000 1000 1000 1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_mana": "75 150 225 300"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "restore_chance": "10 20 30 40"
            }
        }
    },
    "obsidian_destroyer_sanity_eclipse": {
        "ID": "5394",
        "AbilityName": "obsidian_destroyer_sanity_eclipse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastRange": "600 650 700",
        "AbilityCastPoint": "0.25 0.25 0.25",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "160.0 160.0 160.0",
        "AbilityManaCost": "175 250 325",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "375 475 575"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "cast_range": "600 650 700"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_multiplier": "8 9 10"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "int_threshold": "10 30 50"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "cast_range_scepter": "700 750 800"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage_multiplier_scepter": "9 10 11"
            }
        }
    },
    "lycan_summon_wolves": {
        "ID": "5395",
        "AbilityName": "lycan_summon_wolves",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "30.0 30.0 30.0 30.0",
        "AbilityManaCost": "125 125 125 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "wolf_index": "1 2 3 4"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "wolf_duration": "55.0 55.0 55.0 55.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "wolf_bat": "1.25 1.2 1.15 1.1"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "wolf_damage": "18 29 37 46"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "wolf_hp": "400 450 500 550"
            }
        }
    },
    "lycan_howl": {
        "ID": "5396",
        "AbilityName": "lycan_howl",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "50.0 45.0 40.0 35.0",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "15 20 25 30",
        "AbilityModifierSupportBonus": "5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "howl_duration": "12.0 12.0 12.0 12.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "hero_bonus_damage": "20 30 40 50"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "unit_bonus_damage": "4 8 12 16"
            }
        }
    },
    "lycan_feral_impulse": {
        "ID": "5397",
        "AbilityName": "lycan_feral_impulse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15 20 25 30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "15 20 25 30"
            }
        }
    },
    "lycan_shapeshift": {
        "ID": "5398",
        "AbilityName": "lycan_shapeshift",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "100.0 70.0 40.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "18.0 18.0 18.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "base_attack_time": "1.5 1.5 1.5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "30 30 30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "crit_damage": "170 170 170"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_hp": "100 200 300"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "bonus_night_vision": "1000"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "2"
            }
        }
    },
    "lycan_summon_wolves_critical_strike": {
        "ID": "5399",
        "AbilityName": "lycan_summon_wolves_critical_strike",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_damage": "170"
            }
        }
    },
    "lycan_summon_wolves_invisibility": {
        "ID": "5500",
        "AbilityName": "lycan_summon_wolves_invisibility",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.0 0.0 0.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_delay": "3.0 2.25 1.5"
            }
        }
    },
    "lone_druid_spirit_bear": {
        "ID": "5412",
        "AbilityName": "lone_druid_spirit_bear",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "180.0 160.0 140.0 120.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bear_hp": "1400 1800 2300 2700"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "bear_bat": "1.75 1.65 1.55 1.45"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bear_armor": "3 4 5 6"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "backlash_damage": "100.0 200.0 300.0 400.0"
            }
        }
    },
    "lone_druid_rabid": {
        "ID": "5413",
        "AbilityName": "lone_druid_rabid",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "30.0 30.0 30.0 30.0",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "10 20 30 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_move_speed": "5 10 15 20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "rabid_duration": "10.0 10.0 10.0 10.0"
            }
        }
    },
    "lone_druid_synergy": {
        "ID": "5414",
        "AbilityName": "lone_druid_synergy",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bear_bonus_damage": "10 20 30 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bear_bonus_speed": "10 20 30 40"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "rabid_duration_bonus": "10.0 20.0 30.0 40.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "true_form_hp_bonus": "100 200 300 400"
            }
        }
    },
    "lone_druid_true_form": {
        "ID": "5415",
        "AbilityName": "lone_druid_true_form",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "0.0 0.0 0.0",
        "AbilityCastPoint": "0 0 0",
        "AbilityManaCost": "25 25 25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "base_attack_time": "1.5 1.5 1.5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "4 6 8"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_hp": "250 400 600"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed_loss": "35 35 35"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "transformation_time": "1.933"
            }
        }
    },
    "lone_druid_true_form_druid": {
        "ID": "5416",
        "AbilityName": "lone_druid_true_form",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "0.0 0.0 0.0",
        "AbilityManaCost": "25 25 25",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "transformation_time": "1.933"
        }}
    },
    "lone_druid_true_form_battle_cry": {
        "ID": "5417",
        "AbilityName": "lone_druid_true_form_battle_cry",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_TYPE_ULTIMATE | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "3",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "30.0 30.0 30.0",
        "AbilityDuration": "50.0 50.0 50.0",
        "AbilityManaCost": "50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "20 40 60"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "2 4 6"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "cry_duration": "8.0 8.0 8.0"
            }
        }
    },
    "lone_druid_spirit_bear_return": {
        "ID": "5418",
        "AbilityName": "lone_druid_spirit_bear_return",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "5.0",
        "AbilityManaCost": "0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "return_damage_cooldown": "3"
        }}
    },
    "lone_druid_spirit_bear_entangle": {
        "ID": "5419",
        "AbilityName": "lone_druid_spirit_bear_entangle",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityDamage": "60",
        "AbilityCooldown": "5.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "entangle_chance": "20"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "hero_duration": "3.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "creep_duration": "9.0"
            }
        }
    },
    "lone_druid_spirit_bear_demolish": {
        "ID": "5420",
        "AbilityName": "lone_druid_spirit_bear_demolish",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "spell_resistance": "33"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_building_damage": "40"
            }
        }
    },
    "brewmaster_thunder_clap": {
        "ID": "5400",
        "AbilityName": "brewmaster_thunder_clap",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityManaCost": "90 105 130 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.25 4.25 4.25 4.25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration_creeps": "8.0 8.0 8.0 8.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 175 250 300"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "25 35 45 55"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "attack_speed_slow": "25 35 45 55"
            }
        }
    },
    "brewmaster_drunken_haze": {
        "ID": "5401",
        "AbilityName": "brewmaster_drunken_haze",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityCastRange": "850 850 850 850",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "10 10 10 10"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration_creeps": "12.0 12.0 12.0 12.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "14 18 22 26"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "miss_chance": "45 55 65 75"
            }
        }
    },
    "brewmaster_drunken_brawler": {
        "ID": "5402",
        "AbilityName": "brewmaster_drunken_brawler",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "dodge_chance": "10 15 20 25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "10 15 20 25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "crit_multiplier": "200 200 200 200"
            }
        }
    },
    "brewmaster_primal_split": {
        "ID": "5403",
        "AbilityName": "brewmaster_primal_split",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "180.0 160.0 140.0",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityManaCost": "125 150 175",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 17.0 19.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "split_duration": "0.85 0.85 0.85"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration_scepter": "20.0 23.0 26.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "cooldown_scepter": "160.0 140.0 120.0"
            }
        }
    },
    "brewmaster_earth_hurl_boulder": {
        "ID": "5404",
        "AbilityName": "brewmaster_earth_hurl_boulder",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800 800 800 800",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityCastPoint": "0.4",
        "AbilityManaCost": "100 100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "100 100 100 100"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.0 2.0 2.0 2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed": "800 800 800 800"
            }
        }
    },
    "brewmaster_earth_spell_immunity": {
        "ID": "5405",
        "AbilityName": "brewmaster_earth_spell_immunity",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {}
    },
    "brewmaster_earth_pulverize": {
        "ID": "5406",
        "AbilityName": "brewmaster_earth_pulverize",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_inner": "40 40 40 40"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius_inner": "150 150 150 150"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_outer": "20 20 20 20"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius_outer": "250 250 250 250"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "chance": "20 20 20 20"
            }
        }
    },
    "brewmaster_storm_dispel_magic": {
        "ID": "5408",
        "AbilityName": "brewmaster_storm_dispel_magic",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityCastRange": "500 500 500 500",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "200 200 200 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            }
        }
    },
    "brewmaster_storm_cyclone": {
        "ID": "5409",
        "AbilityName": "brewmaster_storm_cyclone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityCastPoint": "0.4",
        "AbilityManaCost": "150 150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration_hero": "6.0 6.0 6.0 6.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration_unit": "20.0 20.0 20.0 20.0"
            }
        }
    },
    "brewmaster_storm_wind_walk": {
        "ID": "5410",
        "AbilityName": "brewmaster_storm_wind_walk",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCooldown": "7.0 7.0 7.0 7.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "100 100 100 100"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speeed": "50 50 50 50"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0 20.0 20.0 20.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.6 0.6 0.6 0.6"
            }
        }
    },
    "brewmaster_fire_permanent_immolation": {
        "ID": "5411",
        "AbilityName": "brewmaster_fire_permanent_immolation",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage": "15 30 45 55"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "220 220 220 220"
            }
        }
    },
    "shadow_demon_disruption": {
        "ID": "5421",
        "AbilityName": "shadow_demon_disruption",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY | DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO | DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityDuration": "2.5 2.5 2.5 2.5",
        "AbilityCooldown": "25.0 22.0 19.0 16.0",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityManaCost": "120 120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "5.0 6.0 7.0 8.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "illusion_outgoing_damage": "-70.0 -60.0 -50.0 -40.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "illusion_incoming_damage": "50.0 50.0 50.0 50.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "illusion_outgoing_tooltip": "30.0 40.0 50.0 60.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "disruption_duration": "2.5 2.5 2.5 2.5"
            }
        }
    },
    "shadow_demon_soul_catcher": {
        "ID": "5422",
        "AbilityName": "shadow_demon_soul_catcher",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_taken": "20 30 40 50"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "450 450 450 450"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "12.0 12.0 12.0 12.0"
            }
        }
    },
    "shadow_demon_shadow_poison": {
        "ID": "5423",
        "AbilityName": "shadow_demon_shadow_poison",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDuration": "10.0 10.0 10.0 10.0",
        "AbilityCooldown": "3.0 3.0 3.0 3.0",
        "AbilityCastRange": "1500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityManaCost": "50 50 50 50",
        "AbilityDamage": "50 50 50 50",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stack_damage": "20 35 50 65"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "max_multiply_stacks": "4 4 4 4"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "bonus_stack_damage": "50 50 50 50"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius": "150 150 150 150"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "speed": "1000 1000 1000 1000"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "10.0 10.0 10.0 10.0"
            }
        }
    },
    "shadow_demon_shadow_poison_release": {
        "ID": "5424",
        "AbilityName": "shadow_demon_shadow_poison_release",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "1",
        "AbilityCastPoint": "0",
        "AbilityCooldown": "1.0"
    },
    "shadow_demon_demonic_purge": {
        "ID": "5425",
        "AbilityName": "shadow_demon_demonic_purge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityDuration": "5.0 5.0 5.0",
        "AbilityCooldown": "50.0 50.0 50.0",
        "AbilityDamage": "200 300 400",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityManaCost": "200 200 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow_rate": "5 3 2"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "tooltip_duration": "5.0 5.0 5.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "creep_root_duration": "3.0 3.0 3.0"
            }
        }
    },
    "chaos_knight_chaos_bolt": {
        "ID": "5426",
        "AbilityName": "chaos_knight_chaos_bolt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "140 140 140 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "chaos_bolt_speed": "3000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "stun_min": "1 1 1 2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "stun_max": "2 3 4 4"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_min": "1 50 75 100"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage_max": "200 225 250 275"
            }
        }
    },
    "chaos_knight_reality_rift": {
        "ID": "5427",
        "AbilityName": "chaos_knight_reality_rift",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "550 600 650 700",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "24 18 12 6",
        "AbilityManaCost": "70 70 70 70",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "cast_range": "550 600 650 700"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "25 50 75 100"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "bonus_duration": "1.2"
            }
        }
    },
    "chaos_knight_chaos_strike": {
        "ID": "5428",
        "AbilityName": "chaos_knight_chaos_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_damage": "150 200 250 300"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "10 10 10 10"
            }
        }
    },
    "chaos_knight_phantasm": {
        "ID": "5429",
        "AbilityName": "chaos_knight_phantasm",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.4 0.4 0.4",
        "AbilityCooldown": "140.0 140.0 140.0",
        "AbilityManaCost": "125 200 275",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "24.0 24.0 24.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "outgoing_damage": "0 0 0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "incoming_damage": "100 100 100"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "images_count": "1 2 3"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "invuln_duration": "0.5"
            }
        }
    },
    "meepo_earthbind": {
        "ID": "5430",
        "AbilityName": "meepo_earthbind",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "500 750 1000 1250",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "20 16 12 8",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "220"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "speed": "857"
            }
        }
    },
    "meepo_poof": {
        "ID": "5431",
        "AbilityName": "meepo_poof",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityCastPoint": "0.0",
        "AbilityChannelTime": "1.5",
        "AbilityCooldown": "14 12 10 8",
        "AbilityManaCost": "80",
        "AbilityDamage": "80 100 120 140",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "radius": "375"
        }}
    },
    "meepo_geostrike": {
        "ID": "5432",
        "AbilityName": "meepo_geostrike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityDamage": "5 10 15 20",
        "AbilityDuration": "2",
        "AbilityModifierSupportBonus": "5",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "slow": "-5 -10 -15 -20"
        }}
    },
    "meepo_divided_we_stand": {
        "ID": "5433",
        "AbilityName": "meepo_divided_we_stand",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "tooltip_clones": "1 2 3"
        }}
    },
    "treant_natures_guise": {
        "ID": "5434",
        "AbilityName": "treant_natures_guise",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "10.0 8.0 6.0 4.0",
        "AbilityManaCost": "90 80 70 60",
        "AbilityCastRange": "300",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 30.0 45.0 60.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "2.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "375 375 375 375"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "search_interval": "0.5"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_move_speed": "10 10 10 10"
            }
        }
    },
    "treant_leech_seed": {
        "ID": "5435",
        "AbilityName": "treant_leech_seed",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "350",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "18.0 16.0 14.0 12.0",
        "AbilityManaCost": "140 140 140 140",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_interval": "0.75"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "leech_damage": "30 45 60 75"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_slow": "-24"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "radius": "500"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "400"
            }
        }
    },
    "treant_living_armor": {
        "ID": "5436",
        "AbilityName": "treant_living_armor",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "armor_bonus": "1 2 3 4"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "regen_bonus": "1 2 3 4"
            }
        }
    },
    "treant_overgrowth": {
        "ID": "5437",
        "AbilityName": "treant_overgrowth",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "115 105 95",
        "AbilityDamage": "50 75 100",
        "AbilityManaCost": "150 175 200",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0 3.0 3.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "625 625 625"
            }
        }
    },
    "ogre_magi_fireblast": {
        "ID": "5438",
        "AbilityName": "ogre_magi_fireblast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.56",
        "AbilityCooldown": "12",
        "AbilityManaCost": "75 85 95 105",
        "AbilityDamage": "80 145 210 275",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "multicast_delay": "0.3"
            }
        }
    },
    "ogre_magi_unrefined_fireblast": {
        "ID": "5466",
        "AbilityName": "ogre_magi_unrefined_fireblast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "MaxLevel": "1",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.56",
        "AbilityCooldown": "20",
        "AbilityManaCost": "400",
        "AbilityDamage": "275",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "multicast_delay": "0.3"
            }
        }
    },
    "ogre_magi_ignite": {
        "ID": "5439",
        "AbilityName": "ogre_magi_ignite",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.56",
        "AbilityCooldown": "15",
        "AbilityManaCost": "95 105 115 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "4 5 6 7"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "burn_damage": "26 32 38 44"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "slow_movement_speed_pct": "-20 -22 -24 -26"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "1000"
            }
        }
    },
    "ogre_magi_bloodlust": {
        "ID": "5440",
        "AbilityName": "ogre_magi_bloodlust",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_AUTOCAST | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.56",
        "AbilityCooldown": "20",
        "AbilityManaCost": "75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "30"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "modelscale": "25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "6 9 12 15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "20 30 40 50"
            }
        }
    },
    "ogre_magi_multicast": {
        "ID": "5441",
        "AbilityName": "ogre_magi_multicast",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "multicast_2_times": "0.25 0.4 0.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "multicast_3_times": "0 0.2 0.25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "multicast_4_times": "0 0 0.125"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "fireblast_mana_cost": "30 70 110"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "fireblast_cooldown": "2 4 6"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "ignite_aoe": "150 300 450"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "bloodlust_aoe": "575"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "bloodlust_cooldown": "5 10 15"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "multicast_2_times_tooltip": "25 40 50"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "multicast_3_times_tooltip": "0 20 25"
            },
            "11": {
                "var_type": "FIELD_FLOAT",
                "multicast_4_times_tooltip": "0 0 12.5"
            }
        }
    },
    "undying_decay": {
        "ID": "5442",
        "AbilityName": "undying_decay",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityCastRange": "625",
        "AbilityCastPoint": "0.45 0.45 0.45 0.45",
        "AbilityCooldown": "10.0 8.0 6.0 4.0",
        "AbilityDuration": "21.0 24.0 27.0 30.0",
        "AbilityManaCost": "70 90 110 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "decay_damage": "40 80 120 160"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "300"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "decay_duration": "21.0 24.0 27.0 30.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "str_steal": "4"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "str_scale_up": "2"
            }
        }
    },
    "undying_soul_rip": {
        "ID": "5443",
        "AbilityName": "undying_soul_rip",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_CUSTOM",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.45 0.45 0.45 0.45",
        "AbilityCooldown": "25.0 20.0 15.0 10.0",
        "AbilityManaCost": "50 75 100 125",
        "AbilityCastRange": "650",
        "AbilityModifierSupportValue": "0.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_per_unit": "25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "975"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "max_units": "5 10 15 20"
            }
        }
    },
    "undying_tombstone": {
        "ID": "5444",
        "AbilityName": "undying_tombstone",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.45 0.45 0.45 0.45",
        "AbilityCooldown": "60.0 60.0 60.0 60.0",
        "AbilityManaCost": "120 130 140 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "15.0 20.0 25.0 30.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 600 800 1000"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "zombie_interval": "3.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "health_threshold": "100 200 300 400"
            }
        }
    },
    "undying_tombstone_zombie_aura": {
        "ID": "5445",
        "AbilityName": "undying_tombstone_zombie_aura",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_AURA | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 600 800 1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_threshold": "100 200 300 400"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "zombie_interval": "3.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_speed": "50"
            }
        }
    },
    "undying_tombstone_zombie_deathstrike": {
        "ID": "5446",
        "AbilityName": "undying_tombstone_zombie_deathstrike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityModifierSupportBonus": "5",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "slow": "-7"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "health_threshold": "100 200 300 400"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.5"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_speed": "50"
            }
        }
    },
    "undying_flesh_golem": {
        "ID": "5447",
        "AbilityName": "undying_flesh_golem",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "75.0 75.0 75.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "30.0 30.0 30.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "750"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "full_power_radius": "200"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed_slow": "9"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "max_damage_amp": "20 25 30"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "min_damage_amp": "5 10 15"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "death_heal": "6"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "death_heal_creep": "2"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "max_damage_amp_scepter": "25 30 35"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "min_damage_amp_scepter": "10 15 20"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "death_heal_scepter": "10"
            },
            "12": {
                "var_type": "FIELD_INTEGER",
                "death_heal_creep_scepter": "3"
            }
        }
    },
    "rubick_telekinesis": {
        "ID": "5448",
        "AbilityName": "rubick_telekinesis",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC | DOTA_UNIT_TARGET_MECHANICAL",
        "AbilityCastPoint": "0.1 0.1 0.1 0.1",
        "AbilityCooldown": "18.0 18.0 18.0 18.0",
        "AbilityManaCost": "120 120 120 120",
        "AbilityCastRange": "550 575 600 625",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "325 325 325 325"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "lift_duration": "1.5 1.75 2.0 2.25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.25 1.5 1.75"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "max_land_distance": "375 375 375 375"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "fall_duration": "0.3 0.3 0.3 0.3"
            }
        }
    },
    "rubick_telekinesis_land": {
        "ID": "5449",
        "AbilityName": "rubick_telekinesis_land",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_AOE",
        "MaxLevel": "1",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "radius": "325 325 325 325"
        }}
    },
    "rubick_fade_bolt": {
        "ID": "5450",
        "AbilityName": "rubick_fade_bolt",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.1 0.1 0.1 0.1",
        "AbilityCooldown": "16.0 14.0 12.0 10.0",
        "AbilityManaCost": "150 150 150 150",
        "AbilityCastRange": "800 800 800 800",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "500 500 500 500"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "10.0 10.0 10.0 10.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25 0.25 0.25 0.25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage": "75 150 225 300"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "jump_damage_reduction_pct": "4 4 4 4"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "hero_attack_damage_reduction": "14 20 26 32"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "creep_attack_damage_reduction": "7 10 13 16"
            }
        }
    },
    "rubick_null_field": {
        "ID": "5451",
        "AbilityName": "rubick_null_field",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "magic_damage_reduction_pct": "5 10 15 20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            }
        }
    },
    "rubick_spell_steal": {
        "ID": "5452",
        "AbilityName": "rubick_spell_steal",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.1 0.1 0.1 0.1",
        "AbilityCooldown": "20.0 18.0 16.0",
        "AbilityManaCost": "25 25 25",
        "AbilityCastRange": "1000 1000 1000",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "180.0 240.0 300.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "900"
            }
        }
    },
    "rubick_empty1": {
        "ID": "5453",
        "AbilityName": "rubick_empty1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "rubick_empty2": {
        "ID": "5454",
        "AbilityName": "rubick_empty2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "rubick_hidden1": {
        "ID": "5455",
        "AbilityName": "rubick_hidden1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "rubick_hidden2": {
        "ID": "5456",
        "AbilityName": "rubick_hidden2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "rubick_hidden3": {
        "ID": "5457",
        "AbilityName": "rubick_hidden3",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "disruptor_thunder_strike": {
        "ID": "5458",
        "AbilityName": "disruptor_thunder_strike",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.05 0.05 0.05 0.05",
        "AbilityCooldown": "16.0 16.0 16.0 16.0",
        "AbilityDuration": "4.0 4.0 4.0 4.0",
        "AbilityManaCost": "130 130 130 130",
        "AbilityCastRange": "800 800 800 800",
        "AbilityDamage": "50 75 100 125",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "200 200 200 200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "strikes": "3 3 3 3"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage": "75 150 225 300"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "strike_interval": "2.0 2.0 2.0 2.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 4.0 4.0 4.0"
            }
        }
    },
    "disruptor_glimpse": {
        "ID": "5459",
        "AbilityName": "disruptor_glimpse",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO",
        "AbilityCastPoint": "0.05 0.05 0.05 0.05",
        "AbilityCooldown": "60.0 50.0 40.0 30.0",
        "AbilityManaCost": "160 130 100 70",
        "AbilityCastRange": "600 1000 1400 1800",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "backtrack_time": "4.0 4.0 4.0 4.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "cast_range": "600 1000 1400 1800"
            }
        }
    },
    "disruptor_kinetic_field": {
        "ID": "5460",
        "AbilityName": "disruptor_kinetic_field",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityCastPoint": "0.05 0.05 0.05 0.05",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityManaCost": "70 70 70 70",
        "AbilityCastRange": "900 900 900 900",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "300 300 300 300"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "formation_time": "1.2 1.2 1.2 1.2"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.5 3.0 3.5 4.0"
            }
        }
    },
    "disruptor_static_storm": {
        "ID": "5461",
        "AbilityName": "disruptor_static_storm",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.05 0.05 0.05 0.05",
        "AbilityCooldown": "85.0 85.0 85.0",
        "AbilityManaCost": "125 175 225",
        "AbilityCastRange": "800 800 800 800",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "375 375 375"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "pulses": "20 20 20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "damage_max": "170 210 250"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.0 5.0 5.0"
            }
        }
    },
    "nyx_assassin_impale": {
        "ID": "5462",
        "AbilityName": "nyx_assassin_impale",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "11.0 11.0 11.0 11.0",
        "AbilityManaCost": "95 115 135 155",
        "AbilityDamage": "60 130 200 260",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "width": "125 125 125 125"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.27 1.77 2.27 2.77"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "length": "825 825 825 825"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "speed": "1600 1600 1600 1600"
            }
        }
    },
    "nyx_assassin_mana_burn": {
        "ID": "5463",
        "AbilityName": "nyx_assassin_mana_burn",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO",
        "AbilityCastRange": "600 600 600 600",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "28.0 20.0 12.0 4.0",
        "AbilityManaCost": "90 110 130 150",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "int_multiplier": "4"
        }}
    },
    "nyx_assassin_spiked_carapace": {
        "ID": "5464",
        "AbilityName": "nyx_assassin_spiked_carapace",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityManaCost": "50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "reflect_duration": "4.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "0.6 1.2 1.8 2.4"
            }
        }
    },
    "nyx_assassin_vendetta": {
        "ID": "5465",
        "AbilityName": "nyx_assassin_vendetta",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilityCooldown": "70.0 60.0 50.0",
        "AbilityManaCost": "160 210 260",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0 35.0 50.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "10 15 20"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "225 375 525"
            }
        }
    },
    "naga_siren_mirror_image": {
        "ID": "5467",
        "AbilityName": "naga_siren_mirror_image",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "40.0 40.0 40.0 40.0",
        "AbilityManaCost": "70 80 90 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "illusion_duration": "30.0 30.0 30.0 30.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "outgoing_damage": "-70 -65 -60 -55"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "incoming_damage": "500 400 300 200"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "images_count": "3 3 3 3"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "invuln_duration": "0.3"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "outgoing_damage_tooltip": "30 35 40 45"
            }
        }
    },
    "naga_siren_ensnare": {
        "ID": "5468",
        "AbilityName": "naga_siren_ensnare",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "14.0 14.0 14.0 14.0",
        "AbilityManaCost": "75 85 95 105",
        "AbilityCastRange": "650 650 650 650",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "2.0 3.0 4.0 5.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "net_speed": "1500 1500 1500 1500"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "fake_ensnare_distance": "900 900 900 900"
            }
        }
    },
    "naga_siren_rip_tide": {
        "ID": "5469",
        "AbilityName": "naga_siren_rip_tide",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "80 90 100 110",
        "AbilityDamage": "130 160 190 220",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "armor_reduction": "-2 -3 -4 -5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "450 450 450 450"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0 8.0 8.0 8.0"
            }
        }
    },
    "naga_siren_song_of_the_siren": {
        "ID": "5470",
        "AbilityName": "naga_siren_song_of_the_siren",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCastRange": "1250 1250 1250",
        "AbilityCooldown": "180.0 120.0 60.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "1250 1250 1250"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "7.0 7.0 7.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "animation_rate": "0.55 0.55 0.55"
            }
        }
    },
    "naga_siren_song_of_the_siren_cancel": {
        "ID": "5478",
        "AbilityName": "naga_siren_song_of_the_siren_cancel",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "MaxLevel": "1",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "1.0 1.0 1.0"
    },
    "keeper_of_the_light_illuminate": {
        "ID": "5471",
        "AbilityName": "keeper_of_the_light_illuminate",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityChannelTime": "2.0 3.0 4.0 5.0",
        "AbilityManaCost": "150 150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_per_second": "100.0 100.0 100.0 100.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "1600"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "speed": "1050.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "max_channel_time": "2.0 3.0 4.0 5.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800 800 800 800"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34 3.34 3.34 3.34"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "channel_vision_radius": "350"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "channel_vision_interval": "0.5"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "channel_vision_duration": "10.34"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "channel_vision_step": "150"
            }
        }
    },
    "keeper_of_the_light_mana_leak": {
        "ID": "5472",
        "AbilityName": "keeper_of_the_light_mana_leak",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "18.0 18.0 18.0 18.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilityCastRange": "550 700 850 1000",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "4.0 5.0 6.0 7.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "mana_leak_pct": "3.5 4.0 4.5 5.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.3 1.6 1.9 2.2"
            }
        }
    },
    "keeper_of_the_light_chakra_magic": {
        "ID": "5473",
        "AbilityName": "keeper_of_the_light_chakra_magic",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "900 900 900 900",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "19.0 18.0 17.0 16.0",
        "AbilityManaCost": "40 55 70 85",
        "AbilityModifierSupportValue": "3.0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "mana_restore": "75 150 225 300"
        }}
    },
    "keeper_of_the_light_empty1": {
        "ID": "5501",
        "AbilityName": "keeper_of_the_light_empty1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "keeper_of_the_light_empty2": {
        "ID": "5502",
        "AbilityName": "keeper_of_the_light_empty2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "keeper_of_the_light_spirit_form": {
        "ID": "5474",
        "AbilityName": "keeper_of_the_light_spirit_form",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCooldown": "80.0 70.0 60.0",
        "AbilityManaCost": "100 100 100",
        "AbilityModifierSupportValue": "0.35",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "40.0 40.0 40.0"
        }}
    },
    "keeper_of_the_light_recall": {
        "ID": "5475",
        "AbilityName": "keeper_of_the_light_recall",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED | DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "MaxLevel": "3",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCastRange": "0",
        "AbilityCooldown": "15.0 15.0 15.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "teleport_delay": "5.0 4.0 3.0"
        }}
    },
    "keeper_of_the_light_blinding_light": {
        "ID": "5476",
        "AbilityName": "keeper_of_the_light_blinding_light",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_AOE | DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "MaxLevel": "3",
        "AbilityCastRange": "900 900 900",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "20.0 16.0 12.0",
        "AbilityManaCost": "50 50 50",
        "AbilityModifierSupportValue": "1.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "675 675 675"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "miss_duration": "3.0 4.0 5.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "miss_rate": "80 80 80"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "knockback_distance": "250 250 250"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "knockback_height": "50 50 50"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "knockback_duration": "0.4 0.4 0.4"
            }
        }
    },
    "keeper_of_the_light_illuminate_end": {
        "ID": "5477",
        "AbilityName": "keeper_of_the_light_illuminate_end",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0"
    },
    "keeper_of_the_light_spirit_form_illuminate": {
        "ID": "5479",
        "AbilityName": "keeper_of_the_light_spirit_form_illuminate",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "1800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "150 150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "damage_per_second": "100.0 100.0 100.0 100.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "400 400 400 400"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range": "1600"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "speed": "1050.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "max_channel_time": "2.0 3.0 4.0 5.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "vision_radius": "800 800 800 800"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "vision_duration": "3.34 3.34 3.34 3.34"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "channel_vision_radius": "350"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "channel_vision_interval": "0.5"
            },
            "10": {
                "var_type": "FIELD_FLOAT",
                "channel_vision_duration": "10.34"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "channel_vision_step": "150"
            }
        }
    },
    "keeper_of_the_light_spirit_form_illuminate_end": {
        "ID": "5503",
        "AbilityName": "keeper_of_the_light_spirit_form_illuminate_end",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCastPoint": "0.0 0.0 0.0 0.0"
    },
    "visage_grave_chill": {
        "ID": "5480",
        "AbilityName": "visage_grave_chill",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "10.0 10.0 10.0 10.0",
        "AbilityManaCost": "70 80 90 100",
        "AbilityCastRange": "600 600 600 600",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "chill_duration": "3.0 4.0 5.0 6.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "speed_bonus": "32 32 32 32"
            }
        }
    },
    "visage_soul_assumption": {
        "ID": "5481",
        "AbilityName": "visage_soul_assumption",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.2 0.2 0.2 0.2",
        "AbilityCooldown": "4.0 4.0 4.0 4.0",
        "AbilityManaCost": "170 160 150 140",
        "AbilityCastRange": "900 900 900 900",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bolt_speed": "1000"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "soul_base_damage": "20"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "soul_charge_damage": "60"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "damage_limit": "110"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "stack_limit": "3 4 5 6"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "stack_duration": "6.0"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "radius": "1375"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "damage_min": "2.0"
            },
            "09": {
                "var_type": "FIELD_FLOAT",
                "damage_max": "3000.0"
            }
        }
    },
    "visage_gravekeepers_cloak": {
        "ID": "5482",
        "AbilityName": "visage_gravekeepers_cloak",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "1 2 4 5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_resist": "3 6 12 16"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "max_layers": "4"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "recovery_time": "12.0 10.0 8.0 6.0"
            }
        }
    },
    "visage_summon_familiars": {
        "ID": "5483",
        "AbilityName": "visage_summon_familiars",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "180.0 160.0 140.0",
        "AbilityManaCost": "150 150 150",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "familiar_hp": "300 450 600"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "familiar_armor": "0 1 2"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "familiar_speed": "380 390 400"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "familiar_max_damage": "56 98 154"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "damage_charge_time": "15.0"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "damage_per_charge": "8 14 22"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "max_damage_charges": "7"
            }
        }
    },
    "visage_summon_familiars_stone_form": {
        "ID": "5484",
        "AbilityName": "visage_summon_familiars_stone_form",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_AOE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "160",
        "AbilityCastPoint": "0.0",
        "MaxLevel": "3",
        "AbilityCooldown": "30.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "stun_radius": "325"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_delay": "1.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "stun_damage": "60 100 140"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.0 1.25 1.5"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "stone_duration": "8.0"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "hp_regen": "50.0 68.7 87.5"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "max_damage_charges": "7"
            }
        }
    },
    "wisp_tether": {
        "ID": "5485",
        "AbilityName": "wisp_tether",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_CUSTOM",
        "AbilityCastPoint": "0.001 0.001 0.001 0.001",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityDuration": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "40 40 40 40",
        "AbilityCastRange": "1800 1800 1800 1800",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900 900 900 900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed": "20 20 20 20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "0.75 1.25 1.75 2.25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "latch_distance": "700 700 700 700"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "latch_speed": "1000 1000 1000 1000"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "tether_duration": "12.0 12.0 12.0 12.0"
            }
        }
    },
    "wisp_spirits": {
        "ID": "5486",
        "AbilityName": "wisp_spirits",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.001 0.001 0.001 0.001",
        "AbilityCooldown": "20.0 18.0 16.0 14.0",
        "AbilityDuration": "19.0 19.0 19.0 19.0",
        "AbilityManaCost": "120 130 140 150",
        "AbilitySpecial": {
            "02": {
                "var_type": "FIELD_INTEGER",
                "creep_damage": "8 14 20 26"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "hero_damage": "25 50 75 100"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "revolution_time": "5.0 5.0 5.0 5.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "min_range": "100 100 100 100"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "max_range": "875 875 875 875"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "hero_hit_radius": "70 70 70 70"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "explode_radius": "300 300 300 300"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "hit_radius": "150 150 150 150"
            },
            "10": {
                "var_type": "FIELD_INTEGER",
                "default_radius": "250 250 250 250"
            },
            "11": {
                "var_type": "FIELD_INTEGER",
                "spirit_movement_rate": "250 250 250 250"
            }
        }
    },
    "wisp_overcharge": {
        "ID": "5487",
        "AbilityName": "wisp_overcharge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE",
        "AbilityCastPoint": "0 0 0 0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "40 50 60 70"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "-5 -10 -15 -20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "drain_interval": "0.2 0.2 0.2 0.2"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "drain_pct": "0.025 0.025 0.025 0.025"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "drain_pct_tooltip": "2.5 2.5 2.5 2.5"
            }
        }
    },
    "wisp_relocate": {
        "ID": "5488",
        "AbilityName": "wisp_relocate",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityCastPoint": "0 0 0",
        "AbilityCooldown": "90.0 75.0 60.0",
        "AbilityManaCost": "100 100 100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "cast_delay": "2.5 2.25 2.0"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "return_time": "12.0 12.0 12.0"
            }
        }
    },
    "wisp_tether_break": {
        "ID": "5489",
        "AbilityName": "wisp_tether_break",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "MaxLevel": "1",
        "AbilityCastPoint": "0 0 0 0",
        "AbilityCooldown": "1.0 1.0 1.0 1.0"
    },
    "wisp_spirits_in": {
        "ID": "5490",
        "AbilityName": "wisp_spirits_in",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "MaxLevel": "1",
        "AbilityCastPoint": "0 0 0 0"
    },
    "wisp_spirits_out": {
        "ID": "5493",
        "AbilityName": "wisp_spirits_out",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_HIDDEN",
        "MaxLevel": "1",
        "AbilityCastPoint": "0 0 0 0"
    },
    "wisp_empty1": {
        "ID": "5498",
        "AbilityName": "wisp_empty1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "wisp_empty2": {
        "ID": "5499",
        "AbilityName": "wisp_empty2",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE | DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE",
        "MaxLevel": "0"
    },
    "slark_dark_pact": {
        "ID": "5494",
        "AbilityName": "slark_dark_pact",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.001 0.001 0.001 0.001",
        "AbilityCooldown": "10.0 9.0 8.0 7.0",
        "AbilityManaCost": "55 50 45 40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "delay": "1.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "pulse_duration": "0.5"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius": "325"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "total_damage": "75 150 225 300"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "total_pulses": "5"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "pulse_interval": "0.1"
            }
        }
    },
    "slark_pounce": {
        "ID": "5495",
        "AbilityName": "slark_pounce",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCooldown": "20.0 16.0 12.0 8.0",
        "AbilityManaCost": "75 75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "pounce_distance": "700"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "pounce_speed": "933.33"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "pounce_acceleration": "7000.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "pounce_radius": "95"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "pounce_damage": "70 140 210 280"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "leash_duration": "3.5"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "leash_radius": "325"
            }
        }
    },
    "slark_essence_shift": {
        "ID": "5496",
        "AbilityName": "slark_essence_shift",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "0.4 0.35 0.3 0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "agi_gain": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "stat_loss": "1"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "15 30 60 120"
            }
        }
    },
    "slark_shadow_dance": {
        "ID": "5497",
        "AbilityName": "slark_shadow_dance",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityCooldown": "25.0 25.0 25.0",
        "AbilityManaCost": "120 120 120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.5 5.5 5.5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "fade_time": "0.7 0.7 0.7"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "30 35 40"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "bonus_regen_pct": "3 4 5"
            }
        }
    },
    "medusa_split_shot": {
        "ID": "5504",
        "AbilityName": "medusa_split_shot",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_modifier": "-55 -45 -35 -25"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "damage_modifier_tooltip": "45 55 65 75"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "arrow_count": "4 4 4 4"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "range": "600"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "projectile_speed": "1200"
            }
        }
    },
    "medusa_mystic_snake": {
        "ID": "5505",
        "AbilityName": "medusa_mystic_snake",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCooldown": "11.0 11.0 11.0 11.0",
        "AbilityManaCost": "140 150 160 170",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "475 475 475 475"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "snake_jumps": "3 4 5 6"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25 0.25 0.25 0.25"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "snake_damage": "80 120 160 200"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "snake_mana_steal": "20 30 40 50"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "snake_scale": "20"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "initial_speed": "633"
            },
            "08": {
                "var_type": "FIELD_INTEGER",
                "return_speed": "833"
            }
        }
    },
    "medusa_mana_shield": {
        "ID": "5506",
        "AbilityName": "medusa_mana_shield",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "damage_per_mana": "0.75 1.25 1.5 2.0"
        }}
    },
    "medusa_stone_gaze": {
        "ID": "5507",
        "AbilityName": "medusa_stone_gaze",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.4 0.4 0.4 0.4",
        "AbilityCastRange": "800 800 800",
        "AbilityCooldown": "140.0 110.0 80.0",
        "AbilityManaCost": "200 100 0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "800 800 800"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.0 5.0 5.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "summon_damage": "500 1000 1500"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attack_slow": "100 100 100"
            }
        }
    },
    "troll_warlord_berserkers_rage": {
        "ID": "5508",
        "AbilityName": "troll_warlord_berserkers_rage",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_TOGGLE | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCastPoint": "0.51 0.51 0.51 0.51",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_move_speed": "20 20 20 30"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "bonus_range": "372"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "base_attack_time": "1.55"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "bonus_hp": "100"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "3"
            },
            "07": {
                "var_type": "FIELD_INTEGER",
                "bash_chance": "10"
            },
            "08": {
                "var_type": "FIELD_FLOAT",
                "bash_duration": "0.8 1.2 1.6 2.0"
            },
            "09": {
                "var_type": "FIELD_INTEGER",
                "bash_damage": "20 30 40 50"
            }
        }
    },
    "troll_warlord_whirling_axes_ranged": {
        "ID": "5509",
        "AbilityName": "troll_warlord_whirling_axes_ranged",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.51 0.51 0.51 0.51",
        "AbilityCooldown": "20.0 20.0 20.0 20.0",
        "AbilityManaCost": "50 50 50 50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "axe_width": "100"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "axe_speed": "1200.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "axe_range": "900.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "axe_damage": "75"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "axe_slow_duration": "3.0 3.75 4.5 5.25"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "30"
            }
        }
    },
    "troll_warlord_fervor": {
        "ID": "5511",
        "AbilityName": "troll_warlord_fervor",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "max_stacks": "2 3 4 5"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_speed": "20"
            }
        }
    },
    "troll_warlord_battle_trance": {
        "ID": "5512",
        "AbilityName": "troll_warlord_battle_trance",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "MaxLevel": "3",
        "AbilityCastPoint": "0.51 0.51 0.51",
        "AbilityCooldown": "20.0 20.0 20.0",
        "AbilityManaCost": "75 75 75",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "trance_duration": "5.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attack_speed": "60 120 180"
            }
        }
    },
    "centaur_hoof_stomp": {
        "ID": "5514",
        "AbilityName": "centaur_hoof_stomp",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityCooldown": "13.0 13.0 13.0 13.0",
        "AbilityManaCost": "85 100 115 130",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "315"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "2.0 2.25 2.5 2.75"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "stomp_damage": "100 150 200 250"
            }
        }
    },
    "centaur_double_edge": {
        "ID": "5515",
        "AbilityName": "centaur_double_edge",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCooldown": "8.0 8.0 8.0 8.0",
        "AbilityCastRange": "150 150 150 150",
        "AbilityCastPoint": "0.5 0.5 0.5 0.5",
        "AbilityManaCost": "0 0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "edge_damage": "175 250 325 400"
        }}
    },
    "centaur_return": {
        "ID": "5516",
        "AbilityName": "centaur_return",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "return_damage": "16 18 20 22"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "strength_pct": "26 34 42 50"
            }
        }
    },
    "centaur_great_fortitude": {
        "ID": "5517",
        "AbilityName": "drow_ranger_marksmanship",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "strength_bonus": "15 30 45"
        }}
    },
    "magnataur_shockwave": {
        "ID": "5518",
        "AbilityName": "magnataur_shockwave",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "11.0 10.0 9.0 8.0",
        "AbilityDuration": "0.6875 0.6875 0.6875 0.6875",
        "AbilityManaCost": "90 90 90 90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "shock_speed": "1200"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "shock_width": "150"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "shock_distance": "850"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "shock_damage": "75 150 225 300"
            }
        }
    },
    "magnataur_empower": {
        "ID": "5519",
        "AbilityName": "magnataur_empower",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "12.0 12.0 12.0 12.0",
        "AbilityManaCost": "40 40 40 40",
        "AbilityModifierSupportValue": "0.3",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "empower_duration": "40.0 40.0 40.0 40.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "15 25 35 45"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "cleave_damage_pct": "15 25 35 45"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "cleave_radius": "200"
            }
        }
    },
    "magnataur_skewer": {
        "ID": "5520",
        "AbilityName": "magnataur_skewer",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "800 800 800 800",
        "AbilityCastPoint": "0.3 0.3 0.3 0.3",
        "AbilityCooldown": "30.0 30.0 30.0 30.0",
        "AbilityManaCost": "80 80 80 80",
        "AbilityModifierSupportValue": "0.25",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "skewer_speed": "950"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "skewer_radius": "95"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "max_targets": "1 2 3 4"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "2.0 2.0 2.0 2.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "slow_pct": "40 40 40 40"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "skewer_damage": "70 140 210 280"
            }
        }
    },
    "magnataur_reverse_polarity": {
        "ID": "5521",
        "AbilityName": "magnataur_reverse_polarity",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityCastPoint": "0.3 0.3 0.3",
        "AbilityCooldown": "120 110 100",
        "AbilityManaCost": "200 250 300",
        "AbilityCastRange": "410 410 410",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "pull_duration": "0.4"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "pull_radius": "410"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "polarity_damage": "150 225 300"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "hero_stun_duration": "2.5 3.25 4.0"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "creep_stun_duration": "3.0 4.0 5.0"
            }
        }
    },
    "backdoor_protection": {
        "ID": "5350",
        "AbilityName": "backdoor_protection",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "MaxLevel": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "activation_time": "15.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "regen_rate": "90"
            }
        }
    },
    "backdoor_protection_in_base": {
        "ID": "5351",
        "AbilityName": "backdoor_protection_in_base",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "MaxLevel": "1",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "activation_time": "15.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "regen_rate": "90"
            }
        }
    },
    "necronomicon_warrior_last_will": {
        "ID": "5200",
        "AbilityName": "necronomicon_warrior_last_will",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PURE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "explosion": "400 500 600"
        }}
    },
    "necronomicon_warrior_sight": {
        "ID": "5201",
        "AbilityName": "necronomicon_warrior_sight",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "radius": "1000"
        }}
    },
    "necronomicon_warrior_mana_burn": {
        "ID": "5202",
        "AbilityName": "necronomicon_warrior_mana_burn",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_PHYSICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "burn_amount": "25 50 75"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "burn_damage_conversion": "60"
            }
        }
    },
    "necronomicon_archer_mana_burn": {
        "ID": "5203",
        "AbilityName": "necronomicon_archer_mana_burn",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.5 0.5 0.5",
        "AbilityCooldown": "20.0 20.0 20.0",
        "AbilityManaCost": "0 0 0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "burn_amount": "125 175 225"
        }}
    },
    "necronomicon_archer_aoe": {
        "ID": "5204",
        "AbilityName": "necronomicon_archer_aoe",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "speed_bonus": "3 6 9"
            }
        }
    },
    "courier_return_to_base": {
        "ID": "5205",
        "AbilityName": "courier_return_to_base",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "1"
    },
    "courier_go_to_secretshop": {
        "ID": "5492",
        "AbilityName": "courier_go_to_secretshop",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "MaxLevel": "1"
    },
    "courier_transfer_items": {
        "ID": "5206",
        "AbilityName": "courier_transfer_items",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "handoff_distance": "400"
        }},
        "MaxLevel": "1"
    },
    "courier_return_stash_items": {
        "ID": "5207",
        "AbilityName": "courier_return_stash_items",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "handoff_distance": "400"
        }},
        "MaxLevel": "1"
    },
    "courier_take_stash_items": {
        "ID": "5208",
        "AbilityName": "courier_take_stash_items",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "stash_pickup_distance": "800"
        }},
        "MaxLevel": "1"
    },
    "courier_shield": {
        "ID": "5209",
        "AbilityName": "courier_shield",
        "AbilityType": "DOTA_ABILITY_TYPE_ULTIMATE",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE",
        "AbilityCooldown": "20.0",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "7.0"
        }},
        "MaxLevel": "1"
    },
    "courier_burst": {
        "ID": "5210",
        "AbilityName": "courier_burst",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET | DOTA_ABILITY_BEHAVIOR_IMMEDIATE | DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT",
        "AbilityCooldown": "40.0",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_FLOAT",
                "duration": "20.0"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movement_speed": "10000"
            }
        },
        "MaxLevel": "1"
    },
    "roshan_spell_block": {
        "ID": "5213",
        "AbilityName": "roshan_spell_block",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityCooldown": "15.0"
    },
    "roshan_bash": {
        "ID": "5214",
        "AbilityName": "roshan_bash",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bash_chance": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage": "50"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "stun_duration": "1.65"
            }
        }
    },
    "roshan_slam": {
        "ID": "5215",
        "AbilityName": "roshan_slam",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityManaCost": "90 90 90 90",
        "AbilityCooldown": "10.0",
        "AbilityCastPoint": "0.47 0.47 0.47 0.47",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "250"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "slow_duration_hero": "2.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "slow_duration_unit": "4.0"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "slow_amount": "50"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "damage": "70"
            }
        }
    },
    "roshan_inherent_buffs": {
        "ID": "5216",
        "AbilityName": "roshan_illusion_protection",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_PASSIVE"
    },
    "roshan_devotion": {
        "ID": "5217",
        "AbilityName": "roshan_devotion",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_HIDDEN | DOTA_ABILITY_BEHAVIOR_PASSIVE"
    },
    "kobold_taskmaster_speed_aura": {
        "ID": "5293",
        "AbilityName": "kobold_taskmaster_speed_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_movement_speed": "12"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "centaur_khan_endurance_aura": {
        "ID": "5294",
        "AbilityName": "centaur_khan_endurance_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_attack_speed": "15"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "centaur_khan_war_stomp": {
        "ID": "5295",
        "AbilityName": "centaur_khan_war_stomp",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "20.0",
        "AbilityDamage": "25",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "250"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "non_hero_stun_duration": "3.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "hero_stun_duration": "2.0"
            }
        }
    },
    "gnoll_assassin_envenomed_weapon": {
        "ID": "5296",
        "AbilityName": "gnoll_assassin_envenomed_weapon",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "damage_per_second": "2"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "non_hero_duration": "20.0"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "hero_duration": "10.0"
            }
        }
    },
    "ghost_frost_attack": {
        "ID": "5301",
        "AbilityName": "ghost_frost_attack",
        "MaxLevel": "1",
        "AbilityType": "DOTA_ABILITY_TYPE_BASIC",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-20"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "duration": "1.5"
            }
        }
    },
    "polar_furbolg_ursa_warrior_thunder_clap": {
        "ID": "5302",
        "AbilityName": "polar_furbolg_ursa_warrior_thunder_clap",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "12.0",
        "AbilityDamage": "150",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "300"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-25"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "duration": "3.0"
            }
        }
    },
    "neutral_spell_immunity": {
        "ID": "5303",
        "AbilityName": "neutral_spell_immunity",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE"
    },
    "ogre_magi_frost_armor": {
        "ID": "5304",
        "AbilityName": "ogre_magi_frost_armor",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "800",
        "AbilityCastPoint": "0.56",
        "AbilityCooldown": "5.0",
        "AbilityManaCost": "40",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "armor_bonus": "8"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "45.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-30"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-20"
            },
            "05": {
                "var_type": "FIELD_FLOAT",
                "slow_duration": "5.0"
            }
        }
    },
    "dark_troll_warlord_ensnare": {
        "ID": "5305",
        "AbilityName": "dark_troll_warlord_ensnare",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitTargetFlags": "DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES",
        "AbilityCastRange": "550",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "20.0",
        "AbilityManaCost": "150",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "1.5"
        }}
    },
    "dark_troll_warlord_raise_dead": {
        "ID": "5306",
        "AbilityName": "dark_troll_warlord_raise_dead",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "25.0",
        "AbilityManaCost": "50",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "40.0"
        }}
    },
    "giant_wolf_critical_strike": {
        "ID": "5307",
        "AbilityName": "giant_wolf_critical_strike",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_mult": "200"
            }
        }
    },
    "alpha_wolf_critical_strike": {
        "ID": "5308",
        "AbilityName": "alpha_wolf_critical_strike",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "crit_chance": "20"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "crit_mult": "200"
            }
        }
    },
    "alpha_wolf_command_aura": {
        "ID": "5309",
        "AbilityName": "alpha_wolf_command_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_damage_pct": "30"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "tornado_tempest": {
        "ID": "5310",
        "AbilityName": "tornado_tempest",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "far_radius": "600"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-15"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_slow": "-15"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "near_radius": "150"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "near_damage": "45"
            },
            "06": {
                "var_type": "FIELD_INTEGER",
                "far_damage": "15"
            },
            "07": {
                "var_type": "FIELD_FLOAT",
                "tick_rate": "0.25"
            }
        }
    },
    "enraged_wildkin_tornado": {
        "ID": "5312",
        "AbilityName": "enraged_wildkin_tornado",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_POINT | DOTA_ABILITY_BEHAVIOR_CHANNELLED",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "500",
        "AbilityCastPoint": "0.75",
        "AbilityCooldown": "70.0",
        "AbilityChannelTime": "40.0",
        "AbilityManaCost": "200",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_FLOAT",
            "duration": "40.0"
        }}
    },
    "enraged_wildkin_toughness_aura": {
        "ID": "5313",
        "AbilityName": "enraged_wildkin_toughness_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "satyr_trickster_purge": {
        "ID": "5314",
        "AbilityName": "satyr_trickster_purge",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_BOTH",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastRange": "200",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "5.0",
        "AbilityManaCost": "120",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "purge_rate": "5"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "5.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "summon_damage": "400"
            }
        }
    },
    "satyr_soulstealer_mana_burn": {
        "ID": "5315",
        "AbilityName": "satyr_soulstealer_mana_burn",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "Modelscale": ".85",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "600",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "18.0",
        "AbilityManaCost": "50",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "burn_amount": "100"
        }}
    },
    "satyr_hellcaller_shockwave": {
        "ID": "5316",
        "AbilityName": "satyr_hellcaller_shockwave",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_CREEP",
        "AbilityCastRange": "700",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "8.0",
        "AbilityDamage": "125",
        "AbilityManaCost": "100",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "speed": "1050"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius_start": "180"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "radius_end": "200"
            },
            "04": {
                "var_type": "FIELD_INTEGER",
                "distance": "800"
            }
        }
    },
    "satyr_hellcaller_unholy_aura": {
        "ID": "5317",
        "AbilityName": "satyr_hellcaller_unholy_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "health_regen": "4"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "forest_troll_high_priest_heal": {
        "ID": "5318",
        "AbilityName": "forest_troll_high_priest_heal",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_FRIENDLY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "350",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "0.5",
        "AbilityManaCost": "5",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "health": "15"
        }}
    },
    "harpy_storm_chain_lightning": {
        "ID": "5319",
        "AbilityName": "harpy_storm_chain_lightning",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityUnitTargetTeam": "DOTA_UNIT_TARGET_TEAM_ENEMY",
        "AbilityUnitTargetType": "DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC",
        "AbilityCastRange": "900",
        "AbilityCastPoint": "0.5",
        "AbilityCooldown": "4.0",
        "AbilityManaCost": "90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "initial_damage": "140"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "jump_range": "500"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "jump_delay": "0.25"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_percent_loss": "25.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "max_targets": "4"
            }
        }
    },
    "black_dragon_splash_attack": {
        "ID": "5324",
        "AbilityName": "black_dragon_splash_attack",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "range_close": "50"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "damage_percent_close": "100.0"
            },
            "03": {
                "var_type": "FIELD_INTEGER",
                "range_mid": "150"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "damage_percent_mid": "50.0"
            },
            "05": {
                "var_type": "FIELD_INTEGER",
                "range_far": "250"
            },
            "06": {
                "var_type": "FIELD_FLOAT",
                "damage_percent_far": "25.0"
            }
        }
    },
    "blue_dragonspawn_sorcerer_evasion": {
        "ID": "5325",
        "AbilityName": "blue_dragonspawn_sorcerer_evasion",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "evasion_chance_pct": "15"
        }}
    },
    "blue_dragonspawn_overseer_evasion": {
        "ID": "5326",
        "AbilityName": "blue_dragonspawn_overseer_evasion",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {"01": {
            "var_type": "FIELD_INTEGER",
            "evasion_chance_pct": "15"
        }}
    },
    "blue_dragonspawn_overseer_devotion_aura": {
        "ID": "5327",
        "AbilityName": "blue_dragonspawn_overseer_devotion_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "bonus_armor": "3"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    },
    "big_thunder_lizard_slam": {
        "ID": "5332",
        "AbilityName": "big_thunder_lizard_slam",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "5.0",
        "AbilityDamage": "70",
        "AbilityManaCost": "90",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "radius": "250"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "movespeed_slow": "-25"
            },
            "03": {
                "var_type": "FIELD_FLOAT",
                "non_hero_duration": "4.0"
            },
            "04": {
                "var_type": "FIELD_FLOAT",
                "hero_duration": "2.0"
            }
        }
    },
    "big_thunder_lizard_frenzy": {
        "ID": "5333",
        "AbilityName": "big_thunder_lizard_frenzy",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET",
        "AbilityCastPoint": "0.0",
        "AbilityCooldown": "8.0",
        "AbilityManaCost": "50",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "attackspeed_bonus": "75"
            },
            "02": {
                "var_type": "FIELD_FLOAT",
                "duration": "8.0"
            }
        }
    },
    "forest_troll_high_priest_mana_aura": {
        "ID": "5491",
        "AbilityName": "forest_troll_high_priest_mana_aura",
        "MaxLevel": "1",
        "AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE",
        "AbilitySpecial": {
            "01": {
                "var_type": "FIELD_INTEGER",
                "mana_regen": "2"
            },
            "02": {
                "var_type": "FIELD_INTEGER",
                "radius": "900"
            }
        }
    }
}});