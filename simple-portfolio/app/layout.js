import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata={title:"My Portfolio"};
export default function RootLayout({children}){return <html><body>{children}<SpeedInsights/></body></html>}