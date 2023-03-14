import { useForm } from "react-hook-form";
import { FieldError, FieldErrors } from "react-hook-form/dist/types";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginForm>({
    mode: "onBlur",
  });
  const onValid = (data: LoginForm) => {
    console.log("valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is empty",
          minLength: {
            value: 5,
            message: "Username should be longer than 5",
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is empty",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is empty" })}
        type="password"
        placeholder="Password"
      />
      {errors.password?.message}
      <input type="submit" value="Create Account" />
    </form>
  );
}
