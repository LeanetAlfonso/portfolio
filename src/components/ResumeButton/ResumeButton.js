import React from 'react';
import resume from '../../assets/resume.pdf';
import { BsDownload } from 'react-icons/bs';
import "./ResumeButton.css";
const ResumeButton = () => {
    return (
        <div className='resume-btn'>
            <a
                aria-label='Download Resume'
                download='leanet-alfonso-azcona-resume.pdf'
                href={resume}
                className='btn'
                myfilename='leanet-alfonso-azcona-resume.pdf'
            >
                <div className='resume-icon'>
                    <BsDownload />
                </div>
                Resume
            </a>
        </div>
    );
};

export default ResumeButton;
