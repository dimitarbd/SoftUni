import DetailsBreadcrumb from './details-breadcrumb/DetailsBreadcrumb';
import DetailsProduct from './details-product/DetailsProduct';
import DetailsRelated from './details-related/DetailsRelated';

export default function Details() {
  return (
      <>
      <DetailsBreadcrumb />
      <DetailsProduct />
      <DetailsRelated />
      </>
  );
}