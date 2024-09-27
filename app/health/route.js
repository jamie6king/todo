export async function GET(request) {
    return new Response("Container is working!", {
        status: 200,
        headers: {
            "Content-Type": "text/plain"
        }
    })
}