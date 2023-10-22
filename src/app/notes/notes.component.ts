import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator,FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
 

  noteForm!:FormGroup

  noteObj : Note = {
    id: '',
    note_title: '',
    note_dec: ''
  }
  list: any;
  // notesList!: Note;
  notesLists : any;
  comp : any[] = []
  constructor(private fb:FormBuilder , private noteService:NoteService){

    this.noteForm = this.fb.group({
      note_title:['',Validators.required],
      note_dec:['',Validators.required],
    })
  }
 
  ngOnInit(): void {
    this.getNote();
 
  }

  addNote(){
  this.noteObj.id = ''
  this.noteObj.note_dec = this.noteForm.value.note_dec;
  this.noteObj.note_title = this.noteForm.value.note_title
  this.noteService.addNotes(this.noteObj)
  this.noteForm.reset();

  this.getNote();
  }

  getNote()
  {
     this.noteService.getNotes().subscribe((e) =>
     {
       const noteList = e.docs
       for(var i in noteList)
       {
        this.comp.push(noteList[i].data());
       }
     });
     this.notesLists = this.comp
     console.log(this.comp)
     this.comp = []

     
   }

   /* get data by id */

  //  getId(id:any)
  //  {
  //   console.log(id)
  //   this.noteService.getIds(id).subscribe(data=>data.forEach(
  //     el=>{
  //       console.log(el.data())
  //       this.notesLists = []
  //       this.notesLists.push(el.data())
  //       console.log('Print',this.notesLists)
  //     }))

  //     this.notesLists = []
  //     console.log('Print',this.notesLists)
      
  //  }

   deleteNote(id:any)
   {

      this.noteService.deleteNotes(id).subscribe(data=>data.
      forEach(function(doc) {
         doc.ref.delete();
                             }));
  
      this.getNote();
   }


   editNote(note:Note)
   {

        // (<HTMLInputElement>document.getElementById('note_title')).value = note.note_title;
        // (<HTMLInputElement>document.getElementById('note_dec')).value = note.note_dec;
        // this.noteObj.id = note.id
        // this.noteObj.note_dec = note.note_dec;
        // this.noteObj.note_title = note.note_title

        this.noteForm.patchValue({
          note_title:note.note_title,
          note_dec:note.note_dec,
        })
        this.deleteNote(note.id)
       
        


        
   }

  //  updateNote(note:Note)
  //  {
  //   this.noteForm.patchValue({
  //     note_title:note.note_title,
  //     note_dec:note.note_dec,
  //   })
  //       this.noteObj.id = note.id
  //       this.noteObj.note_dec = note.note_dec;
  //       this.noteObj.note_title = note.note_title
  //       console.log("update",this.noteObj)
  //       this.noteService.updateNode(note)
  //  }






}
