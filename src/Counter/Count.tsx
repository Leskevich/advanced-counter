import React from 'react';
import s from './Count.module.css'

type CountType = {
    error:string
    count: number
    minCount: number
    maxCount: number
    incCount: () => void
    resCount: () => void
}

export const Count = ({count, minCount, maxCount,error, ...props}: CountType) => {
    const incCount = () => {
        props.incCount()
    }
    const resCount = () => {
        props.resCount()
    }
    // const disableSet=count===maxCount
    return (
        <div className={s.Container}>
            <div className={s.Count}>
                {minCount === maxCount ? 'Ты дебил?' : count}
            </div>
            <div className={s.Button_Container}>
                <button disabled={!!error} onClick={incCount}>inc</button>
                <button disabled={count === minCount} onClick={resCount}>reset</button>
            </div>
        </div>
    );
};

