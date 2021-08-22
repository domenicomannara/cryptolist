import React, { Component } from 'react'
import { Link } from "react-router-dom"

import CryptoListDetails from './CryptoListDetails';

//export class Coin extends Component {
class Coin extends Component {
    
    render(){
        const formatPercent = number => `${number.toFixed(2)}%`

        const formatDollar = (number, maximumSignificantDigits, currency) =>
            new Intl.NumberFormat(
            'en-US', 
            { 
                style: 'currency', 
                currency: currency,
                maximumSignificantDigits
            }).format(number);    

        const { coins, loading, currency } = this.props;

        if (loading){
            return <h2>Loading...</h2>
        }

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>24H Change</th>
                            <th>Price</th>
                            <th>High Price 24H</th>
                            <th>Low Price 24H</th>
                            <th>Market cap</th>
                        </tr>
                    </thead>
                    <tbody>
                    {coins.map(coin => (
                        <tr key={coin.id}>
                            <td>
                                {coin.market_cap_rank}
                            </td>
                            <td>
                                {coin.name}
                            </td>
                            <td>
                                <Link to=''>
                                    <img alt="" src={coin.image} style={{width: 25, height: 25, marginRight: 10}} />
                                    {coin.symbol.toUpperCase()}
                                </Link>
                            </td>
                            <td> 
                                <span className={coin.price_change_percentage_24h > 0 ? ('price_up') : 'price_down'}>
                                    {coin.price_change_percentage_24h && formatPercent(coin.price_change_percentage_24h)}
                                </span>
                            </td>
                            <td>{formatDollar(coin.current_price, 20, currency)}</td>
                            <td>{formatDollar(coin.high_24h, 20, currency)}</td>
                            <td>{formatDollar(coin.low_24h, 20, currency)}</td>
                            <td>{formatDollar(coin.market_cap, 12, currency)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <CryptoListDetails coins = {coins}/>
            </div> 
        )
    }
}

export default Coin