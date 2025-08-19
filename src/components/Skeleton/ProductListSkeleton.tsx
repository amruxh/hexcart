import ProductCardSkeleton from "./ProductCardSkeleton"

const ProductListSkeleton = ({rows}: {rows?: number}) => {
  return (
    <div className="flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-evenly md:gap-5">
      {[...Array((rows ?? 3)*5)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  )
}

export default ProductListSkeleton
