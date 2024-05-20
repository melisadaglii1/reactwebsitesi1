import {Box, Button, Divider, Grid, Typography} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const ContentSectionFooter = () => {
    return (
        <Box sx={{display: "flex", padding: {md: "8rem", xs: "5rem"}, ml: {md:"4rem", xs: ""}}}>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Product</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Solutions</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Support</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Get the App</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Pricing</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Brainstorming</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Contact Us</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button sx={{backgroundColor: "black", border: "1px solid white", borderRadius: "0.5rem", width: "9rem"}}>
                            <Box sx={{display: "flex", flexDirection: "row"}}>
                                <Box>
                                    <AppleIcon sx={{color: "white"}}/>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <Typography  sx={{color: "white", fontSize: "0.5rem"}}>Download on the</Typography>
                                    <Typography  sx={{color: "white", fontSize: "1rem"}}>App Store</Typography>


                                </Box>
                            </Box>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Overview</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Ideation</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Developers</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button sx={{backgroundColor: "black", border: "1px solid white", borderRadius: "0.5rem", width: "12rem", gap:"1rem"}}>
                            <Box sx={{display: "flex", flexDirection: "row"}}>
                                <Box>
                                    <ShopIcon sx={{color: "white"}}/>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "column"}}>
                                    <Typography  sx={{color: "white", fontSize: "0.5rem"}}>GET IT ON</Typography>
                                    <Typography  sx={{color: "white", fontSize: "1rem"}}>Google Play</Typography>
                                </Box>
                            </Box>
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Browse</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Wireframing</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Documentation</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Accessibility</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Research</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Integrations</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Follow Us</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Five</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Design</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white"}}>Reports</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
                            <YouTubeIcon sx={{color: "white"}}/>
                            <FacebookIcon sx={{color: "white"}}/>
                            <TwitterIcon sx={{color: "white"}}/>
                            <InstagramIcon sx={{color: "white"}}/>
                            <LinkedInIcon sx={{color: "white"}}/>
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Box sx={{mt: "5rem"}}>
                        <Divider orientation="horizontal" sx={{backgroundColor: "white", fontSize: "2rem"}}/>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexDirection: {md: "row", xs: "column"},
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: "2rem",

                    }}>
                        <Typography variant="h6" sx={{color: "white", fontSize: {xs: "1rem"}}}>Collers @ 2023. All rights reserved.</Typography>
                        <Box sx={{display: "flex",  flexDirection:  "row", gap: "1rem", alignItems: "center"}}>
                            <Typography variant="h6" sx={{color: "white"}}>Terms</Typography>
                            <Typography variant="h6" sx={{color: "white"}}>Privacy</Typography>
                            <Typography variant="h6" sx={{color: "white"}}>Contact</Typography>
                            <Box sx={{display: "flex", flexDirection: "row", gap: "0.3rem", alignItems: "center"}}>
                                <LanguageIcon sx={{color: "white"}}/>
                                <Typography variant="h6" sx={{color: "white"}}>EN</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ContentSectionFooter;
