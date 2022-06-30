import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="pt-16">
      <Link to="/">
        <section className="container mx-auto px-4 2xl:px-20 w-full pt-36 pb-40">
          <h1 className="text-center text-9xl font-bold">404</h1>
          <p className="text-center text-3xl pt-4 line-clamp-1">페이지를 찾을 수 없습니다</p>
          <p className="text-center text-sm pt-4">(화면을 클릭하면 메인으로 이동합니다)</p>
        </section>
      </Link>
    </main>
  );
}

export default NotFound;