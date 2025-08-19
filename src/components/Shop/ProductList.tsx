import ProductCard from "../Products/Cards/ProductCard";
import {
  getAllProducts,
  searchProduct,
  getProductsByCategory,
} from "@/services/productService";
import { Product, Products } from "@/types";

type PageProps = {
  details: {
    query?: string;
    category?: string;
  };
};

export default async function ProductList({ details }: PageProps) {
  try {
    let products: Products | null;

    if (details.query && details.query !== "") {
      products = await searchProduct(details.query);
    } else if (details.category && details.category !== "") {
      products = await getProductsByCategory(details.category);
    } else {
      products = await getAllProducts();
    }

    // Determine the array of products to map over
    const productsToRender = Array.isArray(products) ? products : products?.products;

    return (
      <div className="product-container flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-evenly md:gap-5">
        {productsToRender && productsToRender.length > 0 ? (
          productsToRender.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-white">No products found.</p>
        )}
      </div>
    );
  } catch (err) {
    console.error("Error fetching products:", err);
    return (
      <p className="text-white">Failed to load products. Please try again later.</p>
    );
  }
}