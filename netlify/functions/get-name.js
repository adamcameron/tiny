export async function handler(event, context) {
    const name = process.env.MSG_NAME || 'default';
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
        body: name,
    };
}
