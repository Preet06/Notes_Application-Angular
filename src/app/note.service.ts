import { Injectable } from '@angular/core';
import { Note } from './note'
import { Firestore, getFirestore } from '@angular/fire/firestore'
import { AngularFirestore } from "@angular/fire/compat/firestore/"; 

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesLists : any;

  constructor(private fs : AngularFirestore) { }
  
  addNotes(note:Note)
  {
    if(note.id!='')
    {
      this.fs.collection('Note').doc(note.id).set(note);
    }
    else{
      let id = this.fs.createId();
      note.id = id;
      console.log(note);
      this.fs.collection('Note').doc(id).set(note);
    }
   
    
  }

  getNotes(){
    // const db = getFirestore();
    // const citiesRef = this.fs.collection('Note');
    const cityRef = this.fs.collection('Note');
    const doc =  cityRef.get()
    return doc
  }

  /* get data by id */

// getIds(id:any){
//   const citiesRef = this.fs.collection('Note');
// // const snapshot =  citiesRef.where('capital', '==', true).get();


// const expensesCollection = this.fs.collection('/Note', ref => ref.where('id', '==', id));
// console.log(expensesCollection);
// const doc = this.fs.collection("Note",ref=>ref.where("id","==",id)).get()
// return doc;
//     // .subscribe(data=>data.forEach(el=>console.log(el.data())));
// }

deleteNotes(id:any)
{
//    const citiesRef = this.fs.collection('Note');
//  const snapshot =  citiesRef.where('capital', '==', true).get();


const expensesCollection = this.fs.collection('/Note', ref => ref.where('id', '==', id));
console.log(expensesCollection);
const doc = this.fs.collection("Note",ref=>ref.where("id","==",id)).get()
//.subscribe(data=>data.
//   forEach(function(doc) {
//     doc.ref.delete();
//   }
//     )
//     );
return doc;
}

editNotes(note:Note)
{
  this.deleteNotes(note.id);
}

// updateNode(note:Note)
// {
//   console.log("update service",note)
//   const collection = this.fs.collection('/Note');
//   const doc = this.fs.collection("Note",ref=>ref.where("id","==",note.id)).get()
//   .subscribe(data=>data.
//   forEach(function(doc) {
//     console.log("before-update",doc.data())
//     doc.ref.update({note_title: "Tution"})
//     console.log('After-Update',doc.data())
//   }
//     )
//     );
// }
}


