import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {StartCount} from "./Counter/StartCount";
import {Count} from "./Counter/Count";

function App() {
    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)
    const [count, setCount] = useState<number>(minCount)
    const [error, setError] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)


    const incCount = () => {
        setCount(count + 1)
    }
    const resCount = () => {
        setCount(minCount)
    }
    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        setError(minCount < 0 || minCount >= maxCount ? 'Нажмите set' : 'Значение не коректо')
        setMinCount(+e.currentTarget.value)
        setDisable(false)
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        setError(minCount < 0 || minCount >= maxCount ? 'Нажмите set' : 'Значение не коректо')
        setMaxCount(+e.currentTarget.value)
        setDisable(false)
    }
    const setCountButton = () => {
        setCount(minCount)
        setDisable(true)
        setError('')
    }

    return (
        <div className="App">
            <StartCount
                minCount={minCount}
                maxCount={maxCount}
                setMin={setMin}
                setMax={setMax}
                error={error}
                setCountButton={setCountButton}
                disable={disable}
            />
            <Count
                error={error}
                count={count}
                minCount={minCount}
                maxCount={maxCount}
                incCount={incCount}
                resCount={resCount}
            />
        </div>
    );
}

export default App;
