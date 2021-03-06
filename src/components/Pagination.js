import React, { Component } from 'react'

export class Pagination extends Component {
    render() {
        const { currentPage, postsPerPage, totalPosts, paginate, nextPage, prevPage } = this.props;

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav style={{"marginTop":"30px"}}>
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button className="page-link" onClick={() => prevPage()}>Previous</button>
                    </li>
                    {pageNumbers.map(num => (
                        <li className="page-item" key={num}>
                            <button onClick={() => paginate(num)} className={`page-link ${currentPage === num ? 'current': ''}`}>{num}</button>
                        </li>
                    ))}
                    <li className="page-item">
                        <button className="page-link" onClick={() => nextPage()}>Next</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination