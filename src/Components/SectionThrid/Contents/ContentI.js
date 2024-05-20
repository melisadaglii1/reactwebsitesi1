import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import React from "react";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const ContentI = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "#FFFBEB", padding: "4rem" }}>
                <Card sx={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "4rem",
                    mt: "4rem",
                    flexDirection: "row",
                    gap: "4rem",
                    padding: "6rem 0",
                    position: "relative",
                    borderRadius: "2rem"
                }}>
                    <Box sx={{ display: 'flex', borderRadius: "2rem" }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ flex: '1 0 auto' }}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                    <Typography component="div" variant="h2">
                                        Why Join Us
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                                            <CheckIcon sx={{ color: "green" }} />
                                            <Typography component="div" variant="h6">
                                                Est et in pharetra magna adipiscing ornare aliquam. </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                                            <CheckIcon sx={{ color: "green" }} />
                                            <Typography component="div" variant="h6">
                                                Tellus arcu sed consequat ac velit ut eu blandit. </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
                                            <CheckIcon sx={{ color: "green" }} />
                                            <Typography component="div" variant="h6">
                                                Ullamcorper ornare in et egestas dolor orci. </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        border: '3px solid #78350F',
                                        borderRadius: "1rem",
                                        width: "10rem",
                                        height: "3rem",
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Button variant="text" size="medium" sx={{ color: '#78350F', cursor: 'pointer' }}>Sign
                                            up now</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Card>
                        <CardContent sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                            <Box>
                                <Button sx={{
                                    backgroundColor: "#E11D48",
                                    borderRadius: "50%",
                                    width: "1rem",
                                    height: "1rem",
                                    minWidth: "1rem",
                                    padding: 0
                                }}></Button>
                            </Box>

                            <Box>
                                <Button sx={{
                                    backgroundColor: "#FBBF24",
                                    borderRadius: "50%",
                                    width: "1rem",
                                    height: "1rem",
                                    minWidth: "1rem",
                                    padding: 0
                                }}></Button>
                            </Box>

                            <Box>
                                <Button sx={{
                                    backgroundColor: "#22C55E",
                                    borderRadius: "50%",
                                    width: "1rem",
                                    height: "1rem",
                                    minWidth: "1rem",
                                    padding: 0
                                }}></Button>
                            </Box>
                        </CardContent>

                        <Box sx={{ display: "flex", position: "relative" }}>
                            <CardMedia
                                sx={{ height: "13vw", width: "25rem", borderRadius: "1rem" }}
                                image="/../../photos/SelectionThrid.jpeg"
                                title="Shoe"
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    textAlign: "center",
                                    color: "white",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    borderRadius: "50%"
                                }}
                            >
                                <PlayCircleOutlineIcon sx={{ fontSize: "5rem" }} />
                            </Box>
                        </Box>
                    </Card>
                </Card>
            </Box>
        </>
    );
}

export default ContentI;
