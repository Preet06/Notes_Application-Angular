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
  notesList: any;
  constructor(private fb:FormBuilder , private noteService:NoteService){

    this.noteForm = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
    })
  }
 
  ngOnInit(): void {
    // this.getNote();
 
  }

  addNote(){
  this.noteObj.id = ''
  this.noteObj.note_dec = this.noteForm.value.title;
  this.noteObj.note_title = this.noteForm.value.description
  console.log(this.noteObj)
  }

  // getNote()
  // {
  //     // console.log(this.noteService.getNote())
  //     this.noteService.getNotes().subscribe((e)=>
  //     {
  //       console
  //     })
   
   
  //  }

   deleteNote(note:Note)
   {
      // this.noteService.deleteNotes(note).then(()=>
      // console.log('It is deleted'))

   }




}
