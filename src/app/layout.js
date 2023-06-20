import Navbar from '@/components/navbar/Navbar'
import './globals.scss'
import { Nunito } from 'next/font/google'
import Footer from '@/components/footer/Footer';
import ContainerComponent from '@/utils/ContainerComponent';

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Nepal Helicopter Tours - Home",
  description: "Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal.",
  authors: [{ name: 'MacTrek' }],
  creator: "MacTrek",
  metadataBase: new URL(process.env.SITE_URL),
  openGraph: {
    title: "Nepal Helicopter Tours - Home",
    type: "website",
    url: `${process.env.SITE_URL}`,
    description: "Best Handpicked Helicopter Tours in Nepal. Suitable for individuals and families looking for an ultimate travel experience in Nepal.",
  },
  themeColor: "#3EA8BD"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={nunito.className}>
        <ContainerComponent>
          <Navbar />
          {children}
          <Footer />
        </ContainerComponent>
      </body>
    </html>
  )
}
