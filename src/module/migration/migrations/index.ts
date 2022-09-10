export { Migration600Reach } from "./600-reach";
export { Migration601SplitEffectCompendia } from "./601-migrate-effect-compendia";
export { Migration602UpdateDiehardFeat } from "./602-update-diehard-feat";
export { Migration603ResetQuickRollDefault } from "./603-reset-quick-roll-default";
export { Migration604FixClassItem } from "./604-fix-class-items";
export { Migration605CatchUpToTemplateJSON } from "./605-catch-up-to-template-json";
export { Migration606SignatureSpells } from "./606-signature-spells";
export { Migration607MeleeItemDamageRolls } from "./607-melee-item-damage-rolls";
export { Migration608DeletePersistedKits } from "./608-delete-persisted-kits";
export { Migration609LootActorTraits } from "./609-loot-actor-traits";
export { Migration610SetHeritageFeatType } from "./610-set-heritage-feat-type";
export { Migration611UpdateToughnessMountainsStoutness } from "./611-update-toughness-mountains-stoutness";
export { Migration612NormalizeRarities } from "./612-normalize-rarities";
export { Migration613RemoveAmmoCharges } from "./613-remove-ammo-charges";
export { Migration614NumifyMeleeBonuses } from "./614-numify-melee-bonuses";
export { Migration615RemoveInstinctTrait } from "./615-remove-instinct-trait";
export { Migration616MigrateFeatPrerequisites } from "./616-migrate-feat-prerequisites";
export { Migration617FixUserFlags } from "./617-fix-user-flags";
export { Migration618MigrateItemImagePaths } from "./618-migrate-item-img-paths";
export { Migration619TraditionLowercaseAndRemoveWandScroll } from "./619-remove-wand-and-scroll-tradition";
export { Migration620RenameToWebp } from "./620-rename-to-webp";
export { Migration621RemoveConfigSpellSchools } from "./621-remove-config-spell-schools";
export { Migration623NumifyPotencyRunes } from "./623-numify-potency-runes";
export { Migration624RemoveTokenEffectIconFlags } from "./624-removed-token-effect-icon-flags";
export { Migration625EnsurePresenceOfSaves } from "./625-ensure-presence-of-saves";
export { Migration626UpdateSpellCategory } from "./626-update-spell-category";
export { Migration627LowerCaseSpellSaves } from "./627-lowercase-spell-saves";
export { Migration629SetBaseItems } from "./629-set-base-items";
export { Migration630FixTalismanSpelling } from "./630-fix-talisman-spelling";
export { Migration631FixSenseRuleElementSelector } from "./631-fix-sense-rule-element-selector";
export { Migration632DeleteOrphanedSpells } from "./632-delete-orphaned-spells";
export { Migration633DeleteUnidentifiedTraits } from "./633-delete-unidentified-traits";
export { Migration634PurgeMartialItems } from "./634-purge-martial-items";
export { Migration635NumifyACAndQuantity } from "./635-numify-ac-and-quantity";
export { Migration636NumifyArmorData } from "./636-numify-armor-data";
export { Migration637CleanMeleeItems } from "./637-clean-melee-items";
export { Migration638SpellComponents } from "./638-spell-components";
export { Migration639NormalizeLevelAndPrice } from "./639-normalize-level-and-price";
export { Migration640CantripsAreNotZeroLevel } from "./640-cantrips-are-not-zero-level";
export { Migration641SovereignSteelValue } from "./641-sovereign-steel-value";
export { Migration642TrackSchemaVersion } from "./642-track-schema-version";
export { Migration643HazardLevel } from "./643-hazard-level";
export { Migration644SpellcastingCategory } from "./644-spellcasting-category";
export { Migration645TokenImageSize } from "./645-token-image-size";
export { Migration646UpdateInlineLinks } from "./646-update-inline-links";
export { Migration647FixPCSenses } from "./647-fix-pc-senses";
export { Migration648RemoveInvestedProperty } from "./648-remove-invested-property";
export { Migration649FocusToActor } from "./649-focus-to-actor";
export { Migration650StringifyWeaponProperties } from "./650-stringify-weapon-properties";
export { Migration651EphemeralFocusPool } from "./651-ephemeral-focus-pool";
export { Migration652KillHalcyonTradition } from "./652-kill-halcyon-tradition";
export { Migration653AEstoREs } from "./653-aes-to-res";
export { Migration654ActionTypeAndCount } from "./654-action-type-count";
export { Migration655CreatureTokenSizes } from "./655-creature-token-sizes";
export { Migration656OtherFocusPoolSources } from "./656-other-focus-pool-sources";
export { Migration657RemoveSetProperty } from "./657-remove-set-property";
export { Migration658MonkUnarmoredProficiency } from "./658-monk-unarmored-proficiency";
export { Migration659MultipleDamageRows } from "./659-multiple-damage-rows";
export { Migration660DerivedSpellTraits } from "./660-derived-spell-traits";
export { Migration661NumifyVehicleDimensions } from "./661-numify-vehicle-dimensions";
export { Migration662LinkToActorSizeDefaults } from "./662-link-to-actor-size-defaults";
export { Migration663FixSpellDamage } from "./663-fix-spell-damage";
export { Migration664DeleteCUBConditions } from "./664-delete-cub-conditions";
export { Migration665HandwrapsCorrections } from "./665-handwraps-corrections";
export { Migration666UsageAndStowingContainers } from "./666-usage-and-stowing-containers";
export { Migration667HPSubProperties } from "./667-hp-subproperties";
export { Migration668ArmorSpeedPenalty } from "./668-armor-speed-penalty";
export { Migration669NPCAttackEffects } from "./669-npc-attack-effects";
export { Migration670NoCustomTrait } from "./670-no-custom-trait";
export { Migration670AncestryVision } from "./670-ancestry-vision";
export { Migration671NoPCItemsOnNonPCs } from "./671-no-pc-items-on-non-pcs";
export { Migration672RemoveNPCBaseProperties } from "./672-remove-npc-base-properties";
export { Migration673RemoveBulwarkREs } from "./673-remove-bulwark-res";
export { Migration674StableHomebrewTagIDs } from "./674-stable-homebrew-tag-ids";
export { Migration675FlatModifierAEsToREs } from "./675-flat-modifier-aes-to-res";
export { Migration676ReplaceItemsWithRELikeAEs } from "./676-replace-items-with-re-like-aes";
export { Migration677RuleValueDataRefs } from "./677-rule-value-data-refs";
export { Migration678SeparateNPCAttackTraits } from "./678-separate-npc-attack-traits";
export { Migration679TowerShieldSpeedPenalty } from "./679-tower-shield-speed-penalty";
export { Migration680SetWeaponHands } from "./680-set-weapon-hands";
export { Migration681GiantLanguageToJotun } from "./681-giant-language-to-jotun";
export { Migration682BiographyFields } from "./682-biography-fields";
export { Migration683FlavorTextToPublicNotes } from "./683-flavortext-to-public-notes";
export { Migration684RationsToConsumable } from "./684-rations-to-consumable";
export { Migration685FixMeleeUsageTraits } from "./685-fix-melee-usage-traits";
export { Migration686HeroPointsToResources } from "./686-hero-points-to-resources";
export { Migration687FamiliarityAEsToREs } from "./687-familiarity-aes-to-res";
export { Migration688ClampSpellLevel } from "./688-clamp-spell-level";
export { Migration689EncumberanceActiveEffects } from "./689-encumberance-aes";
export { Migration690InitiativeTiebreakItems } from "./690-tiebreak-items";
export { Migration691WeaponRangeAbilityCategoryGroup } from "./691-weapon-range-ability-category-group";
export { Migration692CraftingEntryFeatReplacement } from "./692-crafting-entry-feat-replacement";
export { Migration693ArmorCategoryGroup } from "./693-armor-category-group";
export { Migration694RetireSystemTokenSettings } from "./694-retire-system-token-settings";
export { Migration695SummonToSummoned } from "./695-summon-to-summoned";
export { Migration696FlatAbilityModifiers } from "./696-flat-ability-modifiers";
export { Migration697WeaponReachTrait } from "./697-weapon-reach-trait";
export { Migration698RemoveDerivedActorTraits } from "./698-remove-derived-actor-traits";
export { Migration699ItemDescriptionEmptyString } from "./699-item-description-empty-string";
export { Migration700SingleClassFeatures } from "./700-single-class-features";
export { Migration701ModifierNameToSlug } from "./701-modifier-name-to-slug";
export { Migration702REFormulasAtInstanceLevel } from "./702-re-formulas-at-instance-level";
export { Migration703SpellDamageStructure } from "./703-spell-damage-structure";
export { Migration704MartialProficiencyRE } from "./704-martial-proficiency-re";
export { Migration705GunslingerCatchUp } from "./705-gunslinger-catch-up";
export { Migration706FormulasAtInstanceLevelEverythingElse } from "./706-formulas-at-instance-level-everything-else";
export { Migration707BracketedFormulasAtInstanceLevel } from "./707-bracketed-formulas-at-instance-level";
export { Migration708SpecificRuleLabel } from "./708-specific-rule-label";
export { Migration709REFormulasAtInstanceLevelRedux } from "./709-re-formulas-at-instance-level-redux";
export { Migration710RarityToString } from "./710-rarity-to-string";
export { Migration711HeritageItems } from "./711-heritage-items";
export { Migration712ActorShieldStructure } from "./712-actor-shield-structure";
export { Migration713FistToStrikeRE } from "./713-fist-to-strike-re";
export { Migration714RangeIncrementREs } from "./714-range-increment-res";
export { Migration715DangerousSorcery } from "./715-dangerous-sorcery";
export { Migration716StrikeDamageSelector } from "./716-strike-damage-selector";
export { Migration717TakeFeatLimits } from "./717-take-feat-limits";
export { Migration718CarryType } from "./718-carry-type";
export { Migration719ShrugFlanking } from "./719-shrug-flanking";
export { Migration720UpdateSpellDescriptions } from "./720-update-spell-descriptions";
export { Migration721SetReloadValues } from "./721-set-reload-values";
export { Migration722CraftingSystemData } from "./722-crafting-system-data";
export { Migration723CumulativeItemBonuses } from "./723-cumulative-item-bonuses";
export { Migration724CraftingMaxItemLevel } from "./724-crafting-max-item-level";
export { Migration725QuickClimbREs } from "./725-quick-climb-rule-elements";
export { Migration726JournalSetting } from "./726-journal-setting";
export { Migration727TrimSelfRollOptions } from "./727-trim-self-roll-options";
export { Migration728FlattenPhysicalProperties } from "./728-flatten-physical-properties";
export { Migration729CumulativeItemBonusCleanup } from "./729-cumulative-item-bonus-cleanup";
export { Migration730DeruneHandwraps } from "./730-derune-handwraps";
export { Migration731TogglePropertyToRollOption } from "./731-toggle-property-to-roll-option";
export { Migration732FixDedicationFeatTypes } from "./732-fix-dedication-feat-types";
export { Migration733ItemBonusFromEquipment } from "./733-item-bonus-from-equipment";
export { Migration734SpellLocationPropsAndSignature } from "./734-spell-location-props-and-signature";
export { Migration735FirearmAmmoAlchemical } from "./735-firearm-ammo-alchemical";
export { Migration736RemoveBrokenThreshold } from "./736-remove-broken-threshold";
export { Migration737NormalizeRuleElementKeys } from "./737-normalize-re-keys";
export { Migration738UpdateLaughingShadow } from "./738-update-laughing-shadow";
export { Migration739RecoveryCheckDC } from "./739-recovery-check-dc";
export { Migration740MaxTakable } from "./740-fix-max-takable";
export { Migration741RollOptionToggleToItem } from "./741-roll-option-toggle-to-item";
export { Migration742RMAbilityBoostLevels } from "./742-rm-class-ability-boost-levels";
export { Migration743FixWeaknessStructure } from "./743-fix-weakness-structure";
export { Migration744MigrateSpellHeighten } from "./744-migrate-spell-heighten";
export { Migration745EffectTargetToChoiceSet } from "./745-effect-target-to-choice-set";
export { Migration746StandardizePricing } from "./746-standardize-pricing";
export { Migration747FixedHeightening } from "./747-fixed-heightening";
export { Migration748BatchConsumablePricing } from "./748-batch-consumable-pricing";
export { Migration749AssuranceREs } from "./749-assurance-res";
export { Migration750FixCorruptedPrice } from "./750-fix-corrupted-price";
export { Migration751ResetRollOptions } from "./751-reset-roll-options";
export { Migration752StrikeVsWeaponTraits } from "./752-strike-vs-weapon-traits";
export { Migration753WeaponReloadTimes } from "./753-weapon-reload-times";
export { Migration754MightyBulwarkAdjustModifiers } from "./754-mighty-bulwark-adjust-modifiers";
export { Migration755GrantIdsToData } from "./755-grant-ids-to-data";
export { Migration756RMStoredResourceMaxes } from "./756-rm-stored-resource-maxes";
export { Migration757HillockHalfling } from "./757-hillock-halfling";
export { Migration758PrunePCAttributes } from "./758-prune-pc-attributes";
export { Migration759CritSpecRE } from "./759-crit-spec-re";
export { Migration760SeparateNoteTitle } from "./760-separate-note-title";
export { Migration761ShotRules } from "./761-update-shot-rules";
export { Migration762UpdateBackgroundItems } from "./762-update-background-items";
export { Migration763RestoreAnimalStrikeOptions } from "./763-restore-animal-strike-options";
export { Migration764PanacheVivaciousREs } from "./764-panache-vivacious-res";
export { Migration765ChoiceOwnedItemTypes } from "./765-choice-owned-item-types";
export { Migration766WipeURLSources } from "./766-wipe-url-sources";
export { Migration767ConvertVoluntaryFlaws } from "./767-convert-voluntary-flaws";
export { Migration768AddNewAuras } from "./768-add-new-auras";
export { Migration769NoUniversalistFocusPool } from "./769-no-universalist-focus-pool";
export { Migration770REDataToSystem } from "./770-re-data-to-system";
export { Migration771SpellVariantsToSystem } from "./771-spell-variants-to-system";
export { Migration772V10EmbeddedSpellData } from "./772-v10-embedded-spell-data";
export { Migration773ReligiousSymbolUsage } from "./773-religious-symbol-usage";
export { Migration774UnpersistCraftingEntries } from "./774-unpersist-crafting-entries";
export { Migration775AgileFinesseRanged } from "./775-agile-finesse-ranged";
export { Migration776SlugifyConditionOverrides } from "./776-sluggify-condition-overrides";
export { Migration777HandOfTheApprentice } from "./777-hand-of-the-apprentice";
export { Migration778RenameRetiredPackRefs } from "./778-rename-feature-effects-refs";
export { Migration779EliteWeak } from "./779-elite-weak";
export { Migration780NumifySpeeds } from "./780-numify-speeds";
export { Migration781SuppressNoCrowbar } from "./781-suppress-no-crowbar";
export { Migration782UnnestActorTraits } from "./782-unnest-actor-traits";
export { Migration783RemoveClassSkillAELikes } from "./783-remove-class-skill-ae-likes";
export { Migration784CompBrowserPackSetting } from "./784-comp-browser-pack-setting";
export { Migration785ABCKitItemUUIDs } from "./785-abc-kit-items";
