exports = async function (request, response) {
  try {
    let collection = await context.services
      .get("mongodb-atlas")
      .db("myFirstDatabase")
      .collection("users");
    let res = await collection.updateOne(
      { _id: request.query.id },
      {
        $set: {
          email: `${request.query.email}`,
          name: `${request.query.firstName} ${request.query.lastName}`,
        },
      }
    );

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
