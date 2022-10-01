import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import NoProduct from './components/NoProduct';
import YesProduct from './components/YesProduct';
import { singleProduct } from '@store/singleProduct';

function Product() {
  const params = useParams<{ id: string }>();
  const { data } = useRecoilValue(singleProduct(params.id));

  const result = () => {
    if (params.id && params.id[0] === '0') return <NoProduct />;
    else if (data) return <YesProduct />;
    else return <NoProduct />;
  };


  return (
    <main className="pt-16">
      { result() }
    </main>
  );
};

export default Product;