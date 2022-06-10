function receivesAFunction(received){
    received() 
}

function returnsANamedFunction () {
    return  function received() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {

    }

    
}