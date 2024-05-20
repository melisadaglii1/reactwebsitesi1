import { Paper } from "@mui/material";
import HeaderSectionSecond from "./Contents/Header";
import ContentSectionSecond from "./Contents/Content";

const SectionSecondIndex = () => {
    return (
        <Paper sx={{ backgroundColor: "#0F172A" }}>
                <HeaderSectionSecond />
            <ContentSectionSecond />
        </Paper>
    )
}
export default SectionSecondIndex;
