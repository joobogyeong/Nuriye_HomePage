import { useEffect, useState } from 'react';
import { loadKakaoMapScript } from '../utils/loadKakaoMap';

// 카카오 맵 타입 정의
declare global {
  interface Window {
    kakao: any;
  }
}

export const useKakaoMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        await loadKakaoMapScript();
        setIsLoaded(true);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : '카카오 맵을 로드할 수 없습니다.');
      }
    };

    loadMap();
  }, []);

  return { isLoaded, error };
};
