import ProductLists from "@/components/product-list";
import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Bought: NextPage = () => {
  return (
    <Layout title="구매내역" canGoBack>
      <div className="flex flex-col space-y-5 pb-10  divide-y">
        <ProductLists kind="purchases"></ProductLists>
      </div>
    </Layout>
  );
};

export default Bought;
