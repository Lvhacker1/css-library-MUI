import { Box, Button, CircularProgress, Container,  Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import CoinCard from "./CoinCard";
import type { Coin } from "../types/types";
import RefreshIcon from '@mui/icons-material/Refresh';

const CryptoDashboard = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [savedCoins, setSavedCoins] = useLocalStorage('cryptoCoins', []);

    const fetchCoins = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://api.coinlore.net/api/tickers/');
            const response = await res.json();

            const targetCoins = ['bitcoin', 'ethereum', 'ripple', 'solana', 'dogecoin', 'avalanche'];
            const filteredData = response.data.filter((coin: any) => 
                targetCoins.includes(coin.name.toLowerCase()) || 
                targetCoins.includes(coin.symbol.toLowerCase()) ||
                (coin.symbol.toLowerCase() === 'xrp') 
            ).slice(0, 6);

            const data: Coin[] = filteredData.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            current_price: parseFloat(coin.price_usd),
            market_cap: parseFloat(coin.market_cap_usd),
            price_change_percentage_24h: parseFloat(coin.percent_change_24h)
            }));

            setCoins(data);
            setSavedCoins(data)
        } catch (err) {
            console.error('error blablabakhksdlksd:', err)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (savedCoins.length > 0) {
            setCoins(savedCoins)
        }
        fetchCoins();
    }, []);

    return (
        <Container maxWidth="lg" sx={{py: 4}}>
            <Typography variant="h4" component="h1" 
            sx={{
                fontWeight: 'bold', 
                textAlign: 'center', 
                mb: 5}}> 
                Portfolio/Wallet
            </Typography>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 4 }}>
                <Button sx={{
                    textTransform: 'none', 
                    fontWeight: 'bold', 
                    px: 4, 
                    py: 1, 
                    borderRadius: 1.5,
                    }} 
                    variant="contained" 
                    onClick={fetchCoins} 
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <RefreshIcon />} 
                    disabled={loading}>
                    {loading ? 'Refreshing...' : 'Refresh Data'}
                </Button>
            </Box>
            <Box sx={{
                display: 'grid', 
                gridTemplateColumns: { 
                    xs: '1fr', 
                    sm: 'repeat(2, 1fr)', 
                    md: 'repeat(3, 1fr)'
                }, 
                gap: 3
            }}>
                {coins.map((coin) => (
                    <CoinCard key={coin.id} coin={coin}/>
                ))}
            </Box>
        </Container>
    )
}

export default CryptoDashboard