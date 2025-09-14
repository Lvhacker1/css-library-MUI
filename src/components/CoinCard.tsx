import { Box, Card, CardContent, Typography } from '@mui/material';
import { LinePlot } from '@mui/x-charts';
import { ChartContainer } from '@mui/x-charts/ChartContainer';


const CoinCard = () => {
    return (
        <Card 
        sx={{
            borderRadius: 1,
            transition: 'transform 0.3s', 
            '&:hover': 
            { transform: 'scale(1.07)' },
            height: '100%'
         }}>
            <CardContent>
                <Typography gutterBottom 
                sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 2 }}>Word of the Day
                </Typography>

                <Typography variant="h5" component="div" 
                sx={{mb: 1}}>blablabla
                </Typography>

                <Typography 
                sx={{ color: 'text.secondary', mb: 1.5 }}>adjective
                </Typography>

                <Typography variant="body2"
                sx={{ color: 'text.secondary', mb: 1.5 }}>adjective
                </Typography>
                
                    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                        <ChartContainer>
                            <LinePlot />
                        </ChartContainer>
                    </Box>
            </CardContent>
            </Card>
    )
}

export default CoinCard