import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";
import { COLORS } from "@/styles/colors";

const DeliveryOptions = () => {
  const options = [
    { name: "Tomorrow Morning", price: "$2.99 Delivery" },
    { name: "Tomorrow Afternoon", price: "FREE One Day Delivery" },
    { name: "Friday", price: "FREE Amazon Day Delivery" },
  ];

  return (
    <Box>
      <Typography sx={{ fontWeight: 700 }}>
        Choose your Prime delivery option:
      </Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="friday"
        name="radio-buttons-group"
      >
        {options.map((option) => {
          return (
            <>
              <FormControlLabel
                value={option.name}
                control={<Radio />}
                label={option.name}
                sx={{ color: COLORS.green }}
              />
              <Typography
                sx={{
                  marginLeft: "2rem",
                  lineHeight: 0.25,
                  marginBottom: "0.25rem",
                }}
              >
                {option.price}
              </Typography>
            </>
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default DeliveryOptions;
