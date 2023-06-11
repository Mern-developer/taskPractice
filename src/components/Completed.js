import {
  Box,
  Button,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

const Completed = () => {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #FFFFFF",
          borderRadius: "20px",
          mt: 4,
          p: 3,
          boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign:"center", my:1,
                borderRight: { xs: "none", md: "2px solid lightGray" },
                pr: {xs: 0, md:7},
              }}
            >
              <Typography variant="h6" color={"primary"}>
                St Judes Hospital
              </Typography>
              <Typography variant="body2" sx={{ mt: -1 }} color={"secondary"}>
                Sarasota FL 33178
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                textAlign:"center" ,my:1,
                borderRight: { xs: "none", md: "2px solid lightGray" },
                pr: {xs: 0, md:7},
              }}
            >
              <Box
                sx={{
                  display: " flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>
                  <Typography variant="h6" color={"primary"}>
                    10
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: -1 }}
                    color={"secondary"}
                  >
                    October
                  </Typography>
                </Box>
                <Typography variant="h6" color={"primary"}>
                  -
                </Typography>
                <Box>
                  <Typography variant="h6" color={"primary"}>
                    20
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: -1 }}
                    color={"secondary"}
                  >
                    October
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign={"center"} my={1}>
              <Typography variant="h6" color={"primary"}>
                20 Rooms
              </Typography>
              <Typography variant="body2" sx={{ mt: -1 }} color={"secondary"}>
                10 Singles, 10 doubles
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <ToggleButtonGroup
          sx={{ width: "70%", mt: 5 }}
          color="secondary"
          exclusive
          aria-label="Platform"
        >
          <ToggleButton
            disableRipple
            sx={{
              "&.MuiToggleButton-root": {
                width: "100%",
                background: "#44A16F",
                borderRadius: "80px",
              },
            }}
            fullWidth={true}
            value="Completed"
          >
            Completed
          </ToggleButton>
        </ToggleButtonGroup>

        <Box>
          <Grid container mt={3} spacing={2}>
          {[1,2,3].map(i=>{
              return(
                    <Grid item xs={12} md={4}>

                    <Box
                    sx={{
                  position: "relative",
                  height: "223px",
                  background: "#F5F4F4",
                  border: "1px solid rgba(0, 0, 0, 0.18)",
                  borderRadius: "10px",
                }}
              >
              <Box sx={{position: 'absolute', content: '""', background: 'red',
            right: '-10px',top: '-15px',borderRadius: '5px' ,width: '90px', height: '30px',
             textAlign: 'center', verticalAlign: 'middle' }}>
              Rare find
              </Box>
                <Box sx={{}}>
                  <Box textAlign={"center"} pt={3}>
                    <img width="50px" src="./images/logo.png" alt="logo" />
                    <Typography
                      sx={{
                          fontFamily: "Poppins",
                          fontStyle: "italic",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "29px",
                      }}
                      variant="h6"
                      color={"primary"}
                      >
                      Holidy inn
                    </Typography>
                  </Box>
                </Box>
                <Box
                sx={{
                    position: "absolute",
                    content: '""',
                    px: 0.07,
                    pt: 0.3,
                    top: "140px",
                    bottom: "0px",
                    width: "100%",
                    borderTop: "1px solid lightGray",
                    boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.25)",
                    borderRadius: "10px",
                  }}
                >
                  1.5 miles away from joblocation.
                  <Box>
                    <Box mt={1}>
                      <Typography variant="body2" color="secondary">
                        Singles: $120
                      </Typography>
                      <Typography variant="body2" color="secondary">
                        Doubles: $145
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          width: "100px",
                          position: "absolute",
                          right: "10px",
                          bottom: "20px",
                          color: "#fff",
                          textTransform: "none",
                        }}
                        className="logoutButton"
                      >
                        Book Now
                      </Button>
                    </Box>
                  </Box>
                </Box>
                </Box>
                </Grid>
                )
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Completed;
