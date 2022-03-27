import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SIZES, {ColorPrimary} from '../../utils/constanta';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const Lainnya = ({navigation}) => {
    const [awal, setAwal] = useState('pilih');

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>Test</Text>
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorPrimary,
    width: SIZES.width - 50,
    height: 66,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  textInput: {
    width: SIZES.width - 50,
    borderRadius: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  picker: {
    paddingTop: 30,
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: ColorPrimary,
  },
});
