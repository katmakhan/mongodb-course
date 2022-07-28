### This function is the endpoint's request handler.

```javascript
exports = function({ query, headers, body}, response) {
  
    var data=JSON.parse(query.data);
    var result="";
    
    //Check if there is null
    if (data)
    {
      // Adding data to mongodb service:
      const doc = context.services.get("mongodb-atlas").db("Community").collection("KCYM");
      doc.insertOne(data);
      result="Success";
    }
    
    else
    {
      result="There is no data";
    }
    
    
    //Return the result
    return  result;
};
```
