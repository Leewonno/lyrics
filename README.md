![image](https://github.com/user-attachments/assets/21f442d3-8d1a-4b4d-b0e0-396995194c4a)

# 가사 자막 입력 도우미, LYRICS

## 📋 프로젝트 개요

입력한 가사를 Adobe Premiere Pro에서 이용할 수 있는 SRT(SubRip) 자막 형식으로 변환할 수 있는 기능을 제공하는 엔믹스 팬페이지입니다. `자막변환` 페이지에서 가사를 입력하면 자막 파일을 생성·복사·다운로드할 수 있습니다.

<br />

## 💡 개발 목적

Premiere Pro로 동영상을 편집하던 중, 노래 가사를 자막으로 넣는 과정이 지나치게 오래 걸린다는 불편함을 느꼈습니다. 더 빠르고 효율적으로 자막을 넣는 방법을 고민하던 끝에, SRT 파일을 활용하면 에디터에서 자막을 손쉽게 생성할 수 있다는 점을 알게 되었습니다.

이 사실을 바탕으로, 노래 가사를 자동으로 SRT 파일로 변환해 영상 편집에 바로 활용할 수 있도록 기능을 제공하는 사이트를 개발하게 되었습니다.

<br />

## ⚡️ 주요 기능

- 자막 파일 변환 도구
  - 가사 한 줄당 재생 시간을 초 단위로 설정
  - 입력한 가사를 SRT 형식으로 자동 변환
  - 변환 결과를 클립보드로 복사하거나 파일(.srt)로 다운로드
- 방문자 수 집계 : Google Analytics 를 활용해 집계
- Redux Toolkit을 활용한 상태 관리

<br />

## ⚙️ 사용 기술

- 프론트엔드: React, TypeScript
- 상태 관리: Redux Toolkit
- 스타일링: styled-components
- 배포 : Firebase Hosting

<br />

## 🏃 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버
npm run dev
```

<br />
