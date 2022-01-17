import React, { ReactElement, useState } from 'react'
import "./GameScreen.scss";
// import {  } from "./../../assets/imageSet1";
interface Props {

}
const imageSet = [
    require('./../../assets/imageSet1/adrianna-geo-1rBg5YSi00c-unsplash.jpg'),
    require('./../../assets/imageSet1/birmingham-museums-trust-lhsfeT9WZ9M-unsplash.jpg'),
    require('./../../assets/imageSet1/europeana-5TK1F5VfdIk-unsplash.jpg'),
    require('./../../assets/imageSet1/europeana-LpCq6mjbMPo-unsplash.jpg'),
    require('./../../assets/imageSet1/europeana-Wiad3DQxUho-unsplash.jpg'),
    require('./../../assets/imageSet1/joel-filipe-QwoNAhbmLLo-unsplash.jpg'),
    require('./../../assets/imageSet1/luke-braswell-oYFv-_JKsVk-unsplash.jpg')
]
export default function GameScreen({ }: Props): ReactElement {
    const [path, setpath] = useState(imageSet[1]);
    const nextImage = () => {
        const randomIndex = Math.floor(Math.random() * imageSet.length)
        const randomImagePath = imageSet[randomIndex];
        setpath(randomImagePath);
        console.log(randomIndex);
    }
    return (
        <>
            <div className="image-container">
                <img className='image' src={path}></img>
            </div>
            <button onClick={nextImage}>next</button>
        </>
    )
}
