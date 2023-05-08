import { useState, useEffect } from 'react'
import login from '../../services/login/login'
import Avatar from '@mui/material/Avatar'
import { Box, Button, CssBaseline, TextField, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Card from '@mui/material/Card'


function PageLogin() {

    const [token, setToken] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        })
        setUserName(data.get('username'))
        setPassword(data.get('password'))

        login({ username, password }).then(token => setToken(token))

        console.log(token)
    }

    const theme = createTheme()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card sx={{ maxWidth: 400, padding: 5 }}>
                        <Avatar alt="Muserpol" src="/muserpolIcon.png" sx={{ m: 1, width: 100, height: 100 }} />
                        {/* <LockOutlinedIcon /> */}
                        <Typography component="h1" variant="h5">
                            Inicio de sesión
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Usuario"
                                name="username"
                                autoComplete='username'
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default PageLogin;
