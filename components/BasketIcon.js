import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../store'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-format';



const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

if (items.length === 0) return null

  return (
    <View className = 'absolute bottom-10 w-full z-50'>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className = 'mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className = 'text-white font-extrabold text-lg bg-[#01A296] py-1 px-2'>{items.length -2}</Text>
        <Text className = 'flex-1 text-white font-extrabold text-lg text-center' >Ver Carrinho</Text>
        <Text className = 'text-lg text-white font-extrabold'>
            {basketTotal}
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon