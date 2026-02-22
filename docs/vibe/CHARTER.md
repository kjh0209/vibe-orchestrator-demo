# Repo Charter

## 기술 스택
- 언어: TypeScript (strict mode)
- 런타임: Node.js 18+

## 코딩 컨벤션
- `any` 타입 사용 금지 (unknown 또는 명시적 타입 사용)
- 함수/변수: camelCase, 컴포넌트/클래스: PascalCase, 상수: UPPER_SNAKE_CASE
- 파일당 하나의 export default
- 비동기 처리는 async/await 사용 (Promise 체이닝 지양)

## 폴더 구조 규칙
- 비즈니스 로직: src/lib/
- 타입 정의: 각 모듈의 types.ts
- 테스트: 구현 파일과 동일 폴더, .test.ts 확장자

## 금지 패턴
- console.log 프로덕션 코드 사용 금지 (logger 사용)
- 하드코딩된 API 키/시크릿 금지
- 동기 파일 I/O 금지 (fs.readFileSync 등)
- 중첩 콜백 금지 (async/await 사용)

## PR 규칙
- main에 직접 push 금지
- 모든 PR은 Guardian 검사 통과 필수
- 커밋 메시지는 Conventional Commits 형식 필수
