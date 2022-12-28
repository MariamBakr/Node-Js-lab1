let student=[{name:"mariam", grade:100, Id:1},
{name:"ahmed", grade: 90, Id:2}];

function add(info){
    student.push(info)
    console.log(student)
}

function list(){

        console.log(student)
    
}

function edit(id,updated_Grade){
    
    for(i=0; i<student.length; i++){
        if(student[i].Id==id){
        student[i].grade=updated_Grade;
        console.log(student[i])
    }}
}

function del(id){
    for(i=0; i<student.length; i++){
        if(student[i].Id==id){
        student.splice(student[i],1);
        console.log(student)
    }}
}

function sum(){
    let sum=0
    for(i=0; i<student.length; i++){
    sum += student[i].grade;
    }
    console.log(sum)
}

module.exports={add,list,edit,del,sum}