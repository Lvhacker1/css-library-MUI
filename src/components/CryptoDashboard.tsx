import { Box, Button, Container, Grid, Typography } from "@mui/material"


const CryptoDashboard = () => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h1" component="h2">
                h1. Heading
            </Typography>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
                <Button variant="contained" disableElevation>
                    Disable elevation
                </Button>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                blablabla
                </Grid>
            ))}
            </Grid>


        </Container>

    )
}

export default CryptoDashboard