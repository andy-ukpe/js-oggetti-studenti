// - Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e
// stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

//creo un oggetto studente con nome, cognome, età

// var studente = {
//   nome : 'Carlo',
//   cognome : 'Manfredi',
//   eta : '21',
// };
//
// // stampare l'oggetto attraverso un ciclo for-in
//
// for (var chiave in studente){
//   console.log(studente[chiave]);
// }
//
// // creare un array di oggetti di studenti
//
// var studenti = [
//   {
//     'nome': 'Carlo',
//     'cognome': 'Manfredi',
//     'eta' : '21',
//   },
//   {
//     'nome': 'Serse',
//     'cognome': 'Mulini',
//     'eta' : '19',
//   },
//   {
//     'nome': 'Lara',
//     'cognome': 'Camerati',
//     'eta' : '20',
//   },
//   {
//     'nome': 'Erica',
//     'cognome': 'Wilt',
//     'eta' : '23',
//   },
// ]
//
// // ciclare tutti gli studenti e stampare per oguno nome e cognome
//
// for (var i = 0; i < studenti.length; i++){
//   console.log(studenti[i]);
//   console.log('Nome studente:' + studenti[i].nome);
//   console.log('Cognome studente:' + studenti[i].cognome);
// }
//
// // far inserire all'utente nome, cognome e eta nell'oggetto per poi metterlo nel push
// var nomeUtente = prompt('inserisci il tuo nome');
// var cognomeUtente = prompt('inserisci il tuo cognome');
// var etaUtente = prompt('inserisci il tuo eta');
// var nuovoStudente = {
//   nome: nomeUtente,
//   cognome: cognomeUtente,
//   eta: etaUtente,
// }
// studenti.push(nuovoStudente);
// console.log(studenti)
//
// for (var i = 0; i < studenti.length; i++){
//   var studente = studenti[i];
//   console.log(studenti[i]);
//   console.log('Nome studente:' + studente.nome);
//   console.log('Cognome studente:' + studente.cognome);
//   console.log('età studente:'+ studente.eta)
// }
// stampare risultati attraverso handelbars
$(document).ready(function(){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var studentiData = [
    {
      'nome': 'Carlo',
      'cognome': 'Manfredi',
      'eta' : '21',
    },
    {
      'nome': 'Serse',
      'cognome': 'Mulini',
      'eta' : '19',
    },
    {
      'nome': 'Lara',
      'cognome': 'Camerati',
      'eta' : '20',
    },
    {
      'nome': 'Erica',
      'cognome': 'Wilt',
      'eta' : '23',
    },
  ]

  for (var i = 0; i < studentiData.length; i++) {
    var singoloStudente = studentiData[i];
    var html = template(singoloStudente);

    $('.container').append(html);
  }
  }
  studenti.push(nuovoStudente);
  console.log(studenti)
}


)
