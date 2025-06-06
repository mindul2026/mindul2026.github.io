import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '주식회사 쉐릿',
  description: '알프(ALF)와 밥플(Babple) - 일상을 더욱 특별하게 만드는 혁신적인 서비스를 소개합니다.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              서비스 소개
            </h1>
            <p className="text-xl text-gray-600">
              일상을 더욱 특별하게 만드는 혁신적인 플랫폼
            </p>
          </div>
        </div>
      </section>

      {/* ALF Service Detail */}
      <section id="alf" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">알프 (ALF)</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                A Learning-Focused Platform – 성공적인 학습 여정을 지원합니다  
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">서비스 목적</h3>
                  <p className="text-gray-600">
                    알프는 학부모와 학생, 학원 관계자가 숙제, 피드백, 출석을 관리하는 플랫폼입니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">주요 기능</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>학부모와 자녀의 일정 공유</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>피드백·출결·숙제 관리</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>다양한 서비스와의 연동</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">사용자 대상</h3>
                  <p className="text-gray-600">
                    학부모와 학생, 학원 관계자 등이 사용하는 서비스입니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-primary-600 text-lg">ALF 서비스 이미지</p>
            </div>
          </div>
        </div>
      </section>

      {/* Babple Service Detail */}
      <section id="babple" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-primary-100 to-primary-50 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-primary-600 text-lg">Babple 서비스 이미지</p>
            </div>

            <div className="order-1 md:order-2">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">밥플 (Babple)</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">
                밥 + People - 사람들의 식사를 특별하게
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">서비스 목적</h3>
                  <p className="text-gray-600">
                    밥플은 혼밥하는 1인 가구를 위한 라이프스타일 플랫폼입니다. 
                    근처 가까운 지역에 있는 혼밥 가구와 함께 식사 경험을 제공합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">주요 기능</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>주변 맛집 정보 및 리뷰</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>본인 인증을 통한 안심 만남</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>음식 커뮤니티 정보 공유</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">사용자 대상</h3>
                  <p className="text-gray-600">
                    매일 혼자 식사를 하면서 같이 밥 먹을 지인을 찾는 1인 가구 유저들
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            알프와 밥플로 당신의 일상을 더욱 특별하게 만들어보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
            >
              알프 시작하기
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-primary-700 transition-colors"
            >
              밥플 시작하기
            </a>
          </div>
        </div>
      </section>
    </>
  )
} 