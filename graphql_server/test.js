const axios = require('axios');

first = "luka"
last = "last"
pass ="banana"
email="luka-test4@test.com"
var query = `mutation {
    signUp(firstName: "${first}",lastName: "${last}", password: "${pass}",email: "${email}")
}`;
 
axios({
  url:'http://localhost:8080/query', 
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  data: {query},
  }).then(r => {
    const {data:{signUp},errors} = r.data;
    console.log(signUp,errors);
  })