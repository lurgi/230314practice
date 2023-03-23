import useMutation from "@/libs/client/useMutation";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Stream } from "stream";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

interface ICreatrFrom {
  name: string;
  price: number;
  description: string;
}

interface ICreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const { register, handleSubmit } = useForm<ICreatrFrom>();
  const router = useRouter();
  const [createStream, { data, loading }] = useMutation(`/api/streams`);
  const onVaild = (form: ICreatrFrom) => {
    if (loading) return;
    createStream(form);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/streams/${data.stream.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack title="Go Live">
      <form onSubmit={handleSubmit(onVaild)} className=" space-y-4 py-10 px-4">
        <Input
          register={register("name", { required: true })}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("price", { required: true, valueAsNumber: true })}
          label="Price"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea
          register={register("description", { required: true })}
          name="description"
          label="Description"
        />
        <Button text={loading ? "Loading..." : "Go live"} />
      </form>
    </Layout>
  );
};

export default Create;
