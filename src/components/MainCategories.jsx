import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=fashion-trends"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Fashion Trends
        </Link>
        <Link
          to="/posts?cat=styling-tips"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Styling Tips
        </Link>
        <Link
          to="/posts?cat=product-guides"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Product Guides
        </Link>
        <Link
          to="/posts?cat=deals-offers"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Deals & Offers
        </Link>
        <Link
          to="/posts?cat=lifestyle-content"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Lifestyle Content
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategories;
