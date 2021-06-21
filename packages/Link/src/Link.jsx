import React from 'react'

const Link = ({ name, href, target }) => {
    return (
        <a href={href} target={target}>{name}</a>
    );
}

export default Link;
