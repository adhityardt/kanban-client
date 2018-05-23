import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD3FSvcvWoldx8B21lJ0_ThvveTnpVI4hQ',
  authDomain: 'kanbanadhitya.firebaseapp.com',
  databaseURL: 'https://kanbanadhitya.firebaseio.com',
  projectId: 'kanbanadhitya',
  storageBucket: 'kanbanadhitya.appspot.com',
  messagingSenderId: '935862866557'
})

export const db = firebaseApp.database()
export const ref = db.ref('tasks')
