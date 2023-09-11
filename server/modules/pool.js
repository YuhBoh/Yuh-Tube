/* the only line you likely need to change is

 database: 'prime_app',

 change `prime_app` to the name of your database, and you should be all set!
*/

const pg = require('pg');
let pool;

// When our app is deployed to the internet 
// we'll use the DATABASE_URL environment variable
// to set the connection info: web address, username/password, db name
// eg: 
//  DATABASE_URL=postgresql://jDoe354:secretPw123@some.db.com/prime_app
if (process.env.DATABASE_URL) {
    pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}
// When we're running this app on our own computer
// we'll connect to the postgres database that is 
// also running on our computer (localhost)
else {
    pool = new pg.Pool({
      host: "localhost",
      port: 5432,
      database: "solo-project", // 	💥 Change this to the name of your database!
      // postgres:'//solo_project_user:71fhKUaSC1elKt8SfPQt1QKMH4l0lwta@dpg-cjtotofjbvhs73asdvag-a.oregon-postgres.render.com/solo_project'
      DATABASE_URL: 'postgres://qygczlvzfiegoz:9c965eb98907a2d236d8254e6c30e3ec6e0adf48a1687128f9c548bad3b903a5@ec2-52-45-200-167.compute-1.amazonaws.com:5432/dcjam7f25i4a2s',
    });
}

module.exports = pool;
