import React from 'react';
import { AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><AiOutlineEdit onClick={() => onEdit(exercise)}/></td>
            <td><AiOutlineDelete onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;