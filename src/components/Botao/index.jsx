import { Button, Container, TitleButton } from "./styles";

export function Botao({ title, ...rest }) {
  return (
    <Button {...rest}>
      <TitleButton>{title}</TitleButton>
    </Button>
  );
}
