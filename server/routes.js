var fs = require('fs')
var parseString = require('xml2js').parseString;

module.exports = function(app){
    app.get('/test', function(req, res){ res.status(200).send('this is the body') });

    /**
     * Entry point for XML parsing; this is stub data and should be replaced
     */
    app.get('/patient/data',function(req, res){
        var tempFilepath = '/home/vagrant/src/app/data/cerner_ccda.xml';
        fs.readFile(tempFilepath, 'utf8', function (err, xml) {
          if (err) {
            res.status(500).send('Error fetching XML');
          }
          parseString(xml, function (err, result) {
            if (err) {
                res.status(500).send('Error parsing XML');
            }
            res.status(200).send(result);  
          });
        });
    });
    // End stub

}