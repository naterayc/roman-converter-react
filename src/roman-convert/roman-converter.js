import { /* oldRomanMatrix, */ newRomanMatrix } from "../utils/roman-matrix";

const limit = 3999;

const isNotAnInteger = (arabic) => {
    return !Number.isInteger(Number(arabic));
}

const validations = (arabic) => {
    if (isNotAnInteger(arabic) || arabic < 1) throw new Error('Debes ingresar un número válido');
    if (arabic > limit) throw new Error('El número ingresado es mayor que 3999, intenta con otro número');
}

/* export const convertToOldRoman = (arabic) => {
    validations(arabic);
    let romanOutput = '', relative;

    for (let i in oldRomanMatrix) {
        relative = Math.floor(arabic / oldRomanMatrix[i]);
        arabic -= relative * oldRomanMatrix[i];
        romanOutput += i.repeat(relative);
    }

    return romanOutput;
} */

export const convertToNewRoman = (arabic) => {
    validations(arabic);
    let romanOutput = '', relative;

    for (let i in newRomanMatrix) {
        relative = Math.floor(arabic / newRomanMatrix[i]);
        arabic -= relative * newRomanMatrix[i];
        romanOutput += i.repeat(relative);
    }

    return romanOutput;
};
