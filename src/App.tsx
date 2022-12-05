import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {StartCount} from "./Counter/StartCount";
import {Count} from "./Counter/Count";

function App() {
    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)
    const [count, setCount] = useState<number>(minCount)
    const [error, setError] = useState<string>('')

    const incCount = () => {
        setCount(count + 1)
    }
    const resCount = () => {
        setCount(minCount)
    }
    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        setMinCount(+e.currentTarget.value)
        setCount(+e.currentTarget.value)
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxCount(+e.currentTarget.value)
    }

    return (
        <div className="App">
            <StartCount
                minCount={minCount}
                maxCount={maxCount}
                setMin={setMin}
                setMax={setMax}
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
