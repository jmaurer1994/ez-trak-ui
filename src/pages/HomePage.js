import React from 'react';
import ExerciseTable from '../components/ExerciseTable'
import { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);

    let history = useHistory();

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const exercises = await response.json();
        setExercises(exercises);
    }

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { 
                method: 'DELETE' 
            });
            console.log(response.status);
        if (response.status === 204) {
            console.log("Removing entry from local list.")
            setExercises(exercises.filter(exercise => exercise._id !== _id));
        } else {
            console.error(`Failed to delete exercise with id = ${_id}, status code = ${response.status}`);
        }
    }



    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <div className="container">
            <ExerciseTable exercises={ exercises } onDelete={ onDelete } onEdit={ onEdit }/>
        </div>
    );
}

export default HomePage;