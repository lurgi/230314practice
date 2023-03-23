import { Product, Sale } from "@prisma/client";
import useSWR from "swr";
import Item from "./item";

interface ProductListProps{
    kind : "favs" | "sales" | "purchases"
}

interface IProductWithCount extends Product{
  _count: {
    favs: number;
  }
}

interface SalesWIthProductDetail extends Sale{
  product: IProductWithCount;
}

interface ISales{
  [key: string]: SalesWIthProductDetail[];
}


export default function ProductLists({kind}:ProductListProps) {
    const { data } = useSWR<ISales>(`/api/users/me/${kind}`);
    return data ? <>{ data[kind]?.map((record) => (
        <Item
            id={record.id}
            key={record.id}
            title={record.product.name}
            price={record.product.price}
            hearts={record.product._count.favs}
        />
    ))}</> : null;

}