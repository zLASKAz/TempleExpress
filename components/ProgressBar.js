import {StyleSheet, View, Animated} from 'react-native';
import React, {useState} from 'react';

export const ProgressBar = ({current, max}) => {
  const renderProgressBar = () => {
    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
      inputRange: [0, max],
      outputRange: ['0%', '100%'],
    });
    Animated.timing(progress, {
      toValue: current,
      duration: 800,
      useNativeDriver: false,
    }).start();
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#FF780C20',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: '#FF780C',
            },
            {
              width: progressAnim,
            },
          ]}
          ></Animated.View>
      </View>
    );
  };

  return <View>{renderProgressBar()}</View>;
};

const styles = StyleSheet.create({});
