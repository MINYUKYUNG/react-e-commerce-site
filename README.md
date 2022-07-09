# react-project-vite-ts
- React 18 + Vite + TS
- Recoil + React Router
- CSS Framwork: tailwindcss, daisyui
- Axios API

## About project
- React 온라인 쇼핑몰 프로젝트
- 기능 구현
  - 다크 모드: input 태그의 checkbox 기능을 사용하여, localStorage에 데이터 보관
  - 검색 기능: input 태그의 onChange 이벤트 리스너 기능을 사용
  - 장바구니 시스템: Recoil 전역상태관리를 통해 localStorage에 데이터 보관
  - 상품 데이터: Recoil을 이용하여 전역으로 상태관리
- 화면 미리보기 ( **화면을 클릭하면 배포한 사이트로 이동합니다** )
  - Light Mode
[![light](./src/assets/light%20ver.png)](https://react-project-vite-ts.vercel.app/)
  - Dark Mode
[![dark](./src/assets/dark%20ver.png)](https://react-project-vite-ts.vercel.app/)

### Project setup
```
npm install
```

### Project test
```
npm run dev
```

### Project build
```
npm run build
```