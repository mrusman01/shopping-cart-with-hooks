import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState, useContext, useEffect, useDispatch } from "react";

import { ShopCart, CartState } from "./ContextApi";

const Cards = () => {
  const {
    state: { products },
    dispatch,
  } = CartState();
  // console.log(products);
  const [value, setValue] = React.useState(2); // rating stars

  const addCart = (item) => {
    dispatch({
      type: "ADDTOCART",
      payload: item,
    });
  };

  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Grid container>
            {products &&
              products.map((item, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                      p: "5px",
                      spacing: "100",
                    }}
                    key={index}
                  >
                    <Box sx={{ my: "40px" }}>
                      <Box>
                        <img src={item.pic} width="300px" height="250px" />
                      </Box>
                      <Typography variant="h5">
                        {item.category} : {item.name}
                      </Typography>

                      <Typography variant="h5">Price {item.price}</Typography>
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
                      <Button variant="contained" onClick={() => addCart(item)}>
                        Add Cart
                      </Button>
                    </Box>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Cards;
