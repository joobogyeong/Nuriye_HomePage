import { useEffect, useRef } from 'react';
import { useKakaoMap } from '../hooks/useKakaoMap';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MapModal = ({ isOpen, onClose }: MapModalProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { isLoaded, error } = useKakaoMap();

  useEffect(() => {
    if (!isOpen || !isLoaded || !mapRef.current) return;

    // 한국외국어대학교 글로벌 캠퍼스 좌표
    const hufsLocation = new window.kakao.maps.LatLng(37.3398, 127.2650);
    
    // 지도 옵션
    const mapOption = {
      center: hufsLocation,
      level: 3
    };

    // 지도 생성
    const map = new window.kakao.maps.Map(mapRef.current, mapOption);

    // 마커 생성
    const marker = new window.kakao.maps.Marker({
      position: hufsLocation
    });

    // 마커를 지도에 표시
    marker.setMap(map);

    // 인포윈도우 생성
    const infowindow = new window.kakao.maps.InfoWindow({
      content: '<div style="padding:10px; text-align:center;">한국외국어대학교<br>글로벌 캠퍼스</div>'
    });

    // 마커 클릭 이벤트
    window.kakao.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });

    // 지도 로드 완료 후 인포윈도우 표시
    window.kakao.maps.event.addListener(map, 'tilesloaded', () => {
      infowindow.open(map, marker);
    });

  }, [isOpen, isLoaded]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 h-5/6 max-w-4xl max-h-4xl">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            📍 한국외국어대학교 글로벌 캠퍼스
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* 지도 영역 */}
        <div className="p-4 h-full">
          {error ? (
            <div className="flex items-center justify-center h-full bg-gray-100 rounded">
              <div className="text-center">
                <p className="text-red-500 mb-2">⚠️ {error}</p>
                <p className="text-gray-600 text-sm">
                  카카오 맵 API 키를 확인해주세요.
                </p>
              </div>
            </div>
          ) : !isLoaded ? (
            <div className="flex items-center justify-center h-full bg-gray-100 rounded">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-600">지도를 불러오는 중...</p>
              </div>
            </div>
          ) : (
            <div 
              ref={mapRef} 
              className="w-full h-full rounded border"
              style={{ minHeight: '400px' }}
            />
          )}
        </div>

        {/* 모달 푸터 */}
        <div className="p-4 border-t bg-gray-50 rounded-b-lg">
          <div className="text-sm text-gray-600">
            <p><strong>주소:</strong> 경기도 용인시 처인구 모현읍 외대로 81</p>
            <p><strong>교통:</strong> 지하철 1호선 모현역 하차 후 셔틀버스 이용</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
