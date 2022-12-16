import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { singleProduct } from '@store/singleProduct';
import NoProduct from './components/NoProduct';
import YesProduct from './components/YesProduct';

function Product() {
  const params = useParams<{ id: string }>();
  const data = useRecoilValue(singleProduct(params.id));

  const result = () => {
    if (params.id && params.id[0] === '0') return <NoProduct />;
    if (data) return <YesProduct />;

    return <NoProduct />;
  };

  return (
    <main className="pt-16">
      { result() }
    </main>
  );
}

export default Product;
