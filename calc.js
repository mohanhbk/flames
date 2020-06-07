function myFunction() {

    var name=document.getElementById("name").value;
    var pname=document.getElementById("pname").value;
    

    if ((name.trim().length==0) || (pname.trim().length==""))
    {
        document.getElementById("alert").innerHTML = "Enter required fields" 
        return;
    }
    else{
        
        var sname = (name.split(" ").join("")).split("");
        var spname = (pname.split(" ").join("")).split("");
        if (JSON.stringify(sname)==JSON.stringify(spname)){
            document.getElementById("result").innerHTML ="Wow! Perfect relationship!";
            return;
        }
        
        for (let i=0;i<sname.length;i++){
            for(let j=0;j<spname.length;j++){
                if (sname[i]==spname[j]){
                    sname.splice(i,1);
                    spname.splice(j,1);
                    i=i-1;
                    break;
                }
            }
        }
        let difference = [...sname,...spname];
        console.log(difference,difference.length)
        var flames = ["F","L","A","M","E","S"];
        
        var start =0;
        var i =0;
        var j =0;
        do{
            if (j>flames.length-1){     
                j=(start + j-1) % (flames.length-1);
                
            }
            if (i==difference.length-1){
                c=flames.splice(j,1);
                i=0;
                continue;    
            }
            i++;
            j++;
            
        }while(flames.length!=1);
        console.log(flames[0])
        switch(flames[0]){
            case "F":
                document.getElementById("result").innerHTML ="Friendship!";
                break;
            case "L":
                document.getElementById("result").innerHTML ="Love!";
                break;
            case "A":
                document.getElementById("result").innerHTML ="Affection!";
                break;
            case "M":
                document.getElementById("result").innerHTML ="Marriage!";
                break;
            case "E":
                document.getElementById("result").innerHTML ="Enemy!";
                break;
            case "S":
                document.getElementById("result").innerHTML ="Sister!";
                break;
        }
        }
        return;
    }
   
  
function resetFun(){
    document.getElementById("name").value="";
    document.getElementById("pname").value="";
    document.getElementById("name").focus();
    document.getElementById("alert").innerHTML ="";
    document.getElementById("result").innerHTML ="";
}