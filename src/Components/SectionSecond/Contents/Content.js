import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ContentSectionSecond = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: { xs: "2rem", md: "8rem" },
            padding: "6rem 0",
            position: "relative",
            ml: {xs: "2rem"}
        }}>
            <Card sx={{
                maxWidth: 345,
                backgroundColor: "#0F172A",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/../../photos/SectionSecondShoes.jpeg"
                    title="Shoe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                        Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: "100%",
                        border: "2px solid white",
                        borderRadius: "0.5rem"
                    }}>
                        <ShoppingCartIcon sx={{ color: 'white' }} />
                        <Button variant="text" size="medium" sx={{ color: 'white', cursor: 'pointer' }}>BUY NOW</Button>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{
                maxWidth: 345,
                backgroundColor: "#0F172A",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/../../photos/SectionSecondShoesIII.jpeg"
                    title="Shoe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                        Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: "100%",
                        border: "2px solid white",
                        borderRadius: "0.5rem"
                    }}>
                        <ShoppingCartIcon sx={{ color: 'white' }} />
                        <Button variant="text" size="medium" sx={{ color: 'white', cursor: 'pointer' }}>BUY NOW</Button>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{
                maxWidth: 345,
                backgroundColor: "#0F172A",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="/../../photos/SectionSecondShoesII.jpeg"
                    title="Shoe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" }}>
                        Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "white" }}>
                        Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        width: "100%",
                        border: "2px solid white",
                        borderRadius: "0.5rem"
                    }}>
                        <ShoppingCartIcon sx={{ color: 'white' }} />
                        <Button variant="text" size="medium" sx={{ color: 'white', cursor: 'pointer' }}>BUY NOW</Button>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default ContentSectionSecond;
