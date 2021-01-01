# Coin Chart

# Table of Contents

- [Coin Chart](#coin-chart)
- [Table of Contents](#table-of-contents)
  - [Commands](#commands)
  - [Build Scripts](#build-scripts)
  - [Compatibility](#compatibility)
  - [Project Structure](#project-structure)
  - [Dependencies](#dependencies)
  - [Demo](#demo)

## Commands

```sh
$ yarn install # 패키지 설치
$ yarn start # 개발 환경 구동
$ yarn test # 유닛 테스트
$ yarn cypress # e2e 테스트
```

## Build Scripts

```json
"start": "CRA start",
"build": "프로덕션 빌드",
"test": "Jest 테스트",
"eject": "CRA eject",
"lint": "ESLint 검사",
"cypress": "e2e 테스트",
"predeploy": "github pages 배포 전 빌드",
"deploy": "github pages 배포"
```

[(back to top)](##table-of-contents)

## Compatibility

- Chrome
- Firefox
- Safari
- Edge
- IE 11

## Project Structure

```bash
├── README.md
├── cypress # e2e 테스트 코드
├── public
├── src
│   ├── api # api modules
│   ├── components  # React components for common use
│   ├── constants # constants variables for common use
│   ├── containers # React containers
│   ├── context # utility of context api
│   ├── helpers # helpers for common use
│   ├── hooks # custom hooks
│   ├── styles # style sheet properties in js
│   ├── App.tsx
│   ├── index.tsx
├── package.json

```

[(back to top)](##table-of-contents)

## Dependencies
- Create-React-App: React App 개발, 운영, 테스트 및 배포에 대한 스크립트를 제공하여 개발 생산성을 향상
  - 다음의 라이브러리가 자동 설정 & 설치됨
  - react
  - react-dom
  - react-scripts
  - typescript
  - jest
  - webpack
  - babel
  - @testing-library/*
  - web-vitals
  - etc
- CSS in JS 방식으로 스타일 시트를 모듈, 함수화하여 재활용성을 향상하기 위해 다음의 라이브러리를 설치 
  - Styled Components
  - Styled Normalize
- Custom Hooks 의 유닛테스팅을 위해 다음의 라이브러리를 설치
  - @testing-library/react-hooks
  - react-test-renderer
- 코딩 스타일 및 코드 품질을 위해 다음의 라이브러리를 설치
  - eslint-config-prettier
  - eslint-plugin-prettier
  - eslint-plugin-jest
  - prettier
- 위의 라이브러리를 자동 실행하기 위해 설치
  - lint-staged
  - husky
- e2e 테스트를 위해 설치
  - cypress
- Github Pages 통해 데모를 제공
  - gh-pages 
- 폴리필 적용을 위해 설치 (IE 11)
  - react-app-polyfill
- @types/* : typescript definitions

## Demo
[Demo](https://kevin-grylls.github.io/coin-chart/)

[(back to top)](##table-of-contents)
