import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FramesGrid from "./FramesGridLayout";
import { useFrame } from "../hooks/useFrame";
import { useSceneDetails } from "../hooks/useScene";

const FrameComponent = ({ asset, setAsset }) => {
  useFrame(true);

  const { sceneDetails } = useSceneDetails();

  const [sceneData, setSceneData] = useState({
    sceneTitle: "Space Walk",
    script:
      "Cooper stares at an image of Saturn and its moons. Romilly zooms in on some stars DISTORTED like ripples in a pond.",
    location: "New York",
    genre: "Action",
    colorType: "Colored",
    numberOfFrames: 2,
  });

  const [frameData, setFrameData] = useState([
    {
      id: 1,
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/matthew_mcconaughey_on_the_poster_for_interstellar-1.jpg",
      prompt: "Cooper stares at night",
    },
    {
      id: 2,
      image:
        "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/11/interstellar-ending-explained_thumb.jpg",
      prompt: "Cooper stares at night",
    },
    {
      id: 3,
      image:
        "https://i.ytimg.com/vi/QBSw8nSVpmI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDDkXxLQMQQWBGIl6F17xlZhwVI6w",
      prompt: "Cooper stares at night",
    },
    {
      id: 4,
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf910194-d9dd-4526-b254-320c95b137db/dbhdlh0-01eebc0b-3c48-41cb-b843-86f50806b715.png/v1/fill/w_1024,h_575,q_80,strp/a_cut_scene_in_interstellar__2014__by_minnhsg_dbhdlh0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc1IiwicGF0aCI6IlwvZlwvY2Y5MTAxOTQtZDlkZC00NTI2LWIyNTQtMzIwYzk1YjEzN2RiXC9kYmhkbGgwLTAxZWViYzBiLTNjNDgtNDFjYi1iODQzLTg2ZjUwODA2YjcxNS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._BxZAVXFEEEsKTtsW0Zero2W7LPZ80KDY7aCfK9vrko",
      prompt: "Cooper stares at night",
    },
  ]);

  return (
    <Box
      sx={{
        marginBottom: 2,
        marginTop: 3,
        marginLeft: 3,
        height: "85vh",
        overflowY: "scroll",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        style={{ fontSize: "32px", textAlign: "center" }}
      >
        {sceneDetails?.title}
      </Typography>

      <FramesGrid sceneData={sceneDetails} />
    </Box>
  );
};

export default FrameComponent;
