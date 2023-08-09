"use client";

import { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import typography from "./typography";

const CssBaseline = dynamic(() => import("@mui/material/CssBaseline"));

const ThemeProvider: FC<PropsWithChildren> = (props): JSX.Element => {
  const { children } = props;
  return (
    <MuiThemeProvider theme={createTheme({ typography, palette: { mode: "dark" } })}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
