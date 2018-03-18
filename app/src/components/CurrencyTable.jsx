import React from 'react';
import { VictoryBar } from 'victory';

const btcIcon = import('../styles/images/btc.svg');
const ethIcon = import('../styles/images/eth.svg');
const ltcIcon = import('../styles/images/ltc.svg');

const styles = import('./CurrencyTable.css');

const CurrencyTable = props => {
  console.log(props);
  const { ETH, BTC, LTC } = props.data;
  return (
    <div className={styles.table}>
      <VictoryBar
        height={200}
        data={[
          { x: 1, y: BTC, label: 'BTC' },
          { x: 2, y: ETH, label: 'ETH' },
          { x: 3, y: LTC, label: 'LTC' },
        ]}
        horizontal
      />
    </div>
  );
};

export default CurrencyTable;
