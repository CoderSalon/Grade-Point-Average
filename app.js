var fs = require("fs"),
	outputPath="./gpa.csv";

fs.readFile("./grades.csv", "utf8", function(err, data){
	// console.log(data);
	rows = data.split("\n");
	fs.writeFileSync(outputPath,"Student ID,GPA");
	for(var i=1; i<rows.length; i++){
		var elems = rows[i].split(','),
			score = 0;
		for(var j=1; j<elems.length; j++){
			if (elems[j]=='A') {
				score += 4;
			} else if (elems[j]=='B') {
				score += 3;
			} else if (elems[j]=='C') {
				score += 2;
			} else if (elems[j]=='D') {
				score += 1;
			}
		}
		fs.appendFileSync(outputPath,elems[0]+","+(score/5));
	}
});