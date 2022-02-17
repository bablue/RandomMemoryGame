import { IMAGE_SET, QUESTION_SUFFIX_MAPPER } from '../Constants/ConfigConstants';
import { GAME_BUTTONS, QUESTION_TEXT } from '../Constants/LanguageConstants';

export const randomIndexGenerator = () => Math.floor(Math.random() * IMAGE_SET.length);

export const InitialPathIndex = randomIndexGenerator();

export const isMatchingNthLastIndex = (n: number, arrayOfImageIndices: number[]): string => {
  const len = arrayOfImageIndices.length;
  return arrayOfImageIndices[len - 1] === arrayOfImageIndices[len - 1 - n]
    ? GAME_BUTTONS.correct
    : GAME_BUTTONS.wrong;
};

export const getQuestionText = (imageNumber:number,level:number) => {
    let text = QUESTION_TEXT.rememberImageText;
    if (imageNumber > level) {
        const suffix = QUESTION_SUFFIX_MAPPER.get(level);
        if (suffix) {
            text = QUESTION_TEXT.matchImageText.replace('$imageToBeMatched', suffix)
        }
        else {
            text = ''
        }
    }
    return text;
}