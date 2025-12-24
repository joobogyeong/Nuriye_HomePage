import { useState } from 'react';
import MapModal from './MapModal';

const Footer = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">누리예</h3>
            <p className="text-gray-300 text-sm">
              동아리 홈페이지입니다.<br />
              함께 성장하고 배워가는 공간입니다.
            </p>
          </div>
          
          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">
                  홈
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  소개
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">
                  서비스
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  연락처
                </a>
              </li>
            </ul>
          </div>
          
          {/* 연락처 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <div className="text-sm text-gray-300 space-y-2">
              <p>📧 email@example.com</p>
              <p>📞 010-1234-5678</p>
              <div className="flex items-center space-x-2">
                <p>📍 경기도 용인시 처인구 모현읍</p>
                <button
                  onClick={() => setIsMapModalOpen(true)}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg"
                  title="지도에서 위치 보기"
                >
                  📍
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 저작권 */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2024 누리예. All rights reserved.</p>
        </div>
      </div>
      
      {/* 지도 모달 */}
      <MapModal 
        isOpen={isMapModalOpen} 
        onClose={() => setIsMapModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
