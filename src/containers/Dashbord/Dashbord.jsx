import React, { useState } from "react";
import { Select, MenuItem, Input, Button } from "@mui/material";
import styles from "./dashbord.module.scss";

const Dashboard = () => {
  const [resultType, setResultType] = useState("array"); // To store the type of result
  const [value, setValue] = useState(1);
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Example function to simulate search
  const handleSearch = () => {
    if (value === 1) {
      setSearchResults([
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
      ]);
      setResultType("array");
    } else {
      setSearchResults({ id: 3, name: "item3" });
      setResultType("object");
    }
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.flexContainer}>
        <Select
          value={value}
          onChange={handleChange}
          variant="outlined"
          className={styles.flexItem}
        >
          <MenuItem value={1}>Application</MenuItem>
          <MenuItem value={2}>Message</MenuItem>
        </Select>
        <Input
          placeholder={`Search by ${
            value === 1 ? "Application Number" : "Message ID"
          }`}
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
