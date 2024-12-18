import { Home } from '@/pages/Home';
import { getBillboards, getCatalog } from '@/shared/api';

const HomePage = async () => {
  const products = await getCatalog();
  const billboards = await getBillboards();

  return <Home products={products ?? []} billboards={billboards ?? []} />;
};

export default HomePage;
