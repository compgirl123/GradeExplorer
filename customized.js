
var account = 'PhantomJS';
var page = require('webpage').create();
 
page.settings.loadImages = false;
 /**
 Boiler Plate Working Code Twitter followers
 **/

/*page.open('http://mobile.twitter.com/' + account, function (status) {
  if (status === 'fail') {
      console.log('Error');
  } else {
    var num = page.evaluate(function () {
      var selector = 'div.profile td.stat.stat-last div.statnum';
      return document.querySelector(selector).innerText;
      //return document.body.innerHTML;
    });
    //console.log(num);
    console.log('@' + account, 'has', num, 'followers');
  }
  phantom.exit();
});*/

page.open('https://my.concordia.ca/psp/upprpr9/?cmd=login&languageCd=ENG', function (status) {
  if (status === 'fail') {
      console.log('Error');
  } else {
    var num = page.evaluate(function () {
      var selector = 'div.container div.content p';
      return document.querySelector(selector).innerText;
      //return document.body.innerHTML;
    });
    console.log(num);
  }
  phantom.exit();

});
