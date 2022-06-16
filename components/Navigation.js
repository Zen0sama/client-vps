import { AppBar, Box, Typography, Menu, MenuItem, Button } from '@mui/material'
import * as React from 'react'
import logo from '../assets/images/logo.png'

const pages = ['Products', 'Pricing', 'Blog']

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null)
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    return (
        <AppBar sx={{ width: '100%', backgroundColor: '#334257' }}>
            <Box sx={{ maxWidth: 1200, display: 'flex', width: '100%', margin: 'auto', paddingY: 0.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                    <img
                        src={logo.src}
                        alt="logo"
                        className="w-[40px] h-[40px] cursor-pointer border rounded-full max-w-none animate-spin duration-300"
                    ></img>
                    <Typography align="center" variant="h5" sx={{ fontWeight: 'bold', color: '#EEEEEE' }}>
                        Wibu247
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Box>
        </AppBar>
    )
}

export default Navigation
