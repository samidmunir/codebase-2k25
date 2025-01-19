import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/app/lib/supabaseClient';

/*
    GET - list all products.
*/
export const GET = async () => {
    const {data, error} = await supabase
        .from('products')
        .select('*')
        .order('id');
    
        if (error) {
            return NextResponse.json({error: error.message}, {status: 400});
        }

        return NextResponse.json(data, {status: 200});
}

/*
    POST - create a new product.
*/
export const POST = async (req: NextRequest) => {
    const {name, price} = await req.json();

    const {data, error} = await supabase
        .from('products')
        .insert([{name, price}])
        .single();
    
    if (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

    return NextResponse.json(data, {status: 201});
}