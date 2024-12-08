import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"; 
import Image from "next/image"; 

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 pr-40 pl-40">
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-4">
        {/* Logo and Description */}
        <div>
        <div className="flex items-center space-x-2">
  <Image
    src="/image/Logoi.png" // Path to the logo in the public directory
    alt="Comforty Logo"
    width={40} // Adjust width based on your design needs
    height={40} // Adjust height based on your design needs
    className="w-10 h-10"
  />
  <span className="text-black text-2xl font-bold">Comforty</span>
</div>

          <p className="mt-4 text-sm">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-teal-600" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-teal-600" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold">Category</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Sofa", "Armchair", "Wing Chair", "Desk Chair", "Wooden Chair", "Park Bench"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-teal-600 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-teal-600c hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
          <div className="mt-4 flex">
            <Input type="email" placeholder="Your email" className="rounded-l-md" />
            <Button className="rounded-r-md bg-teal-600 text-white hover:bg-teal-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2021 - Blogy - Designed & Developed by Zakirsoft</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Image src="/image/Group123.jpg" alt="PayPal" width={227} height={27} />

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
