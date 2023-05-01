import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../store'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/solid'
import logo from '../imagens/logo.jpeg';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import driverIcon from '../imagens/driver.png';




const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

  return (
    <View className = 'bg-[#FF7459] flex-1'>
        <SafeAreaView className= 'z-50'>
            <View className= 'flex-row justify-between items-center p-5'>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <XMarkIcon color='white' size={30}/>
                </TouchableOpacity>
            <Text className ='font-light text-white text-lg'>Ajuda com o pedido</Text>
            </View>

        <View className = 'bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
            <View className = 'flex-row justify-between'>
            <View>
                <Text className = 'text-lg text-gray-400'>Estimativa de chegada</Text>
                <Text className = 'text-4xl fong-bold'>45-55 Minutos</Text>
            </View>

            <Image 
                 source={logo}
                style={{ width: 50, height: 50, borderRadius: 100 }}
                 />
            </View>
            <Progress.Bar size={30} color='#FF7459' indeterminate = {true}/>
        <Text className= 'mt-3 text-gray-500'>
        O seu pedido no {restaurant.title} está sendo preparado!


        </Text>
        </View>

      </SafeAreaView>
        <MapView
        initialRegion = {{
            latitude: -20.279471,
            longitude: -40.300589,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005

        }}
            className = 'flex-1 -mt-10 z-0'
            mapType='mutedStandard'
        >
            <Marker
                coordinate={{
                    latitude: -20.279471,
                    longitude: -40.300589,
                }}
                title= {restaurant.title}
                description={restaurant.short_description}
                identifier='origin'
                pinColor='#FF7459'
            
            />


        </MapView>
<SafeAreaView className = 'bg-white flex-row items-center space-x-5 h-28' >
    <Image 
      source={driverIcon}
      style={{
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'gray',
        marginLeft: 15,
        marginBottom: 25,
        padding: 4,
      }}
    />
    <View className ='flex-1'> 
      <Text className = 'text-lg '>
        Diego Gava
      </Text>
      <Text className = 'text-gray-400 mb-8'>Colaborador selecionado</Text>

    </View>

      <Text className= 'text-[#FF7459] text-lg mr-5 font-bold mb-9'>Ligar</Text>
</SafeAreaView>

    </View>
  )
}

export default DeliveryScreen