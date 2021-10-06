function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (thing = "go to the office") {
  return `This Monday, I will ${thing}.`;
};

function wrapAdjective(work = "*") {
  return function (exp) {
    // "You are *a hard worker*!"
    return `You are ${work}${exp}${work}!`;
  };
}
