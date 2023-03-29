import { AbilityString, SaveType } from "@actor/types";
import { ABCSystemSource } from "@item/abc/data";
import { BaseItemSourcePF2e, ItemTraits } from "@item/data/base";
import { ZeroToFour } from "@module/data";
import { CLASS_TRAITS } from "./values";

type ClassSource = BaseItemSourcePF2e<"class", ClassSystemSource>;

interface ClassSystemSource extends ABCSystemSource {
    traits: ItemTraits;
    keyAbility: { value: AbilityString[]; selected: AbilityString | null };
    hp: number;
    perception: ZeroToFour;
    savingThrows: Record<SaveType, ZeroToFour>;
    attacks: ClassAttackProficiencies;
    defenses: ClassDefenseProficiencies;
    trainedSkills: {
        value: string[];
        additional: number;
    };
    classDC: ZeroToFour;
    ancestryFeatLevels: { value: number[] };
    classFeatLevels: { value: number[] };
    generalFeatLevels: { value: number[] };
    skillFeatLevels: { value: number[] };
    skillIncreaseLevels: { value: number[] };
    level?: never;
}

type ClassSystemData = ClassSystemSource;

interface ClassAttackProficiencies {
    simple: ZeroToFour;
    martial: ZeroToFour;
    advanced: ZeroToFour;
    unarmed: ZeroToFour;
    other: { name: string; rank: ZeroToFour };
}

interface ClassDefenseProficiencies {
    unarmored: ZeroToFour;
    light: ZeroToFour;
    medium: ZeroToFour;
    heavy: ZeroToFour;
}

type ClassTrait = SetElement<typeof CLASS_TRAITS>;

export { ClassAttackProficiencies, ClassDefenseProficiencies, ClassSource, ClassSystemData, ClassTrait };
