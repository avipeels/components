import React from 'react'

const TextBox = ({ id, name, required }) => {
    return (
        <input type="text" id={id} name={name} required={required} />
    );
}

export default TextBox;
