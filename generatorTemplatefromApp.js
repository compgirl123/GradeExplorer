var args = require('system').args;
var page = require('webpage').create();
var page1 = require('webpage').create();
var page2 = require('webpage').create();
var page3 = require('webpage').create();


var url = "https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG";

var user = "";
var password = "";
var save = "";
var save1 = "";
var width = "";
var height = "";

page.viewportSize = { width: width, height: height };

page.open(url, function () {

    page.evaluate(function(user,password) {
        document.getElementById("userid").value = 'YOUR USERNAME';
        document.getElementById("pwd").value = 'YOUR PASSWORD';
        document.querySelector('input[class=form_button_submit]').click();
    },user,password);

     //setTimeout(function () {
        setTimeout(function () {
                    
            page.render("public/screenshots/"+"concordia_"+".png");
                   
            var grades = "https://campus.concordia.ca/psc/pscsprd/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSS_MY_CRSEHIST.GBL";
        	var gpa = "https://campus.concordia.ca/psc/pscsprd/EMPLOYEE/HRMS/c/CU_SELF_SERVICE.CU_SS_CGPA.GBL";

        	page2.open(grades,'post', function (status) {
                var title = page2.evaluate(function() {
                    return typeof document.getElementById('win0divCRSE_HIST$0').textContent;
                    
                  });
                
                page2.evaluate(function () {});
                var grade = page2.evaluate(function () {
                  return document.getElementById("CRSE_GRADE$10").innerText;
                  //return document.body.innerHTML;
                });
                console.log(grade);
                    //console.log(page2.content);
                    page2.render("public/screenshots/"+"grades_"+".png");
                    phantom.exit();

            });

            page3.open(gpa, function (status) {

                page3.evaluate(function () {});
                    page3.render("public/screenshots/"+"gpa_"+".png");

                var gpa = page3.evaluate(function() {
                    return document.getElementById('CU_STDNT_CGPA_V_CU_CUSTOM_CGPA$0').innerText;
                  });
                console.log("Your Cumulative GPA is currently: " + gpa);
          
                    phantom.exit();

            });

         }, 500);
//}, 500);
 	
});


