'use client'

import Modal from '@/components/modal/Modal'
import { useState } from 'react'

export default function ExerciseModal({
    children,
    buttonTitle,
    onSubmit,
}: {
    children: React.ReactNode
    buttonTitle: string
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) {
    const [open, setOpen] = useState(false)
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(e)
        setOpen(false)
    }
    return (
        <>
            <button
                type='button'
                onClick={() => setOpen(true)}
                className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
                {buttonTitle}
            </button>
            <Modal open={open} setOpen={setOpen} title='Add exercise'>
                <form onSubmit={submit} className='flex w-full flex-col'>
                    {children}
                    <button
                        type='submit'
                        className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                        {buttonTitle}
                    </button>
                </form>
            </Modal>
        </>
    )
}
