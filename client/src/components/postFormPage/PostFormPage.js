import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../form/Form";
import { Container, Grow, Grid } from "@material-ui/core";

const PostFormPage = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCurrentId(id);
    }
  }, [id, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid item xs={12} sm={6} md={3}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </Grow>
  );
};

export default PostFormPage;
