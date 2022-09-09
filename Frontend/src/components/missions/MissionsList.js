import React from "react";
import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Mission from "./Mission";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const spacex_launches = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        rocket {
          id
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

const MissionsList = () => {
  const { data, loading, error } = useQuery(spacex_launches);
  const [launches, setLaunches] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLaunches(data);
      setLoaded(true);
    }
  });

  if (loaded) {
    return (
      <div>
        <Box sx={{ mb: 2, borderBottom: 1 }}>
          <Typography variant="h3" gutterBottom>
            SpaceX past launches
          </Typography>
        </Box>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {launches.launchesPast.map((launch) => (
              <Grid key={launch.id} item xs={2} sm={4} md={3}>
                <Mission launch={launch}></Mission>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }

  if (!loaded) {
    return <div>No launches are loaded yet</div>;
  }
};

export default MissionsList;
