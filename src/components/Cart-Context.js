import React from 'react'

const cartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    deleteItem:(id)=>{}
})
export default cartContext;