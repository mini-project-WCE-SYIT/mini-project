import React, { useState, useEffect } from 'react'

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
  const [isOpenYear, setIsOpenYear] = useState(false)
  const toggleYear = () => setIsOpenYear(!isOpenYear)
  const [DropdownYear, setDropdownYear] = useState('Choose your year')
  const [isOpenBranch, setIsOpenBranch] = useState(false)
  const toggleBranch = () => setIsOpenBranch(!isOpenBranch)
  const [DropdownBranch, setDropdownBranch] = useState('Choose your branch')

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
  const handleOutsideClick = (event) => {
    if (isOpenYear && !event.target.closest('.dropdown')) {
      setIsOpenYear(false)
      setIsOpenBranch(false)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <div className='login-form'>
        <h2
          style={{
            fontWeight: '500',
            lineHeight: '1.5rem',
            margin: '2rem',
            marginTop: '4rem',
          }}
        >
          Application for the issue of transcript
        </h2>
        <form onSubmit={handleSubmit} className='appForm'>
          <div className='upperDiv'>
            <div className='upperDivItems'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
            <div className='upperDivItems dropdownYear'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
                />
                <label htmlFor='year'>Year of Study:</label>
              </div>
              <div>
                <button onClick={toggleYear} className='dropdownYear-button'>
                  {DropdownYear}{' '}
                  <img
                    src={process.env.PUBLIC_URL + '/dropdown.png'}
                    alt=''
                    className='blueCircle'
                  />
                </button>
                {isOpenYear && (
                  <div className='dropdownYear-content'>
                    <button
                      name='FirstYear'
                      onClick={() => setDropdownYear('First Year')}
                    >
                      First Year
                    </button>
                    <button
                      name='SecondYear'
                      onClick={() => setDropdownYear('Second Year')}
                    >
                      Second Year
                    </button>
                    <button
                      name='ThirdYear'
                      onClick={() => setDropdownYear('Third Year')}
                    >
                      Third Year
                    </button>
                    <button
                      name='LastYear'
                      onClick={() => setDropdownYear('Last Year')}
                    >
                      Last Year
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className='upperDivItems'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
            <div className='upperDivItems'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
            <div className='upperDivItems dropdownbranch'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
                />
                <label htmlFor='branch'>Branch:</label>
              </div>
              <div>
                <button
                  onClick={toggleBranch}
                  className='dropdownBranch-button'
                >
                  {DropdownBranch}{' '}
                  <img
                    src={process.env.PUBLIC_URL + '/dropdown.png'}
                    alt=''
                    className='blueCircle'
                  />
                </button>
                {isOpenBranch && (
                  <div className='dropdownBranch-content'>
                    <button
                      name='cse'
                      onClick={() => setDropdownBranch('Computer Science')}
                    >
                      Computer Science
                    </button>
                    <button
                      name='it'
                      onClick={() =>
                        setDropdownBranch('Information Technology')
                      }
                    >
                      Information Technology
                    </button>
                    <button
                      name='electronics'
                      onClick={() => setDropdownBranch('Electronics')}
                    >
                      Electronics
                    </button>
                    <button
                      name='electrical'
                      onClick={() => setDropdownBranch('Electrical')}
                    >
                      Electrical
                    </button>
                    <button
                      name='mechanical'
                      onClick={() => setDropdownBranch('Mechanical')}
                    >
                      Mechanical
                    </button>
                    <button
                      name='civil'
                      onClick={() => setDropdownBranch('Civil')}
                    >
                      Civil
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className='upperDivItems'>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
          <div className='addressDiv'>
            <div>
              <img
                src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                alt='circle'
                className='blueCircle'
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
          <div className='certificateDiv'>
            <div>
              <img
                src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                alt='circle'
                className='blueCircle'
              />
              Certificates for which transcripts are reqired:{' '}
            </div>
            <div className='certificatesOptions'>
              <div>
                <input
                  type='checkbox'
                  className='Certificate'
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
                  className='Certificate'
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
                  className='Certificate'
                  id='certificate3'
                  name='certificate3'
                  checked={formData.certificates.certificate3}
                  onChange={handleInputChange}
                />
                <label htmlFor='certificate1'>Degree Certificate</label>
              </div>
            </div>
          </div>
          <div className='originals'>
            <label>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
          <div className='sufficientCopies'>
            <label>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
          <div className='universityName'>
            <label>
              <div>
                <img
                  src={process.env.PUBLIC_URL + '/Blue_circle.png'}
                  alt='circle'
                  className='blueCircle'
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
          <div className='submitBtn'>
            <button type='submit' className='appFormSubmitBtn'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
