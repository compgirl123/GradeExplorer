var args = require('system').args;
var page = require('webpage').create();
var page2 = require('webpage').create();

var url = "https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG";
var grades = "https://campus.concordia.ca/psc/pscsprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL"; 

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
                 page2.open(grades, function (status) {

                        page2.render("/"+"grades_"+".png");
                            var grades = page2.evaluate(function() {
                            return document.getElementById('win0divCRSE_HIST$0').innerText;
                        });

                        console.log("Your Grades Are : " + grades) ;
                        
                        phantom.exit();

                    });
        }, 500);
      	
});


