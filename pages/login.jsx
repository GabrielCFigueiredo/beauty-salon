import Image from "next/image";
import Input from "../components/input/Input";
import ImageWithSpace from "../components/layout/ImageWithSpace";
import { FormContainer } from "../components/layout/ImageWithSpace.styles";

export default function Login() {
  return (
    <ImageWithSpace>
      <Image src="/title.png" alt="hair salon" width={300} height={50} />
      <FormContainer>
        <h2>Faça seu login</h2>
      </FormContainer>
      <form>
        <Input Label={"digite seu email"} />
        <Input 
        Label={"digite sua senha"}
        />
      </form>
    </ImageWithSpace>
  );
}
