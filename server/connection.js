var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://busidec:busidecpwd@localhost:9200/'
  ]
});

module.exports = client; 