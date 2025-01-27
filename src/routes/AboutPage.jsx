import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-8">
      {/* BREADCRUMB */}
      <div className="flex gap-2 text-md text-gray-600">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>•</span>
        <span className="text-blue-800 font-semibold">About Us</span>
      </div>

      {/* HEADER SECTION */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-gray-800 text-3xl md:text-5xl font-bold leading-tight">
          About Us: Your Gateway to Fashion and Lifestyle
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-3xl">
          Welcome to our vibrant corner of the internet, where fashion meets
          lifestyle! We are a community of trend enthusiasts, creative stylists,
          and individuals who believe in the power of style to inspire
          confidence and self-expression.
        </p>
      </div>

      {/* MISSION SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <img
            src="mission-about.jpg"
            alt="Our Mission"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="mt-4 text-md md:text-lg text-gray-600">
            Our goal is to bring you the best in fashion and lifestyle content.
            From the latest trends to exclusive guides and deals, we’re here to
            make your journey toward confidence and style seamless.
          </p>
        </div>
      </div>

      {/* VISION SECTION */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6">
        <div className="md:w-1/2">
          <img
            src="vision-about.jpg"
            alt="Our Vision"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Our Vision
          </h2>
          <p className="mt-4 text-md md:text-lg text-gray-600">
            We envision a world where fashion and lifestyle are accessible to
            everyone. Our goal is to inspire individuality, promote creativity,
            and celebrate stylish living—on your terms.
          </p>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Meet Our Team
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          Behind every post, guide, and tip is a passionate team of fashion
          lovers, style experts, and lifestyle enthusiasts working tirelessly to
          curate content that inspires and empowers.
        </p>
      </div>

      {/* COMMUNITY SECTION */}
      <div className="flex flex-col items-center gap-4 p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800">
          Join Our Community
        </h2>
        <p className="text-md md:text-lg text-gray-600 text-center max-w-2xl">
          Connect with like-minded individuals! Share your ideas, ask for
          styling tips, and build meaningful connections in our vibrant chat
          community.
        </p>
        <a
          href="https://vago-chat-app.onrender.com/login" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-md md:text-lg"
        >
          Join Our Chat Community
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
