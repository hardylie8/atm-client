import SideBar from "../MainMenu/SideBar";
import HistoryCard from "./HistoryCard";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";

function MainHistory() {
  const [histories, setHistories] = useState([]);
  useEffect(() => {
    fetchUserHistory();
  }, []);
  const fetchUserHistory = async () => {
    const accessToken = getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.get("/api/transaction_histories");
    const { data } = await response;
    setHistories(data);
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
          {histories.data !== undefined
            ? histories.data.map((histories) => (
                <div>
                  <HistoryCard
                    type={histories.transaction_type}
                    date={histories.created_at}
                    value={histories.value}
                  />
                </div>
              ))
            : "-"}
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainHistory;
