import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { timeHandler } from "../utils/time";
import ActionsIcon from "./ActionsIcon";
import { Box, Typography } from "@mui/material";
import { createProjectTitle, createUrlQuery } from "../utils/convertString";
import { useNavigate } from "react-router-dom";
import { aspectRatioData, stylesData } from "../Data/dropdownData";

const ProjectTable = ({ projectData }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "95%",
        margin: "10px",
        height: "83vh",
        overflowY: "scroll",
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "25%",
                bgcolor: "text.light",
              }}
            >
              Project Name
            </TableCell>
            <TableCell
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "15%",
                bgcolor: "text.light",
              }}
            >
              Art Style
            </TableCell>
            <TableCell
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "15%",
                bgcolor: "text.light",
              }}
            >
              Aspect Ratio
            </TableCell>
            <TableCell
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "15%",
                bgcolor: "text.light",
              }}
            >
              Updated
            </TableCell>
            <TableCell
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "15%",
                bgcolor: "text.light",
              }}
            >
              Created
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontSize: "14px",
                color: "greys.light",
                width: "5%",
                bgcolor: "text.light",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projectData?.map((project, index) => (
            <TableRow key={index}>
              <TableCell sx={{ fontSize: "14px", color: "greys.darkest" }}>
                <Box display={"flex"} gap={1} alignItems={"center"}>
                  <Box
                    component={"span"}
                    bgcolor={"primary.lightest"}
                    py={1}
                    borderRadius={1}
                    color={"text.main"}
                    fontWeight={600}
                    px={2}
                  >
                    {createProjectTitle(project?.name)}
                  </Box>
                  <Typography
                    onClick={() =>
                      navigate(
                        `/project/${project._id}?title=${createUrlQuery(
                          project?.name
                        )}`
                      )
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {project?.name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell sx={{ fontSize: "14px", color: "greys.darkest" }}>
                {stylesData.find((item) => item.value === project?.style).title}
              </TableCell>
              <TableCell sx={{ fontSize: "14px", color: "greys.darkest" }}>
                {
                  aspectRatioData.find(
                    (item) => item.value === project?.aspectRatio
                  ).title
                }
              </TableCell>
              <TableCell sx={{ fontSize: "14px", color: "greys.darkest" }}>
                {timeHandler(project?.updatedDate)}
              </TableCell>
              <TableCell sx={{ fontSize: "14px", color: "greys.darkest" }}>
                {timeHandler(project?.createdDate)}
              </TableCell>
              <TableCell align="right">
                <ActionsIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;
