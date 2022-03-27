import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {Text, TextInput} from 'react-native-paper';
// import {Button} from 'react-native-paper';
import SIZES, {ColorPrimary, API} from '../../utils/constanta';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const Pemesanan = ({route, navigation}) => {
  const [listTicket, setListTicket] = useState([]);

  const getListTicket = async () => {
    await fetch(`${API}/api/tickets`)
      .then(response => response.json())
      .then(response => setListTicket(response));
  };

  useEffect(() => {
    getListTicket();
    console.log(listTicket.length);
    return;
  }, [listTicket]);

  const Card = data => {
    return (
      <View
        style={{
          backgroundColor: '#ededed',
          marginHorizontal: 10,
          marginTop: 10,
          padding: 14,
          borderColor: 'black',
          borderRadius: 2,
          borderWidth: 2,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            {data.starting.name ?? 'null'}
          </Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            &rarr;
          </Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
            {data.destination.name ?? 'null'}
          </Text>
        </View>
        <Text style={{color: 'black', marginTop: 10}}>
          Jadwal Masuk Pelabuhan
        </Text>
        <Text style={{color: 'black'}}>{data.date}</Text>
        <Text style={{color: 'black'}}>{data.time} WIB</Text>
        <Text style={{color: 'black', fontWeight: 'bold', marginTop: 8}}>
          Layanan
        </Text>
        <Text style={{color: 'black', marginTop: 2}}>{data.service}</Text>
        <View
          style={{backgroundColor: 'black', height: 2, marginTop: 5}}></View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'black'}}>
            {data.type} x {data.total}
          </Text>
          <Text style={{color: 'black'}}>
            Rp. {parseInt(data.total) * 50000},00
          </Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 100,
        // borderRadius: 10,
        // paddingVertical: 20,
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: '#bdbdbd',
      }}>
      <View>
        <Text style={styles.title}>Kapalzy</Text>
        {listTicket ? listTicket.map((data, index) => {
              return <Card data={data} key={index} />;
            })
          : null}
      </View>
    </ScrollView>
  );
};

export default Pemesanan;

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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: ColorPrimary,
    marginBottom: 20,
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
    // padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
    height: 45,
    marginTop: 10,
  },
  picker1: {
    flex: 1,
  },
  txtButton: {
    color: 'black',
    borderBottomWidth: 2,
    borderBottomColor: '#747578',
    backgroundColor: '#bdbdbd',
    padding: 15,
    marginBottom: 10,
  },
  inputTotal: {
    // width: 70,
    height: 40,
    padding: 10,
    fontSize: 15,
    marginTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#747578',
    backgroundColor: '#bdbdbd',
    color: 'black',
  },
});
