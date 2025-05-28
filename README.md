# 주식회사 쉐릿 (SHERIT) 기업 홈페이지

주식회사 쉐릿의 공식 기업 홈페이지입니다. 알프(ALF)와 밥플(Babple) 서비스를 소개하고, 회사의 비전과 가치를 전달합니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   ├── globals.css        # 전역 스타일
│   ├── about/            # 회사소개 페이지
│   ├── services/         # 서비스 소개 페이지
│   ├── news/             # 공지사항 페이지
│   └── contact/          # 문의하기 페이지
├── components/
│   ├── Header.tsx        # 헤더 컴포넌트
│   └── Footer.tsx        # 푸터 컴포넌트
└── public/               # 정적 파일
```

## 🛠️ 개발 환경 설정

1. 의존성 설치
```bash
npm install
```

2. 개발 서버 실행
```bash
npm run dev
```

3. 빌드
```bash
npm run build
```

4. 정적 파일 생성
```bash
npm run export
```

## 📱 주요 기능

- **반응형 디자인**: 모바일, 태블릿, PC 모든 환경 지원
- **SEO 최적화**: 메타데이터 및 구조화된 데이터
- **접근성**: 웹 접근성 표준 준수
- **성능 최적화**: 빠른 로딩 속도

## 🌐 배포

GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

1. `main` 브랜치에 푸시하면 자동으로 빌드 및 배포
2. GitHub 저장소 Settings > Pages에서 배포 상태 확인

## 📞 문의

- 이메일: contact@sherit.co.kr
- 전화: 02-1234-5678
- 주소: 서울특별시 강남구 테헤란로 123 쉐릿빌딩 10층

---

© 2024 주식회사 쉐릿. All rights reserved. 