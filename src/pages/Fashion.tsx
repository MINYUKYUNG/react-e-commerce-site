import Category from '@components/Category';
import { useRecoilValue } from 'recoil';
import { womenFashionState, menFashionState } from '@store/goods';

function Fashion() {
  const { womenFashionList } = useRecoilValue(womenFashionState);
  const { menFashionList } = useRecoilValue(menFashionState);

  return <Category data={[...womenFashionList, ...menFashionList]} subTitle="패션" />;
}

export default Fashion;
