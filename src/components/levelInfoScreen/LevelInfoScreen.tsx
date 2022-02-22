import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LEVEL_INFO_SCREEN, PLAY_BUTTON_TEXT, READ_INSTRUCTIONS } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext'
import paths from '../../RouterConfig/paths';
import { Button } from '../../styledComponents/Button.styled';
import { LinkTag } from '../../styledComponents/Link.styled';
import Spacing from '../../styledComponents/Spacing.styled';
import { Typography } from '../../styledComponents/Typography.styled';

interface IAppProps {
}

const LevelInfoScreen: React.FunctionComponent<IAppProps> = (props) => {
    const { level_value } = useGlobalState();
    const [level] = level_value;
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
            <Spacing size='3' />
            <Link to={paths.instructionScreen}>
                <LinkTag>
                    {READ_INSTRUCTIONS}
                </LinkTag>
            </Link>
        </div>
    )
};

export default LevelInfoScreen;


