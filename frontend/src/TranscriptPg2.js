import React from 'react'
import './Transcript.css'
import data from './data.json'
const TranscriptPg2 = () => {
    const name = 'John Doe';
    const stNo = '2017BREME00068';
    const Branch = 'Information Technology'
  return (
    <>
    <div>
        <header className='header'>
      <h2 className='header-content' id='clg-name'>Walchand College of Engineering</h2>
      <h5 className='header-content'>Vishrambag, SANGLI -  416415 {"(M.S.)"} India</h5>
      <h6 className='header-content' id='clg-web'>Website : www.walchandsangli.ac.in</h6>
      </header>
    </div>
    <div className='clg-details'>
        <h5>+91-233-2303433</h5>
        <h5>Email: info@walchandsangli.ac.in</h5>
    </div>
    <div className='content'>
        <h5>Examination Section</h5>
    </div>
    <div className='student-details'>
        <div>
        Name: <b>{name}</b>
        </div>
        <div>
        Examination Seat Number: <b>{stNo}</b>
        </div>
    </div>
    <div className='content'>
        <h5>B.Tech. {Branch}</h5>
    </div>
    <table border={1} className='table'>
        <tr >
            <th>Course Code</th>
            <th>Course Name</th>
            <th>
                Hours per Week
                <tr>
                <td className='hours-per-week'>Lecture</td>
                <td className='hours-per-week'>Tutorial</td>
                <td className='hours-per-week'>Practical</td>
            </tr>
            </th>
            <th>Credtis</th>
            <th>Grade</th>
        </tr>   
        <tr>
            <td className='hours'   >3PH101</td>
            <td className='hours'>Engineering Physics</td>
            <tr>
            <td className='hours-per-week   '>3</td>
            <td className='hours-per-week   '>-</td>
            <td className='hours-per-week   '>-</td>
            </tr>
            <td className='hours'>3</td>
            <td className='hours'>BB</td>
        </tr> 
        {
            data.map(trow =>{
                const {CourseCode, CourseName, Tutorial, Lecture, Practical, Grades, Credits} = trow;
                return (
                    <tr>
                    <td className='hours'   >{CourseCode}</td>
                    <td className='hours'>{CourseName}</td>
                    <tr>
                    <td className='hours-per-week   '>{Lecture}</td>
                    <td className='hours-per-week   '>{Tutorial}</td>
                    <td className='hours-per-week   '>{Practical}</td>
                    </tr>
                    <td className='hours'>{Credits}</td>
                     <td className='hours'>{Grades}</td>
                </tr> 
                )
            })
        }
    </table>
    </>
    
  )
}

export default TranscriptPg2
