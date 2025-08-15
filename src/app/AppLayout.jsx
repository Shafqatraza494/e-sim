"use client";

import { usePathname } from "next/navigation";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import CartDrawer from "@/Components/GlobalUi/Cart/CartDrawer";
import Providers from "@/lib/Providers";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/signup"].includes(pathname);

  return (

    <Providers>
      <Header />
      <CartDrawer />
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </Providers>
    
  );
}
