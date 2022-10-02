import { ReactNode } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { updateCart } from '@store/cart';
import { singleProduct } from '@store/singleProduct';

function YesProduct() {
  const params = useParams<{ id: string }>();
  const { image, title, description, rating, price, category } = useRecoilValue(singleProduct(params.id));

  const menu = () => {
    if (category === "men's clothing" || category === "women's clothing") return ( <li>패션</li> );
    else if (category === "jewelery") return ( <li>악세서리</li> );
    else if (category === "electronics") return ( <li>디지털</li> );
  };

  const star = () => {
    const result: ReactNode[] = [];
    let forKey = 0;
    const bool = true;

    for (let i = 1; i <= Math.floor(rating.rate); i++) {
      result.push(
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-1" disabled checked={ bool ? bool: false } key={ forKey } />,
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-2" disabled checked={ bool ? bool: false }  key={ forKey + 1 } />
      );
      forKey = forKey + 2;
    };

    if (0.5 <= rating.rate%1) {
      result.push(
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-1" disabled checked={ bool ? bool: false }  key={ forKey } />,
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-2" disabled checked={ bool ? false: bool } key={ forKey + 1 } />
      );
      forKey = forKey + 2;
    };

    for (let i = 1; i <= (5 - Math.round(rating.rate)); i++) {
      result.push(
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-1" disabled checked={ bool ? false: bool } key={ forKey } />,
        <input type="radio" name="rating-10" className="bg-yellow-400 mask mask-star-2 mask-half-2" disabled checked={ bool ? false: bool } key={ forKey + 1 } />
      );
      forKey = forKey + 2;
    };

    return result;
  };
  
  const setUpdateCart = useSetRecoilState(updateCart);
  const sendCart = () => {
    setUpdateCart({
      getParams: Number(params.id),
      num: 1
    });
  };


  return (
    <section className="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
      <div>
        <div className="text-sm breadcrumbs">
          <ul>
            { menu() }
            <li>{ title }</li>
          </ul>
        </div>
        <div className="card lg:card-side shadow-xl mt-12 mb-8">
          <figure className="bg-white p-8 lg:w-1/3 lg:p-20"><img src={ image } alt="상품 이미지" className="object-contain h-72 w-full" /></figure>
          <div className="card-body lg:w-2/3 my-auto">
            <h2 className="card-title">{ title }</h2>
            <p className="pb-2">{ description }</p>
            <div className="rating rating-md rating-half pointer-events-none">
              { star() }
              <p className="pl-2">{ rating.rate } / { rating.count } 참여</p>
            </div>
            <p className="text-3xl">${ price }</p>
            <div className="card-actions gap-4 pt-8">
              <button className="btn btn-primary" onClick={ sendCart }>장바구니에 담기</button>
              <Link to="/cart">
                <button className="btn btn-outline btn-primary dark:text-white">장바구니로 이동</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YesProduct;