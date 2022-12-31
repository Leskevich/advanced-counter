import React from 'react';
import s from '../Count.module.css'
import {incValue, initialStateType, resValue} from "../store/countReducer";
import {useDispatch} from "react-redux";

type CountType = {
    countR: initialStateType
}

export const CountRedux = ({countR, ...props}: CountType) => {
    const {minCount, maxCount, error, count} = countR
    const dispatch = useDispatch()

    const incCount = () => {
        dispatch(incValue())
    }
    const resCount = () => {
        dispatch(resValue())
    }
    const disableInc = count >= maxCount || !!error
    const disableRes = count === minCount || !!error

    const countClass = s.Count + ' ' + (error ? s.Error : '')+' '+ (minCount===maxCount&&s.Error)
    return (
        <div className={s.Container}>
            <div className={countClass}>
                {error ? error : count}
            </div>
            <div className={s.Button_Container}>
                <button disabled={disableInc} onClick={incCount}>inc</button>
                <button disabled={disableRes} onClick={resCount}>reset</button>
            </div>
        </div>
    );
};

