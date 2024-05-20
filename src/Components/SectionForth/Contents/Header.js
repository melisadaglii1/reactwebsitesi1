import {Box, Button, Typography} from "@mui/material";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeaderSectionForth = () => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "row", gap: "8rem", pt: "4rem"}}>
                <Box>
                    <Typography variant={"h3"} sx={{ fontWeight: "Bold", color: "#0F172A", ml: "8rem"}}>Because they love us</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "row", ml: "40rem", gap: "2rem"}}>
                <Box sx={{
                    border: '3px solid #78350F',
                    borderRadius: "1rem",
                    width: "2rem",
                    height: "2rem",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ArrowBackIcon sx={{color: "#78350F"}}/>
                </Box>
                    <Box sx={{
                        border: '3px solid #78350F',
                        borderRadius: "1rem",
                        width: "2rem",
                        height: "2rem",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ArrowForwardIcon sx={{color: "#78350F"}}/>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default HeaderSectionForth;