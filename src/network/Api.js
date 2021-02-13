const getPeople = async () => {
    console.log("getPeople");

    return [
        { name: "Bruno", age: "30", job: "Developer", experience: "I'm a software developer." },
        { name: "Natalia", age: "26", job: "Mother", experience: "I'm a mother." },
        { name: "Bruna", age: "06", job: "Student", experience: "I'm a student." },
        { name: "Eduardo", age: "04", job: "Baby", experience: "I'm a baby." },
        { name: "Fulano", age: "00", job: "Unknown", experience: "I'm a unknown situation.", hobby: "But I have a hobby." }
      ]
}


export {
    getPeople
}