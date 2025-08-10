export async function GET(req,{params}) {
    const  id  =await params;
    return Response.json(id)
}