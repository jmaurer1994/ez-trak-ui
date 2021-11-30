import React from "react";
import Exercise from "./Exercise"

function ExerciseTable({ exercises, onDelete }) {
    
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={ exercise }
                    onDelete= { onDelete }
                    key={i} />)}
            </tbody>
            
        </table>
    );
}

export default ExerciseTable;