import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { formatToEURString } from '../helpers/currency';
import styles from './CurrencyChart.scss';

const btcIcon = require('../styles/images/btc.svg');
const ethIcon = require('../styles/images/eth.svg');
const ltcIcon = require('../styles/images/ltc.svg');

const CurrencyChart = props => {
  const { ETH, BTC, LTC } = props.data;
  const currencyNames = Object.keys(props.data);

  const data = {
    labels: currencyNames,
    datasets: [
      {
        data: [BTC, ETH, LTC],
        backgroundColor: ['#6F3BFF', '#3BE3AE', '#F54269'],
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.chartRow}>
        <Doughnut data={data} width={400} height={300} />
      </div>
      <div className={styles.dataRow}>
        <div className={styles.cell}>
          <img src={btcIcon} alt="bitcoin icon" />
          <h2>{formatToEURString(BTC)}</h2>
        </div>
        <div className={styles.cell}>
          <img src={ethIcon} alt="ethereum icon" />
          <h2>{formatToEURString(ETH)}</h2>
        </div>
        <div className={styles.cell}>
          <img src={ltcIcon} alt="litecoin icon" />
          <h2>{formatToEURString(LTC)}</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrencyChart;
