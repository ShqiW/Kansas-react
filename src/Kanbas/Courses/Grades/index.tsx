import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


import { CiFilter } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import '../../styles.css';

export default function Grades() {
    return (
        <div className="container">
            <div className="flex-fill">
                <div id="wd-grades" className="ms-5 me-5 row">
                    <form className="col mt-3">
                        <div id="wd-grade-import-and-export" className="d-flex justify-content-end mb-3">
                            <div className="btn btn-secondary me-2 align-middle fs-5"><BiImport className="me-2" />Import</div>
                            <div className="btn btn-secondary me-2 align-middle fs-5"><LiaFileImportSolid className="me-2" />Export</div>
                            <div className="btn btn-secondary align-middle fs-5"><IoMdSettings /></div>
                        </div>
                        <div id="wd-grades-search-student-assignment" className="row">
                            <div className="col">
                                <p style={{ fontWeight: "bold" }}>Student Names</p>
                                <div className="d-flex align-items-center input-group border" style={{ padding: "5px", borderRadius: "10px" }}>

                                    <IoSearch className="fs-5 ms-2 me-2" />
                                    <label htmlFor="searchStudenttDataList" className="form-label"></label>
                                    <input className="form-control border-0" list="datalistOptions" id="searchStudentDataList" placeholder="Search Students" />
                                    <datalist id="datalistOptions">
                                        <option value="A1" />
                                        <option value="A2" />
                                        <option value="A3" />
                                        <option value="A4" />

                                    </datalist>
                                    <FaAngleDown className="fs-5 ms-2 me-2" />
                                </div>
                            </div>
                            <div className="col">
                                <p style={{ fontWeight: "bold" }}>Assignment Names</p>
                                <div className="d-flex align-items-center input-group border" style={{ padding: "5px", borderRadius: "10px" }}>

                                    <IoSearch className="fs-5 ms-2 me-2" />
                                    <label htmlFor="searchAssignmentDataList" className="form-label"></label>
                                    <input className="form-control border-0" list="datalistOptions" id="searchAssignmentDataList" placeholder="Search Assignments" />
                                    <datalist id="datalistOptions">
                                        <option value="A1" />
                                        <option value="A2" />
                                        <option value="A3" />
                                        <option value="A4" />

                                    </datalist>
                                    <FaAngleDown className="fs-5 ms-2 me-2" />
                                </div>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-auto mt-3">
                                <div className="btn btn-secondary me-2 align-middle fs-6">
                                    <CiFilter className="me-2 fs-4" />
                                    Apply Filters
                                </div>
                            </div>
                        </div>

                        <div id="wd-styling-tables" className="row mt-3">
                            <div className="table-responsive" style={{ overflowX: "auto" }}>
                                <table className="table table-bordered text-center table-striped" style={{ minWidth: "900px" }}>
                                    <colgroup>
                                        <col style={{ width: "25%" }} />
                                        <col style={{ width: "18%" }} />
                                        <col style={{ width: "18%" }} />
                                        <col style={{ width: "18%" }} />
                                        <col style={{ width: "18%" }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-left">Student Name</th>
                                            <th scope="col">A1 SETUP<br />Out of 100</th>
                                            <th scope="col">A2 HTML<br />Out of 100</th>
                                            <th scope="col">A3 CSS<br />Out of 100</th>
                                            <th scope="col">A4 BOOTSTRAP<br />Out of 100</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr className="bg-secondary">
                                            <th scope="row">Jane Adams</th>
                                            <td>100%</td>
                                            <td>96.67%</td>
                                            <td>92.18%</td>
                                            <td>66.22%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Christina Allen</th>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr className="bg-secondary">
                                            <th scope="row">Samreen Ansari</th>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Han Bao</th>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>
                                                <div className="input-group border" style={{ borderRadius: "10px" }}>
                                                    <input type="text" className="form-control text-center border-0" defaultValue="88.3" />
                                                    <span className="input-group-text" style={{ backgroundColor: "transparent", border: "none" }} >
                                                        <BiImport />
                                                    </span>
                                                </div>

                                            </td>
                                            <td>98.99%</td>
                                        </tr>
                                        <tr className="bg-secondary">
                                            <th scope="row">Nahi Sai Srinivas Bobbili</th>
                                            <td>100%</td>
                                            <td>96.67%</td>
                                            <td>98.37%</td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Jane Adams</th>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                            <td>100%</td>
                                        </tr>
                                    </tbody>

                                </table>


                            </div>
                        </div>



                    </form>

                </div>
            </div>


        </div>
    )
}