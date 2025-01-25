export interface JobApplication {
    id: string;
    title: string;
    company: string;
    status: 'applied' | 'interview' | 'offer' | 'rejected' | 'accepted';
    created_at: string;
    updated_at?: string;
}