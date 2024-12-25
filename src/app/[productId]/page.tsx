import { ProductContent } from '@/pages/Product';
import { getCatalog } from '@/shared/api';

type ProductPageProps = {
  params: { productId: string };
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const products = await getCatalog();

  return (
    <ProductContent productId={params.productId} products={products ?? []} />
  );
};

export default ProductPage;
