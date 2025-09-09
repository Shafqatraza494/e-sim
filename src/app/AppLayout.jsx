"use client";

import { usePathname } from "next/navigation";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import CartDrawer from "@/Components/GlobalUi/Cart/CartDrawer";
import Providers from "@/lib/Providers";
import { AuthProvider } from "@/Context/AuthContext";
import { GuestProvider } from "@/Context/GuestContext";
import { LoaderProvider } from "@/Context/LoaderLink";
import ToastProvider from "@/lib/ToastProvider";
import { CartProvider } from "@/Context/CartContext";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/signup"].includes(pathname);

  return (
    <Providers>
      <AuthProvider>
        <CartProvider>
          <LoaderProvider>
            <GuestProvider>
              <Header />
              <CartDrawer />
              <main>{children}</main>
              {!hideLayout && <Footer />}
              <ToastProvider />
            </GuestProvider>
          </LoaderProvider>
        </CartProvider>
      </AuthProvider>
    </Providers>
  );
}
