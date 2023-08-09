import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  fallback: [
    'Arial',
    'Helvetica',
    'Tahoma',
    'Verdana',
    'Times New Roman',
    'Georgia',
    'Courier New',
    'monospace',
    'serif',
    'sans-serif',
  ],
  display: "swap",
  weight: "variable",
  subsets: ["latin"]
});

export default montserrat;
