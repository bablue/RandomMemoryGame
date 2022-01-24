import React, { ReactElement, useContext, useState } from 'react'
import { IMAGE_SET, NO_OF_TRIALS_PER_LEVEL } from '../../Constants/ConfigConstants';
import { GAME_BUTTONS } from '../../Constants/LanguageConstants';
import { InitialPathIndex, isMatchingNthLastIndex, randomIndexGenerator } from '../../Utility/CommonFunctions';
import "./GameScreen.scss";
// import {  } from "./../../assets/imageSet1";
interface Props {

}
export default function GameScreen({ }: Props): ReactElement {
    const [path, setpath] = useState(IMAGE_SET[InitialPathIndex]);
    const [trialNumber, setTrialNumber] = useState(0);
    const [arrayOfImageIndices, setArrayOfImageIndices] = useState([InitialPathIndex])

    const nextImage = () => {
        const randomIndex = randomIndexGenerator()
        const randomImagePath = IMAGE_SET[randomIndex];
        setArrayOfImageIndices(indeces => [...indeces, randomIndex]);
        setpath(randomImagePath);
        setTrialNumber(trialNumber => trialNumber + 1)
        console.log(randomIndex);
    }

    const handleGameButtons = (btn: string) => {
        setTrialNumber(trialNumber => trialNumber + 1)
        if (btn === isMatchingNthLastIndex(1, arrayOfImageIndices)) {
            console.log('correct anwer');
            if (trialNumber === NO_OF_TRIALS_PER_LEVEL) {
                //TODO:push the next level info screen
            }
            nextImage();
        }
        else {
            console.log('wrong answer');
        }
    }

    return (
        <>
            <div className="image-container">
                <img className='image' src={path}></img>
            </div>
            {arrayOfImageIndices.length <= 1 ?
                <button onClick={nextImage}>next</button> :
                <div className="game-buttons">
                    <button onClick={() => { handleGameButtons(GAME_BUTTONS.wrong) }}>{GAME_BUTTONS.wrong}</button>
                    <button onClick={() => { handleGameButtons(GAME_BUTTONS.correct) }}>{GAME_BUTTONS.correct}</button>
                </div>
            }
        </>
    )
}
