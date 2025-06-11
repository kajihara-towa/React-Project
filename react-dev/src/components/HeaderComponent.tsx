import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import  { useState, useRef } from "react";
import { Box, IconButton, Paper, Typography, Link as MuiLink } from "@mui/material";
import "../styles/headerComponent.css"; 

const navLinks = [
    { label: "ホーム", href: "/" },
    { label: "生徒一覧", href: "/students" },
    { label: "成績管理", href: "/grades" },
    { label: "出席管理", href: "/attendance" },
    { label: "設定", href: "/settings" },
];

export const HeaderComponent = () => {
    const [open, setOpen] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <Box component="header" className="header-root">
            <Typography variant="h5" className="header-title">
                生徒管理システム
            </Typography>
            <Box>
                <IconButton
                    ref={buttonRef}
                    onClick={() => setOpen((prev) => !prev)}
                    size="large"
                    edge="end"
                    className="menu-button"
                >
                    {open ? <CloseRoundedIcon /> : <MenuIcon />}
                </IconButton>
                {open && (
                    <Paper elevation={4} className="nav-menu">
                        {navLinks.map((link) => (
                            <MuiLink
                                key={link.href}
                                href={link.href}
                                underline="none"
                                color="text.primary"
                                className="nav-link"
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </MuiLink>
                        ))}
                    </Paper>
                )}
            </Box>
        </Box>
    );
};