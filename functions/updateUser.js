exports = async function(request, response) {
    let collection = await context.services.get("mongodb-atlas").db("myFirstDatabase").collection("users");
    let res = await collection.updateOne({email: request.query.email}, { $set: { image: request.query.image, name: request.query.fullName } })
    
    return res
};