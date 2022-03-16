let request = require("request");

exports.getAll = (req, res) => {
    
    request('https://jsonplaceholder.typicode.com/posts',
        function(error, response, body){

            if(!error && response.statusCode==200){
                response = JSON.parse(body);
                res.send(response);
            }else{
                console.log(response.statusCode + response.body);
                res.send("An error occurred, it could be from your api");
            }
        });

  };
  