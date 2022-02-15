import { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutesArray } from '../../RouterConfig/routes'

interface Props {

}

export default function GameContainer({ }: Props): ReactElement {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {RoutesArray.map(route => {
                        return <Route {...route} />
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
