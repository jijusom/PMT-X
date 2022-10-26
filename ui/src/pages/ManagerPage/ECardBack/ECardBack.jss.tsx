import { createUseStyles } from "react-jss";
import { blueBird } from "../../../theme";

const { light, primary, muted, secondary } = blueBird;
const classes = createUseStyles({
  flex1: {
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
  flex2: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  parent: {
    "& #num": { fontSize: "40px", margin: "0" },
    "& #txt": { margin: "0" },
  },
  "progress-bar": {
    width: "200px",
    height: "27px",
  },
});

export default classes;
