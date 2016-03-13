var tumblr = require("tumblr.js");
var client = tumblr.createClient(
    {
        consumer_key: "6rSJ5CUgBadsygxmILuaDkrlCwPgGjO9qJAMGleNKUzbUcEqe0"
        
    });
client.tagged("pearlmethyst", function(err, data) {
   if (err) {
       console.warn(err);
   } else {
       console.log(data);
   }
});