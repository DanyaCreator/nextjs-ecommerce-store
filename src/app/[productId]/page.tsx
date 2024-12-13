import { ProductContent } from '@/pages/Product';

type ProductPageProps = {
  params: { productId: string };
};

const ProductPage = ({ params }: ProductPageProps) => {
  return <ProductContent productId={params.productId} />;
};

export default ProductPage;
