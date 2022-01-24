import GameScreen from "../components/gameScreen/GameScreen";
import LevelInfoScreen from "../components/levelInfoScreen/LevelInfoScreen";
import { path } from "./paths";

export const RoutesArray = [
    {
        path: path.gameScreen,
        element: <GameScreen />,
        exact: false,
    },
    {
        path: path.levelInfoScreen,
        element: <LevelInfoScreen />,
        exact: false,
    }
]