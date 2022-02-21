import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IMAGE_SET, NO_OF_TRIALS_PER_LEVEL } from '../../Constants/ConfigConstants';
import defaultState from '../../Constants/DefaultState';
import { GAME_BUTTONS, RESTART_GAME_BUTTON_TEXT, WRONG_ANSWER_TEXT } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext';
import paths from '../../RouterConfig/paths';
import { Button } from '../../styledComponents/Button.styled';
import { Image } from '../../styledComponents/Image.styled';
import { Typography } from '../../styledComponents/Typography.styled';
import { getQuestionText, InitialPathIndex, isMatchingNthLastIndex, randomIndexGenerator } from '../../Utility/CommonFunctions';
import "./GameScreen.scss";


interface IAppProps {
}

const GameScreen: React.FunctionComponent<IAppProps> = (props) => {
    const [path, setpath] = useState(IMAGE_SET[InitialPathIndex]);
    const [trialNumber, setTrialNumber] = useState(0);
    const [arrayOfImageIndices, setArrayOfImageIndices] = useState([InitialPathIndex])
    const navigate = useNavigate();
    const { level_value } = useGlobalState();
    const [level, setLevel] = level_value;
    const [isWrongAnswer, setIsWrongAnswer] = useState(false)

    const nextImage = () => {
        const randomIndex = randomIndexGenerator()
        const randomImagePath = IMAGE_SET[randomIndex];
        setArrayOfImageIndices(indeces => [...indeces, randomIndex]);
        setpath(randomImagePath);
        setTrialNumber(currentTrialNumber => currentTrialNumber + 1)
    }

    const handleGameButtons = (btn: string) => {
        if (btn === isMatchingNthLastIndex(level, arrayOfImageIndices)) {
            if (trialNumber >= NO_OF_TRIALS_PER_LEVEL) {
                setLevel(currentLevel => currentLevel + 1);
                navigate(paths.levelInfoScreen)
            }
            nextImage();
        }
        else {
            setIsWrongAnswer(true);
        }
    }
    const handleRestartButton = () => {
        setLevel(defaultState.levelDefault)
        navigate(paths.levelInfoScreen)
    }
    const renderButtons = () => {
        return isWrongAnswer ? <>
            <Typography>{WRONG_ANSWER_TEXT}</Typography>
            <Button onClick={handleRestartButton}>{RESTART_GAME_BUTTON_TEXT}</Button>
        </>
            : <div className="game-buttons">
                <Button onClick={() => { handleGameButtons(GAME_BUTTONS.wrong) }} secondary>{GAME_BUTTONS.wrong}</Button>
                <Button onClick={() => { handleGameButtons(GAME_BUTTONS.correct) }}>{GAME_BUTTONS.correct}</Button>
            </div>
    }

    return (
        <>
            <Typography subHeading>
                {
                    getQuestionText(arrayOfImageIndices.length, level)
                }
            </Typography>
            <div className="image-container">
                <Image className='image' src={path}></Image>
            </div>
            <Typography subHeading>Trial <strong>{trialNumber}</strong>/{NO_OF_TRIALS_PER_LEVEL}</Typography>
            {arrayOfImageIndices.length <= level ?
                <Button onClick={nextImage}>next</Button> : renderButtons()
            }
        </>
    )
}
export default GameScreen;
