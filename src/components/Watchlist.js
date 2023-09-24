import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/watchlist.css';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState(['NVDA', 'AAPL', 'MSFT', 'TSLA', 'GOOG']);
  const [data, setData] = useState([]);

  const API_KEY = 'cgo3jrhr01qpst9t1b00cgo3jrhr01qpst9t1b0g';
  const BASE_URL = `https://finnhub.io/api/v1/quote?symbol=`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.all(
        watchlist.map(async (symbol) => {
          const response = await axios.get(`${BASE_URL}${symbol}&token=${API_KEY}`);
          return response.data;
        })
      );
      setData(result);
    };
    fetchData();
  }, [watchlist]);

  return (
    <div className="watchlist">
      <h2>Watchlist</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open Price</th>
            <th>Current Price</th>
            <th>Previous Close</th>
          </tr>
        </thead>
        <tbody>
          {data.map((quote, index) => (
            <tr key={index}>
              <td>{watchlist[index]}</td>
              <td>{quote.o}</td>
              <td>{quote.c}</td>
              <td>{quote.pc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
