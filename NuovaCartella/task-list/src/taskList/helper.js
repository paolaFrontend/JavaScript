
function done(tasks, ind, checked) {
    let t = [...tasks];
    let item = tasks[ind];
    item.done = checked;
    t[ind] = item;
    return t;
}

function changeActivity(tasks, ind, ts) {
    let t = [...tasks];
    let item = tasks[ind];
    item.activity = ts;
    t[ind] = item;
    return t;
}

function changeDet(tasks, ind, ts) {
    let t = [...tasks];
    let item = tasks[ind];
    item.description = ts;
    t[ind] = item;
    return t;
}

function add( vett, item){
    let l=vett.concat(item);
    return l;
}

export { done, changeActivity, changeDet, add};
