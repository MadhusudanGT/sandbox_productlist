import React from "react";
import Product_catlog from "./components/product_catlog";
import "./styles.css";
import posts from "./components/data";
import Product_catlog1 from "./components/product_catlog1";
import Product_catlog2 from "./components/product_catlog2";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6.5} sm={3}>
            <Paper className={classes.paper}>
              <Product_catlog></Product_catlog>
            </Paper>
          </Grid>
          <Grid item xs={6.5} sm={3}>
            <Paper className={classes.paper}>
              {" "}
              <Product_catlog1></Product_catlog1>
            </Paper>
          </Grid>
          <Grid item xs={6.5} sm={3}>
            <Paper className={classes.paper}>
              <Product_catlog2></Product_catlog2>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
