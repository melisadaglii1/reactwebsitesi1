import {Paper} from "@mui/material";
import Header from "./Contents/HeaderSectionFirst";
import Collectible from "./Contents/Collectible";
import Footer from "./Contents/Footer";

const SectionFirstIndex = () => {
    return(
        <Paper sx={{backgroundColor: '#FFFBEB'}}>
            <Header/>
            <Collectible/>
            <Footer/>

        </Paper>
    )
}
export default SectionFirstIndex;