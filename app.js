var fs = require("fs"),
	outputPath="./gpa.csv";

fs.readFile("./grades.csv", "utf8", function(err, data){

	// 這行程式碼是用來把讀進來的資料一行一行的「切開」，
	// 成為一個陣列(Array)，放進rows裡面
	rows = data.split("\n");

	fs.writeFileSync(outputPath,"");
	for(var i=0; i<rows.length; i++){

		//==== 以下是你要改的地方 ====//
		
		fs.appendFileSync(outputPath,rows[i]);
		
		//==== 以上是你要改的地方 ====//
		
	}
});