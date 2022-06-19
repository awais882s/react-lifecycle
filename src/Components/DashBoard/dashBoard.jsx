import React, { useState } from 'react'
import useFetchBoard from './customHooks/useFetchDashboard';
export default function DashBoard() {
    // logics
    const [students, setStudents] = useFetchBoard()
    // start of views / user views
    return (
        <div>
            {
                students.map((student, index) => {
                    return <p>
                        No.#{index} - Name:{student.name}
                    </p>
                })
            }
        </div>
    );
    // end of views
}
