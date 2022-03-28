import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import { quote } from "../Data/homePageData";
import { whatToExpect, values, whoCanBenefit } from "../Data/homePageData";
import "./style.css";
import ActionAreaCard from "../Components/Card";

const HomePage = () => {
  return (
    <>
      <Header />
      <Grid xs={12} container sx={{margin: "50px 0px 0px 0px"}} justifyContent="center" >
        <img
          src="https://imgs.search.brave.com/mZaIapRaZikVrHyWYyKsY2u5O7WYCQApTbV8fcinYzg/rs:fit:1200:350:1/g:ce/aHR0cHM6Ly93d3cu/c2V0YXN3YWxsLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNi9MaW5rZWRp/bi1CYWNrZ3JvdW5k/cy0xNC0xNDAwLXgt/MzUwLnBuZw"
          alt="landing page img"
          className="homepage-img"
        />
      </Grid>

      <Grid container xs={12}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8} className="quote" justifyContent="center">
          {quote}
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>

      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontFamily: "Gilroy", fontWeight: 500 }}
      >
        What to expect?
      </Typography>

      <Grid container sx={{ margin: "20px 0px", maxWidth: "99%" }} justifyContent="center">
        {whatToExpect.map((ele, ind) => (
          <Grid item xs={11} key={ind} sx={{margin: "30px"}}>
            <ActionAreaCard {...ele} />
          </Grid>
        ))}
      </Grid>


      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontFamily: "Gilroy", fontWeight: 500, marginTop: "200px" }}
      >
        Who Can Benefit?
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={8} justifyContent="center" className="who-can-benefit">
          {whoCanBenefit}
        </Grid>
      </Grid>

      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontFamily: "Gilroy", fontWeight: 500, marginTop: "150px" }}
      >
        Values
      </Typography>

      <Grid container sx={{ margin: "20px 0px" }} justifyContent="center">
        {values.map((ele, ind) => (
          <Grid item xs={11} md={3} key={ind} sx={{margin: "30px"}}>
            <ActionAreaCard {...ele} />
          </Grid>
        ))}
      </Grid>

    </>
  );
};

export default HomePage;
