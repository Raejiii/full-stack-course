import type { Metadata } from "next";

import "./globals.css";
import "./fanta.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";




export const metadata: Metadata = {
  title: "Smolstore",
  description: "A super cool store for all your needs and wants",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-full flex flex-col"><div id="portal"/>
      
      
      <div id="app">
        <header>
          <div className="header-content">
          <Link href="/"><h1>Smolstore</h1></Link>
          <h5 className="mid-text">-- Cool stuff for all your needs and wants--</h5>
          <Cart />
          </div>
        </header>
        
        <main>{children}</main>
        <div className="hr" />
        <footer>
  <div className="email-container">
    
    <EmailInput />
  </div>
  <div className="links-container">
    <div>
      <h3>Rae</h3>
      <Link href="https://github.com/raejiii">Github</Link>
    </div>
    <div>
      <h3>Store</h3>
      <Link href="/">Home</Link>
      <Link href="/cart">Cart</Link>
    </div>
    <div>
      <h3>Support</h3>
      <Link href="/contact">Contact</Link>
      <Link href="/faq">FAQ</Link>
    </div>
  </div>
  <div className="socials">
    <p><a href="https://github.com/raejiii" target="_blank">Github</a> <br/>Built with Next.js</p>
    <div className="socials-icons">
      <a href="https://github.com/raejiii" target="_blank">
        <i className="fab fa-github"></i></a>
         <a href="linkedin.com/in/rahul-js" target="_blank">
        <i className="fab fa-linkedin"></i> </a>
        
      
      </div>
  </div>
  

        </footer>
        </div>
      
      </body>
    </html>
  );
}


