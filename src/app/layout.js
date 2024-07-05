// RootLayout.js
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles"; // Asegúrate de importar desde @mui/material/styles
import theme from "../styles/theme/foundations/breakpoints"; // Asegúrate de que la ruta es correcta

const notoSans = Noto_Sans({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Land Tech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={notoSans.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
