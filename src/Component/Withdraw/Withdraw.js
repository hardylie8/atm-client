import SideBar from "./../mainMenu/SideBar";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
function Withdraw() {
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
          <TextField
            id="outlined-basic"
            fullWidth
            label="Transfer"
            variant="filled"
            sx={{
              backgroundColor: "#bbc4eb",
              my: 1,
            }}
            inputProps={{ type: "number" }}
          />
          <Button variant="contained">Tarik</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Withdraw;
