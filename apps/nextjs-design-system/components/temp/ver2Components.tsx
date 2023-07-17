import Image from "next/image";

import { Box } from "@mui/system";

import datePicker from "./images/datePicker.svg";
import dropdown from "./images/dropdown.svg";
import searchBar from "./images/searchBar.svg";
import table from "./images/table.svg";
import worklist from "./images/worklist.svg";

/**
 * @todo
 * ver2 component is currently composed of only images.
 * ver2 component will be changed to actual component in the future.
 */
function ImageComponent({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      className="ver2-components"
      sx={{
        display: "flex",
      }}
    >
      <Image
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}

const DatePicker = () => <ImageComponent src={datePicker} alt="DatePicker" />;
const Dropdown = () => <ImageComponent src={dropdown} alt="Dropdown" />;
const SearchBar = () => <ImageComponent src={searchBar} alt="SearchBar" />;
const Table = () => <ImageComponent src={table} alt="Table" />;
const Worklist = () => <ImageComponent src={worklist} alt="Worklist" />;

export { DatePicker, Dropdown, SearchBar, Table, Worklist };
