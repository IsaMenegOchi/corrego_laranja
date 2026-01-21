import { EmailTemplateProps } from "@/app/interfaces/EmailTemplateProps";
export function EmailTemplate({ name, number, subject, body }: EmailTemplateProps) {
  return (
    <div>
      <h1>Olá, meu nome é {name}!</h1>
      <h3>Gostaria de falar sobre {subject}</h3>
      <p>{body}</p>
      <span>Espero que entrem em contato: {number}</span>
    </div>
  );
}
