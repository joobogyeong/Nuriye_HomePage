// 카카오 맵 API를 동적으로 로드하는 유틸리티 함수

export const loadKakaoMapScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    // 이미 로드되어 있는지 확인
    if (window.kakao && window.kakao.maps) {
      resolve();
      return;
    }

    // 환경변수에서 API 키 가져오기
    const apiKey = import.meta.env.VITE_KAKAO_MAP_API_KEY;
    
    if (!apiKey) {
      reject(new Error('카카오 맵 API 키가 설정되지 않았습니다. .env 파일에 VITE_KAKAO_MAP_API_KEY를 설정해주세요.'));
      return;
    }

    // 스크립트 태그 생성
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`;
    script.async = true;
    
    // 성공 콜백
    script.onload = () => {
      resolve();
    };
    
    // 에러 콜백
    script.onerror = () => {
      reject(new Error('카카오 맵 API를 로드할 수 없습니다. API 키를 확인해주세요.'));
    };
    
    // 스크립트를 head에 추가
    document.head.appendChild(script);
  });
};
