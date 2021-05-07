import React from 'react';

import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const EarningChart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              data: [200, 150, 156, 99, 300, 234, 200],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientFrom: '#bef4f1',
          backgroundGradientTo: '#bef4f1',
          color: (opacity = 1) => '#20b2aa',
          labelColor: (opacity = 1) => '#000',
          propsForDots: {
            r: '3',
            strokeWidth: '6',
            stroke: '#20b2aa',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default EarningChart;
