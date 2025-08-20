import Loading from "@/components/Loading/Loading";
import ProductDetails from "@/components/Products/Details/ProductDetails";
import { getProductById } from "@/services/productService";
import { Metadata } from "next";
import { Suspense } from "react";

type PageProps = {
  params: Promise<{
    id: string | string[];
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(Number(Array.isArray(id) ? id[0] : id));
  return {
    title: product?.title + ' | HEXCART',
    description: product?.description,
    icons: {
      icon: product?.thumbnail
    }
  };
}

const ProductDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = await getProductById(Number(Array.isArray(id) ? id[0] : id));
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails productDetails={product} />
    </Suspense>
  );
};


export default ProductDetailsPage;