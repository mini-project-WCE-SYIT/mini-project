import React, { useState } from 'react'
import fileupload from './Fileupload.module.css'
const Fileupload = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  //Sem options
  const [fysem, setFySem] = useState('')
  const [sysem, setSySem] = useState('')
  const [tysem, setTySem] = useState('')
  const [lysem, setLySem] = useState('')

  const handleOptionChangefy = (e) => {
    setFySem(e.target.value)
  }
  const handleOptionChangesy = (e) => {
    setSySem(e.target.value)
  }
  const handleOptionChangety = (e) => {
    setTySem(e.target.value)
  }
  const handleOptionChangely = (e) => {
    setLySem(e.target.value)
  }

  //Retaining the selected file
  //This didn't work
  const [fyfiles, setFyFiles] = useState([])
  const [syfiles, setSyFiles] = useState([null, null, null])
  const [tyfiles, setTyFiles] = useState([null, null, null])
  const [lyfiles, setLyFiles] = useState([null, null, null])

  const handleFyFileUpload = (index, file) => {
    const newFiles = [...fyfiles]
    newFiles[index] = file
    setFyFiles([...fyfiles, { option: fysem, file }])
  }
  const handleSyFileUpload = (index, file) => {
    const newFiles = [...syfiles]
    newFiles[index] = file
    setSyFiles([...syfiles, { option: sysem, file }])
  }
  const handleTyFileUpload = (index, file) => {
    const newFiles = [...tyfiles]
    newFiles[index] = file
    setTyFiles([...tyfiles, { option: tysem, file }])
  }
  const handleLyFileUpload = (index, file) => {
    const newFiles = [...lyfiles]
    newFiles[index] = file
    setLyFiles([...lyfiles, { option: lysem, file }])
  }

  return (
    <>
      <div className={`${fileupload.container}`}>
        <h2>DOCUMENTS REQUIRED</h2>
        <div className={`${fileupload.innerDiv}`}>
          <h3>Please upload the following list of documents</h3>
          <form onSubmit={handleSubmit} className={`${fileupload.formDiv}`}>
            <div className={`${fileupload.fy}`}>
              <span className={`${fileupload.year}`}>First Year</span>
              <select
                name='fysem'
                id=''
                value={fysem}
                onChange={handleOptionChangefy}
              >
                <option value='' selected disabled hidden>
                  Select Semester
                </option>
                <option value='fy_sem1' name='fy_sem1'>
                  Sem-I
                </option>
                <option value='fy_sem2' name='fy_sem2'>
                  Sem-II
                </option>
                <option value='fy_reexam' name='fy_reexam'>
                  Re-exam
                </option>
              </select>
              {(fysem === '' || fysem === 'fy_sem1') && (
                <div>
                  <p>Sem-I</p>
                  <input
                    type='file'
                    onChange={(e) => handleFyFileUpload(0, e.target.files[0])}
                  />
                </div>
              )}
              {fysem === 'fy_sem2' && (
                <div>
                  <p>Sem-II</p>
                  <input
                    type='file'
                    onChange={(e) => handleFyFileUpload(1, e.target.files[0])}
                  />
                </div>
              )}
              {fysem === 'fy_reexam' && (
                <div>
                  <p>Re-exam</p>
                  <input
                    type='file'
                    onChange={(e) => handleFyFileUpload(2, e.target.files[0])}
                  />
                </div>
              )}
            </div>

            <div className={`${fileupload.sy}`}>
              <span className={`${fileupload.year}`}>Second Year</span>
              <select
                name='sysem'
                id=''
                value={sysem}
                onChange={handleOptionChangesy}
              >
                <option value='' selected disabled hidden>
                  Select Semester
                </option>
                <option value='sy_sem1' name='sy_sem1'>
                  Sem-I
                </option>
                <option value='sy_sem2' name='sy_sem2'>
                  Sem-II
                </option>
                <option value='sy_reexam' name='sy_reexam'>
                  Re-exam
                </option>
              </select>
              {(sysem === '' || sysem === 'sy_sem1') && (
                <div>
                  <p>Sem-I</p>
                  <input
                    type='file'
                    onChange={(e) => handleSyFileUpload(0, e.target.files[0])}
                  />
                </div>
              )}
              {sysem === 'sy_sem2' && (
                <div>
                  <p>Sem-II</p>
                  <input
                    type='file'
                    onChange={(e) => handleSyFileUpload(1, e.target.files[0])}
                  />
                </div>
              )}
              {sysem === 'sy_reexam' && (
                <div>
                  <p>Re-exam</p>
                  <input
                    type='file'
                    onChange={(e) => handleSyFileUpload(2, e.target.files[0])}
                  />
                </div>
              )}
            </div>

            <div className={`${fileupload.ty}`}>
              <span className={`${fileupload.year}`}>Third Year</span>
              <select
                name='tysem'
                id=''
                value={tysem}
                onChange={handleOptionChangety}
              >
                <option value='' selected disabled hidden>
                  Select Semester
                </option>
                <option value='ty_sem1' name='ty_sem1'>
                  Sem-I
                </option>
                <option value='ty_sem2' name='ty_sem2'>
                  Sem-II
                </option>
                <option value='ty_reexam' name='ty_reexam'>
                  Re-exam
                </option>
              </select>
              {(tysem === '' || tysem === 'ty_sem1') && (
                <div>
                  <p>Sem-I</p>
                  <input
                    type='file'
                    onChange={(e) => handleTyFileUpload(0, e.target.files[0])}
                  />
                </div>
              )}
              {tysem === 'ty_sem2' && (
                <div>
                  <p>Sem-II</p>
                  <input
                    type='file'
                    onChange={(e) => handleTyFileUpload(1, e.target.files[0])}
                  />
                </div>
              )}
              {tysem === 'ty_reexam' && (
                <div>
                  <p>Re-exam</p>
                  <input
                    type='file'
                    onChange={(e) => handleTyFileUpload(2, e.target.files[0])}
                  />
                </div>
              )}
            </div>

            <div className={`${fileupload.ly}`}>
              <span className={`${fileupload.year}`}>Fourth Year</span>
              <select
                name='lysem'
                id=''
                value={lysem}
                onChange={handleOptionChangely}
              >
                <option value='' selected disabled hidden>
                  Select Semester
                </option>
                <option value='ly_sem1' name='ly_sem1'>
                  Sem-I
                </option>
                <option value='ly_sem2' name='ly_sem2'>
                  Sem-II
                </option>
                <option value='ly_reexam' name='ly_reexam'>
                  Re-exam
                </option>
              </select>
              {(lysem === '' || lysem === 'ly_sem1') && (
                <div>
                  <p>Sem-I</p>
                  <input
                    type='file'
                    onChange={(e) => handleLyFileUpload(0, e.target.files[0])}
                  />
                </div>
              )}
              {lysem === 'ly_sem2' && (
                <div>
                  <p>Sem-II</p>
                  <input
                    type='file'
                    onChange={(e) => handleLyFileUpload(1, e.target.files[0])}
                  />
                </div>
              )}
              {lysem === 'ly_reexam' && (
                <div>
                  <p>Re-exam</p>
                  <input
                    type='file'
                    onChange={(e) => handleLyFileUpload(2, e.target.files[0])}
                  />
                </div>
              )}
            </div>
            <button type='submit' className={`${fileupload.submit}`}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Fileupload
