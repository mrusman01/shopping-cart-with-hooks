import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import AddCart from "./AddCart";
import { ShopCart, CartState } from "./ContextApi";
import { cartReducer } from "./Reducer";

function NavBar() {
  const [items, setItems] = useState(0);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    if (cart.length >= 0) {
      // console.log(cart.length);
      setItems(cart.length);
    } else {
      // console.log("cart items is less then zero 0 >>>>>");
    }
  }, [cart]);
  return (
    <div>
      <Box sx={{ background: "black" }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: "20px",
          }}
        >
          <Link to="/">
            <Typography variant="h4" color="white" textDecoration="none">
              LOGO HERE
            </Typography>
          </Link>
          <Box sx={{ display: "flex", gap: 9 }}>
            <Button sx={{ color: "white" }}>Home</Button>
            <Button sx={{ color: "white" }}>About</Button>
            <Button sx={{ color: "white" }}>Dashboard</Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="AddCart">
              <Button sx={{ color: "white", textDecoration: "none" }}>
                Cart( {items} )
              </Button>{" "}
              {/* <ShoppingCartIcon sx={{ color: "white" }} /> */}
            </Link>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default NavBar;
