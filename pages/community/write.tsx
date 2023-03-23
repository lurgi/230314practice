import useCoords from "@/libs/client/useCoords";
import useMutation from "@/libs/client/useMutation";
import { Post } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

interface IWriteForm {
  question: string;
}

interface IwirteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const { latitude, longitude } = useCoords();
  const router = useRouter();
  const { register, handleSubmit } = useForm<IWriteForm>();
  const [post, { loading, data }] = useMutation<IwirteResponse>("/api/posts");
  const onValid = (data: IWriteForm) => {
    if (loading) return; //로딩이 되고 있을 때 Post하는 것을 막는 것.
    post({ ...data, latitude, longitude });
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data]);
  return (
    <Layout canGoBack title="Write Post">
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <TextArea
          register={register("question", { required: true, minLength: 5 })}
          placeholder="Ask a question!"
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </Layout>
  );
};

export default Write;
