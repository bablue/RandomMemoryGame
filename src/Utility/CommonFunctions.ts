import { IMAGE_SET } from '../Constants/ConfigConstants';
import { GAME_BUTTONS } from '../Constants/LanguageConstants';

export const randomIndexGenerator = () => Math.floor(Math.random() * IMAGE_SET.length);

export const InitialPathIndex = randomIndexGenerator();

export const isMatchingNthLastIndex = (n: number, arrayOfImageIndices: number[]): string => {
  const len = arrayOfImageIndices.length;
  return arrayOfImageIndices[len - 1] === arrayOfImageIndices[len - 1 - n]
    ? GAME_BUTTONS.correct
    : GAME_BUTTONS.wrong;
};
