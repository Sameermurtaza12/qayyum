function validatForm(){
var fname= document.getElementById('fname').value
var email= document.getElementById('email').value
var dob= document.getElementById('dob').value
var interest= document.getElementById('interest').value
var Country= document.getElementById('Country').value
var individual= document.getElementById('individual').checked
var organization= document.getElementById('organization').checked
var aboutinfo= document.getElementById('aboutinfo').value

try{
    if(!fname) throw "Empty Name field"
    if(!email) throw "Empty email field"
    if(!dob) throw "Empty dob field"
    if(!interest) throw "Empty interest field"
    if(!Country) throw "Empty country field"
    if(!individual) throw "Empty individual field"
    if(!organization) throw "Empty organization field"    
    if(!aboutinfo) throw "Empty aboutinfo field"   
}
catch (err){
    window.alert(err)
}

}