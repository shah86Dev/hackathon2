import Image from "next/image";

const categories = [
  {
    id: 1,
    imageUrl: "/image/h5.png",
    alt: "Orange Modern Chair",
    className: "col-span-1 row-span-2",
  },
  {
    id: 2,
    imageUrl: "/image/h3.png",
    alt: "White Armchair",
    className: "col-span-1",
  },
  {
    id: 3,
    imageUrl: "/image/h4.png",
    alt: "White Wooden Chair",
    className: "col-span-1",
  },
  {
    id: 4,
    imageUrl: "/image/h2.png",
    alt: "Grey Upholstered Chair",
    className: "col-span-1",
  },
  {
    id: 5,
    imageUrl: "/image/h1.png",
    alt: "White Wooden Chair 2",
    className: "col-span-1",
  },
];

const HotCategory = () => {
  return (
    <section className="container mx-auto px-4 py-10 pr-40 pl-40">
      <h2 className="text-3xl ">Hot Categories</h2>
      <div className="grid grid-cols-2 gap-4 h-[600px]">
        {/* Large Image on the Left */}
        <div className="col-span-1 row-span-2">
          <div className="w-full h-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={categories[0].imageUrl}
              alt={categories[0].alt}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Four Smaller Images on the Right */}
        <div className="col-span-1 grid grid-rows-2 grid-cols-2 gap-4">
          {categories.slice(1).map((item) => (
            <div key={item.id} className="w-full h-full overflow-hidden rounded-lg shadow-md">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCategory;
