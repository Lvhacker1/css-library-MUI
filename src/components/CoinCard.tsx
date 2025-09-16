import { Card, CardContent, Typography } from '@mui/material';
import type { Coin } from '../types/types';

interface CoinCardProps {
    coin: Coin;
}

const CoinCard = ({coin}: CoinCardProps) => {
    return (
        <Card 
        sx={{
            borderRadius: 1,
            boxShadow: 3, 
            transition: 'transform 0.3s', 
            '&:hover': 
            { transform: 'scale(1.05)' },
            height: '100%'
         }}>
            <CardContent>
                <Typography variant='h6'
                sx={{ 
                    fontSize: {
                        xs: '1rem',
                        sm: '1.25rem',
                        md: '1.5rem',
                    }, 
                    color: 'text.secondary', 
                    fontWeight: 'bold', 
                    mb: 2 }}>
                {coin.name} ({coin.symbol.toUpperCase()})
                </Typography>

                <Typography variant="body1" component="div" 
                sx={{mb: 1}}>
                    Price: ${coin.current_price.toLocaleString()}
                </Typography>

                <Typography variant='body2'
                sx={{ 
                    color: 'text.secondary', 
                    mb: 1.5 }}>
                    Market Cap: ${coin.market_cap.toLocaleString()}
                </Typography>

                <Typography variant="body2"
                sx={{ 
                    color: coin.price_change_percentage_24h >=0 ? 'success.main' : 'error.main',
                    mb: 1.5,
                    fontWeight: 'bold' }}>
                    24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
                </Typography>
            </CardContent>
            </Card>
    )
}

export default CoinCard