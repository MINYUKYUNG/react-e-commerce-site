# MMM (E-Commerce site)

## 목차
1. [배포 링크](#배포-링크)
2. [기술 스택](#기술-스택)
3. [About project](#about-project)
4. [실행 방법](#실행-방법)
5. [디렉토리 구조](#디렉토리-구조)
<br/>

## 배포 링크
- https://mmm-e-commerce.chloemin.com
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
        - 재사용되는 UI 로직을 기준으로 컴포넌트 분리, 상품 카테고리를 기준으로 페이지 디렉토리 구성  
        - AWS S3, CloudFront를 통한 정적 웹사이트 배포, Github Action을 통한 배포 자동화 처리  
        - 상태 관리 단위 테스트, API 기능과 상태 관리에 대한 통합 테스트

4. 서비스 화면 미리보기  
        - Light Mode  
    ![light](./src/assets/images/light%20ver.png)
<br/>  
        - Dark Mode  
    ![dark](./src/assets/images/dark%20ver.png)
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

## 디렉토리 구조
| 디렉토리 | 구분 |
| -- | -- |
| apis | api 호출 함수 디렉토리 |
| assets | 이미지, 폰트 디렉토리 |
| components | 공통 컴포넌트 파일 디렉토리 |
| pages | url 주소 페이지 파일 디렉토리 |
| routes | 리액트 라우팅 파일 디렉토리 |
| store | 전역상태관리 파일 디렉토리 |
| utils | 중복 로직 함수를 순수 함수화한 파일 디렉토리 |
<br/>

