function subscriberPublisher(){
    const subscribers = {};

    function subscribe(event, callbackFunction){
        if(!subscribers[event]){
            subscribers[event] = [];
        }

        subscribers[event].push(callbackFunction)
    }

    function publisher(event, ...args){
        if(!subscribers[event]){
            return;
        }

        subscribers[event].forEach((callback)=> {
            callback(...args);
        });
    };

    return{
        subscribe,
        publisher
    };
};


export default subscriberPublisher;