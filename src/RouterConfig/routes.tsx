import GameScreen from "../components/gameScreen/GameScreen";
import Home from "../components/home/Home";
import Instructions from "../components/instructions/Instructions";
import LevelInfoScreen from "../components/levelInfoScreen/LevelInfoScreen";
import { paths } from "./paths";

export const RoutesArray = [
    {
        path: paths.gameScreen,
        element: <GameScreen />,
        exact: true,
    },
    {
        path: paths.levelInfoScreen,
        element: <LevelInfoScreen />,
        exact: true,
    },
    {
        path: paths.instructionScreen,
        element: <Instructions />,
        exact: true,
    },
    {
        path: paths.home,
        element: <Home />,
        exact: true,
    }
]