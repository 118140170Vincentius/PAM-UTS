import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
// import {Text, TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import SIZES, {ColorPrimary, API} from '../../utils/constanta';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [starting, setStarting] = useState('pilih');
  const [destination, setDestination] = useState('pilih');
  const [service, setService] = useState('pilih');
  const [type, setType] = useState('pilih');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('Pilih Tanggal Masuk');
  const [time, setTime] = useState('Pilih Jam Masuk');
  const [listHarbor, setListHarbor] = useState([]);
  const [total, setTotal] = useState('0');

  const navigation = useNavigation();

  const addTicket = async () => {
    destinationName = listHarbor.filter(item => item.id == destination);
    startingName = listHarbor.filter(item => item.id == starting);
    // console.log(destinationName[0].name);
    if (
      starting != 'pilih' &&
      destination != 'pilih' &&
      service != 'pilih' &&
      type != 'pilih' &&
      date != 'Pilih Tanggal Masuk' &&
      time != 'Pilih Jam Masuk' &&
      total != '0'
    ) {
      destinationName = listHarbor.filter(item => item.id == destination);
      startingName = listHarbor.filter(item => item.id == starting);
      navigation.navigate('DataDiriPemesanan', {
        starting: starting,
        destination: destination,
        destinationName: destinationName[0].name,
        startingName: startingName[0].name,
        service: service,
        type: type,
        date: date,
        time: time,
        total: total,
      });
      setStarting('pilih');
      setDestination('pilih');
      setService('pilih');
      setType('pilih');
      setDate('Pilih Tanggal Masuk');
      setTime('Pilih Jam Masuk');
      setTotal('0');
    } else {
      alert('Masukkan semua field');
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const getListHarbor = async () => {
    await fetch(`${API}/api/harbors`)
      .then(response => response.json())
      .then(response => setListHarbor(response));
  };

  useEffect(() => {
    getListHarbor();
    return;
  }, []);

  const handleConfirm = date => {
    const tahun = date.getFullYear();
    const bulan = date.getMonth() + 1;
    const bulan2 = bulan >= 10 ? bulan : '0' + bulan;
    const tang = date.getDate();
    const tang2 = tang > 10 ? tang : '0' + tang;
    setDate(tahun + '-' + bulan2 + '-' + tang2);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = date => {
    const jam = date.getHours();
    const jam2 = jam >= 10 ? jam : '0' + jam;
    const menit = date.getMinutes();
    const menit2 = menit >= 10 ? menit : '0' + menit;
    setTime(jam2 + ':' + menit2);
    hideTimePicker();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#bdbdbd', color: '#000000'}}>
      <ScrollView
        style={{
          marginTop: 30,
          marginRight: 30,
          marginLeft: 30,
          marginBottom: 150,
          borderRadius: 10,
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
          // flex:1,
          // alignItems:'center',
        }}>
        <Text style={styles.title}>Kapalzy</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={starting}
            onValueChange={(itemValue, itemIndex) => setStarting(itemValue)}>
            <Picker.Item
              label="Pilih Pelabuhan Awal"
              value=""
              enabled={false}
            />
            {listHarbor.map((harbor, index) => {
              return (
                <Picker.Item
                  label={harbor.name}
                  value={harbor.id}
                  key={index}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={destination}
            onValueChange={(itemValue, itemIndex) => setDestination(itemValue)}>
            <Picker.Item
              label="Pilih Pelabuhan Tujuan"
              value=""
              enabled={false}
            />
            {listHarbor.map((harbor, index) => {
              return (
                <Picker.Item
                  label={harbor.name}
                  value={harbor.id}
                  key={index}
                />
              );
            })}
          </Picker>
        </View>
        <View style={styles.picker}>
          <Picker
            selectedValue={service}
            onValueChange={(itemValue, itemIndex) => setService(itemValue)}>
            <Picker.Item label="Pilih Layanan" value="" enabled={false} />
            <Picker.Item label="Eksekutif" value="Eksekutif" />
            <Picker.Item label="Reguler" value="Reguler" />
          </Picker>
        </View>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.txtButton}>{date}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker}>
          <Text style={styles.txtButton}>{time}</Text>
        </TouchableOpacity>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={[styles.picker, styles.picker1]}>
            <Picker
              selectedValue={type}
              onValueChange={(itemValue, itemIndex) => setType(itemValue)}>
              <Picker.Item label="Pilih Kategori" value="" enabled={false} />
              <Picker.Item label="Dewasa" value="Dewasa" />
              <Picker.Item label="Anak-Anak" value="Anak-Anak" />
            </Picker>
          </View>
          <TextInput
            style={styles.inputTotal}
            value={total}
            onChangeText={e => setTotal(e)}
            keyboardType={'number-pad'}
          />
          {/* <Button></Button> */}
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: '#fc8403',
            marginHorizontal: 50,
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={addTicket}>
          <Text style={{color: 'white'}}>Buat Tiket</Text>
        </TouchableOpacity>
      </ScrollView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default Home;

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
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#747578',
    backgroundColor: '#bdbdbd',
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
    width: 70,
    height: 55,
    padding: 0,
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#747578',
    backgroundColor: '#bdbdbd',
    color: 'black',
  },
});
