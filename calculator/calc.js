function bottonclick (val) 
    {
        document.getElementById('screen').value+=val
        
    }
    console.log(val);

function clearDisplay(){
    document.getElementById('screen').value=""
}
function equalclick(){
    var text = document.getElementById('screen').value
    var res=eval(text)
    document.getElementById('screen').value=res
}