import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Repo from "../../repository/Repo";
import { useNavigate } from "react-router-dom";

const CreateComment = (props) => {
  const [comment, setComment] = useState(null);
  const history=useNavigate();

  useEffect(() => {
    setComment({
      missionId: props.missionId,
      rocketId: props.rocketId,
    });
  }, []);

  const handleChangeEvent = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value.trim(),
    });
    console.log(comment);
  };

  const addComment = (missionId, rocketId, comment) => {
    Repo.createComment(missionId, rocketId, comment).then((data) => {
      console.log(data);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset()
    addComment(comment.missionId,comment.rocketId,comment.comment);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          disabled
          id="missionId"
          name="missionId"
          label="Mission id"
          defaultValue={`${props.missionId}`}
        />
      </div>
      <div>
        <TextField
          disabled
          id="rocketId"
          name="rocketId"
          label="Rocket id"
          defaultValue={`${props.rocketId}`}
        />
      </div>

      <div>
        {" "}
        <TextField
          required
          id="comment"
          name="comment"
          label="Enter comment"
          onChange={handleChangeEvent}
        />
      </div>
      <Button type="submit" variant="contained" color="success">
        Submit
      </Button>
    </Box>
  );
};

export default CreateComment;
