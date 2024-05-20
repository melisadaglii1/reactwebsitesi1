import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Collectible = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5%'}}>
                <Typography variant={"h2"}
                            sx={{color: "#0F172A", textAlign: 'left', fontFamily: 'Roboto', fontWeight: "Bold"}}>Collectible
                    Sneakers</Typography>
                <Typography variant="h6" sx={{color: "#0F172A", textAlign: 'left', mt: "2rem"}}>
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem<br/>
                    mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                </Typography>
                <Box sx={{display: "flex", gap: "1rem", mt: "2rem"}}>
                    <Button sx={{border: '2px solid #78350F', color: "#78350F"}}>
                        Sign up now
                    </Button>

                    <Button sx={{color: "#78350F"}}>
                        <PlayCircleOutlineIcon/>
                        Watch Demo
                    </Button>
                </Box>
            </Box>

            <Box sx={{
                backgroundColor: "#FBBF24",
                borderRadius: "2rem",
                width: "14%",
                height: "15vw",
                mt: "4rem",
                overflow: "visible",
                position: "relative",
                '@media (max-width: 767px)': {
                    ml: "5rem",
                    width: "6rem",
                    height: "8rem"
                }
            }}>
                <Box component="img" src="/../../photos/shoe.png" alt="Shoe" sx={{
                    width: "180%",
                    height: "auto",
                    position: "absolute",
                    top: "-12rem",
                    left: "-30%",
                    '@media (max-width: 767px)': {
                        mt: "6rem",
                        width: "12rem",
                    }
                }}/>
            </Box>

        </Box>
    )
}
export default Collectible;
