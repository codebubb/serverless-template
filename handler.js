export function test(event, context, callback) {

  const response = {
    statusCode: 200,
    body: {
      message: 'Example response'
    }
  };

  callback(null, response);
}
