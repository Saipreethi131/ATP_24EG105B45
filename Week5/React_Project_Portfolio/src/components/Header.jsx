import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-3xl font-bold">App</div>
        <nav className="flex gap-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</a>
          <a href="#about-author" className="text-gray-700 hover:text-blue-600 transition font-medium">About Author</a>
          <a href="#about-project" className="text-gray-700 hover:text-blue-600 transition font-medium">About the Project</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium">
            GitHub
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium">
            Medium
          </a>
          <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium">
            Dev.to
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-medium">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;