import React, { ReactElement } from 'react'
import { NO_OF_TRIALS_PER_LEVEL } from '../../Constants/ConfigConstants'
import { GAME_BUTTONS, PROCEED_TO_GAME_BUTTON_TEXT } from '../../Constants/LanguageConstants'
import { useGlobalState } from '../../Context/GlobalContext'
import { useNavigate } from "react-router-dom";
import paths from '../../RouterConfig/paths';

interface Props {

}

export default function Instructions({ }: Props): ReactElement {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate(paths.levelInfoScreen)
    }
    return (<>
        <h1>
            How to Play:
        </h1>
        <br />
        <p>
            The player has to match the current image on screen with the Nth last image, where N indicates the Level at which the player currently is.

            For Example,

            At Level 1 the player has to match the current image with the last image,
            At Level 2 the player has to match the current image with the 2nd last image,
            At Level 3 the player has to match the current image with the 3rd last image and so on.

            The player is supposed to click <strong>{GAME_BUTTONS.correct}</strong> button when he thinks the images match or should click the <strong>{GAME_BUTTONS.wrong}</strong> button when he thinks they don’t match.

            At any given level the player has to answer {NO_OF_TRIALS_PER_LEVEL} questions correctly to proceed to the next level.
        </p>
        <br></br>
        <button onClick={handleProceed}>{PROCEED_TO_GAME_BUTTON_TEXT}</button>
    </>


    )



}
