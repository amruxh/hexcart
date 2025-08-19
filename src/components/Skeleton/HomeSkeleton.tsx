import ProductListSkeleton from "./ProductListSkeleton"

const HomeSkeleton = () => {
    return (
        <div className='h-screen'>
            <div className='w-full h-[200px] mb-3 md:h-[400px] bg-[var(--foreground-muted)]/10 animate-skeleton'></div>

            <div className='mt-3'>
                <div className='ml-5 h-8 w-50 bg-[var(--foreground-muted)]/10 animate-skeleton'></div>
                <ProductListSkeleton rows={2} />
            </div>
        </div>
    )
}

export default HomeSkeleton
