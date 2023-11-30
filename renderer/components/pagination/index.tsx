import { Pagination, Stack } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"

const theme = createTheme()

export const Paginations = ({ count, page, handleChange }) => {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2}>
                <Pagination defaultPage={1} count={count} page={page} onChange={handleChange} />
            </Stack>
        </ThemeProvider>
    )
}
