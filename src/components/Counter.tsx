import React, {useState} from 'react';
import cls from "./Counter.module.scss";

const Counter = () => {

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <h1>{value}</h1>
            <button className={cls.btn} onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;