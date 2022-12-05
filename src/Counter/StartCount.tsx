import React, {ChangeEvent} from 'react';
import s from './StartCount.module.css'

type StartType = {
    minCount:number
    maxCount:number
    setMin:(e:ChangeEvent<HTMLInputElement>)=>void
    setMax:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const StartCount = ({minCount,maxCount,...props}:StartType) => {
    const setMin = (e:ChangeEvent<HTMLInputElement>) => {
      props.setMin(e)
    }
    const setMax = (e:ChangeEvent<HTMLInputElement>) => {
      props.setMax(e)
    }

    return (
        <div className={s.Container}>
            <div className={s.StartValue}>
                <div>
                    max value:
                    <input
                        value={maxCount}
                        onChange={setMax}
                    />
                </div>
                <div>
                    min value:
                    <input
                    value={minCount}
                    onChange={setMin}
                    />
                </div>
            </div>
            <div className={s.Container_Button}>
                <button >set</button>
            </div>
        </div>
    );
};

