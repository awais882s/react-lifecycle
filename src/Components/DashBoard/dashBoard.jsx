import React, { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

export default function DashBoard() {
    // logics
    const [students, setStudents] = useState([
        {
            name: "awais",
            id: "1234"
        },
        {
            name: "bilal",
            id: "1237"
        },
        {
            name: "hadia",
            id: "1934"
        }
    ])
    // end of logic
    // start of views
    return (
        <div>
            {/* {
                students.map((student, index) => {
                    return <p>
                        No.#{index} - Name:{student.name}
                    </p>
                })
            } */}
        </div>
    );
    // end of views
}
