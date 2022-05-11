



// const data = require ('./data')///////////////////////////////////our module//
// console.log(data)
// console.log(data.firstName)
// console.log(data.lastName)
// console.log(data.functionTest(5,5))



////////////////////////////////////////////////////npm

///1*****npm init -y ------> craete package.jason
///2****npm i validator      *i(install)*
///3****npm i 
// var validator = require('validator');

// console.log(validator.isEmail('marim'));//=> true
/////////////////////////////////////////////////////////////////////////process.argv
// console.log(process.argv)

// if(process.argv[2]==="add")
// {
// console.log("add item")
// }
// else if (process.argv[2]==="remove")
// {
//     console.log("delete item")
// }
// else
// {
//     console.log("error")
// }
//////////////////////////////////////////////////////////////////yargs
///////////////////app to add notes with title and body ,add , delete .....///////////
const yargs = require('yargs')

const notes = require('./notes')
///add
yargs.command(
    {
        command:'add',
        describe:'add note',
        builder:{
            title:{
                describe:'this is an add title note',
                type:'string',
                demandOption:true
            },
            body:{
                describe:'this is an add body note',
                type:'string',
                demandOption:true
            }
           
        },
        handler:()=>{
            notes.addNote(yargs.argv.title , yargs.argv.body)
        }
       
    }
)

//delete
yargs.command(
    {
        command:'delete',
        describe:'delete note',
        builder:{
            title:{
                describe:'this is a delete title note',
                type:'string',
                demandOption:true
            }
        },
        handler:()=>{
            notes.removeNote(yargs.argv.title)
        }
    }
)

//list
yargs.command(
    {
        command:'list',
        describe:'list note',
        handler:()=>{
           notes.listNote()
        }
    }
)

///read
yargs.command(
    {
        command:'read',
        describe:'read note',
        builder:{
            title:{
                describe:'this is a read title note',
                type:'string',
                demandOption:true
            }
        },
        handler:()=>{
            notes.readNote(yargs.argv.title)
        }
    }
)

// console.log(yargs.argv)
yargs.parse()