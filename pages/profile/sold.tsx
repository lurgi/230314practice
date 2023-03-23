import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";
import useSWR from "swr"
import { Product, Sale } from "@prisma/client";
import ProductLists from "@/components/product-list";


const Sold: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductLists kind="sales"></ProductLists>
      </div>
    </Layout>
  );
};

export default Sold;
