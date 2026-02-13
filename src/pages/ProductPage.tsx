import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bottleFallback from "@/assets/attimo-bottle-final.jpg";
import { Button } from "@/components/ui/button";
import { Droplets, Palette, UtensilsCrossed, Wind, Beaker, Link } from "lucide-react";
import { ProductOriginStory } from "@/components/product/ProductOriginStory";
import { ProductOriginRegion } from "@/components/product/ProductOriginRegion";
import { ProductLabTrust } from "@/components/product/ProductLabTrust";
import { ProductAlwaysNever } from "@/components/product/ProductAlwaysNever";
import { PolyphenolComparison } from "@/components/PolyphenolComparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ProductInfoTabs } from "@/components/ProductInfoTabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import { getProductContent } from "@/lib/productContent";

const ProductPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(10);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const product = products.find(p => p.node.handle === handle) || products[0];
  const content = getProductContent(handle);

  const handleAddToCart = () => {
    if (!product) return;
    const variant = product.node.variants.edges.find(
      edge => edge.node.title === selectedQuantity.toString()
    )?.node || product.node.variants.edges[0].node;
    
    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || []
    });
    toast.success(`Added ${selectedQuantity} bottle${selectedQuantity > 1 ? 's' : ''} to cart`, {
      position: "top-center"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
        <Header onWaitlistClick={() => {}} forceScrolled />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-olive-medium">Product not found</p>
        </div>
      </div>
    );
  }

  const productImages = product.node.images?.edges || [];
  const currencyCode = product.node.priceRange.minVariantPrice.currencyCode;

  const variantMap = {
    1: product.node.variants.edges.find(e => e.node.title === "1")?.node,
    2: product.node.variants.edges.find(e => e.node.title === "2")?.node,
    3: product.node.variants.edges.find(e => e.node.title === "3")?.node,
    4: product.node.variants.edges.find(e => e.node.title === "4")?.node,
    8: product.node.variants.edges.find(e => e.node.title === "8")?.node,
  };

  const basePrice = parseFloat(variantMap[1]?.price.amount || "22");

  const quantityOptions = [
    { quantity: 1, label: "1 Bottle", price: parseFloat(variantMap[1]?.price.amount || "22"), savings: null },
    { quantity: 2, label: "2 Bottles", subtitle: "Save €2", price: parseFloat(variantMap[2]?.price.amount || "42"), savings: (basePrice * 2) - parseFloat(variantMap[2]?.price.amount || "42") },
    { quantity: 3, label: "3 Bottles", subtitle: "Save €4", price: parseFloat(variantMap[3]?.price.amount || "62"), savings: (basePrice * 3) - parseFloat(variantMap[3]?.price.amount || "62") },
    { quantity: 4, label: "4 Bottles", subtitle: "Save €8 + Free Shipping", price: parseFloat(variantMap[4]?.price.amount || "80"), savings: (basePrice * 4) - parseFloat(variantMap[4]?.price.amount || "80") },
    { quantity: 8, label: "8 Bottles", subtitle: "Save €24 + Free Shipping", price: parseFloat(variantMap[8]?.price.amount || "152"), savings: (basePrice * 8) - parseFloat(variantMap[8]?.price.amount || "152") },
  ];

  const selectedOption = quantityOptions.find(option => option.quantity === selectedQuantity);

  // Attribute grid inspired by Arsenio — Composition, Color, Food pairings, Nose
  const attributes = [
    {
      icon: <Droplets size={20} className="text-olive-dark" />,
      label: "Composition",
      value: `100% ${content.tabs.details.olive}`,
    },
    {
      icon: <Palette size={20} className="text-olive-dark" />,
      label: "Color",
      value: content.tabs.details.flavor,
    },
    {
      icon: <UtensilsCrossed size={20} className="text-olive-dark" />,
      label: "Food Pairings",
      value: content.tabs.uses.split('.')[0],
    },
    {
      icon: <Wind size={20} className="text-olive-dark" />,
      label: "Nose",
      value: content.tabs.harvest.split('.')[0],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFAEA' }}>
      <Header onWaitlistClick={() => {}} forceScrolled />
      
      {/* Product Hero Section */}
      <section className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-14 items-start">
            
            {/* Left: Image with overlay thumbnails */}
            <div className="lg:sticky lg:top-28 lg:self-start relative">
              {/* Main Image — squarish */}
              <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative" style={{ backgroundColor: '#F0E8D8' }}>
                <img
                  src={productImages[selectedImageIndex]?.node?.url || productImages[0]?.node?.url || bottleFallback}
                  alt={productImages[selectedImageIndex]?.node?.altText || product.node.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Thumbnails — bottom-left inside image */}
                {productImages.length > 1 && (
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    {productImages.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImageIndex(i)}
                        className={`w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                          selectedImageIndex === i 
                            ? 'border-white shadow-lg' 
                            : 'border-white/40 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="space-y-8 lg:pt-4">
              
              {/* Volume */}
              <p className="text-olive-medium tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.8rem, 0.95vw, 1rem)' }}>
                500 ml (16.9 fl oz)
              </p>

              {/* Title */}
              <h1 className="text-olive-dark leading-[1.1] -mt-4" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 400 }}>
                {content.heroTitle}
              </h1>

              {/* Description */}
              <p className="text-olive-medium leading-relaxed max-w-lg" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.95rem, 1.1vw, 1.15rem)' }}>
                {content.originStory.headline.split('.').slice(0, 2).join('.') + '.'}
              </p>

              {/* Attribute Grid — 2x2 like Arsenio */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-2">
                {attributes.map((attr) => (
                  <div key={attr.label} className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      {attr.icon}
                      <span className="text-olive-dark font-semibold tracking-wide" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                        {attr.label}
                      </span>
                    </div>
                    <p className="text-olive-medium" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}>
                      {attr.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-olive-dark/10" />

              {/* Quantity Selection — refined */}
              <div className="space-y-3">
                <p className="text-olive-dark font-semibold uppercase tracking-widest" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.75rem, 0.85vw, 0.9rem)' }}>
                  Quantity
                </p>
                <div className="flex flex-wrap gap-2">
                  {quantityOptions.map(option => (
                    <button
                      key={option.quantity}
                      onClick={() => setSelectedQuantity(option.quantity)}
                      className={`px-5 py-3 rounded-full border transition-all duration-200 ${
                        selectedQuantity === option.quantity
                          ? 'border-olive-dark bg-olive-dark text-cream'
                          : 'border-olive-dark/20 text-olive-dark hover:border-olive-dark/50'
                      }`}
                      style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.8rem, 0.9vw, 0.95rem)' }}
                    >
                      {option.label}
                      {option.subtitle && (
                        <span className={`ml-1.5 ${selectedQuantity === option.quantity ? 'text-cream/70' : 'text-olive-medium'}`}>
                          · {option.subtitle}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                onClick={handleAddToCart}
                className="w-full hover:opacity-90 text-olive-dark font-semibold px-8 py-6 h-auto transition-all duration-300"
                style={{ 
                  fontFamily: 'UDC Working Man Sans, sans-serif', 
                  backgroundColor: '#CDDB2D', 
                  fontSize: 'clamp(1rem, 1.15vw, 1.2rem)', 
                  borderRadius: '999px',
                  letterSpacing: '0.05em',
                }}
              >
                {selectedQuantity === 1 ? (
                  <span className="flex items-center justify-center gap-2">
                    Add to Cart — <span className="line-through opacity-50">€25</span> €22
                  </span>
                ) : (
                  `Add to Cart — ${currencyCode === 'EUR' ? '€' : currencyCode}${selectedOption?.price.toFixed(0)}`
                )}
              </Button>

              {/* Lab Report Link */}
              <div className="flex items-center gap-3 pt-2 pb-2">
                <a 
                  href={content.labReportUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-olive-dark hover:text-olive-medium transition-colors underline underline-offset-4 decoration-olive-dark/30"
                  style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.85rem, 1vw, 1.05rem)' }}
                >
                  <Beaker size={18} />
                  View 3rd party lab results
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-olive-dark/10" />

              {/* Lab Values — minimal cards */}
              <div className="grid grid-cols-2 gap-4">
                {content.labTiles.map(tile => (
                  <div key={tile.key} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(27, 66, 41, 0.05)' }}>
                    <p className="text-olive-medium uppercase tracking-widest mb-1" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.65rem, 0.8vw, 0.8rem)' }}>
                      {tile.label}
                    </p>
                    <p className="text-olive-dark font-bold" style={{ fontFamily: 'UDC Working Man Sans, sans-serif', fontSize: 'clamp(1.4rem, 1.8vw, 2rem)' }}>
                      {tile.value}
                      {tile.unit && <span className="text-olive-medium font-normal ml-1" style={{ fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)' }}>{tile.unit}</span>}
                    </p>
                    <p className="text-olive-light mt-0.5" style={{ fontFamily: 'Space Grotesk, monospace', fontSize: 'clamp(0.7rem, 0.8vw, 0.85rem)' }}>
                      {tile.avg}
                    </p>
                  </div>
                ))}
              </div>

              {/* Accordion Info */}
              <div className="pt-2">
                <ProductInfoTabs content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections below product hero */}
      <ProductOriginStory content={content.originStory} />
      <Testimonials />
      <ProductOriginRegion />
      <ProductLabTrust content={content.labTrust} />
      <PolyphenolComparison productValue={content.polyphenolValue} productLabel={content.polyphenolLabel} />
      <ProductAlwaysNever />
      <FAQ />

      <Footer />
    </div>
  );
};

export default ProductPage;
