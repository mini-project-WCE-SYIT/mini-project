import React from 'react'
import procedure from './Procedure.module.css'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const Procedure = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={procedure.procedure}>
        <h2>PROCEDURE TO OBTAIN TRANSCRIPT</h2>
        <div className={procedure.documents}>
          <ol>
            <li>
              Candidate needs to submit filled application along with required
              documents in person or send it through authorized person (along
              with letter authorizing him/her to receive the transcripts on
              his/her behalf) in prescribed application available with the
              Examination Section office or on college website.
            </li>
            <li>
              The name and addresses of the universities should be written on
              the covers, which will be supplied by the universities at the time
              of application
            </li>
            <li>
              <b>
                The fee for transcript is Rs.700/-(Rupees Seven Hundred only)
                per transcript
              </b>
            </li>
          </ol>
        </div>
        <h2>DOCUMENTS FOR THE TRANSCRIPT</h2>
        <div className={procedure.documents}>
          <ol>
            <li>
              The students should bring the original Degree
              Certificate/Provisional Certificate; Consolidated Statement of
              Grade sheets/Marks sheets (All Semesters), and a proof of identity
              of the Candidate along with one set of legible photo copies (both
              front and back side) of the said certificates in a full scale
              envelope.
            </li>
            <li>
              The students should also bring required number of attested
              photocopies of Degree Certificate/Provisional Certificate,
              mark/grade sheets and consolidated statement of marks/grades of
              the Examination Section office before issue of transcript.
            </li>
            <li>
              Controller of Examination and Dean Academic will sign the
              Transcripts and envelopes (in which the Transcripts are put and
              sealed) and the applicant can collect the same after signed
              acknowledgment.
            </li>
            <li>
              For every additional Transcript, <b>student will pay Rs.700/-</b>
              (Rupees Seven Hundred only). The payment can be made by online or
              DD of nationalized bank in favour of "Director Walchand College of
              Engg, Sangli."
            </li>
          </ol>
          <p>
            <b>Bank Details</b>: Bank of India,Vishrambag,Sangli <br />
            <b> A/c No</b>: 150710110000187 <br />
            <b> IFSC</b>:BKID0001507 <br />
            <b> MICR</b>:416013154. <br />
          </p>
        </div>
        <div className={procedure.btns}>
          <div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </div>
          <button
            className={procedure.proceed}
            onClick={() => {
              navigate('/form')
            }}
          >
            Proceed
          </button>
          <a
            href='transcript download.pdf'
            className={procedure.download}
            target='_blank'
          >
            Download as pdf
          </a>
        </div>
      </div>
    </>
  )
}

export default Procedure
