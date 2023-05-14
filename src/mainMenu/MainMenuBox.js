import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MainMenuBox(props) {
  const title = props.title;
  const linkTo = props.linkTo;
  let navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(linkTo);
      }}
      sx={{
        width: 200,
        height: 200,
        borderRadius: 5,
        backgroundColor: "#737ccf",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
}

export default MainMenuBox;
