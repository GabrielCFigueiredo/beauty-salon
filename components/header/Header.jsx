import { Card, WrapperHeader, WrapperHeaderCard } from "./Header.styles";

export default function Header() {
  return (
    <WrapperHeader>
      <WrapperHeaderCard>
        <span>Header</span>
        <span>Gabriel</span>
      </WrapperHeaderCard>
      <Card>texto</Card>
    </WrapperHeader>
  );
}
