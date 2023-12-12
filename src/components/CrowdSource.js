import React, { useState } from 'react';
import { ref, push as firebasePush } from 'firebase/database';

export function CrowdSource(props) {
    const initialFormData = {
        "Timestamp": '',
        "What Major did you apply to?": '',
        "Have you been admitted to your major program?": '',
        "What is your WSA score?": '',
        "Class Standing": '',
        "Have you completed Running Start?": '',
        "Are you a transfer student?": '',
        "How many transfer credits do you have? (if applicable)": '',
        "Have you completed a related internship?": '',
        "Have you completed related research": {
            "work experience?": ''
        },
        "OverallGPA": '',
        "preReqGPA": '',
        "What is your GPA trend?": '',
        "Have you received any academic scholarships or awards?": '',
        "Is this your first application to the program?": '',
        "Comments or Suggestions": ''
    }

    // state variables
    const [formData, setFormData] = useState(initialFormData);
    const [showThankYou, setShowThankYou] = useState(false);

    // Handle change
    const handleChange = event => {
        const {name, value}  = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        setShowThankYou(false);
    };

    // Firebase
    const dataRef = ref(props.dataBase, 'surveyEntries');

    // Handle submit
    const handleSubmit = async event => {
        event.preventDefault();
        // Add timestamp
        let time = Date.now();
        let dataCopy = formData;
        dataCopy.Timestamp = time;
        setFormData(dataCopy);

        try {
            // Push new data to Firebase
            await firebasePush(dataRef, formData);
            // Clear form data after submission
            setFormData(initialFormData);
            // Show "Thank You" message
            setShowThankYou(true);
            console.log('Data successfully added to surveyEntries');
        } catch (error) {
            console.error('Error adding data to surveyEntries:', error.message);
        }
    };

    return (
        <div>
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-8">
                        <section className="justify-content-center">
                            <section className="flex-container align-middle">
                                <h1>CONTRIBUTE YOUR SUCCESS!</h1>
                            </section>
                            <p>We would love your input about your academic journey here at the UW to bolster our data to show incoming and current UW students up-to-date and accurate data. </p>
                        </section>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <img className="img-fluid img-class" src="img/success.png" alt="a guy holding a trophy">
                        </img>
                    </div>
                </div>
            </div>

            <div className="container p-5">
                <form onSubmit={handleSubmit}>

                <div className="formbold-input-group p-2">
                    <label>
                        What major did you apply to?
                    </label>
            
                    <select className="form-control" name="What Major did you apply to?" id="majors" onChange={handleChange} value={formData["What Major did you apply to?"]}>
                        <option value=""> --Select Your Answer--</option>
                        <option value="Aeronautics & Astronautics">Aeronautics & Astronautics</option>
                        <option value="AMATH">AMATH</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Astronomy">Astronomy</option>
                        <option value="Biochemistry">Biochemistry</option>
                        <option value="Bioengineering">Bioengineering</option>
                        <option value="Bioresource Science & Engineering">Bioresource Science & Engineering</option>
                        <option value="Biology">Biology</option>
                        <option value="Business">Business</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Communication">Communication</option>
                        <option value="Community, Environment, & Planning">Community, Environment, & Planning</option>
                        <option value="Computational Finance & Risk Management">Computational Finance & Risk Management</option>
                        <option value="Computer Engineering">Computer Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Construction Management">Construction Management</option>
                        <option value="CSE">CSE</option>
                        <option value="Early Childhood & Family Studies">Early Childhood & Family Studies</option>
                        <option value="Economics">Economics</option>
                        <option value="Education, Communities & Organizations">Education, Communities & Organizations</option>
                        <option value="Electrical and Computer Engineering">Electrical and Computer Engineering</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Human Centered Design & Engineering">Human Centered Design & Engineering</option>
                        <option value="Industrial & Systems Engineering">Industrial & Systems Engineering</option>
                        <option value="Industrial & Systems Engineering">Industrial & Systems Engineering</option>
                        <option value="Informatics">Informatics</option>
                        <option value="Integrated Social Sciences">Integrated Social Sciences</option>
                        <option value="Law, Societies & Justice">Law, Societies & Justice</option>
                        <option value="Materials Science & Engineering">Materials Science & Engineering</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Neuroscience">Neuroscience</option>
                        <option value="Nursing">Nursing</option>
                        <option value="Physics">Physics</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Public Health">Public Health</option>
                        <option value="Social Welfare">Social Welfare</option>
                        <option value="Speech & Hearing Sciences">Speech & Hearing Sciences</option>
                        <option value="Statistics">Statistics</option>
                    </select>
                </div>              

                <div className="formbold-input-group p-2">
                    <label>
                    Have you been admitted to your major program? 
                    </label>
            
                    <select className="form-control" name="Have you been admitted to your major program?" onChange={handleChange} value={formData["Have you been admitted to your major program?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div id="wsaQuestion" className="formbold-input-group p-2">
                    <label>
                    What is your WSA score?
                    </label>
                    <select className="form-control" name="What is your WSA score?" id="Wsa" onChange={handleChange} value={formData["What is your WSA score?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="2.0">2.0</option>
                    <option value="2.5">2.5</option>
                    <option value="3.0">3.0</option>
                    <option value="3.5">3.5</option>
                    <option value="4.0">4.0</option>
                    <option value="4.5">4.5</option>
                    <option value="5.0">5.0</option>
                    <option value="5.5">5.5</option>
                    <option value="6.0">6.0</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    What is your class standing?
                    </label>
                    <select className="form-control" name="Class Standing" id="standing" onChange={handleChange} value={formData["Class Standing"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    Have you completed Running Start?
                    </label>
                    <select className="form-control" name="Have you completed Running Start?" id="running" onChange={handleChange} value={formData["Have you completed Running Start?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    Have you received any academic scholarships or awards?
                    </label>
                    <select className="form-control" name="Have you received any academic scholarships or awards?" id="running" onChange={handleChange} value={formData["Have you received any academic scholarships or awards?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes (Full)">Yes (Full)</option>
                    <option value="Yes (Partial)">Yes (Partial)</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    Are you a transfer student?
                    </label>
                    <select className="form-control" name="Are you a transfer student?" id="transfer" onChange={handleChange} value={formData["Are you a transfer student?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    How many transfer credits do you have? (if applicable)
                    </label>
                    <select className="form-control" name="How many transfer credits do you have? (if applicable)" id="transcredit" onChange={handleChange} value={formData["How many transfer credits do you have? (if applicable)"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="0-15">0-15</option>
                    <option value="16-30">16-30</option>
                    <option value="31-45">31-45</option>
                    <option value="46-90">46-90</option>
                    <option value="91+">91+</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    Have you completed major related internship?
                    </label>
                    <select className="form-control" name="Have you completed a related internship?" id="internship" onChange={handleChange} value={formData["Have you completed a related internship?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    Have you completed related research/work experience?
                    </label>
                    <select className="form-control" name="Have you completed related research" id="work" onChange={handleChange} value={formData["Have you completed related research"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    What is your overall UW GPA?
                    </label>
                    <select className="form-control" name="OverallGPA" id="gpa" onChange={handleChange} value={formData["OverallGPA"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Below">Below 2.0</option>
                    <option value="2.1">2.1</option>
                    <option value="2.2">2.2</option>
                    <option value="2.3">2.3</option>
                    <option value="2.4">2.4</option>
                    <option value="2.5">2.5</option>
                    <option value="2.6">2.6</option>
                    <option value="2.7">2.7</option>
                    <option value="2.8">2.8</option>
                    <option value="2.9">2.9</option>
                    <option value="3.0">3.0</option>
                    <option value="3.1">3.1</option>
                    <option value="3.2">3.2</option>
                    <option value="3.3">3.3</option>
                    <option value="3.4">3.4</option>
                    <option value="3.5">3.5</option>
                    <option value="3.6">3.6</option>
                    <option value="3.7">3.7</option>
                    <option value="3.8">3.8</option>
                    <option value="3.9">3.9</option>
                    <option value="4.0">4.0</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    What is your GPA trend? (1 is decreasing and 10 is increasing)
                    </label>
                    <select className="form-control" name="What is your GPA trend?" id="gpa" onChange={handleChange} value={formData["What is your GPA trend?"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                    What was your pre-requisite UW GPA for your major?
                    </label>
                    <select className="form-control" name="preReqGPA" id="gpa" onChange={handleChange} value={formData["preReqGPA"]}>
                    <option value=""> --Select Your Answer--</option>
                    <option value="Below">Below 2.0</option>
                    <option value="2.1">2.1</option>
                    <option value="2.2">2.2</option>
                    <option value="2.3">2.3</option>
                    <option value="2.4">2.4</option>
                    <option value="2.5">2.5</option>
                    <option value="2.6">2.6</option>
                    <option value="2.7">2.7</option>
                    <option value="2.8">2.8</option>
                    <option value="2.9">2.9</option>
                    <option value="3.0">3.0</option>
                    <option value="3.1">3.1</option>
                    <option value="3.2">3.2</option>
                    <option value="3.3">3.3</option>
                    <option value="3.4">3.4</option>
                    <option value="3.5">3.5</option>
                    <option value="3.6">3.6</option>
                    <option value="3.7">3.7</option>
                    <option value="3.8">3.8</option>
                    <option value="3.9">3.9</option>
                    <option value="4.0">4.0</option>
                    </select>
                </div>

                <div className="formbold-input-group p-2">
                    <label>
                        Is this your first application to the program?
                    </label>
                    <select className="form-control" name="Is this your first application to the program?" id="firstapp" onChange={handleChange} value={formData["Is this your first application to the program?"]}>
                        <option value=""> --Select Your Answer--</option>
                        <option value="yes">Yes</option>
                        <option value="2nd">No, it is my 2nd</option>
                        <option value="3rd">No, it is my 3rd</option>
                        <option value="4th">No, it is my 4th</option>
                        <option value="higher4">No, it is higher than 4</option>
                    </select>
                </div>
        
                <div className="formbold-input-group p-2">
                    <label htmlFor="message">
                    Any comments or suggestions
                    </label>
                    <textarea
                        rows="6"
                        name="Comments or Suggestions"
                        id="message"
                        placeholder="Type here..."
                        className="form-control"
                        onChange={handleChange}
                        value={formData["Comments or Suggestions"]}
                    ></textarea>
                    <button style={{color: "white", backgroundColor: "#4b2e83"}} className="btn mt-2">Submit</button>

                    {showThankYou && <p className="mt-2">Thank you for your submission!</p>}
                </div>
                </form>
            </div>
        </div>
    )
}