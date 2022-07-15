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
    if(!(individual || organization)) throw "Empty individual or organization field"
    //if(!organization) throw "Empty organization field"    
    if(!aboutinfo) throw "Empty aboutinfo field"   
    var qs="summary.html?fname="+fname+"&email="+email+"&dob="+dob+"&interest="+interest+"&Country="+Country+"&individual="+individual+"&organization="+organization+"&aboutinfo="+aboutinfo
    window.open(qs)
}
catch (err){
    window.alert(err)
}


}