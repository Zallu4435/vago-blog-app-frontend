import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Discover the Latest in Fashion, Style, and Lifestyle
          </h1>
          <p className="mt-8 mb-2 text-md md:text-xl">
            Stay ahead with trending fashion tips, timeless styling advice, 
            exclusive product guides, unbeatable deals, and lifestyle inspiration. 
            Your journey to a chic and confident you starts here.
          </p>
        </div>

        {/* Write button for mobile */}
        <div className="md:hidden w-full px-4">
          <Link to="/write" className="block">
            <button className="group relative w-full overflow-hidden py-4 bg-gradient-to-r from-blue-600 to-blue-800 
              text-white rounded-lg text-lg font-semibold 
              shadow-lg transition-all duration-300 
              hover:shadow-blue-200 hover:shadow-xl
              active:scale-95">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 
                transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"></div>
              
              {/* Content container */}
              <div className="relative flex items-center justify-center gap-3">
                {/* New animated icon */}
                <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="absolute inset-0"
                  >
                    {/* Feather pen icon */}
                    <path d="M20 2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14l4 4V2z" />
                    <path d="M16 10l-4 4-4-4" />
                    <path d="M12 14V6" />
                    {/* Small sparkle effects */}
                    <circle cx="18" cy="4" r="1" className="animate-pulse" />
                    <circle cx="16" cy="6" r="1" className="animate-pulse delay-100" />
                  </svg>
                </div>
                
                {/* Text with shine effect */}
                <span className="relative overflow-hidden tracking-wide">
                  Write your story
                  {/* Shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform 
                    -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </span>
              </div>
            </button>
          </Link>
        </div>
        
        {/* animated button for desktop - unchanged */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;

