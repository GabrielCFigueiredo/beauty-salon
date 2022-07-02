import Image from "next/image";
import Link from "next/link";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import ImageWithSpace from "../components/layout/ImageWithSpace";
import {
  Form,
  FormContainer,
  Register,
} from "../components/layout/ImageWithSpace.styles";
import { H2 } from "../components/typography/Typography.styles";

export default function Login() {
  return (
    <ImageWithSpace>
      <Image src="/title.png" alt="hair salon" width={300} height={50} />
      <FormContainer>
        <H2>Faça seu login</H2>
      </FormContainer>
      <Form>
        <Input Label={"digite seu email"} />
        <Input Label={"digite sua senha"} />
        <Button>Entrar</Button>
      </Form>
      <Register>
        Não possui uma conta? <Link href="/signup">Faça seu Cadastro</Link>
      </Register>
    </ImageWithSpace>
  );
}
