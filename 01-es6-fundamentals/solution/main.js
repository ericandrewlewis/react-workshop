// EXERCISE:
//
// Step 1: Extract the year of the film with destructuring syntax
// and print it with the other movie information.
//
// Step 2: Change the string to a template literal.
function printMovieInfo(movie) {
  const { title, star, year } = movie;
  console.log(`title (${year}) starring star`);
}

printMovieInfo({
  title: 'Jurrassic Park',
  year: '1993',
  star: 'Laura Dern'
});

// EXERCISE: convert the variable definitions in this function
// to use the const and let keywords instead of var.
function talkLikeMatthewMcConaughey() {
  const alright = 'alright';
  for (let i = 0; i <= 2; i++) {
    console.log(alright);
  }
}

talkLikeMatthewMcConaughey();

// EXERCISE: Add a bark function to the Dog class which returns "woof woof"
// Log the output of a dog barking to the console.
//
class Dog {
  bark() {
    return 'woof';
  }
  render() {
    return `▼・ᴥ・▼`;
  }
}

const sparky = new Dog();
console.log( sparky.bark() );
