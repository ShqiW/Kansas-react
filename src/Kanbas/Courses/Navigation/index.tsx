import "./index.css";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            <a href="#/Kanbas/Courses/1234/Home" className="list-group-item active border border-0">Home</a>
            <a href="#/Kanbas/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules</a>
            <a href="#/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</a>
            <a href="#/Kanbas/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom Meetings</a>
            <a href="#/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0">Assignments</a>
            <a href="#/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes</a>
            <a href="#/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</a>
            <a href="#/Kanbas/Courses/1234/People" className="list-group-item text-danger border border-0">People</a>
            <a href="#/Kanbas/Courses/1234/Settings" className="list-group-item text-danger border border-0">Settings</a>
        </div>
    );
}

