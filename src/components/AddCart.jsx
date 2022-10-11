import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { CartState, ShopCart } from "./ContextApi";
import { cartReducer } from "./Reducer";

const AddCart = (action) => {
  const {
    state: { cart },
    dispatch,
    // {  cart.filter((c) => c.id !== action.payload);}
  } = CartState();

  const del = (action) => {
    cart.filter((c) => c.id !== action.payload);
    console.log(action);
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: action,
    });
  };
  const [item, setItem] = useState(0);
  useEffect(() => {
    if (cart.length >= 0) {
      console.log(cart.length);
      setItem(cart.length);
    } else {
      console.log("cart items is less then zero 0 >>>>>");
    }
  }, [cart]);

  const [value, setValue] = React.useState(2);
  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <Grid container>
            <Typography
              sx={{
                py: "20px",
                fontSize: "2rem",
                fontWeight: "700",
              }}
            >
              Cart Items :{item}
            </Typography>

            {cart.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    my: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // gap: 10,
                    border: "2px solid Black",
                    p: "5px",
                  }}
                >
                  <Box>
                    <img src={item.pic} width="150px" height="100px" />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                    }}
                  >
                    {item.category} : {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                    }}
                  >
                    Price:{item.price}
                  </Typography>
                  <Box>
                    <Typography variant="h5">
                      <Rating
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Typography>
                  </Box>
                  {/* {1} */}
                  <Box>{item.quantity}</Box>
                  <Button
                    variant="contained"
                    // onClick={() => {
                    //   dispatch({
                    //     type: "REMOVE_FROM_CART",
                    //     payload: cart,
                    //   });
                    // }}
                    onClick={() => del(item.id)}
                  >
                    Remove Item
                  </Button>
                  {/* <Button variant="contained">
                  Check Out
                  <CheckIcon />
                </Button> */}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AddCart;
