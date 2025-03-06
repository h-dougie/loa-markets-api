import { Box, Button, Container, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [characterName, setCharacterName] = useState("");
  const onChange = (event) => setCharacterName(event.target.value);

  const searchCharacter = (event) => {
    event.preventDefault();
    navigate(`/char/${characterName}`);
  };
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={searchCharacter}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "50%" }}
            onChange={onChange}
            value={characterName}
            id="standard-basic"
            label="Character Name"
            variant="standard"
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Home;
