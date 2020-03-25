try {
   var autobahn = require('autobahn');
} catch (e) {
   // when running in browser, AutobahnJS will
   // be included without a module system
}

try {
    var mysql = require('mysql');
} catch (e) {
   // when running in browser, AutobahnJS will
   // be included without a module system
}

var connection = new autobahn.Connection({
   url: 'ws://127.0.0.1:8080/ws',
   realm: 'realm1'}
);

var con = mysql.createConnection({
  host: "172.17.0.1",
  user: "crossbar",
  password: "sidali",
  database: "testdb",
});
console.log("OKOKOKOK");


connection.onopen = function (session)
	 {
		function onevent1(args) {
					 // var sql = "INSERT INTO sidali (msg, prenom) VALUES ("+args[0]+", 'sidalilo')";
                                          var sql = "INSERT INTO sidali (msg, prenom) VALUES (0110, '"+args[0]+"')";
  					  con.query(sql, function (err, result) {
   					  if (err) throw err;
   					  console.log("1 record inserted");
                                          });
                            		  console.log("Got event:", args[0]);
                                          console.log(typeof args[0]);
      			    	        }

                session.subscribe('com.myapp.hello', onevent1);
         };

connection.open();
