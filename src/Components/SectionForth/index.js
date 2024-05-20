import {Paper} from "@mui/material";
import HeaderSectionForth from "./Contents/Header";
import ContentCards from "./Contents/ContentCards";

const SectionForthIndex = () => {
    return(
        <>
            <Paper sx={{backgroundColor: "#FFFBEB"}}>
                <HeaderSectionForth/>
                <ContentCards/>
            </Paper>
        </>
    )
}
export default SectionForthIndex;