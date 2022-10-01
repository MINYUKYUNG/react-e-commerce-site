import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { jeweleryLists } from '@store/goods';

function Accessory() {
  const { jewe } = useRecoilValue(jeweleryLists);

  const info = {
    data: jewe,
    subTitle: "액세서리",
  };

  return <Category { ...info } />
};

export default Accessory;