import { Container, makeStyles, Typography } from "@material-ui/core";

import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./cryptoBg4.gif)",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    objectFit: "cntain",
    height: 300,
  },
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "yellow",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Cryptocurrency
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          ></Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
