import "./global.css";
import {ABeeZee} from "next/font/google";

const font = ABeeZee({
  variable: "--inter-font",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-cyan-100">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${font.className} text-center text-4xl my-3`}>Almacen</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
