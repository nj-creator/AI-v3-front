import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import CharacterGrid from "./CharactersGridLayout";
import ScenesGrid from "./ScenesGridLayout";
import { useScene } from "../hooks/useScene";
import { MovieFilter } from "@mui/icons-material";
import NewSceneButton from "./NewSceneButton";
import { useSearchParams } from "react-router-dom";
import { createQueryFromTitle } from "../utils/convertString";

// eslint-disable-next-line react/prop-types
const ProjectComponent = ({ asset, setAsset }) => {
  const { data } = useScene(true);

  const [searchParams] = useSearchParams();

  const [Characterdata] = useState([
    {
      "character name": "Name1",
      image:
        "https://watcher.guru/news/wp-content/uploads/2023/09/Screen-Shot-2023-09-11-at-10.05.13-AM-800x579.jpg",
      updated: "2024-05-05T03:18:46.820+00:00",
      created: "2024-03-09T22:03:16.615+00:00",
    },
    {
      "character name": "Name2",
      image:
        "https://analyticsindiamag.com/wp-content/uploads/2018/01/1928619fa80ccd8ec13304cd26f76789628b8674fb6247c22c8f88c94947d6f5.jpg",
      updated: "2024-03-09T22:07:21.371+00:00",
      created: "2024-03-09T22:03:25.284+00:00",
    },
  ]);

  const handleSceneClick = () => {
    setAsset("scenes");
  };

  const handleCharacterClick = () => {
    setAsset("characters");
  };

  return (
    <Box sx={{ marginBottom: 2, marginTop: 3, marginLeft: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 2,
          marginTop: 3,
          marginLeft: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Heading */}

          <Typography variant="h5" component="div" style={{ fontSize: "32px" }}>
            {createQueryFromTitle(searchParams.get("title"))}
          </Typography>

          {/* Grid and List View Buttons */}
        </Box>
      </Box>
      <Button
        sx={{
          borderRadius: 24,
          width: 100,
          height: 40,
          bgcolor: asset == "scenes" ? "greys.lightest" : "none",
          marginRight: 1,
          marginLeft: 3,
          color: asset == "scenes" ? "greys.darkest" : "greys.light",
        }}
        onClick={handleSceneClick}
      >
        Scenes
      </Button>
      <Button
        sx={{
          borderRadius: 24,
          width: 100,
          height: 40,
          bgcolor: asset == "characters" ? "greys.lightest" : "none",
          marginRight: 3,
          color: asset == "characters" ? "greys.darkest" : "greys.light",
        }}
        onClick={handleCharacterClick}
      >
        Characters
      </Button>

      {asset === "scenes" ? (
        data && data.length > 0 ? (
          <ScenesGrid projectData={data} />
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <MovieFilter
              sx={{ height: 100, width: 100, color: "primary.lightest" }}
            />

            <Typography color={"greys.darkest"} fontWeight={500}>
              No Scenes created
            </Typography>
            <Typography
              variant="body2"
              color={"text.main"}
              sx={{ maxWidth: "400px", textAlign: "center" }}
            >
              Welcome aboard! Let&apos;s kick things off together. Click on the
              button to create the first one
            </Typography>

            <NewSceneButton />
          </Box>
        )
      ) : (
        <CharacterGrid projectData={Characterdata} />
      )}
    </Box>
  );
};

export default ProjectComponent;
