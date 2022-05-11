const student = { //////////////an object
    name:'marim',
    age:23
}
console.log(student)


//////////////////////////////convert object to jason 

const studentJason = JSON.stringify(student)
console.log(studentJason)
//////////////////////////////////////////////////make a file 

const fs = require ('fs') 
fs.writeFileSync('test.json' , studentJason) //write in the file
console.log(fs.readFileSync('test.json').toString())

////////////////////////////////////convert json to object
const studentObject = JSON.parse(studentJason)
console.log(studentObject)
//////////////////////////////////////edit object
studentObject.name = 'mero'
studentObject.age = 30
////////////////////////////////////convert object to json
const studentObjectNew = JSON.stringify(studentObject)
console.log(studentObjectNew)

////////////////////////////////////write in file by editing
fs.writeFileSync('test.json' , studentObjectNew)



fs.writeFileSync('test.json' , studentObjectNew.stringify(studentObject)) //////////// اختصارا لاخر خطوتين ف بعض



