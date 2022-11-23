var person = {
  firstName: 'Jordan',
  lastName: 'Dawson',
  hobby: 'videogames',
  job: 'unemployed',
  previousJob: 'professional detailing'
};
console.log(person);

var fullName = 'Jordan Dawson';
console.log("The person's name is:", fullName);
person.job = 'unemployed';
console.log("The person's current job:", person.job);
person.previousJob = 'professional detailing';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object', person);
