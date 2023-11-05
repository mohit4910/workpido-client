// app/layout.tsx
"use client";

import WithSubnavigation from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Poppins } from "next/font/google";
import { Container } from "@chakra-ui/react";
export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Workpido</title>
      </head>
      <body>
        <ToastContainer />
        <Providers>
          <WithSubnavigation />
          <Suspense fallback={<Loading />}>
            <Container maxW={['full', '8xl']}>{children}</Container>
          </Suspense>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
