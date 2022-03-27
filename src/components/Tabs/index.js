import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Pemesanan, Pembatalan, Lainnya } from '../../pages';
import { ColorPrimary } from '../../utils/constanta';
import { Home as HomeIcon, Book, Cancel, Burger } from '../../assets/icons';

const Tab = createBottomTabNavigator();

const Tabs =  () => {
  return (
      <Tab.Navigator 
        screenOptions={{
            tabBarStyle:{
                position:'absolute',
                // bottom:25,
                // left:20,
                // right:20,
                elevation:0,
                backgroundColor:'#ededed',
                // borderRadius:15,
                height:70,
                // borderTopRightRadius:40,
                // borderTopLeftRadius:40,
                borderTopColor: '#919191',
                ...styles.shadow,
                paddingHorizontal:40
            },
            tabBarShowLabel:false
        }}
      >
        <Tab.Screen name="Beranda" component={Home} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (
                <View>
                    <Image source={HomeIcon} resizeMode='contain'
                    style={{
                        width:25,
                        height:25,
                        tintColor: focused ? ColorPrimary : '#C4C4C4'
                    }} />
                </View>
            )
          }}/>
        <Tab.Screen name="Pesanan Saya" component={Pemesanan} 
          options={{ headerShown: false, tabBarIcon: ({focused}) => (
            <View>
                <Image source={Book} resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? ColorPrimary : '#C4C4C4'
                }} />
            </View>
        ) }}/>
        <Tab.Screen name="Pembatalan" component={Pembatalan} 
          options={{ headerShown: false, tabBarIcon: ({focused}) => (
            <View>
                <Image source={Cancel} resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? ColorPrimary : '#C4C4C4'
                }} />
            </View>
        ) }} />
        <Tab.Screen name="Lainnya" component={Lainnya} 
          options={{ headerShown: false, tabBarIcon: ({focused}) => (
            <View>
                <Image source={Burger} resizeMode='contain'
                style={{
                    width:25,
                    height:25,
                    tintColor: focused ? ColorPrimary : '#C4C4C4'
                }} />
            </View>
        ) }} />
      </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:-10
        },
        shadowOpacity:0.25,
        shadowRadius:2.5,
        elevation:5
    }
})