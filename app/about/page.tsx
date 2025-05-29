import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '주식회사 쉐릿',
  description: '주식회사 쉐릿의 비전, 미션, 그리고 브랜드 스토리를 소개합니다.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              회사소개
            </h1>
            <p className="text-xl text-gray-600">
              더 나은 일상을 만들어가는 주식회사 쉐릿입니다
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">비전</h2>
              <div className="bg-primary-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;모든 사람이 더 나은 일상과 가치를 누릴 수 있는 세상&rdquo;
                </p>
                <p className="mt-4 text-gray-600">
                  우리는 혁신적인 기술과 서비스를 통해 사람들의 일상을 더욱 풍요롭고 
                  의미있게 만들어가는 것을 목표로 합니다.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">미션</h2>
              <div className="bg-primary-50 p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;혁신적인 라이프스타일 플랫폼으로 일상의 가치를 높이다&rdquo;
                </p>
                <p className="mt-4 text-gray-600">
                  알프와 밥플을 통해 사용자들이 일상 속에서 편리함과 
                  새로운 가치를 발견할 수 있도록 지속적으로 혁신합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">브랜드 스토리</h2>
          
          <div className="space-y-12">
            {/* ALF Story */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">알프 (ALF)</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                알프는 &apos;A Life-changing Platform&apos;의 약자로, 사용자의 일상을 변화시키는 플랫폼이라는 의미를 담고 있습니다. 
                2022년 첫 출시 이후, 수많은 사용자들의 일상을 더욱 스마트하고 효율적으로 만들어왔습니다. 
                알프는 단순한 서비스를 넘어, 사용자와 함께 성장하는 라이프스타일 파트너를 지향합니다.
              </p>
            </div>

            {/* Babple Story */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">밥플 (Babple)</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                밥플은 &apos;밥&apos;과 &apos;People&apos;의 합성어로, 사람들의 식사를 더욱 특별하게 만든다는 의미를 담고 있습니다. 
                매일 반복되는 식사 시간을 단순한 끼니 해결이 아닌, 즐거운 경험으로 바꾸고자 시작되었습니다. 
                다양한 음식 정보와 맞춤형 추천을 통해 사용자들이 매일 새로운 미식 경험을 할 수 있도록 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">대표 인사말</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                안녕하세요, 주식회사 쉐릿 대표이사입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                쉐릿은 &apos;공유하다(Share it)&apos;라는 의미에서 출발했습니다. 
                우리는 기술과 혁신을 통해 더 나은 가치를 만들고, 
                이를 모든 사람과 나누고자 합니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                알프와 밥플은 단순한 서비스가 아닌, 
                여러분의 일상을 더욱 풍요롭게 만드는 동반자입니다. 
                우리는 사용자 한 분 한 분의 목소리에 귀 기울이며, 
                끊임없이 발전하고 혁신하겠습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                앞으로도 주식회사 쉐릿은 여러분의 일상에 
                의미 있는 변화를 만들어가는 기업이 되겠습니다. 
                많은 관심과 응원 부탁드립니다.
              </p>
              <p className="text-right mt-8 text-gray-600">
                주식회사 쉐릿 대표이사 올림
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 