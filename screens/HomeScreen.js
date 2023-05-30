 import { View, Text, SafeAreaViewBase, Image, TextInput, ScrollView } from 'react-native'
 import React, { useEffect, useLayoutEffect, useState } from 'react'
 import { useNavigation } from '@react-navigation/native'
 import { SafeAreaView } from 'react-native-safe-area-context'
 import Categories from '../components/Categories'
 import FeaturedRow from '../components/FeaturedRow'
 import 'url-search-params-polyfill';
 import logo from '../imagens/logo.jpeg';
 import restaurants from '../components/RestaurantData'


 import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
 } from 'react-native-heroicons/outline'
  
 const row1Restaurants = restaurants.slice(0, 3); // os três primeiros restaurantes
 const row2Restaurants = restaurants.slice(3, 6); // os três restaurantes seguintes
 const row3Restaurants = restaurants.slice(6, 9); // os três últimos restaurantes
 
 
 const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


   return (
<SafeAreaView className='bg-white pt-5'>
  
    {/* header */}
  <View className='flex-row pb-3 items-center mx-4 space-x-2'>
    <Image
      source={logo}
      className='h-9 w-9 bg-gray-300 p-4 rounded-full'
    />
     <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 12 }}>Delivery agora!</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Localização Atual</Text>
        <View style={{ marginLeft: 5 }}>
          <ChevronDownIcon size={20} color='#ec575a' />
        </View>
      </View>
    </View>
    <View style={{ marginLeft: 'auto' }}>
      <UserIcon size={35} color='#ec575a' />
    </View>
  </View>
  {/* search */}
        <View className = 'flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-row flex-1 space-x-2 bg-gray-200 p-2 items-center'> 
            <MagnifyingGlassIcon color='gray' size={20}/>
            <TextInput placeholder = 'Lanchonetes e Restaurantes' keyboardType = 'default'/>
            
            </View>
            
            <AdjustmentsVerticalIcon color='#ec575a'/>
        </View>
  {/* Body */ }

<ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom:100}}>
      {/* Categorias */ }
        <Categories/>
      
      {/* featured rows */ }
      
      <FeaturedRow title="Ofertas próximas a você:" description="Apoie o comércio local!" restaurants={row1Restaurants} />
      <FeaturedRow title="Bons e baratos:" description="Promoções da semana" restaurants={row2Restaurants} />
      <FeaturedRow title="Os mais requisitados:" description="Veja os estabelecimentos que estão bombando!" restaurants={row3Restaurants} />


</ScrollView>


</SafeAreaView>


   )
 }
 
 export default HomeScreen