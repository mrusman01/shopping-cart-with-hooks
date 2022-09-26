import React, { createContext, useState } from "react";

const products = [
  {
    pic: "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    category: "Laptop",
    name: "Dell",
    price: "100$",
    id: 1,
    quantity: 1,
  },
  {
    pic: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a32-4g-3.jpg",
    category: "Phone",
    name: "Samsung",
    price: "400$",
    id: 2,
    quantity: 2,
  },
  {
    pic: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Phone",
    name: "iphone",
    price: "1000$",
    id: 3,
    quantity: 3,
  },
  {
    pic: "https://image01.realme.net/general/20220718/1658135230154.png.webp",
    category: "Phone",
    name: "Realme",
    price: "200$",
    id: 4,
    quantity: 4,
  },
  {
    pic: "https://shop.tecno-mobile.com/media/news_pic/_/-/_-_spark8pro.png",
    category: "Phone",
    name: "Techno",
    price: "50$",
    id: 5,
    quantity: 5,
  },
  {
    pic: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

    category: "Laptop",
    name: "MacBook",
    price: "500$",
    id: 6,
    quantity: 6,
  },
];
const initialState = {
  products: products,
  cart: [],
};

export const ShopCart = createContext(initialState);

export const ContextApi = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addCart = (item) => {
    //

    let newItem = cart.findIndex((_item) => {
      return +_item.id === +item.id;
    });
    if (newItem < 0) {
      cart.push({ ...item, quantity: 1 });
      setCart([...cart]);
    } else {
      let updateCart = { ...cart[newItem] };
      console.log(updateCart, "updateCart--->");
      updateCart.quantity++;
      updateCart[newItem] = updateCart;
      setCart([...updateCart]);
    }
  };

  const removeBtn = (item) => {
    console.log(item, "item.....");
    const remove = cart.filter((product) => {
      return product.id !== item;
    });
    setCart([...remove]);
  };

  console.log(cart, "cart");
  return (
    <ShopCart.Provider value={{ products, addCart, cart, removeBtn }}>
      {children}
    </ShopCart.Provider>
  );
};
