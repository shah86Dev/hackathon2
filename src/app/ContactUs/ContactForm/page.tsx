import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
const ContactForm: React.FC = () => {
  return (
    <section className="bg-white py-12 pr-40 pl-40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch With Us</h2>
        <p className="text-center text-gray-500 mb-12">
          For more information about our product & services, please feel free to drop us an email.
        </p>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Details */}
          <div className="flex-1 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-500">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-500">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-gray-700" />
              <div>
                <h4 className="font-semibold text-gray-900">Working Time</h4>
                <p className="text-gray-500">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 space-y-4">
            <Input placeholder="Your name" />
            <Input placeholder="Email address" />
            <Input placeholder="Subject (optional)" />
            <Textarea placeholder="Message" />
            <Button className="w-full">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
