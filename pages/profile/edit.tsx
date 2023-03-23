import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";

interface IEditProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
  name: string;
  avatar?: FileList;
}

interface IEditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<IEditProfileForm>();
  useEffect(() => {
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
    if (user?.name) setValue("name", user.name);
  }, [user, setValue]);
  const [editProfile, { data, loading }] =
    useMutation<IEditProfileResponse>(`/api/users/me`);
  const onValid = async ({ email, phone, name, avatar }: IEditProfileForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      setError("formErrors", {
        message:
          "Email or Phone Number or Name is required. You have to write one at least",
      });
    }
    if (avatar && avatar.length > 0) {
      const cloudFlareRequest = await fetch(`/api/files`); //1. ask for CF URL
      const cloudFlareUrl = await cloudFlareRequest.json(); //2. upload file to CF URL
      //3. mutate Profile
    } else {
      editProfile({
        email,
        phone,
        name,
      });
    }
  };
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);
  const [avatarURL, setAvatarURL] = useState("");
  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarURL(URL.createObjectURL(file)); //브라우저에서 사용하는 것.
    }
  }, [avatar]);
  return (
    <Layout canGoBack title="Edit Profile">
      <form onSubmit={handleSubmit(onValid)} className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          {avatarURL ? (
            <img src={avatarURL} className="w-14 h-14 rounded-full" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-slate-500" />
          )}
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border hover:bg-gray-50 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            Change
            <input
              {...register("avatar")}
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register("name")}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("email")}
          label="Email address"
          name="email"
          type="email"
        />
        <Input
          register={register("phone")}
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        {errors.formErrors?.message ? (
          <div className="my-2 text-red-500 font-semibold  block">
            {errors.formErrors.message}
          </div>
        ) : null}
        <Button text={loading ? "Loading..." : "Update profile"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
