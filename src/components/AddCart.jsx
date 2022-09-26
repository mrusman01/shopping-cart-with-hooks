import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Rating,
} from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { ShopCart } from "./ContextApi";

const AddCart = () => {
  const { products, addCart, cart, removeBtn } = useContext(ShopCart);

  const [quantity, setQuantity] = useState(0);
  const [item, setItem] = useState(0);

  // const incre = () => {
  //   setCount(count + 1);
  // };
  // const decre = () => {
  //   setCount(count - 1);
  // };

  console.log(cart.length, "cart length ......>");

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
    <div>
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
                  <Box>
                    {/* {" "}
                    <Button
                      sx={{
                        color: "blue ",
                        fontSize: "1rem",
                        fontWeight: "900",
                      }}
                      // onClick={decre}
                    >
                      -
                    </Button>{" "} */}
                    {1}
                    {/* <Button
                      sx={{
                        color: "blue ",
                        fontSize: "1rem",
                        fontWeight: "900",
                      }}
                      // onClick={incre}
                    >
                      +
                    </Button> */}
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => removeBtn(item.id)}
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
    </div>
  );
};

export default AddCart;
