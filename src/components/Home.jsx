import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';
import Loader from './Loader';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllCoins = async () => {
            try {
                const { data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200");
                setCoins(data);
            } catch (e) {
                console.log("Error : " + e);
            }
            setLoading(false);
        }

        fetchAllCoins();
    }, [])

    return (
        <div className='about'>
            {
                loading ? <Loader /> :
                    coins.map((i) => (
                        <Coin name={i.name} symbol={i.symbol} key={i.key} imgSrc={i.image} price={i.current_price} />
                    ))
            }
        </div>
    )
}

export default Home