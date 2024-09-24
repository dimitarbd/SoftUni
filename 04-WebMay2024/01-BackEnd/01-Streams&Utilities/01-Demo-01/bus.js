let subscriber = null;

function subscribe(callback) {
    subscribe = callback;
}

function publish(message) {
    if (typeof subscriber == 'function') {
        subscriber(message);
    }
}

module.exports = {
    subscribe, 
    publish
};