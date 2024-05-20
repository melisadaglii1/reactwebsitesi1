import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const CardsContent = () => {
    return (
        <>
        <Box sx={{display: "flex", flexDirection: "row"}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', ml: "10rem"}}>
                    <Box>
                        <Box
                            sx={{
                                border: '3px solid white',
                                borderRadius: "1rem",
                                width: "15rem",
                                height: "3rem",
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#FFFFFF',
                            }}
                        >
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                                <ArrowForwardIcon sx={{color: "#0F172A"}}/>
                            </Button>
                        </Box>
                        <Box sx={{mt: "2rem"}}>
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                            </Button>
                        </Box>
                        <Box sx={{mt: "2rem"}}>
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                            </Button>
                        </Box>
                        <Box sx={{mt: "2rem"}}>
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                            </Button>
                        </Box>
                        <Box sx={{mt: "2rem"}}>
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                            </Button>
                        </Box>
                        <Box sx={{mt: "2rem"}}>
                            <Button sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <SearchIcon sx={{color: "#0F172A"}}/>
                                <Typography
                                    sx={{ml: 1, mr: 1, whiteSpace: "nowrap", fontWeight: "Bold", color: "#0F172A"}}>Bibendum
                                    tellus</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ ml: "16rem", position: "relative" }}>
                <Box sx={{ display: "flex", flexDirection: "column" , backgroundColor: "white"}}>
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
                            sx={{ height: "15vw", width: "40rem",  borderRadius: "0.5rem" }}
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
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", borderRadius: "1rem", position: "absolute", top: "80%", left: "80%", transform: "translate(-50%, -50%)", backgroundColor: "white"}}>
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
                            sx={{ height: "15vw", width: "40rem",  borderRadius: "0.5rem" }}
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
                        </Box>
                    </Box>
                </Box>

                <CardMedia
                    sx={{ height: "15vw", width: "15rem", borderRadius: "1rem", position: "absolute", top: "100%", left: "130%", transform: "translate(-50%, -50%)" }}
                    image="/../../photos/photosfifth.jpeg"
                    title="Shoe"
                />
            </Box>
        </Box>
        <Box sx={{mt: "18rem", ml: "16rem", display: "flex", flexDirection: "column"}}>
            <CardMedia
                sx={{ height: "15vw", width: "15rem", borderRadius: "1rem" }}
                image="/../../photos/shoesfifth.jpeg"
                title="Shoe"
            />
            <Button sx={{width: "14rem", color: "#0F172A", backgroundColor: "#dddddd", borderRadius: "1rem"}}>Emma Simpson collected one pair of Cool Shoes.</Button>
        </Box>
            <Box sx={{mt: "2rem", ml: "32rem"}}>
                <Typography variant={"h2"}>11,658,467</Typography>
                <Typography variant={"h4"}>Shoes Collected</Typography>
            </Box>
    </>
    )
}
export default CardsContent;
