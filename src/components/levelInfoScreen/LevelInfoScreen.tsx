import React, { ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LEVEL_INFO_SCREEN, PLAY_BUTTON_TEXT, READ_INSTRUCTIONS } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext'
import { paths } from '../../RouterConfig/paths';

interface Props {

}

export default function LevelInfoScreen({ }: Props): ReactElement {
    const { level_value } = useGlobalState();
    const [level, setLevel] = level_value;
    console.log({ level });

    const navigate = useNavigate();

    const handlePlay = () => {
        navigate(paths.gameScreen);
    }
    return (
        <div>
            {
                level > 1 ? `${LEVEL_INFO_SCREEN.levelInfo} ${level}`
                    : LEVEL_INFO_SCREEN.firstLevelInfo
            }
            <button onClick={handlePlay}>{PLAY_BUTTON_TEXT}</button>

            <br>
            </br>
            <Link to={paths.instructionScreen}>{READ_INSTRUCTIONS}</Link>
        </div>
    )
}
