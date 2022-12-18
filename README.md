# react-e-commerce-site

## 배포 링크
https://react-project-vite-ts.vercel.app/
<br/>
<br/>

## 기술 스택
- React 18 + Vite + TypeScript
- React Router
- Recoil
- CSS Framwork: tailwindcss, daisyui
- Axios API
<br/>

## About project
1. React 온라인 쇼핑몰 프로젝트

2. 기능 구현
    - 카테고리별 상품 조회, 개별 상품 조회 기능

    - 사용자별 장바구니 데이터 관리와 다크 모드 유지 기능

3. 프로젝트 구성
    ```
    1) 컴포넌트, 폴더, 페이지 구성
    컴포넌트는 재사용성과 UI를 고려해서 분리했고, 페이지는 상품 카테고리를 기준으로 폴더를 구성했습니다.

    2) 상태 관리
    상품 조회와 장바구니의 역할을 기준으로, 상태값을 분리하였습니다.
    카테고리별, 개별, 전체 데이터는 백엔드 api를 통해, 장바구니 기능은 로컬 스토리지를 통해 관리했습니다.
    ```

4. 서비스 화면 미리보기 ( **화면을 클릭하면 배포한 사이트로 이동합니다** )
    - Light Mode
    [![light](./src/assets/images/light%20ver.png)](https://react-project-vite-ts.vercel.app/)
    - Dark Mode
    [![dark](./src/assets/images/dark%20ver.png)](https://react-project-vite-ts.vercel.app/)
<br/>

## 실행 방법
1. repository clone
```
$ git clone https://github.com/MINYUKYUNG/react-e-commerce-site.git
```
2. dependencies install
```
npm install
```
3. project start
```
npm run dev
```
<br/>

## 폴더 구조
| 폴더 | 구분 |
| -- | -- |
| apis | api 호출 함수 폴더 |
| assets | 이미지, 폰트 폴더 |
| components | 공통 컴포넌트 파일 폴더 |
| pages | url 주소 페이지 파일 폴더 |
| routes | 리액트 라우팅 파일 폴더 |
| store | 전역상태관리 파일 폴더 |
| utils | 중복 로직 함수를 순수 함수화한 파일 폴더 |


