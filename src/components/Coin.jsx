import React from 'react';

const Coin = ({ name, symbol, imgSrc, price }) => {
    console.log("Inside Coin Component");
    return (
        <div className='coin'>
            <img src={imgSrc} alt={name} />
            <h1>{symbol}</h1>
            <p>{name}</p>
            <h4>$ {price}</h4>
        </div>
    )
}

export default Coin;