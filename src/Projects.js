import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from "@primer/octicons-react";
import Image from "next/image";
import { useRef } from "react";
import useAnimate from "./useAnimate";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: "100%",
  },
  cardActionArea: {
    height: "100%",
    // display: 'grid'
  },
}));

const projectData = {
  url: "https://github.com/vrindabhatia999",
  repositories: [
    { link: "", name: "Portfolio" },
    {
      link: "https://travel-itenary-vrindabhatia999.netlify.app/",
      name: "Travel-Itenary",
    },
    {
      link: "https://nft.rakuten.co.jp/moments/JL_1649331419_7160633c3/",
      name: "Video Max",
    },
    {
      link: "https://check-your-weather-vrindabhatia999.netlify.app/",
      name: "Weather App",
    },
  ],
};

export default function Projects({ data }) {
  const classes = useStyles();
  console.log("data", data);
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Grid
      direction="row-reverse"
      container
      justify="center"
      alignItems="center"
      spacing={10}
      className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
          Projects
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: "250ms" }}>
            <div>
              <Image
                alt="Projects"
                src="/projects.svg"
                width="1144"
                height="617.32"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction="row"
        spacing={1}
        style={{ marginTop: "100px" }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            width: "100%",
          }}
        >
          {!!projectData &&
            projectData.repositories.map((v, i) => (
              <div
                style={{
                  width: "100%",
                  background: "#23312E",
                  padding: "12px 12px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <label>{v.name}</label>
                <a style={{ color: "white" }} target="_blank" href={v.link}>
                  Click here
                </a>
              </div>
            ))}
        </div>
      </Grid>
    </Grid>
  );
}
