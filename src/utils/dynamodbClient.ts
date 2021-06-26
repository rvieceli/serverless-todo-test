import { DynamoDB } from "aws-sdk";

const options: DynamoDB.Types.ClientConfiguration = {
  region: "localhost",
  endpoint: "http://localhost:8000",
}

const isOffline = () => process.env.IS_OFFLINE

const document = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient()

export { document}