import { Anton } from "next/font/google";
import localFont from "next/font/local";

export const anton = Anton({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-anton",
});

export const switzer = localFont({
    src: [
        {
            path: "../fonts/switzer/Switzer-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/switzer/Switzer-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/switzer/Switzer-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/switzer/Switzer-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../fonts/switzer/Switzer-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/switzer/Switzer-Black.otf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-switzer",
});

export const neueMontreal = localFont({
    src: [
        {
            path: "../fonts/neue-montreal/NeueMontreal-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/neue-montreal/NeueMontreal-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/neue-montreal/NeueMontreal-Medium.otf",
            weight: "500",
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