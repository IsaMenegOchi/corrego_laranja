import { Inter, Poppins, Limelight, Lora } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

export const limelight = Limelight({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-limelight",
});

export const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-lora",
});