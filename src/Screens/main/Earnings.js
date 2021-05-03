import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from 'components';

import HeaderEarnings from '../../components/earnings/HeaderEarnings';
import EarningChart from '../../components/chart/EarningChart';
import DataTable from '../../components/earnings/DataTable';

const Earnings = (props) => {
  return (
    <Container>
      <HeaderEarnings />
      <ScrollView>
        <EarningChart />
        <DataTable navigation={props.navigation} />
      </ScrollView>
    </Container>
  );
};

export default Earnings;
