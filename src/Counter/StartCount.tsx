import React, {ChangeEvent} from 'react';
import s from './StartCount.module.css'

type StartType = {
    disable: boolean
    error: string
    minCount: number
    maxCount: number
    setMin: (e: ChangeEvent<HTMLInputElement>) => void
    setMax: (e: ChangeEvent<HTMLInputElement>) => void
    setCountButton: () => void
}
export const StartCount = ({disable, minCount, maxCount, error, ...props}: StartType) => {
    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMin(e)
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(e)
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
                        onClick={props.setCountButton}
                >
                    set
                </button>
            </div>
        </div>
    );
};

