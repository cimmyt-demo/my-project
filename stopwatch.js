let stopwatch = {
    startTime: 0,
    elapsedTime: 0,
    interval: null,
    running: false,

    // Formats milliseconds into HH:MM:SS
    format(ms) {
        const s = Math.floor((ms / 1000) % 60);
        const m = Math.floor((ms / 60000) % 60);
        const h = Math.floor(ms / 3600000);
        return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
    },

    start() {
        if (this.running) return;
        this.running = true;
        this.startTime = Date.now() - this.elapsedTime;
        
        console.log("Stopwatch Started...");
        
        this.interval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            // Clears the console and logs the updated time
            console.clear();
            console.log(`Timer: ${this.format(this.elapsedTime)}`);
            console.log("Type 'stopwatch.stop()' to pause or 'stopwatch.reset()' to clear.");
        }, 100);
    },

    stop() {
        this.running = false;
        clearInterval(this.interval);
        console.log(`Stopped at: ${this.format(this.elapsedTime)}`);
    },

    reset() {
        this.stop();
        this.elapsedTime = 0;
        console.clear();
        console.log("Timer: 00:00:00 (Reset)");
    }
};

stopwatch.start();
