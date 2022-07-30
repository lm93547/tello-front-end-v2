import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import "@fontsource/space-mono";
import theme from "./styles/theme";
import About from './pages/about';
import Home from './pages/home';
import Fonts from "./styles/Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Fonts />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
