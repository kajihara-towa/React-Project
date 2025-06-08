import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const HeaderComponent = () => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="header"
            style={{
                position: 'relative',
                padding: '1rem',
                background: '#fff',
                borderBottom: '1px solid #e0e0e0',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
            }}
        >
            <span
                style={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#333',
                    letterSpacing: '0.05em',
                }}
            >
                tyr塾管理システム
            </span>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    padding: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                }}
                aria-label={open ? 'Close menu' : 'Open menu'}
            >
                {open ? <CloseRoundedIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </button>
            <div
                style={{
                    maxHeight: open ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <nav>
                    <ul
                        style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                            opacity: open ? 1 : 0,
                            transition: 'opacity 0.3s',
                            paddingTop: open ? '2.5rem' : 0,
                        }}
                    >
                        <li>
                            <a href="#home" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
                        </li>
                        <li>
                            <a href="#about" style={{ textDecoration: 'none', color: '#333' }}>About</a>
                        </li>
                        <li>
                            <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
