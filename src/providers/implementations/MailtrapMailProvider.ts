import { IMailProvider, IMessage } from '../IMailProvider'
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
    private transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            
        })
    }

    async sendMail(message: IMessage): Promise<void> {

    }
}