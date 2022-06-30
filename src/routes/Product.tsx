import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ProductLists } from '../store/goods';
import NoProduct from '../components/NoProduct';
import YesProduct from '../components/YesProduct';

function Product() {
  const { all } = useRecoilValue(ProductLists)
  const params = useParams<{ id: string }>();

  const result = () => {
    if (params.id) {
      if (Number(params.id) <= all.length && params.id[0] !== '-' && params.id[0] !== '0') return <YesProduct />
      else return <NoProduct />
    } 
    else return <NoProduct />
  }


  return (
    <main className="pt-16">
      { result() }
    </main>
  );
}

export default Product;