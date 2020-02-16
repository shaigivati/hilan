var user='xxxxxxxxxx';
var pass='xxxxxxxxxx';
var id='xxxxxxxxxx';


var ans = {};

ans.createSidebar = function() {

    return {
        init: function(){
            console.log("why hello there");
            a=document.getElementById('input_1');
            a.value=user;
            a=document.getElementById('input_2');
            a.value=pass;
            a=document.getElementById('input_3');
            a.value=id;
            document.getElementsByClassName("credentials_input_submit")[0].click();
        }
    }
}();

ans.createSidebar.init();