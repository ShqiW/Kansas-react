import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { IoSearch, IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { PiNoteBold } from "react-icons/pi";
import { deleteAssignment, addAssignment, setAssignment } from "./reducer";
import { FaPlus } from "react-icons/fa6";
import * as db from "../../Database";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { formatDate } from "./DateFormat";



export default function Assignments() {
    const { cid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer)
    const { assignment } = useSelector((state: any) => state.assignmentsReducer)
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [assignmentToDelete, setAssignmentToDelete] = useState(null);


    const handleDelete = (assignmentId: string) => {
        setAssignmentToDelete(assignmentId);
        setShowConfirmation(true);
    };
    const confirmDelete = () => {
        dispatch(deleteAssignment(assignmentToDelete));
        setShowConfirmation(false);
    };
    const cancelDelete = () => {
        setShowConfirmation(false);
    };

    // console.log("Due Date:", assignment.dueDate);
    const formattedDueDate = formatDate(assignment.dueDate);
    const formattedAvailableFrom = formatDate(assignment.availableFrom);

    //console.log(formattedDueDate);

    return (
        <div className="flex-fill ms-5 me-10">
            <div id="wd-assignment" className="md-5">
                <div className="wd-float-left d-flex" style={{ marginRight: '10px', verticalAlign: "middle" }}>
                    <div className="input-group border me-2 rounded" style={{ height: "40px" }}>
                        <span className="input-group-text border-0" style={{ backgroundColor: "transparent" }}>
                            <IoSearch />
                        </span>
                        <input
                            id="wd-search-assignment"
                            type="text"
                            className="form-control border-0 d-flex"
                            placeholder="Search"
                            style={{ width: "400px" }}
                        />
                    </div>
                </div>
                <div className="wd-float-right" style={{ verticalAlign: "middle", height: "40px" }}>

                    <button
                        onClick={() => {
                            // dispatch(addAssignment(assignment));
                            navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
                        }}
                        className="btn btn-danger me-2 float-end btn-m wd-btns"
                    >  <FaPlus /> Assignment
                    </button>

                </div>
                <div className="wd-float-done"></div>
            </div>

            <ul id="wd-assigment-list" className="list-group rounded-0 mt-5">
                {assignments.filter((assignment) => assignment.course === cid).map(assignment => (
                    <li key={assignment._id} className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-4" style={{ display: "inline-block" }} />
                            <span style={{ fontWeight: "bold" }}>Assignment</span>
                            <div className="ms-auto">
                                <div className="border border-black me-2 ps-2 pe-2 fs-5" style={{ borderRadius: "10px", display: "inline-block" }}>40% of Total</div>

                                <FaTrash className="me-2" onClick={() => handleDelete(assignment._id)} />

                                <FaPlus className="me-2 fs-4" style={{ display: "inline-block" }} />
                                <IoEllipsisVertical className="fs-4" style={{ display: "inline-block" }} />
                            </div>
                        </div>

                        <div id="wd-assignment-hyperlink-list">
                            <div className="list-group">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                    className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between"
                                    onClick={() => dispatch(setAssignment(assignment))}
                                >

                                    <div className="d-flex align-items-center me-4">
                                        <BsGripVertical className="me-4 fs-3" />
                                        <PiNoteBold className="text-success fs-3" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            <span style={{ fontWeight: "bold" }}>{assignment.title}</span>
                                        </div>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span> |
                                            <span style={{ fontWeight: "bold" }}>Not available until </span>
                                            {formattedAvailableFrom ? formatDate(assignment.availableFrom) : assignment.availableFrom} |
                                            <span style={{ fontWeight: "bold" }}>Due </span>
                                            {formattedDueDate ? formatDate(assignment.dueDate) : assignment.dueDate} |
                                            {assignment.points} pts
                                        </div>

                                    </div>
                                    <LessonControlButtons />
                                </Link>

                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {showConfirmation && (
                <div className="modal show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="btn-close" onClick={cancelDelete}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this assignment?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Yes</button>
                                <button type="button" className="btn btn-secondary" onClick={cancelDelete}>No</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <pre>
                {JSON.stringify(assignments, null, 2)}
            </pre>

        </div>
    );
}




// import { BsGripVertical } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa6";
// import { PiNoteBold } from "react-icons/pi";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { IoSearch, IoEllipsisVertical } from "react-icons/io5";
// import { useParams, Link } from "react-router-dom"; //import useParams from dom or not, difference?
// import * as db from "../../Database";
// import { FaTrash } from "react-icons/fa";
// import { deleteAssignment, updateAssignments } from "./reducer";
// import React, { useState } from "react";

// export default function Assignments() {
//     const { cid } = useParams();
//     const [assignments, setAssignments] = useState<any[]>(db.assignments.filter(assignment => assignment.course === cid));
//     const [showConfirmation, setShowConfirmation] = useState(false);
//     const [assignmentToDelete, setAssignmentToDelete] = useState(null);

//     const handleDelete = (assignmentId) => {
//         // Display confirmation dialog
//         setAssignmentToDelete(assignmentId);
//         setShowConfirmation(true);
//     };

//     const confirmDelete = () => {
//         // Remove the assignment and update state
//         setAssignments(assignments.filter(assignment => assignment._id !== assignmentToDelete));
//         // Close confirmation dialog
//         setShowConfirmation(false);
//     };

//     const cancelDelete = () => {
//         // Close confirmation dialog
//         setShowConfirmation(false);
//     };


//     return (
//         <div className="flex-fill ms-5 me-10">
//             <div id="wd-assignment" className="md-5" >
//                 <div className="wd-float-left d-flex" style={{ marginRight: '10px', verticalAlign: "middle" }}>
//                     <div className="input-group border me-2 rounded" style={{ height: "40px" }}>
//                         <span className="input-group-text border-0" style={{ backgroundColor: "transparent" }} >
//                             <IoSearch />
//                         </span>
//                         <input
//                             id="wd-search-assignment"
//                             type="text"
//                             className="form-control border-0 d-flex"
//                             placeholder="Search"
//                             style={{ width: "400px" }}
//                         />
//                     </div>
//                 </div>
//                 <div className="wd-float-right" style={{ verticalAlign: "middle", height: "40px" }} >

//                     <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-2" >
//                         <FaPlus /> Group
//                     </button>
//                     {/* <button id="wd-add-assignment" className="btn btn-lg btn-danger">
//                         <FaPlus /> Assignment
//                     </button> */}
//                     <Link to={`/Kanbas/Courses/${cid}/Assignment/new`} className="btn btn-lg btn-danger">
//                         <FaPlus /> Assignment
//                     </Link>
//                 </div>
//                 <div className="wd-float-done"></div>
//             </div>

//             <ul id="wd-assigment-list" className="list-group rounded-0 mt-5">
//                 {assignments.map(assignment => (
//                     < li key={assignment._id} className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray" >
//                         <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
//                             <BsGripVertical className="me-2 fs-4" style={{ display: "inline-block" }} />
//                             <span style={{ fontWeight: "bold" }}>Assignment</span>
//                             <div className="ms-auto ">
//                                 <div className="border border-black  me-2 ps-2 pe-2 fs-5" style={{ borderRadius: "10px", display: "inline-block" }}>40% of Total</div>
//                                 <FaPlus className="me-2 fs-4" style={{ display: "inline-block" }} />
//                                 <IoEllipsisVertical className="fs-4" style={{ display: "inline-block" }} />
//                             </div>
//                         </div>

//                         <div id="wd-assignment-hyperlink-list">
//                             <div className="list-group">
//                                 <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between" >
//                                     <div className="d-flex align-items-center me-4">
//                                         <BsGripVertical className="me-4 fs-3" />
//                                         <PiNoteBold className="text-success fs-3" />
//                                     </div>
//                                     <div className="flex-grow-1">
//                                         <div>
//                                             <span style={{ fontWeight: "bold" }}>{assignment.title}</span>
//                                         </div>
//                                         <div>
//                                             <span className="text-danger">Multiple Modules</span> | <span style={{ fontWeight: "bold" }}>Not available until</span> {assignment.availableFrom} | <span style={{ fontWeight: "bold" }}>Due</span> {assignment.dueDate} | {assignment.points} pts
//                                         </div>
//                                     </div>
//                                     <div className="d-flex align-items-center">
//                                         <FaTrash className="me-2" onClick={() => deleteAssignment(assignment._id)} />
//                                         <LessonControlButtons />
//                                     </div>
//                                 </Link>

//                             </div>

//                         </div>
//                     </li>
//                 ))}
//             </ul>
//             {/* Confirmation dialog */}
//             {showConfirmation && (
//                 <div className="modal" tabIndex={-1} role="dialog">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Confirm Deletion</h5>
//                                 <button type="button" className="btn-close" onClick={cancelDelete}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Are you sure you want to delete this assignment?</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-danger" onClick={confirmDelete}>Yes</button>
//                                 <button type="button" className="btn btn-secondary" onClick={cancelDelete}>No</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div >
//     )
// }

