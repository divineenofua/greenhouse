"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Helper function to determine if layout should include header/footer
  const showHeaderFooter =
    !pathname.startsWith("/vendor") && !pathname.startsWith("/admin");

  return (
    <html lang="en">
      <head>
        <title>Green House</title>
      </head>
      <body className="">
        {/* <nav>
          <Link href="/vendor/dashboard">Go to Vendor</Link>
          <Link href="/customer/account">Go to Customer</Link>
          <Link href="/admin/overview">Go to Admin</Link>
        </nav> */}

        {showHeaderFooter && (
<<<<<<< HEAD
          <header className="fixed left-0 right-0">
=======
          <header className="fixed z-50 left-0 right-0">
>>>>>>> 0c455ec (added faqs, contact, about page)
            <Header />
          </header>
        )}
        <main>{children}</main>
        {showHeaderFooter && (
<<<<<<< HEAD
          <div className="mt-20">
=======
          <div className="">
>>>>>>> 0c455ec (added faqs, contact, about page)
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
