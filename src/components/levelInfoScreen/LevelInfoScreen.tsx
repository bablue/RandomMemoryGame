import React, { ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LEVEL_INFO_SCREEN, PLAY_BUTTON_TEXT, READ_INSTRUCTIONS } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext'
import paths from '../../RouterConfig/paths';
import { Button } from '../../styledComponents/Button.styled';
import { LinkTag } from '../../styledComponents/Link.styled';
import { Typography } from '../../styledComponents/Typography.styled';

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
            <Typography>

                {
                    level > 1 ? `${LEVEL_INFO_SCREEN.levelInfo} ${level}`
                        : LEVEL_INFO_SCREEN.firstLevelInfo
                }
            </Typography>
            <Button onClick={handlePlay}>{PLAY_BUTTON_TEXT}</Button>

            <br>
            </br>
            <Link to={paths.instructionScreen}>
                <LinkTag>
                    {READ_INSTRUCTIONS}
                </LinkTag>
            </Link>
        </div>
    )
}
