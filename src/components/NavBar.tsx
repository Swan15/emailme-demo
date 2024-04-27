import Link from 'next/link'

export default async function NavBar() {
    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <Link href='/' className='btn btn-ghost text-xl'>
                    Email me demo
                </Link>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link href='/'>Link</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
