const yargs=require('yargs');
const student=require('./student');

yargs.command({
    command:'add',
    describe:'Add students',
    // determine / define options/data command will deal with
    // {
    //     title:'food',
    //     body:'eat at 1PM'
    // }
    builder:{
        nam:{
            describe:'This is id in add command',
            demandOption:true,
            type:'string'
        },
        id:{
            describe:'This is id in add command',
            demandOption:true,
            type:'number'

        },
        grades:{
            grades=function(){
                grades.push({
                    fGrade,
                    sGrade,
                    lGrade
                })
                total=fGrade+sGrade+lGrade;
                console.log(total);
                }
        }
    },
    handler:(x)=>{
        
        student.addStudent(x.nam,x.id,x.grades)
    }
})



yargs.command({
    command:'delete',
    describe:'Delete studend',
    builder:{
        id:{
            describe:'This is id in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
      
        student.deleteStudent(x.id)
    }
})

// listAll
yargs.command({
    command:"list",
    describe:'List students',
    handler:()=>{
        student.listStudents()
    }
})
// read
yargs.command({
    command:'read',
    describe:'Read students',
    builder:{
    id:{
        describe:'This is id in read command',
        demandOption:true,
        type:'number'
    }
    },
    handler:(x)=>{
        student.readStudents(x.id)
    }
})
// console.log(yargs.argv)
yargs.parse()