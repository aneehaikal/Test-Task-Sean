import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  withStyles,
  InputLabel
} from "@material-ui/core";

const SelectComponent = props => {
  const { classes, menu, label } = props;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        name="sort"
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        className={classes.view}
        defaultValue={menu[0].name}
      >
        {menu.map((item, index) => {
          return (
            <MenuItem
              className={classes.list}
              key={index}
              name={item.name}
              value={item.name}
            >
              {item.icon}
              <span className={classes.options}>{item.name}</span>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default withStyles(theme => ({
  formControl: {
    width: "100%",

    "& .MuiInputLabel-formControl": {
      position: "relative",
      top: "33px",
      left: "28px",
      zIndex: "7",
      textAlign: "left",
      transform: "none",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "0.426667px",
      color: "rgba(25, 25, 25, 0.497296)"
    },

    "& .MuiFormControl-root": {
      width: "100%"
    },
    "& .MuiSelect-root": {
      padding: 0,
      height: "2.8rem",
      "&:focus": {
        background: "#ffffff"
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.08)!important"
    }
  },

  options: {
    position: "relative",
    fontFamily: "Quicksand",
    left: "6px",
    fontSize: "16px",
    lineHeight: "44px",
    letterSpacing: "0.426667px",
    color: " rgba(25, 25, 25, 0.497296)"
  },
  view: {
    background: " #FFFFFF",
    border: "none",
    boxSizing: "border-box",
    boxShadow: " 0px 2px 4px rgba(116, 151, 240, 0.237161)",
    borderRadius: "7px",
    display: "flex",
    textAlign: "center"
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    "& .MuiSvgIcon-root": {
      top: 0
    }
  }
}))(SelectComponent);
