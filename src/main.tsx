import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline, ThemeProvider} from "@mui/material";
import holidays from "./shared/themes";
import {BrowserRouter} from "react-router-dom";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={holidays}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
