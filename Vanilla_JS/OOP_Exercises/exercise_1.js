/*
    Design a stopwatch object. Use the contructor way. The following are it's properties,
    duration, and the following methods, reset, start, and stop. 

    The initial duration of the stop watch is 0. When we call the start method, the stop watch
    will begin. If we attempt to call the start method again while it has already been started,
    an exception will be thrown. Same for the stop method. Whether we stop or start, the same 
    duration will be changing unless we call the reset method. 
*/

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running) throw new Error('Stopwatch has already started!')
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if(!running) throw new Error('Stopwatch has not started!')
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

