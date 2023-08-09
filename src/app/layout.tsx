import { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";

const ThemeProvider = dynamic(() => import("@/theme/provider"));

export const metadata: Metadata = {
  title: "MUI Next Font Example App",
  description:
    "Discover Elegant Typography: Explore the Next Font Example App built with Material-UI (MUI). Elevate your web design with this showcase of sophisticated fonts and styles, demonstrating the power of Material-UI for creating visually stunning and readable web interfaces.",
  viewport: { width: "device-width", initialScale: 1 },
};

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
