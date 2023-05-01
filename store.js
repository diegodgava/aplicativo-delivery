import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
          if (Array.isArray(state.items)) {
            state.items = [...state.items, action.payload];
          }
        },
        removeFromBasket: (state, action) => {
          let newBasket = [...state.items];
          if (Array.isArray(newBasket)) {
            const index = newBasket.findIndex((item) => item ? item.id === action.payload.id : null);
            if (index >= 0) {
              newBasket.splice(index, 1);
            }
            state.items = newBasket;
          }
        }
      }
    })

    export const selectBasketItemsInfo = (state) => {
      const items = state.basket.items.filter(item => item?.id != null);
      
      const itemsMap = items.reduce((map, item) => {
        const { id, name, image, price } = item;
        map[id] = map[id] || { id, name, image, price, quantity: 0 };
        map[id].quantity += 1;
        return map;
      }, {});
    
      const itemsList = Object.keys(itemsMap).map((id) => itemsMap[id]);
    
      return itemsList;
    };
    
    

  
    

export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => 
  state.basket.items.filter((item) => item && item.id === id)

  export const selectBasketTotal = (state) => {
    const total = state.basket.items.reduce((total, item) => item ? total + parseFloat(item.price.replace(/[^\d.]/g, '')) : total, 0);
    return `R$ ${total.toFixed(2)}`;
    
  }

  const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
      restaurant: {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: null,
      }
    },
    reducers: {
      setRestaurant: (state, action) => {
        state.restaurant = action.payload
      }
    }
    })

export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant;




const reducer = {
    basket: basketSlice.reducer,
    restaurant: restaurantSlice.reducer,
  };
  
  export const store = configureStore({ reducer });

  
store.subscribe(() => console.log(store.getState()))

store.dispatch(addToBasket())
store.dispatch(addToBasket())
store.dispatch(removeFromBasket())
