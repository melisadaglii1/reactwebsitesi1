import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

const ContentCards = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#FDE68A",
                        width: "80%",
                        height: "12vw",
                        ml: "10rem",
                        mt: "2rem",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    }}
                >
                    <Box sx={{display: "flex", flexDirection: "row", mt: "4rem", gap: "4rem"}}>
                    <Card sx={{maxWidth: 345, borderRadius: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
                        <CardContent>
                            <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                                <AccessTimeFilledIcon sx={{color: "#475569", fontSize: "2rem"}}/>
                                <Typography gutterBottom variant="h6" component="div" sx={{color: "#475569"}}>
                                    Zoommer
                                </Typography>
                            </Box>

                            <Typography variant="body2" color="text.secondary" sx={{color: "#000000"}}>
                                Non risus viverra enim, quis.<br/> Eget vitae arcu vivamus sit <br/>tellus, viverra
                                turpis lorem. <br/> Varius a turpis urna id <br/>porttitor. </Typography>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Box sx={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden", marginRight: "1rem" }}>
                                    <img src={"/../../photos/personFirst.jpeg"} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Profile" />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography variant={"h8"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Hellen Jummy</Typography>
                                    <Typography variant={"h9"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Team Lead</Typography>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                        <Card sx={{maxWidth: 345, borderRadius: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent>
                                <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                                    <AccessTimeFilledIcon sx={{color: "#475569", fontSize: "2rem"}}/>
                                    <Typography gutterBottom variant="h6" component="div" sx={{color: "#475569"}}>
                                        Zoommer
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{color: "#000000"}}>
                                    Non risus viverra enim, quis.<br/> Eget vitae arcu vivamus sit <br/>tellus, viverra
                                    turpis lorem. <br/> Varius a turpis urna id <br/>porttitor. </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Box sx={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden", marginRight: "1rem" }}>
                                        <img src={"/../../photos/personFirst.jpeg"} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Profile" />
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography variant={"h8"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Hellen Jummy</Typography>
                                        <Typography variant={"h9"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Team Lead</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                        <Card sx={{maxWidth: 345, borderRadius: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
                            <CardContent>
                                <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                                    <AccessTimeFilledIcon sx={{color: "#475569", fontSize: "2rem"}}/>
                                    <Typography gutterBottom variant="h6" component="div" sx={{color: "#475569"}}>
                                        Zoommer
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary" sx={{color: "#000000"}}>
                                    Non risus viverra enim, quis.<br/> Eget vitae arcu vivamus sit <br/>tellus, viverra
                                    turpis lorem. <br/> Varius a turpis urna id <br/>porttitor. </Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Box sx={{ width: "4rem", height: "4rem", borderRadius: "50%", overflow: "hidden", marginRight: "1rem" }}>
                                        <img src={"/../../photos/personFirst.jpeg"} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="Profile" />
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                        <Typography variant={"h8"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Hellen Jummy</Typography>
                                        <Typography variant={"h9"} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Team Lead</Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ContentCards;
