import { Alert } from "react-bootstrap";

interface MessageProps {
  variant: string;
  text: string;
}

export default function Message(props: MessageProps) {
  const { variant, text } = props;

  return (
    <Alert variant={variant}>
      {text}
    </Alert>
  );
}
