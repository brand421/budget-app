import React from "react";
import "../Header/header.css";
import { Button } from "@mui/material";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="app__title">BUDGIT</h1>
        <h3 className="app__subtitle">VERSION CONTROL FOR YOUR BUDGET</h3>
      </div>
      <div className="input__buttons">
        <Button className="add__income" variant="contained" size="medium">
          Add New Income
        </Button>
        <Button className="add__debt" variant="contained" size="medium">
          Add New Debts
        </Button>
        <form className="branch">
          <Button variant="contained" size="medium">
            Create New Branch
          </Button>
        </form>
      </div>
    </>
  );
}

export default Header;
