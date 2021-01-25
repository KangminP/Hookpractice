import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue)
    const onChange = e => {
        const {
            target: { value }
        } =  e
        let willUpdate = true
        if (typeof validator === "function") {
            willUpdate = validator(value)
        }
        if (willUpdate) {
            setValue(value)
        }
    }

    return { value, onChange }
};

const Hook2 = () => {
    const maxLen = value => value.length < 15
    const name = useInput("Mr.", maxLen)

    return (
        <div className="box">
            <h2>useInput</h2>
            <p>초기 인풋값 설정, 길이 제한하는 유효성</p>
            <input placeholder="Name" {...name}></input>
            <hr></hr>
        </div>
    )
}

export default Hook2;