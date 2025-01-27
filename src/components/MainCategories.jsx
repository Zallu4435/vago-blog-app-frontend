import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {

  const categories = [
    { path: "/posts", label: "All Posts", isHighlighted: true },
    { path: "/posts?cat=fashion-trends", label: "Fashion Trends" },
    { path: "/posts?cat=styling-tips", label: "Styling Tips" },
    { path: "/posts?cat=product-guides", label: "Product Guides" },
    { path: "/posts?cat=deals-offers", label: "Deals & Offers" },
    { path: "/posts?cat=lifestyle-content", label: "Lifestyle Content" },
  ];

  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-4 flex-wrap">
      <div className="flex-1 flex items-center justify-center gap-4 flex-wrap">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className={`rounded-full px-4 py-2 ${
              category.isHighlighted
                ? "bg-blue-800 text-white"
                : "hover:bg-blue-50 text-gray-700"
            }`}
          >
            {category.label}
          </Link>
        ))}
      </div>
      <span className="text-xl font-medium">|</span>

      <Search />
    </div>
  );
};

export default MainCategories;
