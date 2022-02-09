import React from 'react';
type ButtonNameType = {
    name: string
    callBack: ()=>void
}

const ButtonComponent = (props: ButtonNameType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default ButtonComponent;
