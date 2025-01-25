'use client'

import { useEffect, useState } from 'react'

export default function ClientComponent() {
    const [user, setUser] = useState<{email: string} | null>(null);

    useEffect(() => {
        async function getUser() {
            setUser(null);
        }
        getUser();
    }, []);

    return (
        <div>
            <h2>{user?.email}</h2>
        </div>
    );
}