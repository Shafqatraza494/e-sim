import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Banner() {
  return (
    <div className="h-[750px] md:h-[431px] text-white mx-4 md:mx-14 bg-[url('/banner/bannerBg.png')] md:bg-[length:160%] md:bg-[position:12%_65%] bg-[length:400%] bg-[position:52%_65%]  bg-no-repeat  rounded-[30px]">
      <div className=" md:p-20 p-6 flex flex-col justify-center md:w-[550px] w-full text-center md:text-left">
        <h2 className="text-[20px] md:text-[30px] bayon-text mb-4 uppercase leading-tight">
          We prefer your convenience <br /> – Get the app now!
        </h2>

        <p className=" lato-text text-[14px] md:text-[16px] mb-6">
          Order. Activate. Manage. All from your smartphone. Download the best
          eSIM app and handle everything in one place — compatible with both iOS
          and Android.
        </p>

        <div className="flex gap-4 mb-6 flex-wrap items-center md:justify-start justify-center">
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, idx) => (
              <StarIcon key={idx} className="w-5 h-5" />
            ))}
          </div>
          <span className="lato-text text-white text-[10px] md:text-[12px]">
            500,000+ Downloads
          </span>
        </div>

        <div className="flex gap-4 flex-wrap md:justify-start justify-center">
          <a href="#" className="block">
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={160}
              height={50}
            />
          </a>
          <a href="#" className="block">
            <Image
              src="/app-store.png"
              alt="App Store"
              width={160}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
