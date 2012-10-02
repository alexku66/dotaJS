define(function(require) {
    var $ = require('jquery');
    var Base = require('./Base');

    var UnitBase = function(key, data) {
        Base.apply(this, arguments);
    };

    UnitBase.prototype = Object.create(Base.prototype);
    
    $.extend(true, UnitBase.prototype, {
        constructor: UnitBase,
        
        team: '',
        abilities: [],
        armor: {
            physical: 0,
            magical: 0,
        },
        attack: {
            capabilities: '',
            damage: {
                min: 0,
                max: 0,
                type: '',
            },
            rate: 0,
            animation: 0,
            range: 0,
            projectile: 0,
        },
        attributes: {
            primary: '',
            strength: {
                base: 0,
                gain: 0,
            },
            intelligence: {
                base: 0,
                gain: 0,
            },
            agility: {
                base: 0,
                gain: 0,
            },
        },
        bounty: {
            xp: 0,
            gold: {
                min: 0,
                max: 0,
            },
        },
        movement: {
            capabilities: '',
            speed: 0,
            turnrate: 0,
        },
        health: {
            base: 0,
            regen: 0,
        },
        mana: {
            base: 0,
            regen: 0,
        },
        vision: {
            day: 0,
            night: 0,
        },

        _super: Base,
        _propertyMap: {
            armor: {
                physical: 'ArmorPhysical',
                magical: 'ArmorMagical',
            },
            abilities: {
                multiKey: true,
                properties: ['Ability1', 'Ability2', 'Ability3', 'Ability4',
                             'Ability5', 'Ability6', 'Ability7', 'Ability8']
            },
            attack: {
                capabilities: 'AttackCapabilities',
                damage: {
                    min: 'AttackDamageMin',
                    max: 'AttackDamageMax',
                    type: 'AttackDamageType',
                },
                rate: 'AttackRate',
                animation: 'AttackAnimationPoint',
                range: 'AttackRange',
                projectile: 'ProjectileSpeed',
            },
            attributes: {
                primary: 'AttributePrimary',
                strength: {
                    base: 'AttributeBaseStrength',
                    gain: 'AttributeStrengthGain',
                },
                intelligence: {
                    base: 'AttributeBaseIntelligence',
                    gain: 'AttributeIntelligenceGain',
                },
                agility: {
                    base: 'AttributeBaseAgility',
                    gain: 'AttributeAgilityGain',
                },
            },
            bounty: {
                xp: 'BountyXP',
                gold: {
                    min: 'BountyGoldMin',
                    max: 'BountyGoldMax',
                },
            },
            movement: {
                capabilities: 'MovementCapabilities',
                speed: 'MovementSpeed',
                turnrate: 'MovementTurnRate',
            },
            health: {
                base: 'StatusHealth',
                regen: 'StatusHealthRegen',
            },
            mana: {
                base: 'StatusMana',
                regen: 'StatusManaRegen',
            },
            vision: {
                day: 'VisionDaytimeRange',
                night: 'VisionNighttimeRange',
            }
        }
    });
    return UnitBase;
});