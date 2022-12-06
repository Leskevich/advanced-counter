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
    // error ? s.Error :s.Count
    const countClass = s.Count + ' '+(error?s.Error:'')+ ' '+ (count===maxCount?s.CountMax:'')
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

