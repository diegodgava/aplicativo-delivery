import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectRestaurant } from '../store'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { selectBasketItemsInfo } from '../store'


const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()
    const basketItemsInfo = useSelector(selectBasketItemsInfo);


    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            if (item) {
                (results[item.id] = results[item.id] || []).push(item)
            }
            return results
        }, {})

        setGroupedItemsInBasket(groupedItems)

    }, [items])


  return (
    <SafeAreaView className = 'flex-1 bg-white'>
        <View className = 'flex-1 bg-gray-100'>
            <View className = 'p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                <View>
                    <Text className = 'text-lg font-bold text-center'>Carrinho</Text>
                    <Text className = 'text-center text-gray-400'>
                        {restaurant.title}
                    </Text>
                </View>
            <TouchableOpacity
                onPress={navigation.goBack}
                className = 'rounded-full bg-gray-100 absolute top-3 right-5'
            >
                <XCircleIcon color='#00CCBB' height={50} width={50}/>
            </TouchableOpacity>

            </View>

            <View className = 'flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                <Image 
                    source = {{
                        uri: 'https://links.papareact.com/wru',
                    }}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                  />
                  <Text className = 'flex-1'>Entrega em 50-75 min</Text>
                  <TouchableOpacity>
                    <Text className = 'text-[#00CCBB]'>Alterar</Text>
                  </TouchableOpacity>
            </View>


        <ScrollView className = 'divide-y divide-gray-200'>
            {basketItemsInfo.map((item, index) => (
                    <View key={`${item.id}-${index}`} 
                    className = 'flex-row items-center space-x-3 bg-white py-2 px-5' >
                    <Text className = 'text-[#00CCBB]'>{item.quantity} x</Text>
                    <Image source={{ uri: item.image }} className = 'h-12 w-12 rounded-full' />
                     <Text className = 'flex-1'>{item.name}</Text>

                     <Text className = 'text-gray-600'>{item.price}</Text>
                   <TouchableOpacity>
                    <Text className = 'text-[#00CCBB] text-xs'
                    onPress={() => dispatch(removeFromBasket({id: item.id}))}
                    >
                        Remover
                    </Text>
                   </TouchableOpacity>




             </View>
                ))}
        </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default BasketScreen