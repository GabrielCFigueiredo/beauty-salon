import Image from "next/image";
import Link from "next/link";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import ImageWithSpace from "../components/layout/ImageWithSpace";
import { Form, FormContainer, Register } from "../components/layout/ImageWithSpace.styles";
import { H2 } from "../components/typography/Typography.styles";


export default function Signup() {
    return (
        <ImageWithSpace>
        <Image src="/title.png" alt="hair salon" width={300} height={50} />
        <FormContainer>
          <H2>Faça seu Cadastro</H2>
        </FormContainer>
        <Form>
          <Input Label={"Nome"} />
          <Input Label={"Sobrenome"} />
          <Input Label={"Usuario"} />
          <Input Label={"E-mail"} />
          <Input Label={"senha"} />
          <Button>Entrar</Button>
        </Form>
        <Register>
          Já possui uma conta? <Link href="/login">Faça seu Login</Link>
        </Register>
      </ImageWithSpace>
    )
}