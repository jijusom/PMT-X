import { createUseStyles } from "react-jss";
import { blueBird } from "../../theme";

const { light, primary, muted, secondary } = blueBird;
const classes = createUseStyles({
  container: {
    height: "100vh",
    width: "100vw",
    backgroundColor: secondary,
    margin: "0",
    fontSize: "large",
    fontFamily: "math",
  },
  "info-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
  },
  "team-container": {
    borderRadius: "50px 15px",
    marginTop: "20px",
    color: light,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "700px",
    height: "200px",
    textAlign: "center",
    marginLeft: "60px",
    backgroundColor: primary,
  },
  "team-info": {
    "& #team-name": {
      width: "200px",
    },
  },
  "flex-item1": {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "70px",
  },
  "flex-item2": {
    extend: "flex-item1",
  },
  "flex-item3": {
    extend: "flex-item1",
    marginLeft: "12px",
  },
  icon: {
    maxWidth: "100px",
    maxHeight: "100px",
  },
  logout: {
    marginRight: "50px",
    backgroundColor: "red",
    padding: "10px 20px",
    alignSelf: "flex-start",
  },
  loggingout: {
    textDecoration: "none",
    color: light,
    fontWeight: "bold",
  },
});

export default classes;
