var POST_URL = "[Paste WEBHOOK URL here]";

function onSubmit(e) {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
//    var latestResponse = allResponses[allResponses.length - 1];
//    var response = latestResponse.getItemResponses();
//    var items = [];

//    for (var i = 0; i < response.length; i++) {
//        var question = response[i].getItem().getTitle();
//        var answer = response[i].getResponse();
//        try {
//            var parts = answer.match(/[\s\S]{1,1024}/g) || [];
//        } catch (e) {
//            var parts = answer;
//        }
//
//        if (answer == "") {
//            continue;
//        }
//        for (var j = 0; j < parts.length; j++) {
//            if (j == 0) {
//                items.push({
//                    "name": question,
//                    "value": parts[j],
//                    "inline": false
//                });
//            } else {
//                items.push({
//                    "name": question.concat(" (cont.)"),
//                    "value": parts[j],
//                    "inline": false
//                });
//            }
//        }
//    }
  
  // Loop through responses, add 1 line per response
  var content = "";
  content="**[CUSTOMIZE RESPONSE TABLE TITLE HERE]** \n"
  for (var i=0;i<allResponses.length;i++) {
    var answers=allResponses[i].getItemResponses();
	//Following code is hard-coded for 2 responses (answers[0] and answers[1]). Could be extended as needed
    try {
      var name=answers[0].getResponse();
      var role=answers[1].getResponse();
      var row=name.concat(" \t").concat(role).concat(" \n");
      content=content.concat(row);      
    } catch(e) {};	//really should have an error handler, probably check if responses are null, at least
  }
      
//Google Script UrlFetchApp performs an http request based on content in options parameter
    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": content            
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
};
