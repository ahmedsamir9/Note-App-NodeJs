
const yargs = require("yargs")
const notes = require("./note")
yargs.version("1.0.0")
yargs.command({
    command : "add",
    describe : "adding New Note to file",
    builder:{
            title: {
                describe : "note title",
                demandOption : true,
                type : 'String'
            },
            body: {
                describe : "note title",
                demandOption : true,
                type : 'String'
            }

    },
    handler :(argv)=>{
            notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command : "remove",
    describe : "remove Note to file",
    builder:{
            title: {
                describe : "note title",
                demandOption : true,
                type : 'String'
            }

    },
    handler :(argv)=>{
            notes.removeNote(argv.title)
    }
})
yargs.command({
    command : "getIncomplete",
    describe : "get inComplete notes form notes file",
    handler :(argv)=>{
            notes.findInCompleteNotes()
    }
})
yargs.command({
    command : "shownotes",
    describe : "Show all notes in file",
    handler :(argv)=>{
            notes.showAllNotes()
    }
})
yargs.command({
    command : "findnote",
    describe : "find specific note form notes",
    builder:{
            title: {
                describe : "note title",
                demandOption : true,
                type : 'String'
            }
    },
    handler :(argv)=>{
            notes.findNote(argv.title)
    }
})
console.log(yargs.argv)