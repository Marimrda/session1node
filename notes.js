const fs = require('fs')
const { title } = require('process')
// const { title } = require('process')
const addNote = (title , body)=>
{
const notes = loadNotes()
/////////////////////////////////////////////////////////////////using filter------>return array
// const duplicateTitle = notes.filter((note)=>{
    
//     return note.title===title
// })
// console.log(duplicateTitle)
// if(duplicateTitle.length===0)
// {
//     notes.push({
//         title,
//         body
//     })
//     saveNotes(notes)
//     console.log("saved")
// }
// else
// {
//     console.log("not saved it is duplicated")
// }

// }
///////////////////////////////////////////////////////////////////using find ---> return one element
const duplicateTitle = notes.find((ele)=>{
    
    return ele.title===title
})
console.log(duplicateTitle)
if(!duplicateTitle)
{
    notes.push({
        title,
        body
    })
    saveNotes(notes)
    console.log("saved")
}
else
{
    console.log("not saved it is duplicated")
}

}
//////////////////////////////////////////////////////////////////////////////delete note
const removeNote = (title)=>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter((obj)=>
    {
return obj.title!==title
    })
    if(notes.length===notesToKeep.length)
    {
        console.log("not found this title")
    }
    else
    { 
        saveNotes(notesToKeep)
        console.log("removed")

    }
    // console.log(notesToKeep)
    // saveNotes(notesToKeep)
    // console.log("removed")
}
///////////////////////////////////////////////////////////////////////read note using find
const readNote = (title)=>
{
    const notes = loadNotes()
    const note = notes.find((objc)=>
    {
        return objc.title===title
    })
    
    if(note)
    {
        // saveNotes(notes)
        // console.log(notes)
        console.log('note readed')
        console.log(note)
    }
    else
    {
        console.log('note is not found')
    }
}
////////////////////////////////////////////////////////////////////////list notes bu using foreach
const listNote = ()=>
{
    const notes = loadNotes()
    notes.forEach((obje)=>
    {
        console.log(obje.title)
    })
}

///////////////////////////////////////////////////////////
const loadNotes = ()=>
{
    try
    {
       const data = fs.readFileSync('notes.json').toString()
       return JSON.parse(data)
    }
    catch(e)
    {
        return []
    }
}
///////////////////////////////////////////////////////////
const saveNotes = (notes)=>
{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json' , saveData)
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}