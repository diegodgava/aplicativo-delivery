import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromBasket, selectBasketItems, selectBasketTotal, selectRestaurant } from '../store'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { selectBasketItemsInfo } from '../store'


const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
    const dispatch = useDispatch()
    const basketItemsInfo = useSelector(selectBasketItemsInfo);
    const basketTotal = useSelector(selectBasketTotal)
    const deliveryFee = 5.99;
    const total = parseFloat(basketTotal.replace(/[^\d.]/g, '')) + deliveryFee;
    const formattedTotal = `R$ ${total.toFixed(2)}`;

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
            <View className = 'p-5 border-b border-[#ec575a] bg-white shadow-xs'>
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
                <XCircleIcon color='#ec575a' height={50} width={50}/>
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
                    <Text className = 'text-[#ec575a]'>Alterar</Text>
                  </TouchableOpacity>
            </View>


        <ScrollView className = 'divide-y divide-gray-200'>
            {basketItemsInfo.map((item, index) => (
                    <View key={`${item.id}-${index}`} 
                    className = 'flex-row items-center space-x-3 bg-white py-2 px-5' >
                    <Text className = 'text-[#ec575a]'>{item.quantity} x</Text>
                    <Image source={{ uri: item.image }} className = 'h-12 w-12 rounded-full' />
                     <Text className = 'flex-1'>{item.name}</Text>

                     <Text className = 'text-gray-600'>{item.price}</Text>
                   <TouchableOpacity>
                    <Text className = 'text-[#ec575a] text-xs'
                    onPress={() => dispatch(removeFromBasket({id: item.id}))}
                    >
                        Remover
                    </Text>
                   </TouchableOpacity>




             </View>
                ))}
        </ScrollView>

                <View className = 'p-5 bg-white mt-5 space-y-4'>
                    <View className = 'flex-row justify-between'>
                        <Text className = 'text-gray-400'>Subtotal</Text>
                        <Text className = 'text-gray-400'>{basketTotal}</Text>
                    </View>
                    <View className = 'flex-row justify-between'>
                        <Text className = 'text-gray-400'>Taxa de entrega</Text>
                        <Text className = 'text-gray-400'>{`R$ ${(5.99).toFixed(2)}`}</Text>
                    </View>
                    <View className = 'flex-row justify-between'>
                        <Text>Total do pedido</Text>
                        <Text className = 'font-extrabold'>{formattedTotal}</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('PreparingOrderScreen')} 
                    className ='rounded-lg bg-[#ec575a] p-4'>
                        <Text className= 'text-center text-white text-lg font-bold'>
                            Enviar Pedido
                        </Text>
                    </TouchableOpacity>


                </View>

              

        </View>
    </SafeAreaView>
  )
}

export default BasketScreen