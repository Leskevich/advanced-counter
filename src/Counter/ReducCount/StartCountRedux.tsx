import React, {ChangeEvent, useEffect} from 'react';
import s from '../StartCount.module.css'
import {initialStateType, setCountValue, setMaxValue, setMinValue} from "../store/countReducer";
import {useDispatch} from "react-redux";

type StartType = {
    countR: initialStateType
}
export const StartCountRedux = ({countR, ...props}: StartType) => {
    const {minCount, maxCount, disable} = countR
    const dispatch = useDispatch()


    useEffect(() => {
        let local = localStorage.getItem('count')
        if (local) {
            let count: { min: number, max: number } = JSON.parse(local)
            dispatch(setMinValue(count.min))
            dispatch(setMaxValue(count.max))
        }
    },[])
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify({min: minCount, max: maxCount}))
    }, [minCount,maxCount])

    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValue(+e.currentTarget.value))
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValue(+e.currentTarget.value))
    }

    const disableButton = maxCount <= minCount || disable
    const finishInputClass = (maxCount <= minCount || minCount < 0) ? s.ErrorInput : s.InputClass

    return (
        <div className={s.Container}>
            <div className={s.StartValue}>
                <div>
                    max value:
                    <input
                        className={finishInputClass}
                        type={"number"}
                        value={maxCount}
                        onChange={setMax}
                    />
                </div>
                <div>
                    min value:
                    <input
                        className={finishInputClass}
                        type={"number"}
                        value={minCount}
                        onChange={setMin}
                    />
                </div>
            </div>
            <div className={s.Container_Button}>
                <button disabled={disableButton}
                        onClick={() => dispatch(setCountValue())}
                >
                    set
                </button>
            </div>
        </div>
    );
};

