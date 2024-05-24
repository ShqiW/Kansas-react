
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";
// import React, { useState, useEffect } from 'react'

export default function AssignmentEditor() {
    // const { cid, aid } = useParams();
    // const [a, setA] = useState({
    //     "_id": "A101",
    //     "title": "Propulsion Assignment",
    //     "course": "RS101",
    //     "availablTo": "May 6 at 12:00am",
    //     "availableUntil": "June 1 at 12:00am",
    //     "dueDate": "May 13 at 11:59pm",
    //     "points": "100"
    // });
    // useEffect(() => {
    //     const assignment = assignments.find(assignment => assignment._id === aid)
    //     setA(assignment as any)
    // }, [aid])
    const { cid, aid } = useParams();

    const assignment = assignments.find(assignment => assignment._id === aid)

    return (
        <div className="flex-fill">
            <div id="wd-assignments-editor" className="ms-5 me-5 row">
                <form>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="wd-name" className="col col-form-label">Assignment Name</label>
                            <div className="col">
                                <input id="wd-name" className="form-control" defaultValue={assignment?.title || ''} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="wd-editor-assignment-description" className="col-form-label">
                                Description </label>
                            <div id="wd-editor-assignment-description" className="form-control contentEditable">
                                The assignment is <span className="text-danger">available online</span> <br /> <br />
                                Submit a link to the landing page of your Web application running on Netlify. <br /><br />
                                The landing page should include the following: <br /><br />
                                <ul>
                                    <li>Your full name and section</li>
                                    <li>Links to each of the lab assignments</li>
                                    <li>Links to the Kanbas application</li>
                                    <li>Links to all relevant source code repositories</li>
                                </ul>
                                The Kanbas application should include a link to navigate back to the landing page.
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="wd-points" className="col-3 col-form-label text-end">Points</label>
                            <div className="col border ms-2.3 me-2.5 rounded">
                                <input id="wd-points" className="col-9 form-control border-0" defaultValue={assignment?.points} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="wd-assign-to" className="col-3 col-form-label text-end">Assign</label>
                            <div className="col border rounded p-3">
                                Assign to

                                <div id="wd-assign-to-student" className="col p-1 input-group align-items-center">
                                    <input type="text" className="form-control" style={{ width: "100%" }} />
                                </div>

                                <div className="col p-1">

                                    <label htmlFor="wd-due-date" className="col-form-label">Due</label>
                                    <div className="col">
                                        <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue={assignment?.dueDate} />
                                    </div>

                                </div>
                                <div className="col p-1">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                                            <div className="col">
                                                <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue={assignment?.availablTo} />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until" className="col-form-label">Available Until</label>
                                            <div className="col">
                                                <input type="datetime-local" className="form-control" id="wd-available-until" defaultValue={assignment?.availableUntil} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <hr />
                        <div className="row mb-3 float-end">
                            <div className="col">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-success">Save</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
}