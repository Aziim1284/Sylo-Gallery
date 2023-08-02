import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
const SyloSelect = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Sylo Select</h1>
      <div className="Sylo_main_div">
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="aa"
          >
            <Typography textAlign="center" mt="20%">Birthday</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ab"
          >
            <Typography textAlign="center" mt="20%">Anniversary</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ac"
          >
            <Typography textAlign="center" mt="20%">Promotion</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ad"
          >
            <Typography textAlign="center" mt="20%">Farewell</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ae"
          >
            <Typography textAlign="center" mt="20%">Happy</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="af"
          >
            <Typography textAlign="center" mt="20%">Wedding</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ag"
          >
            <Typography textAlign="center" mt="20%">Graduation</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ah"
          >
            <Typography textAlign="center" mt="20%">Graduation</Typography>{" "}
            <Chip label="get this package" className="Chipcolor" color="primary"/>{" "}
          </Card>
        </div>
        <div>
          {" "}
          <Card
            sx={{
              width: "200px",
              height: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius:"13px"
            }}
            className="ai"
          >
            <Typography textAlign="center" mt="20%">Graduation</Typography>{" "}
            <Chip label="get this package" variant="body2" className="Chipcolor" color="primary" />{" "}
          </Card>
        </div>
      </div>
    </>
  );
};

export default SyloSelect;
