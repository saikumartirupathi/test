exports.handler = async (event) => {
  console.log("Lambda invoked with event:", event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Node.js 22 Lambda!",
      timestamp: new Date().toISOString(),
    }),
  };
};
