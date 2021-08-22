import React, {useState, useEffect} from 'react';
const axios = require('axios');


function TrendingCoins() {

    const [coins, setCoins] = useState([]);
    const url_coins = 'https://api.coingecko.com/api/v3/search/trending';

    useEffect(() => {
        axios.get(url_coins)
        .then(function (response) {
            setCoins(response.data.coins);
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }, [])

   
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Market cap rank</th>
                </tr>
            </thead>
            <tbody>
            {console.log(coins)}
            {coins.map(coin => (
                <tr key={coin.item.id}>
                    <td>
                        {coin.item.name}
                    </td>
                    <td>
                        <img alt=""
                        src={coin.item.thumb} 
                        style={{width: 25, height: 25, marginRight: 10}} 
                        />
                        {coin.item.symbol.toUpperCase()}
                    </td>
                    <td>{coin.item.market_cap_rank}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default TrendingCoins