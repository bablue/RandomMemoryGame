import React, { ReactElement, useContext, useEffect } from 'react'
import { useGlobalState } from '../../Context/GlobalContext'

interface Props {

}

export default function ComponentA({ }: Props): ReactElement {

    const context = useGlobalState();
    const { valueApair } = context;
    const [valueA, setvalueA] = valueApair;
    useEffect(() => {
        console.log('rerendered A');

    })
    console.log('inside A');

    return (
        <div>
            <h1>{`the value is ${valueA}`}</h1>
            <br />
            <p>click the below button</p>
            <button onClick={() => setvalueA(val => !val)}>change value</button>
        </div>
    )
}
