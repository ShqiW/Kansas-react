


export default function Dashboard() {

    return (
        <div id="wd-dashboard" className="flex-fill">
            <div>
                <h1 id="wd-dashboard-title">Dashboard</h1>
                <hr />
                <h2 id="wd-dashboard-published">Published Courses (12)</h2>
                <hr />
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/reactjs.jpg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS1234 React JS
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }} >
                                        <div className="text-gray">CS1234 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>

                                </div>

                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/Python.jpeg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS5001 Python
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5001 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/Math.jpeg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS5002 Math
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5002 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/Java.png" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS5004 Java
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5004 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/database.jpeg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS520 Database
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5520 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/web.jpeg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS5610 Web
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5610 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                        <div className="wd-dashboard-course col" style={{ width: "260px", marginBottom: '40px' }}>
                            <div className="card h-60" style={{ width: '100%', minWidth: '250px', maxWidth: '270px' }}>
                                <img src="/images/cloud.jpeg" alt="Course" style={{
                                    width: '100%',
                                    height: '150px',
                                    objectFit: 'cover',
                                }} />
                                <div className="card-body d-flex flex-column" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '150px',
                                }}>
                                    <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        CS5660 Cloud Computing
                                    </a>
                                    <p className="wd-dashboard-course-title card-text" style={{ fontSize: "13px" }}>
                                        <div className="text-gray">CS5660 202410</div>
                                        <div className="text-gray">202410_1 Fall 2023 Semester Full Term </div>
                                    </p>
                                    <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary">Go</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
