import localFont from "next/font/local";
import { Anton } from "next/font/google";
import { Pangolin } from "next/font/google";

export const anton = Anton({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--anton",
});


export const UpRightFontOne = Pangolin({
    subsets: ["latin"],
    weight: "400",
    display: "swap",
    variable: "--uprightone",
});


export const baseFont = localFont({
    src: [
        {
            path: "../fonts/WorkSans-Light.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/WorkSans-ExtraLight.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/WorkSans-Thin.otf",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--base-font",
    display: "swap",
});

export const dottedFont = localFont({
    src: "../fonts/Array-Regular.otf",
    display: "swap",
    variable: "--dotted-font",
});

