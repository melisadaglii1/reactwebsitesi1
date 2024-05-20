import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HeaderSectionSecond = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "2rem", md: "8rem" },
            pt: "4rem",
            alignItems: "center"
        }}>
            <Box>
                <Typography
                    variant={"h2"}
                    sx={{
                        color: "white",
                        ml: { xs: "0", md: "8rem" },
                        textAlign: { xs: "center", md: "left" },
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        '@media (max-width: 767px)': {
                            whiteSpace: 'nowrap',
                            ml:"1rem",
                            fontSize: "2.5rem"
                        }
                    }}
                >
                    The best of the best
                </Typography>
            </Box>
            <Box sx={{
                border: '3px solid white',
                ml: { xs: "0", md: "32rem" },
                borderRadius: "1rem",
                width: { xs: "auto", md: "10rem" },
                height: "3rem",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Button
                    variant="text"
                    size="medium"
                    sx={{
                        color: 'white',
                        cursor: 'pointer',
                        width: { xs: "auto", md: "auto" }
                    }}
                >
                    Sign up now
                </Button>
            </Box>
        </Box>
    )
}

export default HeaderSectionSecond;
