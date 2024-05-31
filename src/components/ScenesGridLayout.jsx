import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { timeHandler } from "../utils/time";
import ActionsIcon from "./ActionsIcon";
import { Box } from "@mui/material";
import { createProjectTitle, createUrlQuery } from "../utils/convertString";
import { useNavigate } from "react-router-dom";

const ScenesGrid = ({ projectData }) => {
  const navigate = useNavigate();
  return (
    <Grid container spacing={2}>
      {projectData?.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            variant="outlined"
            onClick={() =>
              navigate(`/project/${project.project}/scene/${project._id}`)
            }
            sx={{
              boxShadow: "none",
              border: "none",
              borderRadius: "none",
              bgcolor: "transparent",
              cursor:"pointer"
            }}
          >
            <CardContent sx={{ position: "relative" }}>
              {project?.thumbnail && project?.thumbnail !== "" ? (
                <img
                  src={project.thumbnail}
                  alt={project?.title}
                  style={{
                    width: "100%",
                    height: "188px",
                    borderRadius: "16px",
                    objectFit: "cover",
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
                    {createProjectTitle(project?.title)}
                  </Typography>
                </Box>
              )}
              <Box
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "30px",
                  backgroundColor: "text.lightest",
                  color: "primary.main",
                  padding: "2px 8px",
                  borderRadius: "8px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                SCENE {index + 1}
              </Box>
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
                  //   navigate(`/project/${project.project}/scene/${project._id}`)
                  // }
                >
                  {project?.title}
                </Typography>
                {/* Options Button */}
                <div
                  style={{
                    position: "absolute",
                    right: "25px",
                    bottom: "25px",
                  }}
                >
                  <ActionsIcon />
                </div>
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

export default ScenesGrid;
