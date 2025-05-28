import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '공지사항 | 주식회사 쉐릿',
  description: '주식회사 쉐릿의 최신 소식과 업데이트를 확인하세요.',
}

// 임시 뉴스 데이터
const newsData = [
  {
    id: 1,
    title: '알프(ALF) 2.0 버전 업데이트 안내',
    date: '2024-01-15',
    category: '서비스 업데이트',
    excerpt: '더욱 강력해진 개인화 기능과 새로운 UI/UX로 찾아뵙니다. 사용자 여러분의 피드백을 반영하여...',
  },
  {
    id: 2,
    title: '밥플(Babple) 신규 기능 출시',
    date: '2024-01-10',
    category: '서비스 업데이트',
    excerpt: 'AI 기반 맞춤형 레시피 추천 기능이 추가되었습니다. 이제 냉장고 속 재료만으로도...',
  },
  {
    id: 3,
    title: '2024년 신년 인사',
    date: '2024-01-01',
    category: '공지사항',
    excerpt: '새해 복 많이 받으세요! 2024년에도 주식회사 쉐릿은 여러분의 일상을 더욱 특별하게...',
  },
  {
    id: 4,
    title: '연말연시 고객 감사 이벤트',
    date: '2023-12-20',
    category: '이벤트',
    excerpt: '한 해 동안 보내주신 사랑에 감사드리며, 특별한 이벤트를 준비했습니다...',
  },
  {
    id: 5,
    title: '서비스 정기 점검 안내',
    date: '2023-12-15',
    category: '공지사항',
    excerpt: '더 나은 서비스 제공을 위한 정기 점검이 예정되어 있습니다. 점검 시간 동안...',
  },
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              공지사항
            </h1>
            <p className="text-xl text-gray-600">
              주식회사 쉐릿의 최신 소식을 전해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
              전체
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              공지사항
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              서비스 업데이트
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              이벤트
            </button>
          </div>

          {/* News Items */}
          <div className="space-y-6">
            {newsData.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full mb-2">
                      {news.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                      {news.title}
                    </h2>
                  </div>
                  <time className="text-gray-500 text-sm mt-2 md:mt-0">
                    {new Date(news.date).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {news.excerpt}
                </p>
                <button className="mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  자세히 보기 →
                </button>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                이전
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-md">
                1
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                다음
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
} 