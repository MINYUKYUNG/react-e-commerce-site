import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function NoProduct() {
  const params = useParams<{ id: string }>();
  

  return (
    <Link to="/">
      <section className="container mx-auto px-4 2xl:px-20 w-full pt-52 pb-56">
        <p className="text-center text-3xl pt-4 line-clamp-1">상품 없음 : { params.id }</p>
        <p className="text-center text-sm pt-4">(화면을 클릭하면 메인으로 이동합니다)</p>
      </section>
    </Link>
  );
}

export default NoProduct;