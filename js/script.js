// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
// stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

//creo un oggetto studente con nome, cognome, età

var studente = {
  nome : 'Carlo',
  cognome : 'Manfredi',
  eta : '21',
};

// stampare l'oggetto attraverso un ciclo for-in

for (var chiave in studente){
  console.log(studente[chiave]);
}