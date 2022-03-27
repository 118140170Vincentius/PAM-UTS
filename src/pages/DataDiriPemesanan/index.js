import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
// import {Text, TextInput} from 'react-native-paper';
// import {Button} from 'react-native-paper';
import SIZES, {ColorPrimary, API} from '../../utils/constanta';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

const DataDiriPemesanan = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [identity, setIdentity] = useState('');
  const {
    starting,
    destination,
    destinationName,
    startingName,
    service,
    type,
    date,
    time,
    total,
  } = route.params;

  const addTicket = async () => {
    await fetch(`${API}/api/tickets`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        starting: starting,
        destination: destination,
        service: service,
        type: type,
        date: date,
        time: time,
        total: total,
        name: name,
        identity: identity,
        age: age,
      }),
    })
      .then(response => response.json())
      .then(response => {navigation.navigate('Tab')});
  };

  return (
    <View style={{flex: 1, backgroundColor: '#bdbdbd', color: '#000000'}}>
      <ScrollView
        style={{
          marginTop: 30,
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 120,
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          // flex:1,
          // alignItems:'center',
        }}>
        <Text style={styles.title}>Kapalzy</Text>
        <Text style={{color: 'black'}}>Informasi Pemesanan</Text>
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
              {startingName}
            </Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              &rarr;
            </Text>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              {destinationName}
            </Text>
          </View>
          <Text style={{color: 'black', marginTop: 10}}>
            Jadwal Masuk Pelabuhan
          </Text>
          <Text style={{color: 'black'}}>{date}</Text>
          <Text style={{color: 'black'}}>{time} WIB</Text>
          <Text style={{color: 'black', fontWeight: 'bold', marginTop: 8}}>
            Layanan
          </Text>
          <Text style={{color: 'black', marginTop: 2}}>{service}</Text>
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
              {type} x {total}
            </Text>
            <Text style={{color: 'black'}}>
              Rp. {parseInt(total) * 50000},00
            </Text>
          </View>
        </View>
        <Text style={{color: 'black', marginLeft: 10, marginTop: 10}}>
          Data Pemesan
        </Text>
        <TextInput
          value={name}
          placeholder="Masukkan Nama"
          onChangeText={e => setName(e)}
          style={{
            padding: 10,
            backgroundColor: 'white',
            marginHorizontal: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 2,
          }}
        />
        <View style={styles.picker}>
          <Picker
            selectedValue={identity}
            onValueChange={(itemValue, itemIndex) => setIdentity(itemValue)}>
            <Picker.Item label="Pilih Identitas" value="" enabled={false} />
            <Picker.Item label="Laki-laki" value="Laki-laki" />
            <Picker.Item label="Perempuan" value="Perempuan" />
          </Picker>
        </View>
        <TextInput
          value={age}
          placeholder="Masukkan Umur"
          onChangeText={e => setAge(e) + ' Tahun'}
          style={{
            padding: 10,
            backgroundColor: 'white',
            marginHorizontal: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 2,
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#fc8403',
            marginHorizontal: 50,
            marginTop: 10,
            padding:10,
            borderRadius:10
          }}
          onPress={addTicket}>
          <Text style={{color: 'white'}}>SUBMIT</Text>
        </TouchableOpacity>
        {/* <Button
          onPress={() => console.log('test')}
          title="Submit"
          color={ColorPrimary}
          style={{margin:10}}
          accessibilityLabel="Learn more about this purple button"
        /> */}
      </ScrollView>
    </View>
  );
};

export default DataDiriPemesanan;

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
    height:45,
    marginTop:10
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
