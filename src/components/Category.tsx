import { Link } from 'react-router-dom';
import { CategoryGuard } from '@utils/type';

function Category({ data, subTitle }: CategoryGuard) {
  const result = data.map(({
    id,
    title,
    price,
    image,
  }) => (
    <div
      className="card card-compact bg-gray-100 grid flex-grow dark:bg-gray-700 cursor-pointer border-solid border border-gray-200 dark:border-none"
      key={id}
    >
      <Link to={`/products/${id}`}>
        <figure className="bg-white overflow-hidden h-80"><img src={image} alt="상품 이미지" className="object-contain h-1/2 w-1/2" /></figure>
        <div className="card-body h-44">
          <h2 className="card-title text-sm xl:text-base">{ title }</h2>
          <p className="text-sm xl:text-base">
            $
            { price }
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 2xl:px-20 w-full mt-10 mb-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>홈</li>
            <li>{subTitle}</li>
          </ul>
        </div>
        <section className="pt-12 pb-8 container mx-auto">
          <h2 className="pb-8 text-4xl font-bold text-center">{subTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-full gap-6">
            { result }
          </div>
        </section>
      </section>
    </main>
  );
}

export default Category;
