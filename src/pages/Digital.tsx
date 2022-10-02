import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { electronicsLists } from '@store/goods';

function Digital() {
  const { elec } = useRecoilValue(electronicsLists);

  const info = {
    data: elec,
    subTitle: "디지털",
  };

  return <Category { ...info } />
};

export default Digital;