import React, { ReactElement } from 'react'
import { LEVEL_INFO_SCREEN } from '../../Constants/LanguageConstants';
import { useGlobalState } from '../../Context/GlobalContext'

interface Props {

}

export default function LevelInfoScreen({ }: Props): ReactElement {
    const { level_value } = useGlobalState();
    const [level, setLevel] = level_value;

    return (
        <div>
            {
                level > 1 ? `${LEVEL_INFO_SCREEN.levelInfo} ${level}`
                    : LEVEL_INFO_SCREEN.firstLevelInfo
            }
        </div>
    )
}
