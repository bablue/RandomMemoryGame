import React, { ReactElement } from 'react'
import { NO_OF_TRIALS_PER_LEVEL } from '../../Constants/ConfigConstants'
import { GAME_BUTTONS, PROCEED_TO_GAME_BUTTON_TEXT } from '../../Constants/LanguageConstants'
import { useGlobalState } from '../../Context/GlobalContext'
import { useNavigate } from "react-router-dom";
import paths from '../../RouterConfig/paths';
import { Typography } from '../../styledComponents/Typography.styled';
import { Button } from '../../styledComponents/Button.styled';

interface Props {

}

export default function Instructions({ }: Props): ReactElement {
    const navigate = useNavigate();
    const handleProceed = () => {
        navigate(paths.levelInfoScreen)
    }
    return (<>
        <div className='align-left'>
            <Typography heading>
                How to Play:
            </Typography>
            <Typography>
                The player has to match the current image on screen with the Nth last image, where N indicates the Level at which the player currently is.
            </Typography>
            <Typography subHeading>
                For Example,
            </Typography>
            <Typography>
                At <strong>Level 1</strong> the player has to match the current image with the last image,
            </Typography>
            <Typography>
                At <strong>Level 2</strong> the player has to match the current image with the 2nd last image,
            </Typography>
            <Typography>
                At <strong>Level 3</strong> the player has to match the current image with the 3rd last image and so on.
            </Typography>
            <Typography>
                The player is supposed to click <strong>{GAME_BUTTONS.correct}</strong> button when he thinks the images match or should click the <strong>{GAME_BUTTONS.wrong}</strong> button when he thinks they don’t match.
            </Typography>
            <Typography>
                At any given level the player has to answer {NO_OF_TRIALS_PER_LEVEL} questions correctly to proceed to the next level.
            </Typography>
        </div>
        <br></br>
        <Button onClick={handleProceed}>{PROCEED_TO_GAME_BUTTON_TEXT}</Button>
    </>


    )



}
