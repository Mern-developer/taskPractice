import './App.css';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import Layout from './screens/Layout';
import Home from './screens/Home';
import OngoingStays from './screens/OngoingStays'
import PreviusStays from './screens/PreviusStays'
import Reports from './screens/Reports'
function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
   <Routes>
      <Route  element={<Layout />} >
          <Route  path="/" element={<Home />} />
          <Route  path="/ongoingStays" element={<OngoingStays />} />
          <Route  path="/previousStays" element={<PreviusStays />} />
          <Route  path="/reports" element={<Reports />} />
      </Route>
   
   </Routes>
   
   </ThemeProvider>
   </>
    );
}

export default App;
