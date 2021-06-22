import React from 'react'

const Label = ({ name, forField }) => {
      return (
            <label for={forField}> {name}</label>
      );
}

export default Label;
