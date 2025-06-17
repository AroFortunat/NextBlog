// api/categories

import { NextResponse } from "next/server"

// GET POST PUT 

export const GET = async ()=>{
    return NextResponse.json([{}],{status:200})
}