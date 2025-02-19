import { FormEvent, memo, useState } from "react";
import Trainer from "./Trainer";

const TrainerForm = memo(function(props: {fetchTrainers: () => void}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [specialism, setSpecialism] = useState("");

    console.log("Form is loaded");
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data: Trainer = {
            name,
            age,
            specialism
        };

        try {
        const res = await fetch("http://localhost:8081/trainers", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": 'application/json'
            }
        });
        if (res.status === 201) props.fetchTrainers();
        else throw Error("Failed to create trainer")
    } catch(error) {
        console.error(error);
        
    }

    }

    return ( <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input type="text" name="name" id="nameInput" value={name} onChange={e => setName(e.target.value)}/>
        <br />
        <label htmlFor="ageInput">Age</label>
        <input type="number" name="age" id="ageInput" value={age} onChange={e => setAge(parseInt(e.target.value))}/>
        <br />
        <label htmlFor="specialismInput">Specialism</label>
        <input type="text" name="specialism" id="specialismInput" value={specialism} onChange={e => setSpecialism(e.target.value)}/>
        <br />
        <button type="submit">Add</button>
    </form> );
});

export default TrainerForm;