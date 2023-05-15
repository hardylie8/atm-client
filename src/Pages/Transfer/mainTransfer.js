import SideBar from "../MainMenu/SideBar";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";
import { useState } from "react";

function MainTransfer() {
  const [recipientId, setRecipientId] = useState("");
  const [transferValue, setTransferValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;

    const response = await api.post("/api/transfer", {
      recipientId: recipientId,
      transferValue: transferValue,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", mt: 3 }}>
      <Typography sx={{ textAlign: "center", color: "#E1e5f8" }} variant="h2">
        Transfer
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
              label="Recipient Id"
              variant="filled"
              sx={{
                backgroundColor: "#bbc4eb",
                my: 1,
              }}
              onChange={(e) => setRecipientId(e.target.value)}
            />
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
              onChange={(e) => setTransferValue(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Transfer
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainTransfer;
