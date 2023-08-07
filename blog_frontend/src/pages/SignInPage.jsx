import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Button, ButtonGoogle } from "../components/button";
import FormGroup from "../components/common/FormGroup";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useToggleValue from "../hooks/useToggleValue";
import { IconEyeToggle } from "../components/icons";

const schema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character")
    .required("This field is required"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onsubmit",
  });

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an accout?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign Up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button className="w-full bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;