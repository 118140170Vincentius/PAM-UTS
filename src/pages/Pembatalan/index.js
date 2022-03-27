import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import SIZES, {ColorPrimary} from '../../utils/constanta';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';

const Pembatalan = ({navigation}) => {
    const [awal, setAwal] = useState('pilih');

  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Text>page pembatalan</Text>
    </View>
  );
};

export default Pembatalan;

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
