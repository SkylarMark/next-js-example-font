import { Nixie_One } from "next/font/google";

const nixieOne = Nixie_One({
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
  weight: "400",
  subsets: ["latin"]
});

export default nixieOne;
