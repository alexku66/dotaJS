define(['jquery', './Base', './collections/Abilities'], function($, Base,
                                                                 Abilities) {
    var Hero = function(data) {
        Base.apply(this, arguments);
    };

    Hero.prototype = Object.create(Base.prototype);

    $.extend(true, Hero.prototype, {
        constructor: Hero,
        
        id: 0,
        enabled: false,
        level: 0,
        team: '',
        alias: '',
        url: '',
        roles: {
            role: [],
            level: [],
        },
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
            night: 0
        },

        _propertyMap: {

            id: 'HeroID',
            enabled: {
                property: 'Enabled',
                callback: function(s) {
                    return (s === '1');
                },
            },
            level: 'Level',
            alias: 'NameAliases',
            team: 'Team',
            url: 'url',
            roles: {
                role: {
                    property: 'Role',
                    callback: function(s) {
                        return s.split(',');
                    }
                },
                level: {
                    property: 'Rolelevels',
                    callback: function(s) {
                        var result = [];
                        $.each(s.split(','), function(index, value) {
                            result[index] = new Number(value);
                        });
                        return result;
                    }
                }
            },
            armor: {
                physical: 'ArmorPhysical',
                magical: 'ArmorMagical',
            },
            abilities: {
                multiKey: true,
                properties: ['Ability1', 'Ability2', 'Ability3',
                             'Ability4', 'Ability5', 'Ability6',
                             'Ability7', 'Ability8', 'Ability9',
                             'Ability10', 'Ability11', 'Ability12',
                             'Ability13', 'Ability14', 'Ability15',
                             'Ability16'],
                callback: function(s) {
                    return Abilities.collection[s];
                },
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
    return Hero;
});