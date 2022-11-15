import React, { useEffect, useState } from 'react';
import { ProductMap } from './Product';
import Coin from './Coin';

const Home = () => {
    const dataArray = [1, 2, 3, 4];
    //defining useState hook
    // temp is variable name and setTemp is setter used to populate the variable later on program flow
    // 0 is passed in the useState to set initial value of temp 0
    // setTemp is called on button press later on program updating the value of temp variable
    const [temp, setTemp] = useState(0);

    // this hook is called everytime the method is mounted / updated
    useEffect(() => {
        //after mounting
        console.log("Home Mounting");
        //return is called at unmounting
        return () => {
            console.log("Home Unmounting");
        }
    },//Empty array below is used to pass dependency or the states which we have to keep track of
        // if used useEffect is called only upon object rendering ie mounting
        // else it is called on everytime a variable is updated 
        [])
    return (
        <>
            <div>
                <button onClick={() => setTemp(temp + 1)}>Press me</button>
                <h2>Temp Counter</h2>
                <h3>{temp}</h3>
                {
                    dataArray.map((i) => (
                        <>
                            {/* <ProductMap value={i} key={i} /> */}
                            <Coin name={"Bitcoin"} symbol={"BTC"} />
                        </>
                    ))
                }
            </div>
            <div>

            </div>
        </>
    )
}

export default Home