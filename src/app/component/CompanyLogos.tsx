import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CompanyLogos: React.FC = () => {
  const logos = [
    { id: 1, src: "/Logo2.png", alt: "Zapier" },
    { id: 2, src: "/Logo3.png", alt: "Pipedrive" },
    { id: 3, src: "/Logo4.png", alt: "CIB Bank" },
    { id: 4, src: "/Logo5.png", alt: "7" },
    { id: 5, src: "/Logo6.png", alt: "Burnt Toast" },
    { id: 6, src: "/Logo7.png", alt: "PandaDoc" },
    { id: 7, src: "/Logo8.png", alt: "Moz" },
  ];

  return (
    <Card className="w-full px-6 py-6">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Our Partners
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-center">
          {logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
              <Image
                src={logo.src || "/placeholder.png"} // Fallback if `src` is empty
                alt={logo.alt}
                width={48}
                height={48}
                className="h-12 w-auto hover:scale-125 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyLogos;
