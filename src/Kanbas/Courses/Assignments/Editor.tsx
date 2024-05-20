import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export default function AssignmentEditor() {
    return (
        <div className="flex-fill">
            <div id="wd-assignments-editor" className="ms-5 me-5 row">
                <form>



                    <div>
                        <div className="mb-3">
                            <label htmlFor="wd-name" className="col col-form-label">Assignment Name</label>
                            <div className="col">
                                <input id="wd-name" className="form-control" value="A1" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="wd-editor-assignment-description" class="col-form-label">
                                Description </label>
                            <div id="wd-editor-assignment-description" class="form-control contentEditable" contenteditable="true">
                                The assignment is <span class="text-danger">available online</span> <br /> <br />
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
                                <input id="wd-points" className="col-9 form-control border-0" placeholder="100" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="wd-group" className="col-3 col-form-label text-end">Assignment Group</label>
                            <div className="col input-group border ms-2.3 me-2.5 rounded align-items-center" >

                                <select id="wd-group" className="col-9 form-control border-0">
                                    <option value="assignments">ASSIGNMENTS</option>
                                    <option value="assignments">Assignments</option>
                                </select>
                                <FaAngleDown />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="wd-display-grade-as" className="col-3 col-form-label text-end">Display Grade as</label>
                            <div className="col input-group border ms-2.3 me-2.5 rounded align-items-center" >

                                <select id="wd-display-grade-as" className="col-9 form-control border-0">
                                    <option value="display-grade">Percentage</option>
                                    <option value="display-grade">Score</option>
                                </select>
                                <FaAngleDown />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="wd-submission-type" className="col-3 col-form-label text-end">Submission Type</label>
                            <div className="col border rounded p-3">
                                <select id="wd-submission-type" className="col-9 form-control">
                                    <option value="Online">Online</option>
                                    <option value="In-Person">In-Person</option>
                                </select>
                                <div className="col mt-2 p-1">Online Entry Options: </div>
                                <div className="col">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input mt-2 p-1" id="wd-text-entry" />
                                        <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input mt-2 p-1" id="wd-website-url" />
                                        <label className="form-check-label" htmlFor="wd-website-url">Website URLy</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input mt-2 p-1" id="wd-media-recordings" />
                                        <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input mt-2 p-1" id="wd-student-annotation" />
                                        <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input p-1" id="wd-file-upload" />
                                        <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row mb-3">
                            <label htmlFor="wd-assign-to" className="col-3 col-form-label text-end">Assign To</label>
                            <div className="col border rounded p-3">

                                <div id="wd-assign-to-student" className="col p-1 input-group align-items-center border rounded">
                                    <div className="bg-secondary  m-1 p-1 rounded" >
                                        EveryOne
                                        <RxCross2 />
                                    </div>
                                </div>

                                <div className="col p-1">

                                    <label htmlFor="wd-due-date" className="col-form-label">Due</label>
                                    <div className="col">
                                        <input type="datetime-local" className="form-control" id="wd-due-date" defaultValue="2024-05-13T12:59" />
                                    </div>

                                </div>
                                <div className="col p-1">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="wd-available-from" className="col-form-label">Available From</label>
                                            <div className="col">
                                                <input type="datetime-local" className="form-control" id="wd-available-from" defaultValue="2024-05-06T12:59" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until" className="col-form-label">Available Until</label>
                                            <div className="col">
                                                <input type="datetime-local" className="form-control" id="wd-available-until" defaultValue="2024-05-06T12:59" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <hr />
                        <div className="row mb-3 float-end">
                            <div className="col">
                                <button className="btn btn-secondary me-2">Cancel</button>
                                <button className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
}