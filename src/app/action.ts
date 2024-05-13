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
        // or you can just use a fetch request
        // const res = await fetch('https://www.emailme.lol/api/send', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         subject: `Contact from ${email}`,
        //         description: details,
        //         key: process.env.EMAIL_ME_API_KEY,
        //     }),
        // })
        // console.log(await res.text())
        return [true, 'Email sent!']
    } catch (error) {
        console.error(error)
        return [false, 'Error sending email!']
    }
}
