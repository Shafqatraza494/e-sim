import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#EB662B] text-white rounded-t-4xl ">
      <div className="max-w-7xl mx-14 py-6 flex md:flex-row flex-col gap-5 items-center md:justify-between justify-center">
        <div className="flex flex-row gap-2">
          <Image width={29} height={29} src="/logo-white.png" alt="" />{" "}
          <p className="text-xl font-semibold">eSIM White Label</p>
        </div>
        <nav className="flex md:flex-row flex-col gap-6 text-sm font-medium text-center">
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
          <a href="#">Affiliate Program</a>
          <a href="#">Help Center</a>
        </nav>
        <div className="flex gap-3">
          <a
            href="#"
            className="bg-white text-[#F15A24] rounded-full hover:scale-105 transition h-7 p-1"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="bg-white text-[#F15A24] h-7 p-1 rounded-full hover:scale-105 transition"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="bg-white text-[#F15A24] h-7 p-1 rounded-full hover:scale-105 transition"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="bg-[#FAFAFA] text-black py-10 px-14">
        <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between gap-8">
          <div className="flex flex-row gap-8">
            <div>
              <h3 className="font-semibold mb-4">Top Destination</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "United States",
                  "United Kingdom",
                  "Japan",
                  "Mexico",
                  "China",
                  "France",
                  "Thailand",
                  "Spain",
                  "India",
                ].map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#">General Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Cookies Law</a>
                </li>
                <li>
                  <a href="#">Open Internet Statement</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download the App</h3>
            <div className="flex gap-4 mb-6">
              <a href="#">
                <img
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-12"
                />
              </a>
              <a href="#">
                <img src="/app-store.png" alt="App Store" className="h-12" />
              </a>
            </div>
            <h4 className="font-semibold text-lg">
              Join Our <span className="text-[#F15A24]">Newsletter</span>
            </h4>
            <p className="text-sm mb-4 text-gray-600">
              Get expert tips, product news, and exclusive content. No spam—just
              the good stuff.
            </p>
            <form className="flex overflow-hidden rounded-md border-none max-w-md bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-[#F15A24] text-white px-6 py-2 text-sm font-semibold rounded-xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2025 eSIM White Label. All Rights Reserved</p>
          <div className="flex gap-2">
            <a href="#">
              <img src="/amex.png" alt="Amex" className="h-5" />
            </a>
            <a href="#">
              <img src="/apple-pay.png" alt="Apple Pay" className="h-5" />
            </a>
            <a href="#">
              <img src="/gpay.png" alt="Google Pay" className="h-5" />
            </a>
            <a href="#">
              <img src="/mastercard.png" alt="Mastercard" className="h-5" />
            </a>
            <a href="#">
              <img src="/visa.png" alt="Visa" className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
