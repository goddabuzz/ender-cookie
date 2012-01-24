/**
 * Ender cookie module
 */
!function($){
    function Cookie(){}
    
    Cookie.prototype = {
        create: function(name, value, days){
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            document.cookie = name+"="+value+expires+"; path=/";
        }, 
        
        read: function(name, ret){
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0, len = ca.length;i < len;i++) {
                var c = ca[i];
                
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, len);
                }
                
                if (c.indexOf(nameEQ) === 0) {
                    ret = c.substring(nameEQ.length, len);
                    break;
                }
            }
            return ret;
        },
        
        erase: function(name){
            this.create(name,"",-1);
        }
    };
    
    $.cookie = new Cookie();
    
}( window.ender || window.jQuery);

