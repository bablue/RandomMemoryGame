import React, { ReactElement,useEffect,useState } from 'react'
import { useGlobalState } from '../../Context/GlobalContext';

interface Props {

}

export default function ComponentB({ }: Props): ReactElement {
    const { valueBpair } = useGlobalState();
    const [valueB, setvalueB] = valueBpair;
    const [state, setstate] = useState(0)
    useEffect(() => {
        console.log('rerendered B');       
        
    })
    console.log('inside B');
    
    return (
        <div>
            <h1>{`the value is ${valueB}`}</h1>
            <br />
            <p>click the below button</p>
            <button onClick={() => setvalueB(val=>!val)}>change value</button>
        </div>
    )
}
