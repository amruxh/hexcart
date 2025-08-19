import Loading from "@/components/Loading/Loading";
import ProductDetails from "@/components/Products/Details/ProductDetails";
import { getProductById } from "@/services/productService";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    id: string | string[];
  }>;
};

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = await getProductById(Number(Array.isArray(id) ? id[0] : id))
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails productDetails={product} />
    </Suspense>
  );
};

export default ProductDetailsPage;