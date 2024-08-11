const Footer: React.FC = () => {
    return (
      <footer className="bg-indigo-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-xl font-bold mb-4">GameCourse</h2>
              <p>
                Level up your gaming skills with expert coaching from top esports professionals.
              </p>
            </div>
  
            {/* Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Courses
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 border-t border-indigo-500 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} GameCourse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  