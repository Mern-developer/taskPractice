import { createTheme } from "@mui/material/styles";

const theme =createTheme({
palette:{
    primary:{
        main: '#72AA83'
    
    },
    secondary:{
        main:"#959595"
    },
    info:{
        main: "#DD8560"
    },
    
    text:{
        primary: '#000000',
        secondary: '#555555'
    }
   
},
typography:{
    h1:{
        fontFamily: 'Tenor Sans',
        },
    h2:{
          fontFamily: 'Tenor Sans'
        },
    h4:{
          fontFamily: 'Tenor Sans'
        },
    h5:{
          fontFamily: 'Tenor Sans', fontWeight: '400'
    },
    h3:{
          fontFamily: 'Tenor Sans'
    },
    caption:{
        fontFamily: 'Tenor Sans'
    },
    subtitle1:{
        fontFamily: 'Tenor Sans', fontWeight: '400'
    }, 
    body1:{
        color: "#DD8560", fontFamily: 'Tenor Sans', fontWeight: '400'
    }
    }

})


export default theme