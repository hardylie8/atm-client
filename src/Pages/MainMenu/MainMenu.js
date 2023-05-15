import MainMenuBox from "./MainMenuBox";
import SideBar from "./SideBar";
import { signOut } from "../../store/slices/authThunk";
import { Box, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
function MainMenu() {
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", mt: 3 }}>
      <Grid container>
        <Grid item xs={3} sx={{ display: "flex", alignItems: "center", px: 3 }}>
          <SideBar name=" Names Goes Here" balance="Rp. 999.999.999,-" />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <MainMenuBox title="Tarik Uang" linkTo="/withdraw" />
            </Grid>
            <Grid item xs={4}>
              <MainMenuBox title="Transfer" linkTo="/transfer" />
            </Grid>
            <Grid item xs={4}>
              <MainMenuBox title="Cek Mutasi" linkTo="/history" />
            </Grid>
            <Grid item xs={4}>
              <MainMenuBox title="Update Saldo" linkTo="/topup" />
            </Grid>
            <Grid item xs={4}>
              <MainMenuBox title="Keluar" onClick={() => dispatch(signOut())} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainMenu;
