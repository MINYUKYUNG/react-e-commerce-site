import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { jeweleryState } from '@store/goods';

function Accessory() {
  const { jeweleryList } = useRecoilValue(jeweleryState);

  return <Category data={jeweleryList} subTitle="액세서리" />;
}

export default Accessory;
