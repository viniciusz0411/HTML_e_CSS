function mudarTema(){
    if (cor==1){
        let cor=0
        document.documentElement.style.filter="none"
    } else{
        document.documentElement.style.filter="invert(100%)";
        let cor=1
    }
}