import DetailsHeader from "@/components/Shop/DetailsHeader";
import ProductList from "@/components/Shop/ProductList";
import ProductListSkeleton from "@/components/Skeleton/ProductListSkeleton";
import { Suspense } from "react";

const page = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
  const param = await searchParams;
  const query = (param.query ? param.query : param.category) || 'all';
  console.log(query);
  
    
  return (
    <div>
      <DetailsHeader active={query} />
      <Suspense fallback={<ProductListSkeleton rows={3} />}>
        <ProductList details={param}/>
      </Suspense>
    </div>
  )
}

export default page