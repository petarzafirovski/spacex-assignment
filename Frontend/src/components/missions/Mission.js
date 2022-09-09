import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Mission = (props) => {
  return (
    <div key={props.launch.id}>
      <Card sx={{ border: "1px solid gray" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.launch.mission_name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Launch time: {props.launch.launch_date_local}
          </Typography>
          <Typography variant="body2">
            Launch site name: {props.launch.launch_site.site_name_long}
          </Typography>
          <CardActionArea sx={{ cursos: "none", mt: 2 }}>
            <Typography variant="h6">Ships:</Typography>
            {props.launch.ships.length == 0 && <p>No ships</p>}
            {props.launch.ships.map((ship) => (
              <div key={ship.name}>
                <CardMedia
                  sx={{
                    mb: 2,                    
                    width: "200px",
                    margin: "auto",
                    flexDirection: "column",
                  }}
                  component="img"
                  height="90"
                  image={`${ship.image}`}
                  alt={ship.name}
                ></CardMedia>
                <Typography variant="body2">
                  <span style={{ fontWeight: "bold" }}>Ship name: </span>
                  {ship.name}
                </Typography>
              </div>
            ))}
          </CardActionArea>
          <CardActions>
            <Button
              sx={{ mb: 2, mt: 2 }}
              component={Link}
              to={`/rocket/${props.launch.id}/${props.launch.rocket.rocket.id}`}
              variant="contained"
              size="medium"
              fullWidth
            >
              Rocket details
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mission;
