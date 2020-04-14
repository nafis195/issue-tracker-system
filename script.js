/*
Bismillahir Rahmanir Rahim
Nafis Khan CHowdhury
Issue Tracker System
script.js
Date - 04/12/2020
Time - 10:06 PM
*/





var openCaseVal = 0;
$("#openBtn").append(openCaseVal);
var closeCaseVal = 0;
$("#closeBtn").append(closeCaseVal);
var deleteCaseVal = 0;
$("#deleteBtn").append(deleteCaseVal);


function submitIssue(){
    const getInputValue = id => document.getElementById(id).value;
    const issueDescription = getInputValue('description');
    const issueSeverity = getInputValue('severity');
    const issueAssignee = getInputValue('assignTo');
    const issueID = Math.floor(Math.random()*100000000) + '';
    const issueStatus = 'Open';
    const issueDate = Date();
}