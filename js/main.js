
function loadbbs(){
    var NebPay = require("nebpay"); //https://github.com/nebulasio/nebPay
    var nebpay = new NebPay();

    var dappAddress = "n1kBCZ8Wb3z4Wxub2mvuBNCtqdJVqGGLQjS";

        var to = dappAddress;
        var value = "0";
        var callFunction = "get";
        var callArgs = "[]";
        nebpay.simulateCall(to, value, callFunction, callArgs, {
            listener: function(resp) {
                //console.log(JSON.stringify(resp.result));
                var myArr = JSON.parse(resp.result);

             myArr.sort(function(a,b)
		 {
             return  b.index -  a.index
          });
                var tempStr = "";

                for (var i = 0; i < myArr.length; i++) {
                    if (i % 2 == 0) {
                        tempStr += '<div class="panel-body"> ';
                    } else {
                        tempStr += '<div class="panel-footer">';
                    }
					
					
					tempStr += '<h2>';
					tempStr += myArr[i].articleTitle;
					
					tempStr += '</h2>';
					tempStr += '<small><cite>' + '楼主：' + myArr[i].author + '</cite></small>';
					tempStr += '<p><br>';
					tempStr += myArr[i].articleContent;
					tempStr += '</p>';
					tempStr += '<p>';
					
					tempStr += '</p> </div> ';
                }
                console.log(tempStr);
                $("#main-bbs").html(tempStr);
            }
        });
}
