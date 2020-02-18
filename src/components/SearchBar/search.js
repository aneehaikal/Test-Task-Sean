import React from "react";

import {
  FormControl,
  withStyles,
  IconButton,
  InputBase
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";

const Search = props => {
  const { classes } = props;
  return (
    <FormControl fullWidth>
      <div className={classes.searchtext}>
        <InputBase
          name="search"
          className={classes.input}
          placeholder="Search your inventory"
          startAdornment={
            <IconButton
              className={classes.iconButton}
              aria-label="menu"
              disableRipple="true"
            >
              <SearchIcon className={classes.icon} />
            </IconButton>
          }
          endAdornment={
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              disableRipple="true"
            >
              <TuneIcon className={classes.icon} />
            </IconButton>
          }
        />
      </div>
    </FormControl>
  );
};

export default withStyles({
  searchtext: {
    background: "#FFFFFF",
    border: "1px solid rgba(116, 151, 240, 0.181436)",
    boxSizing: "border-box",
    boxShadow: "0px 2px 4px rgba(116, 151, 240, 0.237161)",
    borderRadius: "7px",
    width: "100%",
    display: "flex",
    "& .MuiInputBase-input": {
      fontSize: "16px",
      lineHeight: "21px",
      color: "rgba(25, 25, 25, 0.497296)",
      letterSpacing: "0.426667px"
    }
  },
  search: {
    display: "flex",
    position: "relative"
  },

  input: {
    width: "100%"
  },
  iconButton: {
    padding: 8,
    "&:hover ": {
      background: "#FFFFFF"
    }
  },
  icon: {
    color: "rgba(25, 25, 25, 0.497296)"
  }
})(Search);
