import { useEffect, useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { JobApplication } from '@/types/jobApplication'

export default function JobApplicationsPage() {
    const supabase = useSupabaseClient();
    const user = useUser();

    const [apps, setApps] = useState<JobApplication[]>([]);
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');

    useEffect(() => {
        const fetchApps = async () => {
            const {data, error} = await supabase
                .from('job-applications')
                .select('*')
                .order('created_at', {ascending: false});
            
            if (error) {
                console.error(error);
            } else {
                setApps(data || []);
            }
        };

        if (user) {
            fetchApps();
        }
    }, [user, supabase]);
}