import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";
import { NumericFormat } from "react-number-format";
function SideBar(props) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    const accessToken = getToken();
    api.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = await api.get("/api/user");
    const { data } = await response;
    setUser(Object.keys(data).map((key) => data[key]));
  };
  return (
    <div>
      <Typography variant="h4" sx={{ color: "#E1e5f8" }}>
        Welcome <br />
        {user[0] !== undefined ? user[0].name : "-"} <br />
      </Typography>
      <br />
      <Typography variant="h4" sx={{ color: "#E1e5f8" }}>
        Saldo <br />
        <NumericFormat
          value={user[0] !== undefined ? user[0].saldo : 0}
          displayType={"text"}
          thousandSeparator="."
          decimalSeparator=","
          prefix={"Rp. "}
          suffix={",-"}
        />
      </Typography>
    </div>
  );
}

export default SideBar;
