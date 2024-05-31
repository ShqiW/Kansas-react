import React, { useState } from "react";
import { useParams } from "react-router";
import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    return (
        <div id="wd-modules">

            <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
                addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                    setModuleName("");
                }} /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module) => module.course === cid)
                    .map((module) => (
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));
                                            }
                                        }}
                                        value={module.name} />
                                )}

                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        dispatch(deleteModule(moduleId));
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            </div>
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}








// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from 'react-icons/bs';

// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";


// export default function Modules() {
//     return (
//         <div >


//             <div id="wd-modules">

//                 <ModulesControls /><br /><br /><br /><br />

//                 <ul id="wd-modules" className="list-group rounded-0">
//                     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                         <div className="wd-title p-3 ps-2 bg-secondary">
//                             <BsGripVertical className="me-2 fs-3" />
//                             Week 1
//                             <ModuleControlButtons />
//                         </div>
//                         <ul className="wd-lessons list-group rounded-0">
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LEARNING OBJECTIVES
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 Introduction to the course
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 Learn what is Web Development
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LESSON 1
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LESSON 2
//                                 <LessonControlButtons />
//                             </li>
//                         </ul>
//                     </li>
//                     <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//                         <div className="wd-title p-3 ps-2 bg-secondary">
//                             <BsGripVertical className="me-2 fs-3" />
//                             Week 2
//                             <ModuleControlButtons />
//                         </div>
//                         <ul className="wd-lessons list-group rounded-0">
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LEARNING OBJECTIVES
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LESSON 1
//                                 <LessonControlButtons />
//                             </li>
//                             <li className="wd-lesson list-group-item p-3 ps-1">
//                                 <BsGripVertical className="me-2 fs-3" />
//                                 LESSON 2
//                                 <LessonControlButtons />
//                             </li>
//                         </ul>
//                     </li>
//                 </ul>
//             </div>

//         </div>
//     );
// }

