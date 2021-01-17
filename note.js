const fs = require("fs");
const chalk = require("chalk");
const constants = require("./Utils/Contants");
const addNote = (title, body) => {
  let notes = readFromNotesFile();
  const deplicateNotes = notes.find((note)=>{
    return note.title === title;
  });
   if(deplicateNotes === undefined){
      notes.push({
         title :title,
         body :body,
         isCompleted : false
        })
        writeInNotesFile(notes)
        console.log(chalk.green.bold.inverse("Added Bro"))
   }
   else
     console.log(chalk.red.bold.inverse("already Added Bro"))
};
const removeNote =(title)=>{
   let notes = readFromNotesFile();
   const  restNotes = notes.filter((note) => {
     return note.title !== title;
   });
  writeInNotesFile(restNotes)
  console.log(chalk.green.bold.inverse("Removed"))
}
const showAllNotes = ()=>{
 console.log(chalk.green.bold.inverse("your notes"))
  const notes = readFromNotesFile()
  notes.forEach(element => {
    printNoteDetails(element)
  });
}
const readFromNotesFile = () => {
  try {
    const dataFromFile = fs.readFileSync(constants);
    return JSON.parse(dataFromFile.toString());
  } catch (err) {
    return [];
  }
};
const writeInNotesFile = (note) => {
  fs.writeFileSync(constants, JSON.stringify(note));
};
const printNoteDetails = (note)=>{
  console.log("____________________________________________ \n")
    console.log("Note Title : ",note.title)
    console.log("Note Body : " ,note.body)
    printNoteState(note.isCompleted)
}
const searchForSpecificNote = (title)=>{
      const notes = readFromNotesFile()
      const note = notes.find((element)=>{
        return element.title === title
      })
      if(note !== undefined){
        console.log(chalk.green.bold("your Note"))
        printNoteDetails(note)
      }else 
      console.log(chalk.red.bold.inverse("Not Found \n"))
}
const findInCompleteNotes=()=>{
  const notes = readFromNotesFile()
  const inCompeleteNotes = notes.filter((note)=>{
    return note.isCompleted === false
  })
  if(inCompeleteNotes.length > 0){
    console.log(chalk.green.bold("your InComplete Notes"))
    inCompeleteNotes.forEach(element => {
      printNoteDetails(element)
    });
  }else 
  console.log(chalk.red.bold("No InComplete Notes"))

}

const printNoteState = (isCompleted)=> isCompleted? console.log("the Note is Status is Completed \n"):console.log("the Note is Status is inCompleted \n");
module.exports = {
  removeNote :removeNote,
  addNote: addNote,
  showAllNotes :showAllNotes,
  findNote :searchForSpecificNote,
  findInCompleteNotes :findInCompleteNotes
};
