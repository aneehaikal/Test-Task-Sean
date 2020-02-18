import React from "react";
import "./App.css";
import { Search, SelectComponent } from "./components/SearchBar";
import Apps from "@material-ui/icons/Apps";
import List from "@material-ui/icons/List";
import Menu from "@material-ui/icons/Menu";
import Money from "@material-ui/icons/Money";
import ImportExport from "@material-ui/icons/ImportExport";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core";

function App(props) {
  const { classes } = props;

  const menu = [
    {
      name: "Grid",
      icon: <Apps className={classes.selectIcon} />
    },
    {
      name: "List",
      icon: <List className={classes.selectIcon} />
    },
    {
      name: "Menu",
      icon: <Menu className={classes.selectIcon} />
    },
    {
      name: "Money",
      icon: <Money className={classes.selectIcon} />
    }
  ];
  const sortMenu = [
    {
      name: "Date Created"
    },
    {
      name: "Date Select"
    },
    {
      name: "Date Start"
    },
    {
      name: "Date End"
    }
  ];
  return (
    <div className={classes.layout}>
      <Grid container>
        <Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
          <Search />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
          <SelectComponent menu={menu} label="View:" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <div className={classes.flexBox}>
            <div className={classes.sortOrder}>
              <SelectComponent menu={sortMenu} label="Sort By:" />
            </div>
            <div className={classes.importButton}>
              <ImportExport className={classes.sortIcon} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles({
  layout: {
    padding: 14
  },
  selectIcon: {
    position: "relative",
    top: 7,
    color: "rgba(25, 25, 25, 0.497296)"
  },
  sortIcon: {
    fontSize: "1.9rem",
    position: "relative",
    top: "11px",
    color: "rgba(25, 25, 25, 0.497296)"
  },

  flexBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  sortOrder: {
    flex: 1
  }
})(App);
