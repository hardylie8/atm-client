import { Typography } from "@mui/material";

function SideBar(props) {
  const balance = props.balance;
  const name = props.name;

  return (
    <div>
      <Typography variant="h4" sx={{ color: "#E1e5f8" }}>
        Welcome <br />
        {name} <br />
      </Typography>
      <br />
      <Typography variant="h4" sx={{ color: "#E1e5f8" }}>
        Saldo <br />
        {balance}
      </Typography>
    </div>
  );
}

export default SideBar;
