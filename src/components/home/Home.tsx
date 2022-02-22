import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE_SET } from '../../Constants/ConfigConstants';
import { APPLICATION_NAME, START_GAME_BUTTON } from '../../Constants/LanguageConstants';
import paths from '../../RouterConfig/paths';
import { Button } from '../../styledComponents/Button.styled';
import { Typography } from '../../styledComponents/Typography.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import DarkTheme from "./../../themes/dark";

interface IAppProps {

}

const Home: React.FunctionComponent<IAppProps> = (props) => {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const loadImages = async () => {
        const promises = IMAGE_SET.map(image => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image
                img.onload = () => {
                    resolve('');
                }
                img.onerror = () => {
                    reject('');
                }
            })

        }

        )
        await Promise.all(promises);
        setisLoading(false)
    }
    const handleProceedToGame = () => {
        navigate(paths.instructionScreen);
    }
    useEffect(() => {
        setisLoading(true);
        loadImages();
    }, [])
    return (
        <div>
            <FontAwesomeIcon icon={faSnowflake} size='10x' color={DarkTheme.backgrounds.button.primary.normal} />
            <Typography heading>{APPLICATION_NAME}</Typography>
            {isLoading ? <Typography>Loading...</Typography> :
                <Button onClick={handleProceedToGame}>{START_GAME_BUTTON}</Button>
            }

        </div>
    )
}
export default Home