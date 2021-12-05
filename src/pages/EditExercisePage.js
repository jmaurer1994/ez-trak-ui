import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditExercisePage = ({ exerciseToEdit }) => {

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    let history = useHistory();

    const editExercise = async () => {
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, reps, weight, unit, date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200) {
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }

        history.push('/');
    }

    return (
        <div className="container form-container">
            <h2>Edit exercise</h2>
            <div>
                <div>
                    <label for="name">Exercise Name: </label>
                    <input
                        type="text"
                        value={name}
                        id="name"
                        onChange={e => setName(e.target.value)} />
                </div>

                <div>
                    <label for="reps">Reps: </label>

                    <input
                        type="number"
                        value={reps}
                        id="reps"
                        onChange={e => setReps(e.target.value)} />
                </div>

                <div>
                    <label for="weight">Weight: </label>

                    <input
                        type="number"
                        value={weight}
                        id="weight"
                        onChange={e => setWeight(e.target.value)} />
                </div>

                <div>
                    <label for="unit">Choose unit (kg/lb): </label>

                    <input
                        type="text"
                        list="unit_list"
                        id="unit"
                        value={unit}
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
                        onChange={e => setDate(e.target.value)} />
                </div>

                <button
                    onClick={editExercise}
                >Save</button>
            </div>
        </div>
    );
}

export default EditExercisePage;