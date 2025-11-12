# NMIXX Lyrics Subtitle Tool

엔믹스(NMIXX) 관련 콘텐츠를 소개하고, 입력한 가사를 손쉽게 SRT(SubRip) 자막 형식으로 변환할 수 있는 웹 애플리케이션입니다. 메인 화면에서는 최신 영상을 확인하고 공식 채널로 바로 이동할 수 있으며, `자막변환` 페이지에서는 가사 텍스트를 기반으로 자막 파일을 생성·복사·다운로드할 수 있습니다.

## 주요 기능

- 메인 페이지
  - 유튜브 공식 뮤직비디오 임베드
  - `translate` 페이지 이동 버튼 및 공식 SNS/채널 링크 제공
  - 페이지 방문 수를 Firebase Firestore에 일별로 집계
- 자막 변환 도구
  - 가사 한 줄당 재생 시간을 초 단위로 설정 가능 (기본값 1초)
  - 입력한 가사를 SRT 형식으로 자동 변환
  - 변환 결과를 클립보드로 복사하거나 파일(`.srt`)로 다운로드
  - 사용 방법 안내 카드 및 토스트 알림 제공
- 공통 기능
  - Redux Toolkit 기반 토스트 상태 관리
  - 로컬 스토리지를 활용한 중복 방문 방지 로직

## 기술 스택

- 프론트엔드: React 18, TypeScript, Vite
- 상태 관리: Redux Toolkit, React Redux
- 스타일링: styled-components
- 백엔드/데이터베이스: Firebase Firestore
- 기타: react-router-dom, react-cookie

## 사전 준비

- Node.js 18 이상 (LTS 권장)
- Firebase 프로젝트 및 Firestore 인스턴스
- `.env` 파일에 Firebase 환경 변수 설정

```bash
# .env (루트 디렉터리)
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:5173)
npm run dev

# 정적 빌드 결과 (dist/)
npm run build

# 빌드 미리보기
npm run preview

# ESLint 검사
npm run lint
```

## 폴더 구조

```text
src/
├── App.tsx                 # 공통 레이아웃(헤더/푸터/토스트)
├── Router.tsx              # 라우터 구성
├── common/                 # 헤더·푸터·토스트 및 전역 스타일
├── firebase.ts             # Firebase 초기화
├── main/                   # 메인 페이지 섹션 및 스타일
├── redux/                  # Toast 상태 관리 (Redux Toolkit)
├── translate/              # 자막 변환 위젯과 예시 안내
└── localstorage.ts         # 방문 기록 관리 유틸리티
```

## Firestore 통계 수집

- `main`, `translate` 두 페이지는 렌더링 시 Firestore `data` 컬렉션에 일별 방문 수를 저장합니다.
- 로컬 스토리지에 날짜 키를 저장하여 동일한 기기·브라우저에서 하루 한 번만 카운트하도록 구성되어 있습니다.
- Firestore Security Rules 구성 시 해당 문서(`YYYYMMDD_pagename`)에 대한 쓰기 권한을 제한하도록 주의하세요.

## 배포

프로젝트는 `npm run build` 명령으로 정적 파일을 생성한 뒤, Firebase Hosting·Vercel·Netlify 등 정적 호스팅 서비스에 업로드할 수 있습니다. 현재 레포지토리에는 Firebase Hosting 구성 파일(`firebase.json`)이 포함되어 있으므로 Firebase CLI를 이용하면 바로 배포를 진행할 수 있습니다.

```bash
firebase deploy --only hosting
```

## 기여 가이드

1. 이슈를 등록하거나 기존 이슈를 확인하여 작업 범위를 결정합니다.
2. 새로운 브랜치를 생성하고 수정 사항을 추가합니다.
3. `npm run lint` 및 `npm run build`로 기본 검증을 수행합니다.
4. Pull Request에 변경 내용과 테스트 결과를 상세히 기록합니다.

## 라이선스

프로젝트 라이선스가 명시되어 있지 않습니다. 배포 또는 2차 개발 시 원 저작자의 의사 및 관련 약관을 확인한 뒤 진행해 주세요.
