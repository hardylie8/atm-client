import SideBar from "../MainMenu/SideBar";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";
import { useState } from "react";
function Withdraw() {
  const [withdrawValue, setWithdrawValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await api.post("/api/withdraw", {
      withdrawValue: withdrawValue,
    });
  };
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", mt: 3 }}>
      <Typography sx={{ textAlign: "center", color: "#E1e5f8" }} variant="h2">
        Tarik Uang
      </Typography>
      <Grid container>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center", px: 3 }}>
          <div>
            <SideBar name=" Names Goes Here" balance="Rp. 999.999.999,-" />
          </div>
        </Grid>
        <Grid item xs={9} sx={{ px: 3 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Tarik"
              variant="filled"
              sx={{
                backgroundColor: "#bbc4eb",
                my: 1,
              }}
              inputProps={{ type: "number" }}
              onChange={(e) => setWithdrawValue(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Tarik
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Withdraw;
