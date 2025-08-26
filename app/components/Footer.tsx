import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8 md:mt-10 lg:mt-12">
      <div className="container mx-auto px-2 md:px-4 lg:px-6 py-3 md:py-4">
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center gap-4 md:gap-5">
          {/* FOOTAGE CREDITS */}
          <div className="lg:flex-1">
            <h1 className="font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-3">
              Terima kasih atas footage gratis dari :
            </h1>
            <ul className="list-disc list-inside text-xs md:text-sm lg:text-base space-y-1 md:space-y-2">
              {[
                {
                  type: "Video",
                  author: "gziku",
                  authorUrl:
                    "https://pixabay.com/users/gziku-8033041/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=40167",
                  pixabayUrl:
                    "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=40167",
                },
                {
                  type: "Image",
                  author: "diapicard",
                  authorUrl:
                    "https://pixabay.com/users/diapicard-1729295/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1105112",
                  pixabayUrl:
                    "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1105112",
                },
                {
                  type: "Image",
                  author: "xiaojie zhao",
                  authorUrl:
                    "https://pixabay.com/users/zhxj560-5069907/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4512564",
                  pixabayUrl:
                    "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4512564",
                },
              ].map((credit, index) => (
                <li key={index} className="leading-relaxed">
                  {credit.type} by{" "}
                  <a
                    target="_blank"
                    className="font-bold text-accent hover:text-accent/80 transition-colors"
                    href={credit.authorUrl}
                  >
                    {credit.author}
                  </a>{" "}
                  from{" "}
                  <a
                    target="_blank"
                    className="font-bold text-accent hover:text-accent/80 transition-colors"
                    href={credit.pixabayUrl}
                  >
                    Pixabay
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL MEDIA LINKS */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center lg:flex-1 gap-3 md:gap-4">
            <h1 className="font-bold text-sm md:text-base lg:text-lg">
              Ikuti kami di :
            </h1>

            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                href="#"
                className="block text-gray-600 hover:text-yellow-900 transition-colors duration-200"
                aria-label="TikTok"
              >
                <FaTiktok size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-yellow-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={18}
                  className="md:w-5 md:h-5 lg:w-6 lg:h-6"
                />
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-yellow-900 transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </Link>
              <Link
                href="#"
                className="block text-gray-600 hover:text-yellow-900 transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={18} className="md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </Link>
            </div>
          </div>

          {/* COPYRIGHT NOTICE */}
          <p className="text-gray-600 lg:flex-1 text-xs md:text-sm lg:text-base font-bold text-center lg:text-left xl:text-center mt-2 lg:mt-0">
            © 2025 Aroma Bumi Roaster. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
