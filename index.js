function saturdayFun(activity = 'roller-skate') {
    return "This Saturday, I want to " + activity +"!";
}

saturdayFun('bathe my dog');

function mondayWork(work = 'go to the office') {
    return "This Monday, I will " + work +".";
}

mondayWork("work from home");

function wrapAdjective(special) {
    return function(name) {
        return `You are ${special}${name}${special}!`;
    }
}