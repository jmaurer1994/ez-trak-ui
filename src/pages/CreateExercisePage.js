import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateExercisePage() {

    const [name, setName] = useState('Squats');
    const [reps, setReps] = useState(Math.floor(Math.random()*10));
    const [weight, setWeight] = useState(Math.floor(Math.random() * 100));
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('11-' + Math.floor((Math.random()*30)) + '-21');

    let history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };

        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Log exercise</h2>
            <input
                type="text"
                placeholder="Enter name of exercise here"
                value={ name }
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={ reps }
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={ weight }
                placeholder="Enter weight here"
                onChange={e => setWeight(e.target.value)} />

            <input
                type="text"
                list="unit_list"
                placeholder="Choose unit (lb/kg)"
                onChange={e => setUnit(e.target.value)} />


            <datalist id="unit_list">
                <option value="lb" />
                <option value="kg" />
            </datalist>

            <input
                type="text"
                placeholder="Enter date here"
                value={ date }
                onChange={e => setDate(e.target.value)} />
           
            <button
                onClick={ createExercise }
            >Add</button>
        </div>
    );
}

export default CreateExercisePage;