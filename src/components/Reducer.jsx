import { AcUnitOutlined } from "@mui/icons-material";

export const cartReducer = (state, action) => {
  switch (action.type) {
    // action.payload, "payload--->",
    case "ADDTOCART":
      // console.log(action.payload, "cartNew--->");
      // console.log(action, "action......");
      let updateArray = [...state.cart];
      const updateIndex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (updateIndex < 0) {
        updateArray.push({ ...action.payload, quantity: 1 });
      } else {
        const updateItems = {
          ...updateArray[updateIndex],
        };
        updateItems.quantity++;
        updateArray[updateIndex] = updateItems;
        return { ...state, cart: updateArray };
      }

      // if (updateIndex < 0) {
      //   console.log("if");
      //   console.log("product added", updateIndex.quantity);
      //   updateIndex.quantity += 1;
      //   updateArray = [...state.cart];
      // } else {
      //   console.log("else");
      //   action.payload.quantity = 1;
      //   updateArray = [...state.cart, action.payload];
      // }

      return {
        ...state,
        cart: updateArray,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    default:
      return state;
  }
};
