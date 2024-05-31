import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, setAssignment } from "../Assignments/reducer";
import { parseDateString } from "./parseDateString";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const { assignment } = useSelector((state: any) => state.assignmentsReducer);
    console.log("cid:", cid);
    console.log("aid:", aid);

    // Q1: click add assignment button, aid is always undefine
    // Q2: 
    // a) click add first, the form looks great
    // b) edit existed assignment first then click add assignment, the form always show last opened assignment's content

    const handleSave = () => {
        if (aid !== "new") {
            dispatch(updateAssignment({ ...assignment, _id: aid, course: cid }));
            console.log("not new track")
            console.log(assignment)
        } else {
            const newAssignment = { ...assignment, _id: new Date().getTime().toString(), course: cid };
            dispatch(addAssignment(newAssignment));
            console.log("new track")
            console.log(assignment)
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    // const isNew = aid === "new";
    // console.log("isNew:", isNew);

    const parsedDueDate = parseDateString(assignment.dueDate)
    const parsedAvailableFrom = parseDateString(assignment.availableFrom)
    const parsedAvailableUntil = parseDateString(assignment.availableUntil)
    // console.log(assignment.availableUntil)
    // console.log(parsedAvailableUntil)

    return (
        <div className="flex-fill">
            <div id="wd-assignments-editor" className="ms-5 me-5 row">
                <form >
                    <div>
                        <label htmlFor="title" className="col col-form-label">Assignment Name</label>
                        <div className="col mb-3">
                            <input
                                id="title"
                                className="form-control"
                                value={assignment.title}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                            />
                        </div>
                        <div className="row mb-3">
                            <textarea
                                id="assignmentDescription"
                                className="form-control mb-2"
                                cols={10}
                                value={assignment.description}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}
                            />
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="points" className="col-3 col-form-label text-end">Points</label>
                            <div className="col border ms-2.3 me-2.5 rounded">
                                <input
                                    id="points"
                                    className="col-9 form-control border-0"
                                    value={assignment.points}
                                    onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-3   text-end">Assign</div>
                            <div className="col border">
                                <label htmlFor="dueDate" className="col-form-label text-end">Due</label>
                                <div className="col">
                                    <input
                                        type="datetime-local"
                                        id="dueDate"
                                        className="form-control"
                                        value={parsedDueDate}
                                        min={parsedAvailableUntil}
                                        onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))}
                                    />
                                </div>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="availableFrom" className="col-form-label">Available From</label>
                                        <input
                                            type="datetime-local"
                                            id="availableFrom"
                                            className="form-control"
                                            value={parsedAvailableFrom}
                                            onChange={(e) => dispatch(setAssignment({ ...assignment, availableFrom: e.target.value }))}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="availableUntil" className="col-form-label">Available Until</label>
                                        <input
                                            type="datetime-local"
                                            id="availableUntil"
                                            className="form-control"
                                            value={parsedAvailableUntil}
                                            min={parsedAvailableFrom}
                                            onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntil: e.target.value }))}
                                        />
                                    </div>
                                </div>




                            </div>


                        </div>
                        <hr />
                        <div className="row mb-3 float-end">
                            <div className="col">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                                <button
                                    onClick={handleSave}
                                    className="btn btn-success me-2 float-end"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}



// // AssignmentEditor.js
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { addAssignment, updateAssignments } from "../Assignments/reducer";

// export default function AssignmentEditor() {
//     const { cid, aid } = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const assignment = useSelector(state =>
//         state.assignments.assignments.find(assignment => assignment._id === aid)
//     );


//     const initialFormState = assignment ? { ...assignment } : {
//         _id: '',
//         title: '',
//         description: '',
//         availableFrom: '',
//         availableUntil: '',
//         dueDate: '',
//         points: 100,
//         course: cid
//     };

//     const [formState, setFormState] = useState(initialFormState);
//     const handleSave = () => {
//         if (aid !== 'new') {
//             dispatch(updateAssignments({ ...formState, _id: aid, course: cid }));
//         } else {
//             dispatch(addAssignment({ ...formState, _id: new Date().getTime().toString(), course: cid }));
//         }
//         navigate(`/Kanbas/Courses/${cid}/Assignments`);
//     };
//     return (
//         <div className="flex-fill">
//             <div id="wd-assignments-editor" className="ms-5 me-5 row">
//                 <form onSubmit={(e) => e.preventDefault()}>
//                     <div>
//                         <div className="mb-3">
//                             <label htmlFor="title" className="col col-form-label">Assignment Name</label>
//                             <div className="col">
//                                 <input
//                                     id="title"
//                                     className="form-control"
//                                     value={formState.title}
//                                     onChange={(e) => setFormState({ ...formState, title: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row mb-3">
//                             <label htmlFor="description" className="col-form-label">Description</label>
//                             <div
//                                 id="description"
//                                 className="form-control contentEditable"
//                                 contentEditable="true"
//                                 onBlur={(e) => setFormState({ ...formState, description: e.target.innerHTML })}
//                             >
//                                 {formState.description}
//                             </div>
//                         </div>
//                         <div className="row mb-3">
//                             <label htmlFor="points" className="col-3 col-form-label text-end">Points</label>
//                             <div className="col border ms-2.3 me-2.5 rounded">
//                                 <input
//                                     id="points"
//                                     className="col-9 form-control border-0"
//                                     value={formState.points}
//                                     onChange={(e) => setFormState({ ...formState, points: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row mb-3">
//                             <label htmlFor="dueDate" className="col-3 col-form-label text-end">Due</label>
//                             <div className="col border rounded p-3">
//                                 <input
//                                     type="datetime-local"
//                                     id="dueDate"
//                                     className="form-control"
//                                     value={formState.dueDate}
//                                     onChange={(e) => setFormState({ ...formState, dueDate: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                         <div className="row mb-3">
//                             <div className="col">
//                                 <label htmlFor="availableFrom" className="col-form-label">Available From</label>
//                                 <input
//                                     type="datetime-local"
//                                     id="availableFrom"
//                                     className="form-control"
//                                     value={formState.availableFrom}
//                                     onChange={(e) => setFormState({ ...formState, availableFrom: e.target.value })}
//                                 />
//                             </div>
//                             <div className="col">
//                                 <label htmlFor="availableUntil" className="col-form-label">Available Until</label>
//                                 <input
//                                     type="datetime-local"
//                                     id="availableUntil"
//                                     className="form-control"
//                                     value={formState.availableUntil}
//                                     onChange={(e) => setFormState({ ...formState, availableUntil: e.target.value })}
//                                 />
//                             </div>
//                         </div>
//                         <hr />
//                         <div className="row mb-3 float-end">
//                             <div className="col">
//                                 <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
//                                 <button onClick={handleSave} type="button" className="btn btn-success">Save</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
