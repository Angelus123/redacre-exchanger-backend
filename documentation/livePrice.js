export const livePrice = {
    '/api/v1/live': {
      post: {
        tags: ['Create live'],
        summary: 'This will add live',
        description: 'This API will help the user to save live',
        produces: ['application/json'],
        parameters: [
          {
            name: 'Body',
            in: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/createLive',
            },
          },
        ],
        responses: {
          201: {
            description: 'live created successfully',
          },
          400: {
            description: 'Please provide valid Data!',
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
        },
      },
    },
    get: {
        tags: [
            "FETCH ROUTES"
        ],
        summary: "FETCH_ALL",
        description: "FETCH_ALL",
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
                description: "Success",
                schema: {
                    type: "string"
                }
            }
        }
    },
    delete: {
        tags: [
            "Delete Route"
        ],
        summary: "",
        description: "Helps user to delete all exchange made in database",
        operationId: "deleteAllRoutes",
        consumes: [
            "application/json"
        ],
        produces: [
            "application/json"
        ],
        parameters: [
            {
                name: "Accept-Language",
                in: "header",
                description: "the Accept-Language",
                required: false,
                type: "string"
            }
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
  };
  
  export const creatLivePriceDefinition = {
    createLive: {
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
