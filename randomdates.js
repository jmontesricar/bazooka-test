'use strict';

module.exports = {
    setRandomDate: setRandomDate
}

const dates = [
    '2022-10-21',
    '2022-10-24',
    '2022-10-25',
    '2022-10-26',
    '2022-10-27',
    '2022-10-28',
    '2022-10-31',
    '2022-11-01',
    '2022-11-02',
    '2022-11-03',
]

function setRandomDate(requestParams, context, ee, next) {
    context.vars['date'] = dates[Math.floor(Math.random() * dates.length)];
    return next();
}
