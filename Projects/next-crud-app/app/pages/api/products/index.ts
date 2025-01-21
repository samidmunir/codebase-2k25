import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/app/lib/supabaseClient'

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {method} = req;

    switch (method) {
        case 'GET': {
            const {data, error} = await supabase
                .from('products')
                .select('*');
            if (error) {
                return res.status(400).json({error: error.message});
            }
            return res.status(200).json(data);
        }

        case 'POST': {
            const {name, price, image} = req.body;
            if (!name || !price || !image) {
                return res.status(400).json({error: 'Missing name, price, or image.'});
            }
            const {data, error} = await supabase
                .from('products')
                .insert([{name, price, image}])
                .single();
            if (error) {
                return res.status(400).json({error: error.message});
            }
            return res.status(201).json(data);
        }

        case 'PUT': {
            const {id, name, price, image} = req.body;
            if (!id || !name || !price) {
                return res.status(400).json({error: 'Missing fields'});
            }
            const {data, error} = await supabase
                .from('products')
                .update({name, price, image})
                .eq('id', id)
                .single();
            if (error) {
                return res.status(400).json({error: error.message});
            }
            return res.status(200).json(data);
        }

        case 'DELETE': {
            const {id} = req.body;
            if (!id) {
                return res.status(400).json({error: 'Missing product ID'});
            }
            const {data, error}  = await supabase
                .from('products')
                .delete()
                .eq('id', id)
                .single();
            if (error) {
                return res.status(400).json({error: error.message});
            }
            return res.status(200).json(data);
        }

        default:
            return res.status(405).json({error: 'Method not allowed'});
    }
}