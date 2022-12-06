import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {StartCount} from "./Counter/StartCount";
import {Count} from "./Counter/Count";

function App() {

    const [minCount, setMinCount] = useState<number>(0)
    const [maxCount, setMaxCount] = useState<number>(0)
    const [count, setCount] = useState<number>(minCount)
    const [error, setError] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)

    useEffect(() => {
        let local = localStorage.getItem('count')
        console.log(local)
        if (local) {
            let count: { min: number, max: number } = JSON.parse(local)
            setMinCount(count.min)
            setMaxCount(count.max)
            // setMaxCount(count.max)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify({min: minCount, max: maxCount}))
    }, [minCount,maxCount])


    const incCount = () => {
        setCount(count + 1)
    }
    const resCount = () => {
        setCount(minCount)
    }
    const setMin = (e: ChangeEvent<HTMLInputElement>) => {
        setError((+e.currentTarget.value < 0 || +e.currentTarget.value >= maxCount) ? 'Значение не коректо' : 'Нажмите set')
        setMinCount(+e.currentTarget.value)
        setDisable(false)
    }
    const setMax = (e: ChangeEvent<HTMLInputElement>) => {
        setError((minCount < 0 || minCount >= +e.currentTarget.value) ? 'Значение не коректо' : 'Нажмите set')
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
