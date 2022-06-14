import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from 'next/link'
import Logo from './Logo'
import Button from '@mui/material/Button'
export default function Navbar() {
    const pages = [
        { title: 'Trang Chủ', link: '/' },
        { title: 'VPS', link: '/products' },
        { title: 'Nạp Tiền', link: '/money' },
        { title: 'Liên Hệ', link: '/contact' },
    ]
    return (
        <AppBar position="static" className="bg-[#F0F4F9]">
            <Box className="max-w-[1171px] m-auto w-full min-h-[100px] flex items-center justify-between">
                <Box>
                    <Logo />
                </Box>
                <Box className="text-black flex justify-between w-full max-w-[566px]">
                    <Box className="w-full max-w-[326px] flex justify-between items-center font-medium">
                        {pages.map((page) => (
                            <Link key={page.link} href="/about">
                                <a>{page.title}</a>
                            </Link>
                        ))}
                    </Box>
                    <Button
                        variant="contained"
                        disableElevation
                        className="bg-[#FDC800] py-[11px] px-[30px] text-black hover:bg-[#FDC900]"
                    >
                        Đăng Nhập
                    </Button>
                </Box>
            </Box>
        </AppBar>
    )
}
