import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useUser } from '@supabase/auth-helpers-react'

export default function Home() {
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.replace('/job-applications');
        } else {
            router.replace('/auth/login');
        }
    }, [user, router]);
    
    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}