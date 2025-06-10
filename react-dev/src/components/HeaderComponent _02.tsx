import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useRef } from "react";
import { Box, IconButton, Paper, Typography, Link as MuiLink } from "@mui/material";

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
        <Box
            component="header"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                py: 1,
                boxShadow: 1,
                position: "relative",
                zIndex: 10,
                bgcolor: "background.paper",
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                生徒管理システム
            </Typography>
            <Box>
                <IconButton
                    ref={buttonRef}
                    onClick={() => setOpen((prev) => !prev)}
                    size="large"
                    edge="end"
                >
                    {open ? <CloseRoundedIcon /> : <MenuIcon />}
                </IconButton>
                {open && (
                    <Paper
                        elevation={4}
                        sx={{
                            position: "absolute",
                            top: "100%",
                            right: 16,
                            mt: 1,
                            minWidth: 180,
                            maxWidth: 260,
                            py: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            zIndex: 20,
                        }}
                    >
                        {navLinks.map((link) => (
                            <MuiLink
                                key={link.href}
                                href={link.href}
                                underline="none"
                                color="text.primary"
                                sx={{
                                    px: 2,
                                    py: 1,
                                    borderRadius: 1,
                                    "&:hover": { bgcolor: "action.hover" },
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    transition: "background 0.2s",
                                }}
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