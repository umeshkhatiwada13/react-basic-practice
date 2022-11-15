import React, { useState } from 'react'

const Contact = () => {
    let [name, setName] = useState("Init Value");
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Name'
                    onChange={e => setName(e.target.value)}
                    value={name} />
                <input type="email" placeholder='Email' />
            </form>
            <button onClick={() => console.log(name)}>Press</button>
            <p>{name}</p>
        </div>
    )
}

export default Contact