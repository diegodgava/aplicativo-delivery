import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';
import pizzaLogo from '../imagens/pizza-logo.jpg'; // importe a imagem aqui
import burguerLogo from '../imagens/burguer-logo.jpg';
import japaneseLogo from '../imagens/japanese-logo.jpg';
import drinksLogo from '../imagens/drinks-logo.jpg';
import porcaoLogo from '../imagens/porcao-logo.jpg';
import sobremesaLogo from '../imagens/sobremesa-logo.jpg';





const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle = {{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator = {false}
    >
      <CategoryCard imgUrl={pizzaLogo} title = 'Pizza '/>
      <CategoryCard imgUrl={burguerLogo} title = 'Lanches'/>
      <CategoryCard imgUrl={porcaoLogo} title = 'Porções'/>
      <CategoryCard imgUrl={sobremesaLogo} title = 'Doces'/>
      <CategoryCard imgUrl={drinksLogo} title = 'Bebidas'/>
      <CategoryCard imgUrl={japaneseLogo} title = 'Japonesa'/>
    </ScrollView>
  )
}

export default Categories;