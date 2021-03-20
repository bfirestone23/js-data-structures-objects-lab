let driver = {};

const updateDriverWithKeyAndValue = (obj, key, val) => {
    return Object.assign({}, obj, { [key]: val });
};

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, val) => {
    obj[key] = val;
    return obj;
};

const deleteFromDriverByKey = (obj, key) => {
    let newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
};

const destructivelyDeleteFromDriverByKey = (obj, key) => {
    delete obj[key];
    return obj;
};