
// const grade = 99;

// const letter = returnLetter(grade);

// console.log('Your grade is ' + grade + ' which corresponds to ' + letter + '. You ' + (isPassing(letter) ? 'passed' : 'failed') + '.');

function returnLetter(grade) {
    if (grade >= 97) {
        return 'A+';
    }
    if (grade >= 93 && grade < 97) {
        return 'A';
    }
    if (grade >= 90 && grade < 93) {
        return 'A-';
    }
    if (grade >= 87 && grade < 90) {
        return 'B+';
    }
    if (grade >= 83 && grade < 87) {
        return 'B';
    }
    if (grade >= 80 && grade < 83) {
        return 'B-';
    }
    if (grade >= 77 && grade < 80) {
        return 'C+';
    }
    if (grade >= 73 && grade < 77) {
        return 'C';
    }
    if (grade >= 70 && grade < 73) {
        return 'C-';
    }
    if (grade >= 67 && grade < 70) {
        return 'D+';
    }
    if (grade >= 63 && grade < 67) {
        return 'D';
    }
    if (grade >= 60 && grade < 63) {
        return 'D-';
    }

    return 'F';
}

function isPassing(letter) {
    switch (letter) {
        case 'A+':
        case 'A':
        case 'A-':
        case 'B+':
        case 'B':
        case 'B-':
        case 'C+':
        case 'C':
        case 'C-':
            return true;
        default:
            return false;
    }
}

function isGradePassing(grade) {
    return isPassing(returnLetter(grade));
}

module.exports = {
    returnLetter,
    isPassing,
    isGradePassing
}