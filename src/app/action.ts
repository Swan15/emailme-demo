'use server'
import { emailMe } from '@emailme/emailme-js'

export async function submitForm(
    prevState: [boolean, string],
    formData: FormData
): Promise<[boolean, string]> {
    try {
        const email = formData.get('email')
        const details = formData.get('details')
        await emailMe(`contact from ${email}`, `Details: ${details}`)
        return [true, 'Email sent!']
    } catch (error) {
        return [false, 'Error sending email!']
    }
}
