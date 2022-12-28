// console.log("hello");
// process.argv[]
//  0        1       2
// node   index    input
console.log("mariam")
const student= require('./student')
switch (process.argv[2]){
    case "add":
        student.add(process.argv[3]);
        break;
    
    case "list":
            student.list()
        break;
    
    case "edit":
        student.edit(process.argv[3],process.argv[4])
        break;

    case "del":
        student.del(process.argv[3])
        break;
    
    case "sum":
        student.sum()
        break;
}

