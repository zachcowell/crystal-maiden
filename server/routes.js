var fs = require('fs')
var xml2js = require('xml2js');

module.exports = function(app){
    app.get('/test', function(req, res){ res.status(200).send('this is the body') });

    /**
     * Entry point for XML parsing; this is stub data and should be replaced
     */
    app.get('/patient/data',function(req, res){
        var parser = new xml2js.Parser();
        var tempFilepath = '/home/vagrant/src/app/data/cerner_ccda.xml';
        fs.readFile(tempFilepath, function(err, xml) {
            if (err) {
                res.status(500).send('Error fetching XML');
            }
            parser.parseString(xml, function (err, result) {
                if (err) {
                    res.status(500).send('Error parsing XML');
                }
                res.status(200).send(result);  
            });
        });
    });
    // End stub

}


