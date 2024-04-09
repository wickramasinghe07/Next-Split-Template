"use client";
import {
  Box,
  Button,
  Grid,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/* Typography style */
const typography1Styles = {
  color: "#0C111F",
  fontFamily: "Inter",
  fontSize: { xs: "16px", sm: "22px", md: "24px" },
  lineHeight: "130%",
  fontStyle: "normal",
  letterSpacing: "2px",
  marginLeft: { xs: "26px", sm: "4px", md: "25px" },
};

const typography2Styles = {
  color: "#0C111F",
  fontFamily: "Istok Web",
  fontSize: { xs: "22px", sm: "22px", md: "48px" },
  lineHeight: "130%",
  fontStyle: "bold",
  letterSpacing: "2px",
  marginLeft: { xs: "26px", sm: "4px", md: "25px" },
};

const typography3Styles = {
  color: "#0C111F",
  fontFamily: "Istok Web",
  fontSize: { xs: "16px", sm: "22px", md: "24px" },
  lineHeight: "130%",
  fontStyle: "inter",
  letterSpacing: "2px",
};

/* Button style for contained variant */

const buttonContainedStyle = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  borderRadius: "100px",
  textTransform: "none",
  fontWeight: "bold",
  color: "#0C111F",
  background: "var(--l-2, linear-gradient(135deg, #FFFDFD 0%, #90EA8E 100%))",
  // Customize sizes for web and tablet view
  "@media (max-width: 1024px)": {
    padding: "10px 16px",
  },
  // Customize sizes for mobile view
  "@media (max-width: 767px)": {
    fontSize: "12px",
    padding: "6px 8px",
    margin: "3px",
    marginLeft: { xs: "2px", sm: "2px", md: "25px" },
  },
};

/* Index functional component */
const Index = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} md={12} container justifyContent="center">
          <Image
            src="/images/home/emblem.webp"
            alt="test"
            width={277.758}
            height={185.951}
            style={{
              width: "25%",
              height: "auto",
              flexShrink: 0,
            }}
          />
        </Grid>

        {/* Left side of the home */}
        <Grid item xs={12} md={6} container justifyContent="center">
          {/* Heading 5 */}
          <Box justifyContent="center" marginTop={4} marginLeft={2}>
            <Button variant="contained" sx={buttonContainedStyle}>
              <Typography
                sx={typography1Styles} // Apply h1 styles
              >
                How DoA Crop Data platform helps you
              </Typography>

              {/* button */}

              <Typography marginLeft={4}>
                <Link href="#" color="primary">
                  Reed More{" "}
                </Link>
              </Typography>
              <IconButton aria-label="arrow">
                <ArrowForwardIcon />
              </IconButton>
            </Button>
          </Box>

          {/* Heading 1 */}

          <Typography
            sx={typography2Styles} // Apply h2 styles
            marginTop={2}
            textAlign="center"
            margin={4}
          >
            Update farmer crop costs to help us manage Agriculture sector
            development better
          </Typography>

          {/* Body text */}
          <Typography
            sx={typography3Styles} // Apply h4 styles
            marginTop={2}
            textAlign="center"
            margin={4}
          >
            The Department of Agriculture (DOA) functions under the Ministry of
            Agriculture and is one of the largest government departments with a
            high profile community of agricultural scientists and a network of
            institutions covering different Argo ecological regions island wide
          </Typography>

          {/* Button */}
          <Box justifyContent="center" marginLeft={2} marginTop={4}>
            <Button variant="contained" sx={buttonContainedStyle}>
              <Typography sx={typography3Styles}>
                Department of Agriculture Digitization efforts
              </Typography>
            </Button>
          </Box>
        </Grid>

        {/* Right side of the home - image */}
        <Grid item xs={12} md={6} container justifyContent="center">
          <Image
            src="/images/home/logo_4x.webp"
            alt="test"
            width={574.758}
            height={625.951}
            style={{
              width: "60%",
              height: "60%",
              flexShrink: 0,
            }}
          />
        </Grid>

        {/* Open source development by Software Consultants */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          marginTop={4}
          container
          justifyContent="center"
        >
          <Typography
            variant="caption"
            textAlign="center"
            fontSize={20}
            sx={{ opacity: 20 }}
          >
            Open source development by&nbsp;
            <Link href="#" color="#02A79D">
              Software Consultants
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
