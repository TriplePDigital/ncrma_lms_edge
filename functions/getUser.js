exports = async function(request, response){
    let collection = await context.services.get("mongodb-atlas").db("myFirstDatabase").collection("users");
    let res = await collection.findOne({email: request.query.email})
    
    if(res){
      return JSON.stringify(res)
    }
    else{
      return []
    }
};