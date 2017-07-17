// Thank you to Nick Piesco for the inspiration for this code:
// https://codepen.io/nickpiesco/pen/YPbqPM
// Although it may seem as if I copied a lot of code from him,
// the only thing I copied was the .isBetween. The rest is original.

$(function() {
    
    Number.prototype.isBetween = function(a, b) {
        return this >= a && this <= b;
    };
    
    function setTime() {
        var hour = moment().format('h');
        var minute = moment().minute();
        var meridian = moment().format('a');
        var firsthalf;
        var secondhalf;
        if (minute.isBetween(0, 32) || minute.isBetween(38, 42)) {
            firsthalf = true;
            secondhalf = false;
        } else {
            firsthalf = false;
            secondhalf = true;
        }
        
        
        if (minute.isBetween(0, 2) || minute.isBetween(58, 59)) {
            $('#oclock').addClass('light');
        } else if (minute.isBetween(3, 7) || minute.isBetween(23, 27) ||
                   minute.isBetween(33, 37) || minute.isBetween(53, 57)) {
            $('#five-minute').addClass('light');
        } else if (minute.isBetween(8, 12) || minute.isBetween(48, 52)) {
            $('#ten-minute').addClass('light');
        } else if (minute.isBetween(13, 17) || minute.isBetween(43, 47)) {
            $('#a, #quarter').addClass('light');
        } else if (minute.isBetween(28, 32)) {
            $('#half').addClass('light');
        } else if (minute.isBetween(38, 42)) {
            $('#forty').addClass('light');
        }
        
        if (minute.isBetween(18, 27) || minute.isBetween(33, 37)) {
            $('#twenty').addClass('light');
        }
        if (minute.isBetween(23, 27) || minute.isBetween(33, 37)) {
            $('#dash').addClass('light');
        }
        
        
        
        if ((hour == 12 && secondhalf) || (hour == 1 && firsthalf)) {
            $('#one').addClass('light');
        }
        if ((hour == 1 && secondhalf) || (hour == 2 && firsthalf)) {
            $('#two').addClass('light');
        }
        if ((hour == 2 && secondhalf) || (hour == 3 && firsthalf)) {
            $('#three').addClass('light');
        }
        if ((hour == 3 && secondhalf) || (hour == 4 && firsthalf)) {
            $('#four').addClass('light');
        }
        if ((hour == 4 && secondhalf) || (hour == 5 && firsthalf)) {
            $('#five').addClass('light');
        }
        if ((hour == 5 && secondhalf) || (hour == 6 && firsthalf)) {
            $('#six').addClass('light');
        }
        if ((hour == 6 && secondhalf) || (hour == 7 && firsthalf)) {
            $('#seven').addClass('light');
        }
        if ((hour == 7 && secondhalf) || (hour == 8 && firsthalf)) {
            $('#eight').addClass('light');
        }
        if ((hour == 8 && secondhalf) || (hour == 9 && firsthalf)) {
            $('#nine').addClass('light');
        }
        if ((hour == 9 && secondhalf) || (hour == 10 && firsthalf)) {
            $('#ten').addClass('light');
        }
        if ((hour == 10 && secondhalf) || (hour == 11 && firsthalf)) {
            $('#eleven').addClass('light');
        }
        if ((hour == 11 && secondhalf) || (hour == 12 && firsthalf)) {
            $('#twelve').addClass('light');
        }
        
        if (meridian == "am") {
            $('#am').addClass('light');
        } else if (meridian == "pm") {
            $('#pm').addClass('light');
        }
        
        
        
        if (minute.isBetween(0, 2) || minute.isBetween(38, 42) || minute.isBetween(58,59)) {
        } else if (firsthalf) {
            $('#past').addClass('light');
        } else if (secondhalf) {
            $('#to').addClass('light');
        }
        
    }
    
    
    function refresh() {
        $('.light').removeClass('light');
        setTime();
    }
    refresh();
    window.setInterval(refresh, 1000);

});