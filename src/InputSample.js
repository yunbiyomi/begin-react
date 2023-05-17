import React, {useState, useRef} from "react";

function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target;

        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const OnReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={OnReset}>초기화</button>
            <div>
                <b>값: </b>
                {name}({nickname})
            </div>
        </div>
    );
};

export default InputSample;