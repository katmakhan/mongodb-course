exports = function({ query, headers, body}, response) {
    var result="";
    
    try{
      // console.log(query);
      var data=JSON.parse(query.data);
      // var data=query
      // console.log(data)
    
      //Check if there is null
      if (data)
      {
        emailid=data.email;
        // Querying a mongodb service:
        const mongodb = context.services.get("mongodb-atlas");
        // mongodb.createCollection("mycol");
        const item_collection=mongodb.db("Community").collection("KCYM");
        const doc_query = { email: emailid };

        // Query the collection
        // item_collection.find(doc_query).toArray(function(err, doc_result) {
        //   if (err) 
        //   {
        //     result="error";
        //   }
        //   console.log(doc_result);
        //   result=doc_result;
        //   // result="message";
        // });
        
        const ans=item_collection.find(doc_query).toArray();
        // result=ans;
        result=ans;
        
      }
      else
      {
        result="There is no data";
      }
    
    }
    catch(err)
    {
      result="parsing error";
    }
    
    //Return the result
    return  result;
};