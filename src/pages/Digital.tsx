import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { electronicsState } from '@store/goods';

function Digital() {
  const { electronicsList } = useRecoilValue(electronicsState);

  return <Category data={electronicsList} subTitle="디지털" />;
}

export default Digital;
