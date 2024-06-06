/*
    Make all the functions from the previous StopWatch OOP exercise into the prototype of StopWatch. 
    Put methods in the prototype as an optimization technique. 

    This was a stoopid exericse
    Premature optimation is the root of all evil. 
*/

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running', {
        get: function() {
            return running;
        }
    });
}

StopWatch.prototype.start = function() {
    if(this.running) throw new Error('Stopwatch has already started!')
    this.running = true;
    this.startTime = new Date();
};

StopWatch.prototype.stop = function() {
    if(!this.running) throw new Error('Stopwatch has not started!')
    this.running = false;
    this.endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
};

StopWatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    duration = 0;
};

