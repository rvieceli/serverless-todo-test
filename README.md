# Serverless - TODO 


## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.


### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn dynamo:start` to start DynamoDB locally
- Run `yarn dev` to start serverless offline (need to be in another terminal)



## Functions

### - _POST_ **/todos/{user_id}**

 >Request Body example
 ```json
 {
    "title": "Task Name",
    "deadline": "2021-06-26T17:32:42.339Z"
 }
 ```

>Response Body example
```json
{
  "id": "48d3fc5e-0a8a-44a4-95a2-b742a2663dd2",
  "user_id": "a0d3cc59-3d25-40f3-bcda-8d67d2a8a90b",
  "title": "First",
  "done": false,
  "deadline": 1624724742999
}
```
---
### _GET_ **/todos/{user_id}**

>Response Body example
```json
[
  {
    "id": "48d3fc5e-0a8a-44a4-95a2-b742a2663dd2",
    "title": "First",
    "deadline": 1624724742999,
    "user_id": "a0d3cc59-3d25-40f3-bcda-8d67d2a8a90b",
    "done": false
  },
  {
    "id": "5db2da7a-d0af-4179-a9e8-32169d2e8950",
    "title": "First",
    "deadline": 1624723954753,
    "user_id": "a0d3cc59-3d25-40f3-bcda-8d67d2a8a90b",
    "done": false
  }
]
```
