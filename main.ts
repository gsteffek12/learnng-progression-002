let on : boolean = true

basic.forever(function () {
    for (let y = 0; y < 5; y ++) {
        for (let x = 0; x < 5; x ++) {
            if (on) 
                led.plot(x, y)
            else
                led.unplot(x, y)
            basic.pause(50)
        }
    }
    on = !on
})
