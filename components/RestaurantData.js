import { View, Text } from 'react-native'
import React from 'react'



const dishes = [
    {
        _id: 1,
        name: "Sushi",
        short_description: "Arroz temperado, algas e recheado com peixe fresco, frutos do mar ou vegetais.",
        price: 9.9,
        image : 'https://img.cybercook.com.br/receitas/815/sushi-vegano-2.jpeg',
    },
    {
      _id: 2,
      name: "Sashimi",
      short_description: "Peixes e frutos do mar frescos e fatiados em pequenos pedaços.",
      price: 45.90,
      image: "https://www.gaz.com.br/uploads/2022/03/SASHIMI-eu-gourmet.jpg",
    },
    {
      _id: 3,
      name: "California Roll",
      short_description: "Carangueijo cozido com abacate e arroz.",
      price: 30.99,
      image: "https://www.simplyrecipes.com/thmb/EgyBYE---ytAEssbF2zQP5eyDds=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-California-Roll-LEAD-05-3c3a2fb4a9034e5c8cb34d6a24d9731e.jpg",
    },
    {
        _id: 4,
        name: "Yakisoba de carne",
        short_description: "Macarrão frito com carne, legumes e molho especial .",
        price: 28.90,
        image: "https://vocegastro.com.br/app/uploads/2021/06/receita-de-yakissoba-de-carne.jpg",
      },
      {
        _id: 5,
        name: "Gyudon",
        short_description: "Tigela de arroz com fatias de carne bovina cozida com cebola, molho de soja e ovo.",
        price: 26.90,
        image: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/10/gyudon.jpg',
    },
      {
        _id: 6,
        name: "Shogayaki",
        short_description: "Fatias finas de carne suína salteadas com gengibre, molho de soja e legumes.",
        price: 34.90,
        image : 'https://upload.wikimedia.org/wikipedia/commons/d/df/Shogayaki_002.jpg',
    },
    {
        _id: 7,
        name: "Okonomiyaki",
        short_description: "Panqueca japonesa recheada com legumes, carne, frutos do mar e coberta com molho especial.",
        price: 32.40,
        image : 'https://www.saboresajinomoto.com.br/uploads/images/recipes/okonomiyaki.webp',
    },
    {
        _id: 8,
        name: "Hambúrguer Tradicional",
        short_description: "Pão, carne bovina, queijo, alface, tomate, cebola, picles e maionese.",
        price: 19.90,
        image: "https://receitasdoce.com/wp-content/uploads/2022/05/154-1.png",
      },
      {
        _id: 9 ,
        name: "Batata Frita com Queijo e Bacon",
        short_description: "Batata frita, queijo cheddar derretido e bacon crocante.",
        price: 18.90,
        image: "https://fyoti.com.br/wp-content/uploads/2019/11/Receita-de-Batata-frita-com-queijo-e-recheio-de-bacon-TudoGostoso.jpeg",
      },
      {
        _id: 10 ,
        name: "X-Tudo",
        short_description: "Pão, carne bovina, queijo, presunto, ovo, bacon, alface, tomate, cebola, picles e maionese.",
        price: 30.00,
        image: "https://www.manollopizzaria.com.br/wp-content/uploads/2021/02/X_TUDO_DE_HAMBURGUER1-1.jpg",
      },
      {
        _id: 11,
        name: "Sanduíche de Peito de Peru",
        short_description: "Pão integral, peito de peru, queijo branco, alface e tomate.",
        price: 15.90,
        image: "https://api.comidadodia.com/wp-content/uploads/2020/03/sanduiche-natural-de-peru-ricota.jpg",
      },
      {
        _id: 12,
        name: "Hot Dog",
        short_description: "Pão de hot dog, salsicha, purê de batatas, milho, ervilha, molho de tomate e batata palha.",
        price: 20.00,
        image: "https://www.montarumnegocio.com/wp-content/uploads/2019/07/como-fazer-hot-dog-gourmet-para-vender.jpg",
      },
      {
        _id: 13,
        name: "Misto Quente",
        short_description: "Pão de forma, queijo e presunto aquecido na chapa.",
        price:  8.50,
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/f863e4fb1b47b206b2276d9b70a5b183_XL.jpg",
      },
      {
        _id: 14,
        name: "Beirute",
        short_description: "Pão sírio, filé mignon, queijo, alface, tomate, cebola e maionese.",
        price: 22.50,
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/519cb84dfa56f4e64bd73c0393e49890_XL.jpg",
      },
      {
        _id: 15,
        name: "Milk Shake",
        short_description: "Bebida cremosa feita com sorvete.",
        price: 12.90,
        image: "https://www.designi.com.br/images/preview/10073663-m.jpg",
      },
      {
        _id: 16,
        name: "Refrigerante",
        short_description: "Coca-Cola, Pepsi, Guaraná Antarctica ou Fanta.",
        price: 8.90,
        image: "https://s2.glbimg.com/GUda5oj9xkd_yQNyn36mDn9XJmo=/620x455/e.glbimg.com/og/ed/f/original/2018/08/17/beber-refrigerante-todos-os-dias-esta-te-matando.jpg",
      },
      {
        _id: 17,
        name: "Pizza Margherita",
        short_description: "Pizza clássica com molho de tomate, mussarela e manjericão.",
        price: 35.90,
        image: "https://anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg",
      },
      {
        _id: 18,
        name: "Pizza Pepperoni",
        short_description: "Pizza com molho de tomate, mussarela e fatias de pepperoni.",
        price: 39.90,
        image: "https://conteudo.imguol.com.br/c/entretenimento/b1/2020/07/09/pizza-pepperoni-1594305789491_v2_4x3.jpg",
      },
      {
        _id: 19,
        name: "Pizza Calabresa",
        short_description: "Pizza com molho de tomate, mussarela e fatias de calabresa.",
        price: 36.90,
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg",
      },
      {
        _id: 20,
        name: "Pizza Quatro Queijos",
        short_description: "Pizza com molho de tomate, mussarela, parmesão, provolone e gorgonzola.",
        price: 42.90,
        image: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg",
      },
      {
        _id: 21,
        name: "Frango com Catupiry",
        short_description: "Molho de tomate, mussarela, frango desfiado, Catupiry e orégano.",
        price: 38.50,
        image: "https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_333724454.jpg",
      },
      {
        _id: 22,
        name: "Porguesa",
        short_description: "Molho de tomate, mussarela, manjericão fresco e azeitonas pretas.",
        price: 39.50,
        image: "https://www.pizzatec.com.br/assets/uploads/images/2018/08/curiosidades-pizza-portuguesa.jpeg",
    },
      


  ];























  const restaurants = [
      
      {
        id: 1,
        imgUrl: 'https://www.tastingtable.com/img/gallery/20-japanese-dishes-you-need-to-try-at-least-once/intro-1664219638.jpg',
        title: 'Palácio do Sushi',
        rating: 4.7,
        genre: 'Japonesa',
        address: 'Av. Guimarães Rosa, 26',
        short_description: 'Nosso bar oferece uma ampla seleção de saquês japoneses de alta qualidade, além de uma variedade de pratos japoneses modernos com um toque contemporâneo.',
        dishes: [dishes[0], dishes[1], dishes[2],dishes[3],dishes[4],dishes[5],dishes[6]],
        long: -20.353411677897988,
        lat: -40.339699026703386,
      },
    {
        id: 4,
        imgUrl: 'https://www.kcms.com.br/blog/wp-content/uploads/2017/03/lanchonete-competitiva.jpg',
        title: 'Burgerville',
        rating: 4.6,
        genre: 'Lanches',
        address: 'Av. Machado de Assis, 22',
        short_description: 'A Burgerville é a lanchonete favorita da cidade, com hambúrgueres suculentos, batatas fritas crocantes e milkshakes cremosos. ',
        dishes: [dishes[7], dishes[8], dishes[9],dishes[10],dishes[11],dishes[12],dishes[13],dishes[14],dishes[15]],
        long: 20,
        lat: 0
      },
      {
        id: 8,
        imgUrl: 'https://blog.rcky.com.br/wp-content/uploads/2021/09/pizza-show.jpg',
        title: 'Pizzaria do Chef ',
        rating: 4.4,
        genre: 'Pizza',
        address: 'Av. Sócrates, 94',
        short_description: 'Uma pizzaria moderna e sofisticada que oferece um ambiente aconchegante e agradável para desfrutar de uma deliciosa pizza.',
        dishes: [dishes[16], dishes[17], dishes[18],dishes[19],dishes[20],dishes[21]],
        long: 30,
        lat: 0
      },
      {
        id: 6,
        imgUrl: 'https://api.time.com/wp-content/uploads/2015/02/burgers.jpg',
        title: 'Rockstar Burguer',
        rating: 4.8,
        genre: 'Lanches',
        address: 'Rua Aero Smith, 24',
        short_description: 'Lanchonete temática dos anos 90, com hambúrgueres clássicos, batatas fritas crocantes e milkshakes cremosos.',
        dishes: [dishes[7], dishes[8], dishes[9],dishes[10],dishes[11],dishes[12],dishes[13],dishes[14],dishes[15]],
        long: 10,
        lat: 0
      },
 
    {
        id: 2,
        imgUrl: 'https://cdn.tasteatlas.com/images/toplistarticles/8cc45833c34a4bc99d85375ecfde18f6.jpg?m=facebook',
        title: 'Banzai Lounge',
        rating: 4.3,
        genre: 'Japonesa',
        address: 'Rua Lupe de Lupe, 444',
        short_description: 'Oferecemos uma autêntica experiência de sushi com os melhores ingredientes e sabores japoneses tradicionais. Nosso ambiente moderno e elegante oferece o local perfeito para desfrutar de uma refeição sofisticada.',
        dishes: [dishes[0], dishes[1], dishes[2],dishes[3],dishes[4],dishes[5],dishes[6]],
        long: 30,
        lat: 0
      },

    {
        id: 5,
        imgUrl: 'https://www.acouplecooks.com/wp-content/uploads/2022/11/How-to-Freeze-Cheese-007.jpg',
        title: 'Queijolândia',
        rating: 4.4,
        genre: 'Lanches',
        address: 'Rua Alberto Camus, 99',
        short_description: 'Se você ama queijo, a Queijolândia é o lugar certo para você! Com opções de hambúrgueres com queijo derretido e batatas fritas cobertas com queijo, esta lanchonete é o paraíso para os amantes de queijo.',
        dishes: [dishes[7], dishes[8], dishes[9],dishes[10],dishes[11],dishes[12],dishes[13],dishes[14],dishes[15]],
        long: 30,
        lat: 0
      },
    {
        id: 7,
        imgUrl: 'https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_orig.jpg',
        title: 'Pizzaria Bella Napoli',
        rating: 4.9,
        genre: 'Pizza',
        address: 'Av. Nietzshe, 74',
        short_description: 'Uma pizzaria tradicional com receitas autênticas italianas, preparadas com ingredientes frescos e de alta qualidade. ',
        dishes: [dishes[16], dishes[17], dishes[18],dishes[19],dishes[20],dishes[21]],
        long: 20,
        lat: 0
      },
      {
        id: 3,
        imgUrl: 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-japanese-dishes-1644408788.jpg',
        title: 'Delícias do Japão',
        rating: 4.4,
        genre: 'Japonesa',
        address: 'Rua Cazuza, 77',
        short_description: 'Um autêntico restaurante japonês que oferece uma grande variedade de sushis, sashimis, temakis e outros pratos tradicionais da culinária japonesa. ',
        dishes: [dishes[0], dishes[1], dishes[2],dishes[3],dishes[4],dishes[5],dishes[6]],
        long: 10,
        lat: 0
      },
      {
        id: 9,
        imgUrl: 'https://dombertolin.com.br/wp-content/uploads/2020/04/DomBertolin-2020.jpg',
        title: 'Pizza na Pedra ',
        rating: 4.5,
        genre: 'Pizza',
        address: 'Rua Clarice, 542',
        short_description: 'Uma pizzaria rústica e aconchegante que oferece pizzas preparadas na pedra, garantindo uma crocância irresistível em cada mordida.',
        dishes: [dishes[16], dishes[17], dishes[18],dishes[19],dishes[20],dishes[21]],
        long: 10,
        lat: 0
      }
  ];

  
  export default restaurants;
