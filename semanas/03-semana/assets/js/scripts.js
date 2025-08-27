  function printCV(btn){
    
      console.log('Salida de this-->', this)
      let originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Preparando impresión...';

      setTimeout(function(){

        let ok = confirm('¿Deseas imprimir ahora?');

        if(ok){ window.print(); }

        btn.disabled = false;
        btn.textContent = originalText;

      }, 3000);
  }