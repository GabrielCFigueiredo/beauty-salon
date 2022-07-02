import Image from "next/image";
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

      </form>
    </ImageWithSpace>
  );
}
