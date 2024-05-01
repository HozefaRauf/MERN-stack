var mongoose=require('mongoose');
var db = mongoose.connection;
var dbUrl = 'mongodb://localhost:27017/humanresources';
var TeamSchema = new mongoose.Schema({
name: {
type: String,
required: true
}
});
var Team = mongoose.model('Team', TeamSchema);

mongoose.connect(dbUrl, function (err) {
    if (err) {
    return console.log('there was a problem connecting to the database!' + err);
    }
    console.log('connected!');
    var team = new Team({
    name: 'Product Development'
    });
    team.save(function (error, data) {
    if (error) {
    console.log(error);
    } else {
    console.dir(data);
    }
    db.close();
    process.exit();
    });
    });
    



