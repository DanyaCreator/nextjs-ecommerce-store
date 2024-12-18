import { Catalog } from '@/pages/Catalog';
import { getCatalog, getFilterEntities } from '@/shared/api';

const CatalogPage = async () => {
  const products = await getCatalog();
  const dropdownItems = await getFilterEntities();

  return (
    <Catalog
      products={products ?? []}
      dropdownItems={dropdownItems ?? [[], []]}
    />
  );
};

export default CatalogPage;
