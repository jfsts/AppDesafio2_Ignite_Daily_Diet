import { Container, Message } from "./styles";

export function ListEmpty({ message }) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
