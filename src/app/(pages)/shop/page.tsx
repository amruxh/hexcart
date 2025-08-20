import DetailsHeader from "@/components/Shop/DetailsHeader";
import ProductList from "@/components/Shop/ProductList";
import ProductListSkeleton from "@/components/Skeleton/ProductListSkeleton";
import { Metadata  } from "next";
import { Suspense } from "react"; 

const page = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const param = await searchParams;
  const query = (param.query ? param.query : param.category) || 'All products';
  
  return (
    <div>
      <DetailsHeader active={query} />
      <Suspense fallback={<ProductListSkeleton rows={3} />}>
        <ProductList details={param}/>
      </Suspense>
    </div>
  )
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }): Promise<Metadata> {
  const param = await searchParams;
  const query = (param.query ? param.query : param.category) || 'All products';
  return {
    title: `Results for ${query} | HEXCART`
  };
}

export default page