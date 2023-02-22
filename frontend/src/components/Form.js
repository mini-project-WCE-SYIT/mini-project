import React, { useState } from 'react'
import form from './Form.module.css'
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    prn: '',
    branch: '',
    year: '',
    contact: '',
    copies: '',
    address: '',
    certificates: {
      certificate1: false,
      certificate2: false,
      certificate3: false,
    },
  })

  const [option1, setOption1] = useState('')
  const [option2, setOption2] = useState('')
  const [option3, setOption3] = useState('')

  const handleInputChange = (e) => {
    if (e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        certificates: {
          ...formData.certificates,
          [e.target.name]: e.target.checked,
        },
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <div className={form.applicationform}>
        <h2>Application for the issue of transcript</h2>
        <form onSubmit={handleSubmit} className={form.appForm}>
          <div className={form.upperDiv}>
            <div className={form.upperDivItems}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='name'>Name:</label>
              </div>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={`${form.upperDivItems} ${form.dropdownYear}`}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='year'>Year of Study:</label>
              </div>
              <div>
                <select name='' id='' className={`${form.dropdownYearbutton} `}>
                  <option value='none' selected disabled hidden>
                    Select your year of study
                  </option>
                  <option value='fy' name='fy'>
                    First Year
                  </option>
                  <option value='sy' name='sy'>
                    Second Year
                  </option>
                  <option value='ty' name='ty'>
                    Third Year
                  </option>
                  <option value='ly' name='ly'>
                    Last Year
                  </option>
                </select>
              </div>
            </div>
            <div className={form.upperDivItems}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='prn'>PRN:</label>
              </div>
              <input
                type='text'
                id='prn'
                name='prn'
                placeholder='Enter your PRN'
                value={formData.prn}
                onChange={handleInputChange}
              />
            </div>
            <div className={form.upperDivItems}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='contact'>Contact Number:</label>
              </div>
              <input
                type='number'
                id='contact'
                name='contact'
                placeholder='Enter your number'
                value={formData.contact}
                onChange={handleInputChange}
              />
            </div>
            <div className={`${form.upperDivItems} ${form.dropdownbranch}`}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='branch'>Branch:</label>
              </div>
              <div>
                <select
                  name='Branch'
                  id=''
                  className={form.dropdownBranchbutton}
                >
                  <option value='none' selected disabled hidden>
                    Select your branch
                  </option>
                  <option value='cse' name='cse'>
                    Computer Science
                  </option>
                  <option value='it' name='it'>
                    Information Technology
                  </option>
                  <option value='electronics' name='electronics'>
                    Electronics
                  </option>
                  <option value='electrical' name='electrical'>
                    Electrical
                  </option>
                  <option value='mechanics' name='mechanics'>
                    Mechanics
                  </option>
                  <option value='civil' name='civil'>
                    Civil
                  </option>
                </select>
              </div>
            </div>
            <div className={form.upperDivItems}>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                <label htmlFor='copies'>No. of Copies:</label>
              </div>
              <input
                type='number'
                id='copies'
                name='copies'
                placeholder='Enter the number of copies'
                value={formData.copies}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={form.addressDiv}>
            <div>
              <img
                src={'/Blue_circle.png'}
                alt='circle'
                className={form.blueCircle}
              />
              <label htmlFor='address'>Address:</label>
            </div>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Enter your address'
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className={form.certificateDiv}>
            <div>
              <img
                src={'/Blue_circle.png'}
                alt='circle'
                className={form.blueCircle}
              />
              Certificates for which transcripts are reqired:{' '}
            </div>
            <div className={form.certificatesOptions}>
              <div>
                <input
                  type='checkbox'
                  className={form.Certificate}
                  id='certificate1'
                  name='certificate1'
                  checked={formData.certificates.certificate1}
                  onChange={handleInputChange}
                />
                <label htmlFor='certificate1'>Consolidated Marksheet</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  className={form.Certificate}
                  id='certificate2'
                  name='certificate2'
                  checked={formData.certificates.certificate2}
                  onChange={handleInputChange}
                />
                <label htmlFor='certificate1'>Provisional Certificate</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  className={form.Certificate}
                  id='certificate3'
                  name='certificate3'
                  checked={formData.certificates.certificate3}
                  onChange={handleInputChange}
                />
                <label htmlFor='certificate1'>Degree Certificate</label>
              </div>
            </div>
          </div>
          <div className={form.originals}>
            <label>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                Whether originals of the above certificates are produced:
              </div>
              <br />
              <input
                type='radio'
                value='option1'
                checked={option1 === 'option1'}
                onChange={(e) => setOption1(e.target.value)}
              />
              Yes
              <br />
              <input
                type='radio'
                value='option2'
                checked={option1 === 'option2'}
                onChange={(e) => setOption1(e.target.value)}
              />{' '}
              No
            </label>
          </div>
          <div className={form.sufficientCopies}>
            <label>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                Whether sufficient photocopies are produced:
              </div>
              <br />
              <input
                type='radio'
                value='option1'
                checked={option2 === 'option1'}
                onChange={(e) => setOption2(e.target.value)}
              />
              Yes
              <br />
              <input
                type='radio'
                value='option2'
                checked={option2 === 'option2'}
                onChange={(e) => setOption2(e.target.value)}
              />{' '}
              No
            </label>
          </div>
          <div className={form.universityName}>
            <label>
              <div>
                <img
                  src={'/Blue_circle.png'}
                  alt='circle'
                  className={form.blueCircle}
                />
                Whether sufficient photocopies are produced:
              </div>
              <br />
              <input
                type='radio'
                value='option1'
                checked={option3 === 'option1'}
                onChange={(e) => setOption3(e.target.value)}
              />
              Yes
              <br />
              <input
                type='radio'
                value='option2'
                checked={option3 === 'option2'}
                onChange={(e) => setOption3(e.target.value)}
              />{' '}
              No
            </label>
          </div>
          <div className={form.submitBtn}>
            <button type='submit' className={form.appFormSubmitBtn}>
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
