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
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

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
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          className="pb-5"
        >
          <Tab className="w-1/2" label="Search Movies" />
          <Tab className="w-1/2" label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
    </div>
  );
};

export default Search;
