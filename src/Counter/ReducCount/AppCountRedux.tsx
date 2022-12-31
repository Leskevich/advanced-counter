import React from 'react';
import {CountRedux} from "./CountRedux";
import {StartCountRedux} from "./StartCountRedux";
import {useSelector} from "react-redux";
import {StoreType} from "../store/state";
import {initialStateType} from "../store/countReducer";
import '../../App.css';

export const AppCountRedux = () => {
    const countR = useSelector<StoreType,initialStateType>(state => state.count)

    // useEffect(() => {
    //     let local = localStorage.getItem('count')
    //
    //     if (local) {
    //         let count: { min: number, max: number } = JSON.parse(local)
    //         setMinCount(count.min)
    //         setMaxCount(count.max)
    //         // setMaxCount(count.max)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('count', JSON.stringify({min: minCount, max: maxCount}))
    // }, [minCount,maxCount])

    return (
        <div className="App">
            <StartCountRedux
                countR={countR}
            />
            <CountRedux
                countR={countR}
            />
        </div>
    );
}


