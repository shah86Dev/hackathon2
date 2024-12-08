export default function TopBar() {
    return (
      <div className="bg-black text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Announcement */}
          <p>
            Summer Sale For All Swim Suits And Express Delivery -{" "}
            <span className="font-bold">OFF 50%!</span>{" "}
            <a href="#" className="underline hover:text-gray-300">
              ShopNow
            </a>
          </p>
  
          {/* Language Selector */}
          <div className="flex items-center gap-1">
            <span>English</span>
            <span className="text-xs">▼</span>
          </div>
        </div>
      </div>
    );
  }
  