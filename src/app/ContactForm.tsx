'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitForm } from './action'

const initialState: [boolean, string] = [true, '']

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            disabled={pending}
            aria-disabled={pending}
            type='submit'
            className='btn btn-primary'
        >
            Submit
        </button>
    )
}

export default function ContactForm() {
    const [state, formAction] = useFormState<[boolean, string], FormData>(
        submitForm,
        initialState
    )

    return (
        <form action={formAction} className='flex flex-col gap-4'>
            <label className='flex flex-col'>
                <span className='text-lg'>Email</span>
                <input
                    name='email'
                    type='email'
                    className='input input-primary'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-lg'>Details</span>
                <input
                    name='details'
                    type='text'
                    className='input input-primary'
                />
            </label>
            <SubmitButton />
            {state[0] ? (
                <p className='text-success'>{state[1]}</p>
            ) : (
                <p className='text-error'>{state[1]}</p>
            )}
        </form>
    )
}
