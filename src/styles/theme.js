import { createTheme } from "@mui/material/styles";

export const deviceTheme = () => {
  if (!localStorage.getItem("theme")) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    } else return "light";
  } else return localStorage.getItem("theme");
};

const theme = (theme) =>
  createTheme({
    typography: {
      fontFamily: ["Roboto", "Helvetica Neue"].join(","),
      allVariants: {
        fontFamily: "Roboto",
      },
      button: {
        textTransform: 'none'
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },

      },
    },
    palette:
      theme === "dark"
        ? {
            primary: {
              main: "#FF3C00",
              dark: "#EB3700",
              light: "#FF5D2B",
              lightest: "#FFDDD2",
            },
            secondary: {
              main: "#3E2726",
              dark: "#201612",
            },
            text: {
              main: "#98A5A8",
              light: "#FFF1EC",
              lightest: "#F7F7F7",
            },
            greys:{
              darkest:"#201612",
              darker:"#3E3E3E",
              main: "#83888B",
              light:"#98A5A8",
              lighter:"#F7F7F7",
              lightest:"#F9F9F9",
            }
          }
        : {
            primary: {
              main: "#FF3C00",
              dark: "#EB3700",
              light: "#FF5D2B",
              lightest: "#FFDDD2",
            },
            secondary: {
              main: "#3E2726",
              dark: "#201612",
            },
            text: {
              main: "#98A5A8",
              light: "#F7F7F7",
              lightest: "#FFF1EC",
            },
            greys:{
              darkest:"#201612",
              darker:"#3E3E3E",
              main: "#83888B",
              light:"#98A5A8",
              lighter:"#F7F7F7",
              lightest:"#F9F9F9",
            }
          },
  });

export default theme;
