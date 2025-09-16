
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import CryptoDashboard from './components/CryptoDashboard'

function App() {
  const theme = createTheme ({
    palette: {
      mode: 'light',
      primary: {main: '#1976d2'},
      success: {main: '#2e7d32'},
      error: {main: '#d32f2f'},
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        backgroundColor: '#f4f6f8',
        p: { xs: 1, sm: 3 }
      }}>
        <CryptoDashboard />
      </Box>
    </ThemeProvider>
  )
}

export default App
