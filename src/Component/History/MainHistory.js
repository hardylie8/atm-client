import SideBar from "../MainMenu/SideBar";
import HistoryCard from "./HistoryCard";
import { Box, Grid, Typography } from "@mui/material";
function MainHistory() {
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
          <HistoryCard
            description="Transfer To HL"
            type="DEBIT"
            date="23 March 2023 20.30"
            value="900000"
          />
          <HistoryCard
            description="Transfer To HL"
            type="CREDIT"
            date="23 March 2023 20.30"
            value="900000"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainHistory;
