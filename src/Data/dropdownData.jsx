import { CropLandscape, CropPortrait, CropSquare } from "@mui/icons-material";
import SketchThumbnail from "../Assets/Images/sketch_thumbnail.png";
import CinematicThumbnail from "../Assets/Images/cinematic_thumbnail.png";
export const stylesData = [
  {
    title: "Sketch",
    value: "sketch",
    image: SketchThumbnail,
  },
  {
    title: "Cinematic",
    value: "cinematic",
    image: CinematicThumbnail,
  },
];

export const aspectRatioData = [
  {
    title: "Landscape (16:9)",
    icon: <CropLandscape sx={{ color: "inherit" }} />,
    value: "16:9",
  },
  {
    title: "Portrait (9:16)",
    icon: <CropPortrait sx={{ color: "inherit" }} />,
    value: "9:16",
  },
  {
    title: "Square (1:1)",
    icon: <CropSquare sx={{ color: "inherit" }} />,
    value: "1:1",
  },
];

export const genreData = [
  {
    title: "Action",
    value: "action",
  },
  {
    title: "Comedy",
    value: "comedy",
  },
  {
    title: "Romance",
    value: "romance",
  },
  {
    title: "Horror",
    value: "horror",
  },
  {
    title: "Thriller",
    value: "thriller",
  },
];

export const colorTypeData = [
  {
    title: "Coloured",
    value: "coloured",
  },
  {
    title: "Black & White",
    value: "black&White",
  },
];

export const cameraAngleData = [
  {
    title: "Low Angle",
    value: "low_angle",
  },
  {
    title: "Wide Angle",
    value: "wide_angle",
  },
  {
    title: "High Angle",
    value: "high_angle",
  },
  {
    title: "Eye Angle",
    value: "eye_angle",
  },
];

export const shotTypeData = [
  {
    title: "Close up",
    value: "close_up",
  },
  {
    title: "Mid shot",
    value: "mid_shot",
  },
  {
    title: "Full shot",
    value: "full_shot",
  },
  {
    title: "Long shot",
    value: "long_shot",
  },
];

export const inpaintingTypeData = [
  {
    title: "Add object",
    value: "ADD_OBJECT",
  },
  // {
  //   title: "Remove object",
  //   value: "REMOVE_OBJECT",
  // },
  {
    title: "Change background",
    value: "CHANGE_BACKGROUND",
  },
  {
    title: "Change weather",
    value: "CHANGE_WEATHER",
  },
  {
    title: "Change expression",
    value: "CHANGE_EXPRESSION",
  },
  {
    title: "Change color",
    value: "CHANGE_COLOR",
  },
];
