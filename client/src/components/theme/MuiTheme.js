import { createTheme } from "@mui/material";

const muiTheme = createTheme({
    typography: {
        fontFamily: ["DIN Pro Regular", "DIN Pro Bold"].join(","),
        fontSize: 12,
    },
    components: {
        MuiInputLabel: {
            defaultProps: {
                sx: {
                    fontSize: "12px",
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                sx: {
                    fontSize: "12px",
                }
            },
        }
    },
});

export default muiTheme;