function codificarTexto() {
    var inputText = document.getElementById("textAreaEntrada").value.toLowerCase().replace(/[^a-z]/g, "");
    var encodedText = inputText
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    document.getElementById("textAreaSaida").value = encodedText;
    document.getElementById("pessoa").style.display="none";
    document.getElementById("txt1").style.display="none";
    document.getElementById("txt2").style.display="none";
    document.getElementById("copiarBotao").style.display="block";
    document.getElementById("colarBotao").style.display="block";
  }
  
  function decodificarTexto() {
    var inputText = document.getElementById("textAreaEntrada").value.toLowerCase().replace(/[^a-z]/g, "");
    var decodedText = inputText
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    document.getElementById("textAreaSaida").value = decodedText;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var copiarBotao = document.getElementById("copiarBotao");
    var colarBotao = document.getElementById("colarBotao");
    copiarBotao.addEventListener("click", copiarTexto);
    colarBotao.addEventListener("click", colarTexto);
  });
  
  function copiarTexto() {
    var outputText = document.getElementById("textAreaSaida").value;
    navigator.clipboard.writeText(outputText)
      .then(function() {
        var inputTextarea = document.getElementById("textAreaEntrada");
        inputTextarea.value = "";
        inputTextarea.focus();
        inputTextarea.select();
      })
      .catch(function(error) {
        console.error("Falha ao copiar o texto: ", error);
      });
  }
  
  function colarTexto() {
    navigator.clipboard.readText()
      .then(function(text) {
        var inputTextarea = document.getElementById("textAreaEntrada");
        inputTextarea.value = text;
      })
      .catch(function(error) {
        console.error("Falha ao colar o texto: ", error);
      });
  }
  