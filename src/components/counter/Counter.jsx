import { useState } from "react";
import "./counter.css";
import CounterButton from "./CounterButton";

export default function Counter() {

    const [count, setCount] = useState(0);// use state from react liabrary is used to introduce states for a component.

    function incrementCounterParentFunction(by) {
        setCount(count + by);
    }

    function decrementCounterParentFunction(by) {
        setCount(count - by);
    }

    function restCounter() {
        setCount(0);
    }

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton  by={1}
                            incrementMethod={incrementCounterParentFunction}
                            decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton  by={2}
                            incrementMethod={incrementCounterParentFunction}
                            decrementMethod={decrementCounterParentFunction}></CounterButton>
            <CounterButton  by={5}
                            incrementMethod={incrementCounterParentFunction}
                            decrementMethod={decrementCounterParentFunction}></CounterButton>
            <button className="resetButton" onClick={restCounter}>Reset</button>
        </>
    );
};