import GameScreen from "../components/gameScreen/GameScreen";
import LevelInfoScreen from "../components/levelInfoScreen/LevelInfoScreen";
import { paths } from "./paths";

export const RoutesArray = [
    {
        path: paths.gameScreen,
        element: <GameScreen />,
        exact: false,
    },
    {
        path: paths.levelInfoScreen,
        element: <LevelInfoScreen />,
        exact: false,
    }
]