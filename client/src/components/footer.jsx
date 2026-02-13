function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Yixi Zhao. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/yixizhao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yixizhao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yixi@example.com"
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
