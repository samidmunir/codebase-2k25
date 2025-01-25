'use client'
import { signOut } from '@/actions/auth';
import { useState } from 'react'

const Logout = () => {
    const [loading, setLoading] = useState(false);

    const handleSignout = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        await signOut();

        setLoading(false);
    };

    return (
        <div className='cursor-default'>
            <form onSubmit={handleSignout}>
                <button 
                    type='submit'
                    disabled={loading}
                    className=''
                >{loading ? 'Signing out...' : 'Sign out'}</button>
            </form>
        </div>
    )
}

export default Logout