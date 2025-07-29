import localFont from "next/font/local";

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
