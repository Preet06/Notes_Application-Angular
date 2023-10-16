import { Injectable } from '@angular/core';
import { Note } from './note'
import { Firestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private fs : Firestore) { }
}
