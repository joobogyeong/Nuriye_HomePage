import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 헤더 */}
      <Header />
      
      {/* 메인 콘텐츠 */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              누리예에 오신 것을 환영합니다!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              함께 성장하고 배워가는 동아리 공간입니다.
            </p>
            
            {/* 메인 콘텐츠 영역 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">소개</h3>
                <p className="text-gray-600">
                  누리예 동아리에 대한 소개와 목표를 확인해보세요.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">활동</h3>
                <p className="text-gray-600">
                  다양한 활동과 프로젝트를 통해 함께 성장해요.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">소통</h3>
                <p className="text-gray-600">
                  멤버들과의 소통과 협업을 위한 공간입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
};

export default App;
