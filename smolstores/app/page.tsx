import ImageBanner from "@/components/ImageBanner";
import Portal from "@/components/Portal";
import Products from "@/components/Products";
import Image from "next/image";


export default function Home() {
  return (
  <>
  <ImageBanner image="/banner.jpg" alt="banner" />
<section>
  <Products />
</section>


  
  </>
  );
}
