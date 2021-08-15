import React, { useState } from "react";
import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const [type, setType] = useState(0);

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="flex mx-0 my-4">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            //onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            //onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
            //className="ml-20"
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Search;
