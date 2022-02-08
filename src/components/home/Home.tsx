import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { START_GAME_BUTTON } from '../../Constants/LanguageConstants';
import paths from '../../RouterConfig/paths';

interface Props {

}

export default function Home({ }: Props): ReactElement {
    const navigate = useNavigate();
    const handleProceedToGame = () => {
        navigate(paths.instructionScreen);
    }
    return (
        <div>
            <button onClick={handleProceedToGame}>{START_GAME_BUTTON}</button>
        </div>
    )
}
