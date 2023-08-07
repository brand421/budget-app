import React from "react";
import incomeData from "../../Data";
import { Button } from "@mui/material";
import "./body.css";

function Body() {
  return (
    <>
      <div className="table__heading"></div>
      <div className="table">
        <Button variant="contained" size="large">
          Create Budget
        </Button>
      </div>
    </>
  );
}

export default Body;
