import React, { useRef } from "react";
//import ReactDOM from "react-dom";
import {parseAndGetresults,parseAndGetSyntaxErrors} from "./parser";
import Editor from "@monaco-editor/react";

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    var x =editorRef.current.getValue();
    x=x.toUpperCase();
    let s=parseAndGetSyntaxErrors(x);
    if(s==="no error"){
        s=parseAndGetresults(x);
        document.getElementById('result').innerHTML = "<br>"+ "God Job"+"<br>"+"Press The Run Buttons Now.";
      }
    else {
      alert(s);
    }
    document.getElementById('result2').innerHTML = x;
    document.getElementById('result1').innerHTML = s;
  }


  function DownloadItems (){
      var a = document.body.appendChild(
      document.createElement("a")
      );
      a.download = "Code.txt";
      a.href = "data:text/html,"+ editorRef.current.getValue();
      a.click();
  }

  function ClearItems () {
    editorRef.current.setValue("");
  }

  function CopyItems () {
    navigator.clipboard.writeText(editorRef.current.getValue()).then(function() {
    }, function() {
    });
  }

  return (
    <>
      <button onClick={showValue} >Compile</button>
      <button onClick={DownloadItems} >Download Code</button>
      <button onClick={CopyItems} >Copy Code</button>
      <button onClick={ClearItems} >Clear Input</button>
      <br></br>
      <br></br>
      <span id="inputMsg1">Code Input:</span>
      <br></br>
      <br></br>
      <div id="code">
      <Editor
          height="50vh"
          width="50vh"
          defaultLanguage="MoveLang"
          defaultValue="FoR 9 TIMES GO RIGHT; Jump Right; GO UP;"
          theme='vs-dark'
          onMount={handleEditorDidMount}/>
      </div>
      <div  id="result" ></div>
      <div className="NotShow" id="result1" ></div>
      <div className="NotShow" id="result2" ></div>
    </>
   );
}
export default App;
