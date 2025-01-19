import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabaseClient';

/*
    GET - retrieve a single product by ID
*/
export const GET = async (_req: NextRequest, {params}: {params: {id: string}}) => {
    const {data, error} = await supabase
        .from('products')
        .select('*')
        .eq('id', params.id)
        .single();
    
        if (error) {
            return NextResponse.json({error: error.message}, {status: 400});
        }

        return NextResponse.json(data, {status: 200});
}

/*
    PUT - update a single product by ID.
*/
export const PUT = async (req: NextRequest, {params}: {params: {id: string}}) => {
    const {name, price} = await req.json();

    const {data, error} = await supabase
        .from('products')
        .update({name, price})
        .eq('id', params.id)
        .single();
    
    if (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

    return NextResponse.json(data, {status: 200});
}

/*
    DELETE - remove a single product by ID.
*/
export const DELETE = async (req: NextRequest, {params}: {params: {id: string}}) => {
    const {data, error} = await supabase
        .from('products')
        .delete()
        .eq('id', params.id)
        .single();
    
    if (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

    return NextResponse.json(data, {status: 200});
}