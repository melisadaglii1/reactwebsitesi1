import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Footer = () => {
    return (
        <Grid container justifyContent="center" spacing={2} sx={{ml: "4rem"}}>
            <Grid item xs={12} md={4}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <EmojiEventsIcon sx={{color: "#78350F", fontSize: "4rem", textAlign: "left"}}/>
                    <Typography variant="h6" sx={{color: "#0F172A", mt: 2, fontWeight: "Bold"}}>Nibh viverra</Typography>
                    <Typography variant="h7" sx={{color: "#0F172A", mt: 1}}>Sit bibendum donec dolor fames neque <br/>
                        vulputate non sit aliquam. Consequat turpis <br/> natoque leo, massa.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <EmojiEventsIcon sx={{color: "#78350F", fontSize: "4rem", textAlign: "left"}}/>
                    <Typography variant="h6" sx={{color: "#0F172A", mt: 2, fontWeight: "Bold"}}>Cursus amet</Typography>
                    <Typography variant="h7" sx={{color: "#0F172A", mt: 1}}>Sit bibendum donec dolor fames neque <br/>
                        vulputate non sit aliquam. Consequat turpis <br/> natoque leo, massa.</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <EmojiEventsIcon sx={{color: "#78350F", fontSize: "4rem", textAlign: "left"}}/>
                    <Typography variant="h6" sx={{color: "#0F172A", mt: 2, fontWeight: "Bold"}}>Ipsum fermentum</Typography>
                    <Typography variant="h7" sx={{color: "#0F172A", mt: 1}}>Sit bibendum donec dolor fames neque <br/>
                        vulputate non sit aliquam. Consequat turpis <br/> natoque leo, massa.</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Footer;
