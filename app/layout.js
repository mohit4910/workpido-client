// app/layout.tsx
import WithSubnavigation from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  // display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Workpido</title>
      </head>
      <body>
        <ToastContainer />
        <Providers>
          <WithSubnavigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
