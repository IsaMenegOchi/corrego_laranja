import { EmailTemplate } from '../app/components/layout/EmailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { EmailTemplateProps } from '../app/interfaces/EmailTemplateProps';
const resend = new Resend('re_GnoD3xvW_K3kYW4cqz6RKGYiPAtxQDCRv');

export async function POST(emailData: EmailTemplateProps) {
    
    try {
    console.log("emaildata",emailData);
    
        const { data, error } = await resend.emails.send({
            from: emailData.email,
            to: ['isabelle.ochini@gmail.com'],
            subject: emailData.subject,
            react: EmailTemplate(emailData),
        });

        console.log(Response.json(data));
        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        
        return Response.json(data);
    } catch (error) {
        console.log("entrando no catch");
        
        return Response.json({ error }, { status: 500 });
    }
}