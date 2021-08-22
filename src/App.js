import React, { Component } from 'react';
import axios from 'axios';

import Coin from './components/Coin';
import Pagination from './components/Pagination';
import TrendingCoins from "./components/TrendingCoins";

import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//export class App extends Component {
class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 5, 
    currency: 'usd', 
    order_by: 'market_cap_desc'
  };

  componentDidMount() {
    const getPosts = async () => {
      this.setState({ loading: true });
      
      const currency = this.state.currency;
      const order_by = this.state.order_by;
      const num_total_coins = 50;
      const currentPage = this.state.currentPage;

      const url_coins = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${order_by}&per_page=${num_total_coins}&page=${currentPage}&sparkline=false`;
      const results = await axios.get(url_coins);
      this.setState({ posts: results.data });
      this.setState({ loading: false });
    };
  
    getPosts(); 
  }
  

  render() {
    const { currentPage, postsPerPage, posts, loading, currency } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNum => this.setState({ currentPage: pageNum });
    const nextPage = () => this.setState({ currentPage: currentPage + 1 });
    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
        <Router>
            <div className="App">
              <Navbar paginate={paginate} />
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <Coin coins={currentPosts} loading={loading} currency = {currency} />
                    <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
                  </Route>
                  <Route path="/trendings">
                    <TrendingCoins />
                  </Route>
                </Switch>
              </div>
            </div>
        </Router>
    )
  }
}

export default App