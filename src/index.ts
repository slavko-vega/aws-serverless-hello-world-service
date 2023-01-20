import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';


export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const responseMessage = `Hello World ${event.body}`;
    
    return {
        headers: {
            'Content-Type': 'application/json',
          },
        statusCode: 200,
        body: JSON.stringify({
            message: responseMessage,
          })
    }
};

