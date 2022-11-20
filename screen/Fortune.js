import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import RandomLuck from '../components/RandomLuck';
import {ProgressBar} from '../components/ProgressBar';
import HeaderTemple from '../components/HeaderTemple';

export const RandomLuckResult = ({ navigation }) => {
  const [isChoosen, setIsChoosen] = useState(false);
  const luckObj = useRef();

  useFocusEffect(
    useCallback(() => {
      setIsChoosen(false);
      return () => {};
    }, []),
  );

  const chooseNumber = n => {
    const randomLuck = new RandomLuck();
    randomLuck.choose(n);
    luckObj.current = randomLuck;
    setIsChoosen(true);
  };

  return (
    <SafeAreaView>
      <HeaderTemple temple={'Fortune Card'} useIcon={false} />
      <View style={styles.container}>
        {isChoosen ? (
          <View style={styles.resultContainer}>
            <Text style={styles.cardNameText}>
              {'You selected the ' +
                luckObj.current.cardMeaning[0] +
                ' card!'}
            </Text>
            <Text style={styles.cardConstellationText}>
              {'- ' + luckObj.current.cardMeaning[1] + ' -'}
            </Text>
            <ProgressBar
              current={luckObj.current.value}
              max={luckObj.current.maxValue}></ProgressBar>
            <Text style={styles.scoreText}>
              {'Your luck score is ' + luckObj.current.value}
            </Text>
            <Text style={styles.scoreRankText}>{luckObj.current.result()}</Text>
            <Text style={styles.meaningText}>
              {luckObj.current.cardMeaning[2]}
            </Text>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('profile')}>
              <Text style={styles.buttonBackText}>BACK</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttonSelectContainer}>
            <Text style={styles.selectTitle}>PLEASE SELECT ONE CARD</Text>
            <TouchableOpacity
              style={styles.buttonSelect}
              onPress={() => {
                chooseNumber(1);
              }}>
              <Text style={styles.buttonSelectText}>{"[ 1 ]"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSelect}
              onPress={() => {
                chooseNumber(2);
              }}>
              <Text style={styles.buttonSelectText}>{"[ 2 ]"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSelect}
              onPress={() => {
                chooseNumber(3);
              }}>
              <Text style={styles.buttonSelectText}>{"[ 3 ]"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  selectTitle: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Kanit',
  },
  buttonSelectContainer: {
    height: '70%',
    justifyContent: 'center',
  },
  buttonSelect: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 100,
    marginVertical: 10,
    backgroundColor: '#343779',
    borderRadius: 20,
    elevation: 8,
  },
  buttonSelectText: {
    fontSize: 20,
    fontFamily: 'Kanit',
    color: '#FFFFFF',
  },
  buttonBack: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: 30,
    backgroundColor: '#FFA646',
    borderRadius: 20,
    elevation: 3,
  },
  buttonBackText: {
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#FFFFFF',
  },
  resultContainer: {
    paddingHorizontal: 20,
    height: '70%',
    justifyContent: 'center',
  },
  cardNameText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Kanit',
    marginBottom: 20,
  },
  cardConstellationText: {
    alignSelf: 'center',
    fontSize: 18,
    fontFamily: 'Kanit',
    marginBottom: 40,
  },
  scoreText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#FF780C',
  },
  scoreRankText: {
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Kanit',
    color: '#FF780C',
    marginBottom: 40,
  },
  meaningText: {
    fontSize: 16,
    fontFamily: 'Kanit',
    marginBottom: 30,
  },
});
