import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { StarIcon,  } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'


import restaurants from './RestaurantData';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({ id }) => {

  const navigation = useNavigation()
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <Text>Restaurante não encontrado</Text>;
  }
  const { imgUrl, title, rating, genre, address, short_description, dishes, long, lat } = restaurant;

  return (
    <TouchableOpacity 
    onPress={() => {
        navigation.navigate('Restaurant', {
          imgUrl, title, rating, genre, address, 
          short_description, dishes, long, lat
        })
    }}
    className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#00B344" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Próximo de · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default RestaurantCard