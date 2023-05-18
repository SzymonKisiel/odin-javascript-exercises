const findTheOldest = function(people) {
    return people
        .map(person => {
            let age = 0;
            if (person.yearOfDeath == undefined) {
                let now = new Date()
                age = now.getFullYear() - person.yearOfBirth;
            }
            else {
                age = person.yearOfDeath - person.yearOfBirth;
            }

            return {
                name: person.name,
                yearOfBirth: person.yearOfBirth,
                yearOfDeath: person.yearOfDeath,
                age: age
            };
        })
        .sort((a, b) => a.age - b.age).pop();
};

// Do not edit below this line
module.exports = findTheOldest;
