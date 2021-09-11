import React from 'react';

export class JobsCard extends React.Component {
    render() {
        const { job, company, city, jobDescription, companyDescription, date } = this.props

        return (
            <div className='jobsCard'>
                <p className="jobsTitle">{job}</p>
                <p className="jobsCompany">{company}</p>
                <p className="jobsCity">{city}</p>
                <p className="jobsJobDecsr">{jobDescription}</p>
                <p className="jobsCompanyDescr">{companyDescription}</p>
                <div className="jobsFooter">
                    <button className="jobsBtn">Откликнуться</button>
                    <p className="jobsDate">{date}</p>
                </div>                
            </div>
        )
    }

}