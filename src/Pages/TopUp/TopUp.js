import SideBar from "../MainMenu/SideBar";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";
import { useState } from "react";

function TopUp() {
  const [saldo, setSaldo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await api.put("/api/user", {
      saldo: saldo,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", mt: 3 }}>
      <Typography sx={{ textAlign: "center", color: "#E1e5f8" }} variant="h2">
        Isi Saldo
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
              label="Jumlah Uang"
              variant="filled"
              sx={{
                backgroundColor: "#bbc4eb",
                my: 1,
              }}
              inputProps={{ type: "number" }}
              onChange={(e) => setSaldo(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Isi Saldo
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopUp;
