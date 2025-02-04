import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useAuth } from "../../components/Auth/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Container,
  Flex,
  FormGroup,
  Imaged,
  Input,
  Label,
  PlainText,
  PrimaryText,
} from "../../components/StyledComponents";
import { FaGithub } from "react-icons/fa6";

const Login: React.FC = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        title: "Signing in...",
        didOpen: () => {
          Swal.showLoading();
        },
      });
      navigate("/");
      Swal.close();
    } catch (error) {
      console.error("Error signing in with Google:", error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title:
          "An error occurred while signing in with Google. Please try again.",
      });
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      Swal.fire({
        title: "Signing in...",
        didOpen: () => {
          Swal.showLoading();
        },
      });
      navigate("/");
      Swal.close();
    } catch (error) {
      console.error("Error signing in with Github:", error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title:
          "An error occurred while signing in with Github. Please try again.",
      });
    }
  };
  return (
    <Container>
      <Box>
        <Imaged
          widthimage="150px"
          src="../src/assets/images/undraw_hello_ccwj.svg"
          alt=""
        />
        <PrimaryText>Login</PrimaryText>
        <PlainText>Login to Your Account</PlainText>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="example@gmail.com"
            name="email"
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            placeholder="Input Your Password"
            name="password"
            type="password"
          ></Input>
        </FormGroup>

        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>

        <FormGroup>
          <Button color="#0000" bgcolor="#f7f7f7" onClick={handleGoogleLogin}>
            <Flex gap="12px" padding="0px 12px">
              <PlainText>
                <FaGoogle />
              </PlainText>
              <PlainText>Google</PlainText>
            </Flex>
          </Button>

          <Button color="#0000" bgcolor="#f7f7f7" onClick={handleGithubLogin}>
            <Flex gap="12px" padding="0px 12px">
              <PlainText>
                <FaGithub />
              </PlainText>
              <PlainText>Github</PlainText>
            </Flex>
          </Button>
        </FormGroup>
      </Box>
    </Container>
  );
};
export default Login;
