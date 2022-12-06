import React from 'react';
import s from './Count.module.css'

type CountType = {
    error: string
    count: number
    minCount: number
    maxCount: number
    incCount: () => void
    resCount: () => void
}

export const Count = ({count, minCount, maxCount, error, ...props}: CountType) => {
    const incCount = () => {
        props.incCount()
    }
    const resCount = () => {
        props.resCount()
    }
    const disableInc = count >= maxCount || !!error
    const disableRes = count === minCount || !!error
    return (
        <div className={s.Container}>
            <div className={s.Count}>
                {error ? error : count}
            </div>
            <div className={s.Button_Container}>
                <button disabled={disableInc} onClick={incCount}>inc</button>
                <button disabled={disableRes} onClick={resCount}>reset</button>
            </div>
        </div>
    );
};

