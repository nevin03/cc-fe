import { products } from "@/data/products";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui";
import { ProductCard } from "./ProductCard";

/** Product cards grid. */
export function ProductCatalog() {
  return (
    <Container className="pb-space-lg pt-space-xl">
      <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-2">
        {products.map((product, index) => (
          <Reveal key={product.id} index={index} className="[&>*]:h-full">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
