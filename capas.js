     function digit_3() {
         for (a=0; a < result[2]; a++); {}

         if (a == "0") {
             zero = "";
         } else if (a == "1") {
             zero = "0";
         } else if (a == "2") {
             zero = "00";
         } else if (a == "3") {
             zero = "000";
         } else if (a == "4") {
             zero = "0000";
         } else if (a == "5") {
             zero = "00000";
         } else if (a == "6") {
             zero = "000000";
         } else if (a == "7") {
             zero = "0000000";
         } else if (a == "8") {
             zero = "00000000";
         } else if (a == "9") {
             zero = "000000000";
         } else {
             alert("NAN");
         }
         pF = result[0]+result[1]+zero;
         nF = pF/1000;
         uF = nF/1000;

         document.getElementById('out_uf').innerHTML =uF;
         document.getElementById('out_nf').innerHTML =nF;
         document.getElementById('out_pf').innerHTML =pF;

     }
     function digit_4() {
         for (a=0; a < result[3]; a++); {}

         if (a == "0") {
             zero = "";
         } else if (a == "1") {
             zero = "0";
         } else if (a == "2") {
             zero = "00";
         } else if (a == "3") {
             zero = "000";
         } else if (a == "4") {
             zero = "0000";
         } else if (a == "5") {
             zero = "00000";
         } else if (a == "6") {
             zero = "000000";
         } else if (a == "7") {
             zero = "0000000";
         } else if (a == "8") {
             zero = "00000000";
         } else if (a == "9") {
             zero = "000000000";
         } else {
             alert("NAN");
         }
         pF = result[0]+result[1]+result[2]+zero;
         nF = pF/1000;
         uF = nF/1000;

         document.getElementById('out_uf').innerHTML =uF;
         document.getElementById('out_nf').innerHTML =nF;
         document.getElementById('out_pf').innerHTML =pF;


     }
     
     function ok()
    {
        var text = document.getElementById("display");
        x = text.value;
        var uF, nF, pF, a, zero;

        result= x.split( /(?=(?:\d{1})+(?!\d))/ ); // [1, 234, 567, 890]

        if (result.length == 3) {
            digit_3();
        }
        else if (result.length ==4) {
            digit_4();
        }
        else {alert ("3 or 4 digits");
        }

        document.getElementById("digit_q").innerHTML = "DIGITS: " + result.length;
        document.getElementById("image").innerHTML = x;

        //if (result[1] === "R") alert(wwww);
        // {pF = result[0] + "," + zero;}



        //document.getElementById('out_uf').innerHTML = "Код " + x + " <br \\\\/>"  + uF + " uf <br \\/>" + nF + " nF <br \\/>" + pF + " pF" ;
    }

