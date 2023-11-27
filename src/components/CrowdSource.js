import React from 'react';

// The form will support state/controlled input once we move more into firebase and 
// storing data in a db. This area is currently under construction. 🚧

export function CrowdSource() {
    return (
        <div class="container p-5">
            <form>

            <div class="formbold-input-group p-2">
                <label>
                    What major did you apply to?
                </label>
            
                <select class="form-control" name="majors" id="majors">
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

            <div class="formbold-input-group p-2">
                <label>
                Have you been admitted to your major program? 
                </label>
        
                <select class="form-control" name="admitted1">
                <option value=""> --Select Your Answer--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>

            <div id="wsaQuestion" class="formbold-input-group p-2">
                <label>
                What is your WSA score?
                </label>
                <select class="form-control" name="Wsa" id="Wsa">
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

            <div class="formbold-input-group p-2">
                <label>
                What is your class standing?
                </label>
                <select class="form-control" name="standing" id="standing">
                <option value=""> --Select Your Answer--</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophmore">Sophmore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                Have you completed Running Start?
                </label>
                <select class="form-control" name="running" id="running">
                <option value=""> --Select Your Answer--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                Are you a transfer student?
                </label>
                <select class="form-control" name="transfer" id="transfer">
                <option value=""> --Select Your Answer--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                How many transfer credits do you have? (if applicable)
                </label>
                <select class="form-control" name="transcredit" id="transcredit">
                <option value=""> --Select Your Answer--</option>
                <option value="0-15">0-15</option>
                <option value="16-30">16-30</option>
                <option value="31-45">31-45</option>
                <option value="46-90">46-90</option>
                <option value="91+">91+</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                Have you completed major related internship?
                </label>
                <select class="form-control" name="internship" id="internship">
                <option value=""> --Select Your Answer--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                Have you completed related research/work experience?
                </label>
                <select class="form-control" name="work" id="work">
                <option value=""> --Select Your Answer--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                </select>
            </div>

            <div class="formbold-input-group p-2">
                <label>
                What is your overall UW GPA?
                </label>
                <select class="form-control" name="gpa" id="gpa">
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

            <div class="formbold-input-group p-2">
                <label>
                    Is this your first application to the program?
                </label>
                <select class="form-control" name="firstapp" id="firstapp">
                    <option value=""> --Select Your Answer--</option>
                    <option value="yes">Yes</option>
                    <option value="2nd">No, it is my 2nd</option>
                    <option value="3rd">No, it is my 3rd</option>
                    <option value="4th">No, it is my 4th</option>
                    <option value="higher4">No, it is higher than 4</option>
                </select>
            </div>
    
            <div class="formbold-input-group p-2">
                <label for="message">
                Any comments or suggestions
                </label>
                <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Type here..."
                    class="form-control"
                ></textarea>
                <button class="btn btn-primary mt-2">Submit</button>
            </div>
            </form>
        </div>
    )
}