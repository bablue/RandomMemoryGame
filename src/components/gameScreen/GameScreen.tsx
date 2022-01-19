import React, { ReactElement, useState } from 'react'
import { IMAGE_SET } from '../../Constants/ConfigConstants';
import { GAME_BUTTONS } from '../../Constants/LanguageConstants';
import { InitialPathIndex, isMatchingNthLastIndex, randomIndexGenerator } from '../../Utility/CommonFunctions';
import "./GameScreen.scss";
// import {  } from "./../../assets/imageSet1";
interface Props {

}

export default function GameScreen({ }: Props): ReactElement {
    const [path, setpath] = useState(IMAGE_SET[InitialPathIndex]);
    const [arrayOfImageIndices, setArrayOfImageIndices] = useState([InitialPathIndex])

    const nextImage = () => {
        const randomIndex = randomIndexGenerator()
        const randomImagePath = IMAGE_SET[randomIndex];
        setArrayOfImageIndices(indeces => [...indeces, randomIndex]);
        setpath(randomImagePath);
        console.log(randomIndex);
    }

    const handleGameButtons = (btn: string) => {
        if (btn === isMatchingNthLastIndex(1, arrayOfImageIndices)) {
            console.log('correct anwer');
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
