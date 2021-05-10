import React from 'react'

const Label = ({name, forElement}) => {
      return (
            <label htmlFor={forElement}>{name}</label>
      );
}

export default Label;
