var names = ["John", "Jane", "Mike", "Swikar", "Jacob", "Emily", "Jyoti", "Trinh", "James", "Avishek"];

(function() {
  const greetings = {
    hello: ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Hej", "Salam", "Namaste", "Konnichiwa", "Annyeong"],
    goodbye: ["Goodbye", "Adiós", "Au revoir", "Addio", "Tschüss", "Hej då", "Ma'a as-salama", "Alvida", "Sayōnara", "Annyeong"]
  };

  names.forEach(function(name) {
    let firstChar = name.charAt(0).toLowerCase();
    let greetType = (firstChar === 'j') ? greetings.goodbye : greetings.hello;

    greetType.forEach(function(word, i) {
      console.log(`${word}, ${name}!`);
    });
  });
}) ();