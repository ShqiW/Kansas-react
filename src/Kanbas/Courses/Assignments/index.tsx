import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { PiNoteBold } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { IoSearch } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams, Link } from "react-router-dom"; //import useParams from dom or not, difference?
import { assignments } from "../../Database"

export default function Assignment() {
    const { cid } = useParams();
    const courseAssignment = assignments.filter(assignment => assignment.course === cid)



    return (

        <div className="flex-fill ms-5 me-10">
            <div id="wd-assignment" className="md-5" >
                <div className="wd-float-left d-flex" style={{ marginRight: '10px', verticalAlign: "middle" }}>
                    <div className="input-group border me-2 rounded" style={{ height: "40px" }}>
                        <span className="input-group-text border-0" style={{ backgroundColor: "transparent" }} >
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
                <div className="wd-float-right" style={{ verticalAlign: "middle", height: "40px" }} >

                    <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-2" >
                        <FaPlus /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-lg btn-danger">
                        <FaPlus /> Assignment
                    </button>
                </div>
                <div className="wd-float-done"></div>
            </div>

            <ul id="wd-assigment-list" className="list-group rounded-0 mt-5">
                {courseAssignment.map(assignment => (
                    < li key={assignment._id} className="wd-assignment-list-item list-group-item p-0 mb-5 fs-5 border-gray" >
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-4" style={{ display: "inline-block" }} />
                            <span style={{ fontWeight: "bold" }}>Assignment</span>
                            <div className="ms-auto ">
                                <div className="border border-black  me-2 ps-2 pe-2 fs-5" style={{ borderRadius: "10px", display: "inline-block" }}>40% of Total</div>
                                <FaPlus className="me-2 fs-4" style={{ display: "inline-block" }} />
                                <IoEllipsisVertical className="fs-4" style={{ display: "inline-block" }} />
                            </div>
                        </div>

                        <div id="wd-assignment-hyperlink-list">
                            <div className="list-group">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between" >
                                    <div className="d-flex align-items-center me-4">
                                        <BsGripVertical className="me-4 fs-3" />
                                        <PiNoteBold className="text-success fs-3" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div>
                                            <span style={{ fontWeight: "bold" }}>{assignment.title}</span>
                                        </div>
                                        <div>
                                            <span className="text-danger">Multiple Modules</span> | <span style={{ fontWeight: "bold" }}>Not available until</span> {assignment.availability} | <span style={{ fontWeight: "bold" }}>Due</span> {assignment.dueDate} | {assignment.points} pts
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <LessonControlButtons />
                                    </div>
                                </Link>

                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

