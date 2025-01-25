import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = useSupabaseClient();
    const user = useUser();

    const router = useRouter();

    if (user) {
        router.push('/job-applications');
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        const {error} = await supabase
            .auth
            .signUp({
                email,
                password
            });
        
        if (error) {
            alert(error.message);
        } else {
            alert('Check your email for a confirmation link!');
            router.push('/auth/login');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
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
                    autoComplete='new-password'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}