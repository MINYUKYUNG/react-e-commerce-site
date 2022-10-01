import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { electronicsLists } from '@store/goods';

function Digital() {
  const { elec } = useRecoilValue(electronicsLists);

  const info = {
    data: elec,
    subTitle: "패션",
  };

  return <Category { ...info } />
};

export default Digital;