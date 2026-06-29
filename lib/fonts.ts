import { Anton, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../fonts/neue-montreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/neue-montreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const switzer = localFont ({
    src: [
        {
        path: "../fonts/switzer/Switzer-Medium.otf",
        weight: "400",
        style: "normal",
        },
        {
        path: "../fonts/switzer/Switzer-Bold.otf",
        weight: "700",
        style: "normal",
        },
    ],
    variable: "--font-switzer",
})