import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { getFoodDetails } from "@/lib/action/food";
import Image from "next/image";

const page = async ({
  params,
}: {
  params: Promise<{ food_name: string; slug: string }>;
}) => {
  console.log("params ---", params);
  const id = (await params).slug;
  const productDetails = await getFoodDetails(id);
  console.log("productDetails --", productDetails);
  return (
    <div className="bg-white mt-5 rounded-xl overflow-hidden fredoka">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="mb-[20px] text-[40px] !important">
          {productDetails?.name}
        </h1>
        <Image
          src={productDetails?.imgs[0] || ""}
          width={0}
          height={0}
          sizes="100vw"
          className="w-[70%] h-[300px] object-cover rounded-[20px] shadow-md"
          alt="foods"

        />
        
        <div className="mt-[30px]">
          <h2 className="underline text-[22px]">Công thức</h2>
          <span>{productDetails?.recipes}</span>
        </div>
      </div>
    </div>
  );
};
export default page;

// export const getStaticProps =  async ({ params }) => {
//   console.log("params ---", params);
//   const productDetails = await getFoodDetails(params.id);
//   console.log("static productDetails --", productDetails);
//   return { props: { productDetails } };
// }
