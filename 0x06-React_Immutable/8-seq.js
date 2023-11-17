import { Seq } from 'immutable';

// Import the immutable.js library
const Immutable = require('immutable');

// Define the function printBestStudents
function printBestStudents(object) {
  // Use the seq method to create a lazy sequence from the object
  const seq = Immutable.Seq(object);

  // Filter the sequence by the score property
  const filtered = seq.filter(student => student.score >= 70);

  // Map the sequence by the firstName and lastName properties
  const mapped = filtered.map(student => {
    // Capitalize the first letter of the first name and the last name
    const firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1);
    const lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1);

    // Return a new object with the capitalized names
    return { firstName, lastName };
  });

  // Convert the sequence to a plain object
  const result = mapped.toObject();

  // Print the result to the console
  console.log(result);
}

