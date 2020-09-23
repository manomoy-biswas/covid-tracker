import React from 'react';
import './Cards.css';
// import {Card, CardContent, Typography, Grid } from '@material-ui/core';
// import cx from 'classnames';
import CountUp from 'react-countup';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate, active}}) => {
  if (!confirmed){
    return 'Loading...';
  }
  return (
    <div className="container">
      <p className="text-center text-secondary">Last Updated {new Date(lastUpdate).toDateString()}</p>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="whitebox confirmed">
            <h5 className="text-warning text-center">Confirmed</h5>
            <h4 className="text-secondary text-center"><CountUp start={0} end={confirmed} duration={2.5} separator="," /></h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="whitebox active">
            <h5 className="text-primary text-center">Active</h5>
            <h4 className="text-secondary text-center"><CountUp start={0} end={active} duration={2.5} separator="," /></h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="whitebox recovered">
            <h5 className="text-success text-center">Recovered</h5>
            <h4 className="text-secondary text-center"><CountUp start={0} end={recovered} duration={2.5} separator="," /></h4>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <div className="whitebox deceased">
            <h5 className="text-danger text-center">Deceased</h5>
            <h4 className="text-secondary text-center"><CountUp start={0} end={confirmed} duration={2.5} separator="," /></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
