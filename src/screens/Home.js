import { Box, Container, Grid, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import React from "react";
import Completed from "../components/Completed";

const Home = () => {

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ mt: 10 }}>
          <Typography variant="h6" color={"primary"}>
            You have 3 requests
          </Typography>
        </Box>
        <Box
          sx={{
            border: "1px solid #FFFFFF",
            mt: 4,
            p: 3,
            boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                sx={{textAlign:"center", my:1,
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
                sx={{textAlign:"center", my:1,
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
          <Box
            sx={{
              display: " flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          ></Box>
          <Box mt={4}>
          <ToggleButtonGroup
          sx={{width: '95%', borderRadius: "80px"}}
          color="secondary"
          value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      >
      <ToggleButton    disableRipple
      sx={{'&.MuiToggleButton-root': {
        width: '100%',borderRadius: "80px",
       '&.Mui-selected':{
           background: '#FDF307' 
        }
      }}}
      fullWidth={true} value="Received">Received</ToggleButton>
      <ToggleButton disableRipple sx={{'&.MuiToggleButton-root': {
        width: '100%',
        '&.Mui-selected':{
            background: '#FDF307' 
         }
       }}} fullWidth={true} value="Negotiating">Negotiating</ToggleButton>
      <ToggleButton disableRipple sx={{'&.MuiToggleButton-root': {
        width: '100%',borderRadius: "80px",
        '&.Mui-selected':{
            background: '#FDF307' 
         }
       }}} fullWidth={true} value="completed">Completed</ToggleButton>
       </ToggleButtonGroup>
        
        </Box>
        </Box>

<Box pt={3}><Completed /></Box>

        </Container>
        </>
  );
};

export default Home;
