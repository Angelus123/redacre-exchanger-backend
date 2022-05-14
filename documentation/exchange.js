
export const exchange = {
    '/api/v1/exchange': {
        post: {
            tags: [
                "Create Exchange"
            ],
            summary: "Create Exchange",
            description: "This API helps the user to create exchange",
            operationId: "create",
            consumes: [
                "application/json"
            ],
            produces: [
                "application/json"
            ],
            parameters: [
                {
                  name: 'Body',
                  in: 'body',
                  required: true,
                  schema: {
                    $ref: '#/definitions/createExchange',
                  },
                },
              ],
            responses: {
                201: {
                    description: 'Exchange created successfully',
                  },
                200: {
                    description: "Success"
                },
                401: {
                    description: 'Incorrect input',
                  },
                401: {
                    description: 'Bad Request',
                },
                500: {
                    description: 'Internal server error',
                },
            }
        },
        get: {
            tags: [
                "Fetch Exchange"
            ],
            summary: "Get all exchange made",
            description: "This API helps user to get  all exchange made by user",
            operationId: "fetchAll",
            produces: [
                "application/json"
            ],
            parameters: [
                {
                    name: "page",
                    in: "query",
                    description: "Write the number of page you want to get",
                    required: false,
                    type: "string",
                },
                {
                    name: "limit",
                    in: "query",
                    description: "Enter the number of item or exchange you want to get on the single page",
                    required: false,
                    type: "string",
                }
            ],
            responses: {
                200: {
                    description: "Exchange Fetched Successfully",
                    schema: {
                        type: "string"
                    }
                }
            }
        },
        delete: {
            tags: [
                "Delete Exchange"
            ],
            summary: "delete exchange",
            description: "Helps to delete all exchange made by user",
            operationId: "deleteAllRoutes",
            consumes: [
                "application/json"
            ],
            produces: [
                "application/json"
            ],
        
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        type: "string"
                    }
                }
            }
        }
    }
};

export const createExDefinition = {
    createExchange: {
        type: 'object',
        in: 'body',
        required: ['type','status','from','to','amount1','amount2'],
        properties: {
         type: {
            type: 'string',
          },
          status: {
            type: 'string',
          },
          from: {
              type: 'string',
            },
          to: {
              type: 'string',
          },
          amount1: {
              type: 'string',
          },
          amount2: {
              type: 'string',
          },
        },
      },
};
