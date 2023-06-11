import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Home from "./Home";

const Layout = () => {
  return (
    <Box sx={{display: 'flex'}}>
    <Box sx={{
        width: "250px",
      }} >  

      <Box
      sx={{
        width: "250px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        borderRight: '2px solid lightGray'
      }}
      >
      <Box>
        <Typography variant="h6" color="text.priary">
          LODGN
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Box>
          <Box my={2}  >
            <NavLink to="/">
              {({ isActive }) => (
                <span style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                 fontSize: "18px", 
                lineHeight: '34px',
                letterSpacing: '-0.02em'
                }} className={isActive ? "active" : ""}>
                  Current request
                </span>
              )}
            </NavLink>
          </Box>
          <Divider></Divider>
          <Box my={2}>
            <NavLink to="/ongoingStays">
              {({ isActive }) => (
                <span style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                 fontSize: "18px", 
                lineHeight: '34px',
                letterSpacing: '-0.02em'
                }} className={isActive ? "active" : ""}>
                  Ongoing Stays
                </span>
              )}
            </NavLink>
          </Box>
          <Divider></Divider>
          <Box my={2}>
            <NavLink to="/previousStays">
              {({ isActive }) => (
                <span style={{fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                 fontSize: "18px", 
                lineHeight: '34px',
                letterSpacing: '-0.02em'
                }} className={isActive ? "active" : ""}>
                  Previous Stays
                </span>
              )}
            </NavLink>
          </Box>
      
          <Divider></Divider>
          <Box my={2}>
            <NavLink style={{fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
             fontSize: "18px", 
            lineHeight: '34px',
            letterSpacing: '-0.02em'
            }} to="/reports">
              {({ isActive }) => (
                <span className={isActive ? "active" : ""}>Reports</span>
              )}
            </NavLink>
          </Box>
        </Box>
      </Box>
        
          <Button
            variant="contained"
            sx={{ color: "#fff", textTransform: "none", mt: -32 }}
            className="logoutButton"
          >
            Log out
          </Button>
      </Box>
      </Box>
      
      <Box sx={{width: '100%'}}><Home />
      {Outlet}
      </Box>
      </Box>
  );
};

export default Layout;
