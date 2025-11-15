// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">JobFinder</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Your trusted platform to find jobs, hire talent, and grow careers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Companies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Job Seeker */}
        <div>
          <h3 className="text-white font-semibold mb-3">Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Browse Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Create Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Career Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Job Alerts
              </a>
            </li>
          </ul>
        </div>

        {/* Employers */}
        <div>
          <h3 className="text-white font-semibold mb-3">Employers</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Search Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Employer Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JobFinder. All rights reserved.
      </div>
    </footer>
  );
}
