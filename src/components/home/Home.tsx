import React, { ReactElement, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IMAGE_SET } from '../../Constants/ConfigConstants';
import { START_GAME_BUTTON } from '../../Constants/LanguageConstants';
import paths from '../../RouterConfig/paths';
import { Button } from '../../styledComponents/Button.styled';
import { Typography } from '../../styledComponents/Typography.styled';

interface Props {

}
export default function Home({ }: Props): ReactElement {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const loadImages = async () => {
        const promises = await IMAGE_SET.map(image => {
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
            {isLoading ? <Typography>Loading...</Typography> :
                <Button onClick={handleProceedToGame}>{START_GAME_BUTTON}</Button>
            }

        </div>
    )
}
