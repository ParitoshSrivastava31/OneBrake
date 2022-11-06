import React from "react";
import "../Components/Hero.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import logo from "../Components/map.jpg";
import logo1 from "../Components/logo1.png";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src={logo1} alt="logo" id="Onelogo" />
        </div>
        <div className="mainBody">
          <div className="search1">
            <Paper
              id="Sbox"
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter the source Name"
                inputProps={{ "aria-label": "search google maps" }}
              />
              <Button
                id="Sbtn"
                sx={{
                  color: "green",
                }}
              >
                <svg
                  id="Slogo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Paper>
          </div>
          <div className="search2">
            <Paper
              id="Sbox"
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Enter the destination Name"
                inputProps={{ "aria-label": "search google maps" }}
              />

              <Button
                id="Sbtn"
                sx={{
                  color: "green",
                }}
              >
                <svg
                  id="Slogo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Paper>
          </div>
          <div className="btns">
            <Button
              className="btn1"
              sx={{
                bgcolor: "lightgreen",
                color: "green",
                marginX: 2,
              }}
            >
              Book Ride
            </Button>
            <Button
              className="btn2"
              sx={{
                bgcolor: "#FEA592",
                color: "red",
                marginX: 2,
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
        <div className="maps">
          <img src={logo} id="Mapimg" alt="map" />
        </div>
      </div>
    </>
  );
}
