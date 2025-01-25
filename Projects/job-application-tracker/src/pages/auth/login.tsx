import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const supabase = useSupabaseClient();
    const user = useUser();
    
    const router = useRouter();

    if (user) {
        router.push('/job-applications');
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const {error} = await supabase
            .auth
            .signInWithPassword({
                email,
                password
            });
        
        if (error) {
            alert(error.message);
        } else {
            router.push('/job-applications');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type='email'
                    placeholder='Your email'
                    autoComplete='email'
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input 
                    type='password'
                    placeholder='Password'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}