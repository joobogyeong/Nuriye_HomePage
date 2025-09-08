import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">누리예 홈페이지</h1>
          </div>
          
          {/* 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200 transition-colors duration-200">
              홈
            </a>
            <a href="#about" className="hover:text-blue-200 transition-colors duration-200">
              소개
            </a>
            <a href="#services" className="hover:text-blue-200 transition-colors duration-200">
              서비스
            </a>
            <a href="#contact" className="hover:text-blue-200 transition-colors duration-200">
              연락처
            </a>
          </nav>
          
          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
