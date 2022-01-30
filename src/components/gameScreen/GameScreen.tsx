import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IMAGE_SET, NO_OF_TRIALS_PER_LEVEL } from '../../Constants/ConfigConstants';
import { defaultState } from '../../Constants/DefaultState';
import { GAME_BUTTONS, RESTART_GAME_BUTTON_TEXT } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext';
import { paths } from '../../RouterConfig/paths';
import { InitialPathIndex, isMatchingNthLastIndex, randomIndexGenerator } from '../../Utility/CommonFunctions';
import "./GameScreen.scss";
// import {  } from "./../../assets/imageSet1";
interface Props {

}
export default function GameScreen({ }: Props): ReactElement {
    const [path, setpath] = useState(IMAGE_SET[InitialPathIndex]);
    const [trialNumber, setTrialNumber] = useState(0);
    const [arrayOfImageIndices, setArrayOfImageIndices] = useState([InitialPathIndex])
    const navigate = useNavigate();
    const { level_value } = useGlobalState();
    const [level, setLevel] = level_value;
    const [isWrongAnswer, setIsWrongAnswer] = useState(false)

    useEffect(() => {
        console.log(InitialPathIndex);
        return () => {
            console.log('unmounting');
        }
    }, [])

    const nextImage = () => {
        const randomIndex = randomIndexGenerator()
        const randomImagePath = IMAGE_SET[randomIndex];
        setArrayOfImageIndices(indeces => [...indeces, randomIndex]);
        setpath(randomImagePath);
        setTrialNumber(trialNumber => trialNumber + 1)
        console.log(randomIndex);
    }

    const handleGameButtons = (btn: string) => {
        console.log({ trialNumber });
        if (btn === isMatchingNthLastIndex(level, arrayOfImageIndices)) {
            console.log('correct anwer');
            if (trialNumber >= NO_OF_TRIALS_PER_LEVEL) {
                console.log('exceeded no of trials');
                console.log({ level });

                setLevel(level => level + 1);
                navigate(paths.levelInfoScreen)
                // setTrialNumber(0)
            }
            nextImage();
        }
        else {
            setIsWrongAnswer(true);
            console.log('wrong answer');
        }
    }
    const handleRestartButton = () => {
        setLevel(defaultState.levelDefault)
        navigate(paths.levelInfoScreen)
    }
    const renderButtons = () => {
        return isWrongAnswer ? <>
            <p>that is a wrong answer</p>
            <button onClick={handleRestartButton}>{RESTART_GAME_BUTTON_TEXT}</button>
        </>
            : <div className="game-buttons">
                <button onClick={() => { handleGameButtons(GAME_BUTTONS.wrong) }}>{GAME_BUTTONS.wrong}</button>
                <button onClick={() => { handleGameButtons(GAME_BUTTONS.correct) }}>{GAME_BUTTONS.correct}</button>
            </div>
    }

    return (
        <>
            <p>Trial {trialNumber}/{NO_OF_TRIALS_PER_LEVEL}</p>
            <div className="image-container">
                <img className='image' src={path}></img>
            </div>
            {arrayOfImageIndices.length <= level ?
                <button onClick={nextImage}>next</button> : renderButtons()

            }
        </>
    )
}
