## 구성 요소

이 Turborepo에는 다음과 같은 앱과 설정이 포함되어 있습니다:

### 앱 및 설정

- `admin`: maru-egg 관리자 시스템 (NextJS)
- `client`: maru-egg 챗봇 시스템 (React)
- `@repo/ui`: admin과 client가 공통으로 사용하는 디자인 시스템
- `@repo/eslint-config`: admin과 client가 사용하는 공통 lint 설정
- `@repo/prettier-config`: admin과 client가 사용하는 공통 prettier 설정
- `@repo/typescript-config`: admin과 client가 사용하는 공통 typescript 설정
- `@repo/tailwind-config`: admin과 client가 사용하는 공통 tailwind 설정

## 시작하기

1. 저장소 클론
   ```
   git clone https://github.com/your-username/maru-egg.git
   ```
2. 의존성 설치

   ```
   npm install
   ```

3. 필요한 환경 변수 설정
   ```
   cp .env.example .env
   ```

## 개발 및 빌드

### 개발

모든 앱과 패키지를 개발 모드로 실행하려면 다음 명령어를 실행하세요:

```
npm run dev
```

### 빌드

모든 앱과 패키지를 빌드하려면 다음 명령어를 실행하세요:

```
npm run build
```

## 커밋 규칙

이 프로젝트는 Commitizen을 사용하여 일관된 커밋 메시지를 작성합니다.

### 커밋하기

일반 git commit 대신 다음 명령어를 사용하여 커밋하세요:

```
npm run commit
```
