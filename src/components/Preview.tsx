import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { ProductLists } from '@store/goods';

function Preview() {
  const { preFash, preAcce, preDigi } = useRecoilValue(ProductLists);
  const forPre = [ { category: '패션', pre: preFash }, { category: '액세서리', pre: preAcce }, { category: '디지털', pre: preDigi } ];
  
  const result = forPre.map(({ category, pre }, index) => {
    return (
      <section className="px-4 pt-12 pb-8 container mx-auto 2xl:px-20" key={ index }>
        <h2 className="pb-8 text-4xl font-bold text-center">{ category }</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-x-6">
          { pre.map(({ id, title, price, image }) => {
            return (
              <div 
                className="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none" 
                key={ id }
              >
                <Link to={ '/product/' + id }>
                  <figure className="bg-white overflow-hidden h-80"><img src={ image } alt="미리보기 이미지" className="object-contain h-1/2 w-1/2" /></figure>
                  <div className="card-body h-44">
                    <h2 className="card-title text-base">{ title }</h2>
                    <p className="text-base">${ price }</p>
                  </div>
                </Link>
              </div>
            )
          }) }
        </div>
      </section>
    );
  });

  
  return (
    <div className="mt-10 mb-20">
      { result }
    </div>
  );
};

export default Preview;