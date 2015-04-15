var fs = require("fs"),
	outputPath="./gpa.csv";

fs.readFile("./grades.csv", "utf8", function(err, data){
	// console.log(data);
	rows = data.split("\n");
	fs.writeFileSync(outputPath,"");
	for(var i=0; i<rows.length; i++){
		fs.appendFileSync(outputPath,rows[i]);
	}
});