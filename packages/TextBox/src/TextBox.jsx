import React from 'react'

const TextBox = ({ id, name, required, placeholder }) => {
    return (
        <input type="text" id={id} name={name} required={required} placeholder={placeholder} />
    );
}

export default TextBox;
