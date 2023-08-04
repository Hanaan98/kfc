import React from "react";
import cartContext from "./Cart-Context";
import { useReducer } from "react";
const defaultStates = {
    items: [],
    totalAmount: 0
};

const reducer = (state, action) => {
    if (action.type === 'ADD') {
        const itemexists = state.items.findIndex(item => item.id === action.item.id);
        const existedItem = state.items[itemexists];
        let updatedItems;
        let updatedItem;
        if (existedItem) {
            updatedItem = {
                ...existedItem,
                amount: existedItem.amount + action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[itemexists] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return ({
            items: updatedItems,
            totalAmount: updatedAmount
        })


    }
    else if (action.type === 'DEL') {
        const existedItem = state.items.findIndex(item => item.id === action.id);
        const updatedItem = state.items[existedItem];
        const updatedAmount = state.totalAmount - updatedItem.price;
        let updatedItems;
        if (updatedItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        }
        else{
            const updatedItemm = {...updatedItem,amount:updatedItem.amount-1};
            updatedItems = [...state.items];
            updatedItems[existedItem] = updatedItemm;
        }
        return ({
            items: updatedItems,
            totalAmount: updatedAmount
        })
    }

    return defaultStates;
}
function CartProvider(props) {
  const [Cartstate, dispatch] = useReducer(reducer, defaultStates);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const deleteItemHandler = (id) => {
    dispatch({ type: "DEL", id: id });
  };
  const CartContext = {
    items: Cartstate.items,
    totalAmount: Cartstate.totalAmount,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
  };
  return(
    <cartContext.Provider value={CartContext}>{props.children}</cartContext.Provider>
  )
}

export default CartProvider;
