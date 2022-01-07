const fs=require('fs')


const addStudent=(nam,id,grades=[])=>{
const students=loadStudents();

const duplicateId=students.find((student)=>{
    return student.id===id
})
console.log(duplicateId)
if(! duplicateId){
    students.push({
        id,
        nam,
        grades
    })
    saveStudents(students);
    console.log('student saved successfully')}

else{
    console.log('error')
}
}

//////delete
const deleteStudent=(id)=>{
    const students=loadStudents();
    const studentsToKeep=students.filter((student)=>{
return student.id !==id;
    })
    console.log(students.length);
    console.log(studentsToKeep.length)
    if(students.length !==studentsToKeep.length){
        saveStudents(studentsToKeep);
        console.log('student is removed');
    }
    else{
        console.log('no student found')
    }
}

//read
const readStudents = (id) =>{
    const students = loadStudents()
    const student = students.find((student)=>{
        return student.id === id
    })
console.log(student)
    if(student){
        console.log(student.nam,student.grades)
    }
    else{
        console.log('No student is found')
    }
}
const listStudents = () =>{
    const students = loadStudents()
    students.forEach((student)=>{
        console.log(student.id)
    })
}
const loadStudents = () =>{
    try{
        const dataBuffer = fs.readFileSync('student.json').toString()
        return JSON.parse(dataBuffer)  // object
    }
    catch(e){
        return []
    }

}

const saveStudents = (students) =>{
 
    const saveData = JSON.stringify(students)
    fs.writeFileSync('student.json',saveData)
}

module.exports={
    addStudent,
    deleteStudent,
    readStudents,
    listStudents,
    loadStudents,
}

// grades=function(a,b,c){
//     total=a+b+c;
//     return total;

// }