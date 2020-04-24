/**
 * @description This method turns the sent minutes into beautiful text and returns beautiful text value
 * @param {number} minutes
 * @returns {string}
 */
function ConvertTimeString(minutes) {
    if (!minutes) {
        throw new Error('required arguments is not defined');
    }

    const year = Math.floor(minutes / (1440 * 30 * 12));
    const month = Math.floor((minutes - (year * 1440 * 30 * 12)) / (1440 * 30));
    const week = Math.floor((minutes - (month * 1440 * 7 * 30)) / (1440 * 7));
    const day = Math.floor((minutes - (week * 1440 * 7)) / 1440);
    const hour = Math.floor((minutes - (day * 1440)) / 60);
    const minute = Math.round(minutes % 60);

    let text = '';

    if (year > 0) {
        text = `${year} years`;

        if (month > 0) {
            text += ` ${month} months`;
        }
    }
    else if (month > 0) {
        text = `${month} months`;

        if (week > 0) {
            text += ` ${week} weeks`;
        }
    } else if (week > 0) {
        text = ` ${week} weeks`;

        if (day > 0) {
            text += ` ${day} days`;
        }
    } else if (day > 0) {
        text = `${day} days`;

        if (hour > 0) {
            text += ` ${hour} hours`;
        }
    } else if (hour > 0) {
        text = `${hour} hours`;

        if (minute > 0) {
            text += ` ${minute} minutes`;
        }
    } else {
        text = `${minute} minutes`;
    }

    return text;
}

console.log(ConvertTimeString('365'))