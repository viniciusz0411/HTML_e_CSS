let anoAtual=new Date().getFullYear()
function verificar(){
    let resposta=document.getElementById('res')
    let nome=document.getElementById('nome')
    let dia=document.getElementById('dia')
    let mes=document.getElementById('mes')
    let ano=document.getElementById('ano')
    if(nome.value=='' || dia.value<=0 || dia.value>=32 || mes.value<=0 || mes.value>=13 || ano.value<=1900 || ano.value>=2026){
        window.alert('INFORMAÇÕES INCORRETAS.')
    } else if(ano.value<=2009 || ano.value==2010 & mes.value<=3) {
        document.getElementById('res').innerHTML=`${nome.value}, você NÃO poderá participar da competição!❌`
        resposta.style.backgroundColor= 'rgb(92, 34, 34)';
        resposta.style.borderRadius= '10px'
        resposta.style.padding= '10px'
    } else {
        document.getElementById('res').innerHTML=`${nome.value}, você poderá participar da competição!✔`
        resposta.style.backgroundColor= 'rgb(57, 92, 34)';
        resposta.style.borderRadius= '10px'
        resposta.style.padding= '10px'
    }
}
