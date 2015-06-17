var parser = new CParser();
function run(){
  var inputFile = document.getElementById("input").value;
  console.log(inputFile);
  $.ajax({
    url: "./" + inputFile,
    success: function(data){
      try{
        var textarea = "";
        var outStr = inputFile + "\n";
        for(var i = 0; i < 10; i++){
          //console.time("time");
          var start = new Date().getTime();
          var res = parser.parse(data);
          var end = new Date().getTime();
          //console.timeEnd("time");
          outStr += "  " + (end - start) + "ms\n";
        }
        textarea = $("#output").val();
        $("#output").val(textarea+outStr);
      } catch(e){
        $("#output").val(e);
      }
    }
  });
}

$(function(){

})
