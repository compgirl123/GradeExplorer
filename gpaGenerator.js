var args = require('system').args;
var page = require('webpage').create();
var page2 = require('webpage').create();

var url = "https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG";
var gpa = "https://campus.concordia.ca/psc/pscsprd/EMPLOYEE/HRMS/c/CU_SELF_SERVICE.CU_SS_CGPA.GBL";

var user = "";
var password = "";
var width = "";
var height = "";

page.viewportSize = { width: width, height: height };


page.open(url, function () {

    page.evaluate(function(user,password) {
        document.getElementById("userid").value = 'YOUR USERNAME';
        document.getElementById("pwd").value = 'YOUR PASSWORD';
        document.querySelector('input[class=form_button_submit]').click();

    },user,password);

        setTimeout(function () {
                 page2.open(gpa, function (status) {

                        page2.render("/"+"gpa_"+".png");

                        var gpa = page2.evaluate(function() {
                            return document.getElementById('CU_STDNT_CGPA_V_CU_CUSTOM_CGPA$0').innerText;
                        });

                        console.log("Your Cumulative GPA is currently: " + gpa);
                        phantom.exit();

                    });
        }, 500);
      	
});


