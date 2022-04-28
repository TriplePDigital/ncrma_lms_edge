// This function is used to sync the session storage information of the user with the CMS
exports = async function (request, response) {
  try {
    let collection = await context.services
      .get("mongodb-atlas")
      .db("myFirstDatabase")
      .collection("users");
    let res = await collection.findOneAndUpdate(
      { _id: new BSON.ObjectId(request.query.id) },
      {
        $set: {
          email: `${request.query.email}`,
          name: `${request.query.firstName} ${request.query.lastName}`,
        },
      },
      {
        upsert: false,
      }
    );

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
