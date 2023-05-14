import * as React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { NumericFormat } from "react-number-format";

export default function BasicCard(props) {
  const description = props.description;
  const type = props.type;
  const date = props.date;
  const value = props.value;

  return (
    <Card sx={{ minWidth: 550, maxWidth: 700, my: 1 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography gutterBottom variant="h5" component="div">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {type} | {date}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: type === "CREDIT" ? "red" : "green" }}
            >
              {type !== "CREDIT" ? "+ " : "- "}
              <NumericFormat
                value={value}
                displayType={"text"}
                thousandSeparator="."
                decimalSeparator=","
                prefix={"Rp. "}
                suffix={",-"}
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
