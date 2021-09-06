
  var size =10;
  var Form = new Array(size);
  for (var n = 0; n < Form.length; n++){
    Form [n] = new Array((size*2)+1);}
  var startindex = [0,0];
  var endindex = [0,0];
  var stop=false;

  function defult(){
    BaseForm();
    startindex = [4,4];
    endindex = [3,16];
    Form [3][16]= "E";
    Form [4][4]= "S";
    //document.getElementsByClassName("ql-editor").innerHTML ="FOR 12 TIMES GO RIGHT GO UP";
    print('OutputInnerBodyDiv1');
  };

  function Run(){
  var code = document.getElementById('result2').innerHTML;
  if (code == ""){
    alert( "Inter Your code please");
  }
  else
  {
    if (document.getElementById('result1').innerHTML == "")
    {
      alert( "Cmpile the code First");
    }
    else {
      var maincode=code;
      code= code.toUpperCase();
      code=code.replace( /\s/g, '');
      var way = [];;
      while (true)
      {
        if (code[0] == "F")
        {
          var start =code.indexOf("FOR")+3;
          var end= code.indexOf("TIMES");
          way.push(code[code.indexOf("GO")+2],code.substring(start,end));
          code=code.substring(code.indexOf(";")+1);
        }
        else if (code[0] == "J")
        {
          way.push(code[code.indexOf("JUMP")+4],"3");
          code=code.substring(code.indexOf(";")+1);
        }
        else {
          way.push(code[code.indexOf("GO")+2],"1");
          code=code.substring(code.indexOf(";")+1);
        }
        if(code.length == 0){
          break;
        }
      }
      Moving(way , maincode);
    }
  }
};

function Moving(way ,maincode){
    var result="";
    var count =1;
    var row = startindex[0];
    var col = startindex[1] ;
    var flag=true;
    for (var m=0; m<way.length & flag; m+=2)
    {
      if (way[m]== "L"){
        for (var x=0 ; x<way[m+1] ;x++)
        {
          if(col==1){
            flag=false;
            break;
          }
          else{
            col--;
            Form[row][col]=" ← ";
          }
        }
        count++;
      }
      else if (way[m]== "R" ){
        for (var x=0 ; x<way[m+1] ;x++)
        {
          if(col==size*2){
            flag=false;
            break;
          }
          else{
            col++;
            Form[row][col]=" → ";
          }
        }
        count++;
      }
      else if (way[m]== "U" ){
        for (var x=0 ; x<way[m+1] ;x++)
        {
          if(row==0){
            flag=false;
            break;
          }
          else{
            row--;
            Form[row][col]=" ↑ ";
          }
        }
        count++;
      }
      else if (way[m]== "D"){
        for (var x=0 ; x<way[m+1] ;x++)
        {
          if(row==size-1){
            flag=false;
            break;
          }
          else{
            row++;
            Form[row][col]=" ↓ ";
          }
        }
        count++;
      }
    }
    //console.log(way);
    if(m==way.length)
    {
      if (row == endindex[0] & col ==endindex[1]){
        Form[row][col] = " # "
        result="<<< Your Code is correct >>> ";
      }
      else{
        result="~~ Ops! Try again ~~";
        obj = document.getElementById('try');
        obj.style.visibility = "visible";
      }
    }
    else {
      var coderesult ="";
      for (var z=0 ;z<count-1;z++)
      {
        coderesult += maincode.substr(0,maincode.indexOf(";")+1) +"\n";
        maincode = maincode.substr(maincode.indexOf(";")+1);
      }
      result="~~There is some problem Try Again~~"+ "<br>"+"<br>"+"<br>"+"Error occur in :" + "<br>"
              +"<br>"+coderesult+ "<br>"+ "<br>"+ "These codes are not done:"+ "<br>"+"<br>"+maincode;
      obj = document.getElementById('try');
      obj.style.visibility = "visible";
    }
      document.getElementById('runstep').innerHTML = "Run Steps:";
      print ('OutputInnerBodyDiv2');
      document.getElementById('runresult').innerHTML = "Result:"
      document.getElementById('OutputInnerBodyDiv3').innerHTML = "<br>"+ result + "<br>" ;
};

  function BaseForm() {
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < (size*2)+1; j++) {
            Form [i][j] = " * ";
            if (j==0)
              Form[i][0]="";
        }
    }
  };

  function NewQuestiont(){
    stop=false;
    BaseForm();
    Clearresult ();
    var startindex1 = parseInt(Math.floor(Math.random() * size));
    var startindex2 = parseInt(Math.floor(Math.random() *size*2))+1;
    Form [startindex1][startindex2]= "S";
    var endtindex1 = size+1;
    var endtindex2 = size*2+1;
    var flag=true;
    while (flag)
    {
      endtindex1= parseInt(Math.floor(Math.random() * size));
      endtindex2 = parseInt(Math.floor(Math.random() * size*2))+1;
      if (!(endtindex1==startindex1 & endtindex2==startindex2)){
        Form [endtindex1][endtindex2]= "E";
        flag=false;
      }
    }
    startindex = [startindex1,startindex2];
    endindex = [endtindex1,endtindex2];
    print('OutputInnerBodyDiv1');

  };

  function print (elementID){
    tableMaker = o => {
      var keys = Object.keys(o[0]),rowMaker = (a,t) =>
        a.reduce((p,c,i,a) =>
          p + (i === a.length-1 ? "<" + t + ">" + c + "</" + t + "></tr>": "<" + t + ">" + c + "</" + t + ">"),"<tr>"),rows = o.reduce((r,c) =>
            r + rowMaker(keys.reduce((v,k) => v.concat(c[k]),[]),"td"),rowMaker(keys,"th"));

    return "<table>" + rows + "</table>";
    };
    Form[0][0]="";
    document.getElementById(elementID).innerHTML = tableMaker(Form);
  };

  function Copyresult() {

    if (document.getElementById('OutputInnerBodyDiv3').innerHTML!=  "")
    {

      if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById('OutputInnerBodyDiv3'));
        range.select().createTextRange();
        document.execCommand("copy");
      } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById('OutputInnerBodyDiv3'));
        window.getSelection().addRange(range);
        document.execCommand("copy");
      }
    }
    else {
            alert( "There is no result yet");
    }
  };

  function Clearresult(){
    document.getElementById('runresult').innerHTML = "";
    document.getElementById('OutputInnerBodyDiv3').innerHTML = "";
    document.getElementById('OutputInnerBodyDiv2').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('runstep').innerHTML = "";
  };

  function download(){
    if (document.getElementById('OutputInnerBodyDiv3').innerHTML!=  "")
    {
      var a = document.body.appendChild(
        document.createElement("a")
      );
      a.download = "Code_Results.txt";
      a.href = "data:text/html,"+ document.getElementById('runresult').innerHTML+"\n"+ document.getElementById('OutputInnerBodyDiv3').innerHTML;
      a.click();
    }
    else {
        alert( "There is no result yet");
    }
  };

  function showhide(){
    Clearresult();
    obj = document.getElementById('try');
    obj.style.visibility = "hidden";
};
