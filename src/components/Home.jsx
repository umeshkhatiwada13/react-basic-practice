import React from 'react';
import { ProductMap } from './Product';

const Home = () => {
    const dataArray = [1, 2, 3, 4];
    return (
        <div>
            {
                dataArray.map((i) => (
                    <ProductMap value={i} key={i} />
                ))
            }
        </div>
    )
}

export default Home