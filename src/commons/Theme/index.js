import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#E64A19",
    textColor: "#FFFFFF",
    defaultTextColor: "#000000",
    hover: "rgba(0, 0, 0, 0.08)",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: "4px",
    backgroundColor: "#71BFA2",
    textColor: "white",
    borderColor: "#CCCCCC",
  },
});
export default theme;
