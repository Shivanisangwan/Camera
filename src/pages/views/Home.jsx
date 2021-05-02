import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Drawerr from "../../component/Drawerr";
import AddIcon from "@material-ui/icons/Add";
import HomeCar from "../../component/HomeCar";

const useStyles = makeStyles((theme) => ({
  homecar: {
    marginLeft: "2vw",
    marginTop: "1vh",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [invisible, setInvisible] = React.useState(false);

  return (
    <div>
      <Drawerr />
      <CardHeader
              style={{ color: "black" }}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <AddIcon />
                </Avatar>
              }
              title="My Camera(Home)"
              subheader="10 Active Devices"
            />
            <HomeCar className={classes.homecar}/>
    </div>
  );
};

export default Home;
