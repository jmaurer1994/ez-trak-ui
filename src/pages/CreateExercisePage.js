import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreateExercisePage() {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

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
        <div className="container form-container">
            <h2>Create exercise</h2>
            <div>
                <div>
                    <label for="name">Exercise Name: </label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        placeholder="Enter name of exercise here"
                        onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <label for="reps">Reps: </label>

                    <input
                        type="number"
                        value={reps}
                        id="reps"
                        placeholder="Enter reps here"
                        onChange={e => setReps(e.target.value)} />
                </div>

                <div>
                    <label for="weight">Weight: </label>

                    <input
                        type="number"
                        value={weight}
                        id="weight"
                        placeholder="Enter weight here"
                        onChange={e => setWeight(e.target.value)} />
                </div>

                <div>
                    <label for="unit">Choose unit (kg/lb): </label>

                    <input
                        type="text"
                        list="unit_list"
                        value={unit}
                        id="unit"
                        placeholder="Choose unit (lb/kg)"
                        onChange={e => setUnit(e.target.value)} />

                    <datalist id="unit_list">
                        <option value="lb" />
                        <option value="kg" />
                    </datalist>
                </div>

                <div>
                    <label for="date">Date: </label>

                    <input
                        type="text"
                        value={date}
                        id="date"
                        placeholder="Enter date here"
                        onChange={e => setDate(e.target.value)} />
                </div>

                <button
                    onClick={createExercise}
                >Save</button>
            </div>
        </div>
    );
}

export default CreateExercisePage;