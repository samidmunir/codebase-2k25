import { useState } from 'react'
import type {AppProps} from 'next/app'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { createSupabaseBrowserClient } from '@/lib/supabaseClient'

function App({
    Component,
    pageProps,
}: AppProps<{
    initialSession: Session;
}>) {
    const [supabaseClient] = useState(() => createSupabaseBrowserClient());

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <Component {...pageProps} />
        </SessionContextProvider>
    )
}

export default App