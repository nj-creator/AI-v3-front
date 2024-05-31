import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { timeHandler } from "../utils/time";
import ActionsIcon from "./ActionsIcon";
import { Box } from "@mui/material";
import { createProjectTitle, createUrlQuery } from "../utils/convertString";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectGrid = ({ projectData }) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} sx={{ height: "80vh", overflowY: "scroll" }}>
      {/* eslint-disable-next-line react/prop-types */}
      {projectData?.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            onClick={() =>
              navigate(
                `/project/${project._id}?title=${createUrlQuery(project?.name)}`
              )
            }
            variant="outlined"
            sx={{
              boxShadow: "none",
              border: "none",
              borderRadius: "none",
              bgcolor: "transparent",
              cursor: "pointer",
            }}
          >
            <CardContent sx={{ position: "relative" }}>
              {/* Thumbnail */}
              {project?.thumbnail && project?.thumbnail !== "" ? (
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "188px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    filter: `grayscale(${
                      project.colorType === "black&White" ? "1" : "0"
                    })`,
                  }}
                />
              ) : (
                <Box
                  height={188}
                  bgcolor="primary.lightest"
                  borderRadius={4}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography
                    variant="h2"
                    fontWeight={600}
                    color={"text.lightest"}
                  >
                    {createProjectTitle(project?.name)}
                  </Typography>
                </Box>
              )}

              {/* Title */}
              <Typography
                variant="body"
                component="div"
                gutterBottom
                style={{ marginTop: "10px", fontSize: "18px" }}
              >
                <Typography
                  sx={{ width: "fit-content",textTransform:"capitalize" }}
                  // onClick={() =>
                  //   navigate(
                  //     `/project/${project._id}?title=${createUrlQuery(
                  //       project?.name
                  //     )}`
                  //   )
                  // }
                >
                  {project.name}
                </Typography>
                <Box
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "25px",
                  }}
                >
                  <ActionsIcon />
                </Box>
              </Typography>

              {/* Updated */}
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ marginTop: "5px", fontSize: "12px" }}
              >
                modified {timeHandler(project.updatedDate)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
