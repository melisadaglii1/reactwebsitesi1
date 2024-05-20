import React from 'react';
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const Header = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', textAlign: 'right', padding: '3%' }}>
            <Box>
                <Typography variant={"h4"} sx={{ color: "#78350F" }}>Collers</Typography>
            </Box>
            <ButtonGroup sx={{ display: 'flex', flexDirection: 'row', gap: 4, '@media (max-width: 767px)': { display: "none" } }}>
                <Button variant="text" size="medium" sx={{ color: "#78350F", cursor: 'pointer' }}>Products</Button>
                <Button variant="text" size="medium" sx={{ color: "#78350F", cursor: 'pointer' }}>Solutions</Button>
                <Button variant="text" size="medium" sx={{ color: "#78350F", cursor: 'pointer' }}>Pricing</Button>
                <Button variant="text" size="medium" sx={{ color: "#78350F", cursor: 'pointer' }}>Resources</Button>
                <Button variant="text" size="medium" sx={{ color: "#78350F", cursor: 'pointer' }}>Log in</Button>
                <Box sx={{ border: '3px solid #78350F' }}>
                    <Button variant="text" size="medium" sx={{ color: '#78350F', cursor: 'pointer' }}>Sign up now</Button>
                </Box>
            </ButtonGroup>
        </Box>
    )
}
export default Header;
