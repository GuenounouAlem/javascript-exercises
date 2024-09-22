const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear()
    let oldest = people.reduce((old, nextPerson) => {
        if (!nextPerson.yearOfDeath) {
            nextPerson.yearOfDeath = thisYear
            
        }
        if (!old.yearOfDeath) {
            old.yearOfDeath = thisYear
        }
        let nextAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth
        let oldAge = old.yearOfDeath - old.yearOfBirth


        return oldAge < nextAge ? nextPerson : old
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
