import nodemailer from 'nodemailer'
import { MailAdapter, MailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "91b06606d09cff",
        pass: "214f2e4787cde7"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ body, subject }: MailData){
        transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Yago Ernandes <yago700@gmail.com>',
            subject,
            html: body
        })
    }
}