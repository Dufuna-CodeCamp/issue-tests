#!/bin/bash

project_working_directory=$PWD/../../
test_folder=$project_working_directory/tests/
submission_directory="$PWD/../../submissions"

NONE='\033[00m'
BOLD='\x1b[1m'
UNDERLINE='\033[4m'
ITALIC='\x1b[3m'

echo -n "Enter First Name : "
read first_name

echo -n "Enter Last Name : "
read last_name

echo -n "Enter file name & location (e.g html-forms/contact.html) : "
read file

set_folder() {
    first_name=$(echo "$first_name" | tr '[:upper:]' '[:lower:]')
    first_letter=$(echo "${last_name:0:1}" | tr '[:lower:]' '[:upper:]')
    last_substring=$(echo "${last_name:1}" | tr '[:upper:]' '[:lower:]')

    folder_name="$first_name$first_letter$last_substring"
}

set_folder

# Run Tests

customReportDir=$test_folder
customReportFilename=logfile

echo -e "${ITALIC}visit${NONE} ${BOLD}${UNDERLINE}$test_folder/logfile.html${NONE} in your browser to see test reports"
env FILE_PATH=$submission_directory/$folder_name/$file mocha $test_folder/issue3/html_form_task.js --reporter mochawesome --reporter-options reportDir=$customReportDir,reportFilename=$customReportFilename,quiet=true
