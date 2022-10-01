import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { womenFashionLists, menFashionLists } from '@store/goods';

function Fashion() {
  const { womenFash } = useRecoilValue(womenFashionLists);
  const { menFash } = useRecoilValue(menFashionLists);

  const info = {
    data: [ ...womenFash, ...menFash ],
    subTitle: "패션",
  };

  return <Category { ...info } />
};

export default Fashion;