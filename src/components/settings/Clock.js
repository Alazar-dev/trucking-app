import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <View>
      <Text style={{padding: 10, color: '#fff'}}>
        {date.toLocaleTimeString()}
      </Text>
    </View>
  );
}
