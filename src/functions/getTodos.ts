import { APIGatewayEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"

import { document } from "@utils/dynamodbClient"


const handle: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

  const { user_id } = event.pathParameters

  const { Items } = await document.scan({
    TableName: "todos",
    FilterExpression: "user_id = :user_id",
    ExpressionAttributeValues: {
      ":user_id": user_id
    }
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(Items),
    headers: {
      "Content-Type": "application/json"
    }
  }
}

export { handle }