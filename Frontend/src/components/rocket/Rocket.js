import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CreateComment from "../comments/CreateComment";

const Rocket = () => {
  let parameter = useParams();
  const rocket_details = gql`
  {
    rocket(id: "${parameter.rocketId}") {
      id
      name
      active
      company
      first_flight
      engines {
        type
      }
      success_rate_pct
    }
  }
`;

  const { data, loading, error } = useQuery(rocket_details);
  const [rocket, setRocket] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      setRocket(data);
      setLoaded(true);
      console.log(rocket);
    }
  });

  const tableCelStyle = {
    fontWeight: "bold",
  };

  if (loaded) {
    return (
      <div>
        <Box sx={{ mb: 2, borderBottom: 1 }}>
          <Typography variant="h3" gutterBottom>
            Details for the rocket
          </Typography>
        </Box>
        <Grid container sx={{ ml: 6 }} spacing={1}>
          <Grid item xs={7} sx={{ mt: 5 }}>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={tableCelStyle}>Company</TableCell>
                    <TableCell style={tableCelStyle} align="center">
                      First flight
                    </TableCell>
                    <TableCell style={tableCelStyle} align="center">
                      Rocket name
                    </TableCell>
                    <TableCell style={tableCelStyle} align="center">
                      Success rate PCT
                    </TableCell>
                    <TableCell style={tableCelStyle} align="center">
                      Rocket engine type
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {rocket.rocket.company}
                    </TableCell>
                    <TableCell align="center">
                      {rocket.rocket.first_flight}
                    </TableCell>
                    <TableCell align="center">{rocket.rocket.name}</TableCell>
                    <TableCell align="center">
                      {rocket.rocket.success_rate_pct}
                    </TableCell>
                    <TableCell align="center">
                      {rocket.rocket.engines.type}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={() => navigate(-1)}
              align="left"
              variant="outlined"
            >
              Back
            </Button>
          </Grid>
          <Grid sx={{ mt: 2 }} item xs={4}>
            <CreateComment
              missionId={parameter.missionId}
              rocketId={parameter.rocketId}
            ></CreateComment>
          </Grid>
        </Grid>
      </div>
    );
  }

  if (!loaded) {
    return <div>No launches are loaded yet</div>;
  }
};

export default Rocket;
