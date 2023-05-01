import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, StarIcon, MapPinIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import restaurants from '../components/RestaurantData';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../store';

const RestaurantScreen = () => {
const navigation = useNavigation();
const dispatch = useDispatch()

  const {
    params: {
      imgUrl, title, rating, genre, address, 
      short_description, dishes, long, lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
    setRestaurant({
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    })
    )
  }, [dispatch])



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <>
<BasketIcon/>
    <ScrollView>
      <View className = 'relative'>
          <Image source={{ uri: imgUrl }} 
          className = 'w-full h-56 bg-gray-300 p-4' />

        <TouchableOpacity 
        onPress={navigation.goBack}
        className= 'absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
        <ArrowLeftIcon size={20} color='#FF7459'/>
        </TouchableOpacity>
      </View>

      <View className = 'bg-white'>
        <View className = 'px-4 pt-4'>
          <Text className = 'text-3xl font-bold'>{title}</Text>
          <View className = 'flex-row space-x-2 my-1'>
              <View className = 'flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.4} size={22}/>
                  <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> · {genre}
                  </Text>
              </View>

              <View className = 'flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.3} size={22}/>
                  <Text className="text-xs text-gray-500">Perto de · {address}</Text>
              </View>

          </View>
          <Text className = 'text-gray-500 mt-2 pb-4'>{short_description}</Text>
        </View>
        <TouchableOpacity className = 'flex-row items-center space-x-2 p-3 border-y border-gray-300'>
          <QuestionMarkCircleIcon color='gray' opacity={0.5} size={22} />
          <Text className= 'pl-2 flex-1 text-md font-bold'>
            Tem alergia a algum alimento?
          </Text>
          <ChevronRightIcon color='#FF7459' size={20}/>
        </TouchableOpacity>
      </View>
    <View className = 'pb-36'>
      <Text className = 'px-4 pt-6 font-bold text-xl'>Cardápio</Text>

      {dishes.map((dish) => (
  <DishRow
    key={dish._id}
    id={dish._id}
    name={dish.name}
    short_description={dish.short_description}
price={`R$ ${(dish.price.toFixed(2))}`}
    image={dish.image}
  />
))}


    </View>

    </ScrollView>
    </>
  )
}

export default RestaurantScreen