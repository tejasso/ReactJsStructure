import React, { useState } from "react";
import {
  Select,
  MenuItem,
  Input,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";

import styles from "./dashbord.module.scss";

const Dashboard = () => {
  const [resultType, setResultType] = useState(""); // To store the type of result
  const [type, setType] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  // Example function to simulate search
  const handleSearch = () => {
    if (type !== "") {
      if (type === 1) {
        setSearchResults([
          { id: 1, name: "item1" },
          { id: 2, name: "item2" },
          { id: 3, name: "item3" },
        ]);
        setResultType("array");
      } else {
        setSearchResults({ id: 3, name: "item3" });
        setResultType("object");
      }
    }
  };

  const searchBoxPlaceHolder = React.useMemo(() => {
    switch (type) {
      case 1:
        return "Search by Application Number";
      case 2:
        return "Search by Message ID";

      default:
        return "";
    }
  }, [type]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.flexContainer}>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={type}
            label="Type"
            onChange={handleChange}
            className={styles.flexItem}
          >
            <MenuItem value={1}>Application</MenuItem>
            <MenuItem value={2}>Message</MenuItem>
          </Select>
        </FormControl>
        <Input
          placeholder={searchBoxPlaceHolder}
          className={`${styles.flexItem} ${styles.searchInput}`}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={styles.flexItem}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      {resultType === "array" && searchResults && (
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {resultType === "object" && searchResults && (
        <div className={styles.resultsObject}>
          <p>ID: {searchResults.id}</p>
          <p>Name: {searchResults.name}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
