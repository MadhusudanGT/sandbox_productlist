import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { posts } from "./data";
import Product_catlog3 from "./increment";
import img1 from "./ginger.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 205
  },
  media: {
    height: 120
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            GINGER
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $50 per kg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Multiple of 0.5 Kg
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardContent>
        <Product_catlog3 />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          ADD TO CART
        </Button>

        <Button size="small" variant="contained" color="primary">
          BUY
        </Button>
      </CardActions>
    </Card>
  );
}
