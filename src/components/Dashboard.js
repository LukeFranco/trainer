import React from 'react';
import Clock from './Clock';
import Watchlist from './Watchlist';

const Dashboard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
         <Clock />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
