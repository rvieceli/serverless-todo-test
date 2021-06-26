import { APIGatewayEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuid } from "uuid"

import { document } from "@utils/dynamodbClient"

interface ICreateToDo {
  title: string;
  deadline: string;
}

const handle: APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {

  const { title, deadline } = JSON.parse(event.body) as ICreateToDo;
  const { user_id } = event.pathParameters

  const Item = {
    id: uuid(),
    user_id,
    title,
    done: false,
    deadline: new Date(deadline).getTime(),
  }

  await document.put({
    TableName: "todos",
    Item,
  }).promise()

  return {
    statusCode: 201,
    body: JSON.stringify(Item),
    headers: {
      "Content-Type": "application/json"
    }
  }
}

export { handle }