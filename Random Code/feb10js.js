<script>

      var shotsTaken = [false, false, false, false, false, false];
      var ships = [false, true, true, true, false, false];
      var hitCount = 0;
      var missCount = 0;

      function validShot(num) {
         if (num >= 0 && num <= ships.length - 1) {
           return true;
         }
         else {
           return false;
         }
      }     

      function shotAlreadyTaken(num) {
         if (shotsTaken[num]) {
            return true;
         }
         else {
            return false;
         }
       //return shotsTaken[num];    // simplify this function
      }

      function itIsAHit(num) {
         return ships[num];     // ships[ ] is an array of true/false values
      }

      function recordHit(num) {
        hitCount++;
        print("Hit...\n");
      }

      function recordMiss(num) {
        missCount++;
        print("Missed...\n");
      }

      function takeAShot(num) {
         if (validShot(num)) {
           if (shotAlreadyTaken(num)) {
             print("Oops, you already took that shot.\n");
           }
           else {
             shotsTaken[num] = true;
             if (itIsAHit(num)) {
               recordHit(num);
             }
             else {
               recordMiss(num);
             }
           }
         }
         else {
           print("Oops, that is not a valid location.\n");
         }
      }

      function getInput() {
        var inEle = getEle("txtInput");
        //alert(getEle("txtInput").value);
        return inEle.value;
      }

      function shipSunk() {
        return hitCount == 3;
      }

      function playGame() {
         //alert("Play Game");
         if (hitCount == 3) {
            print("You have already sunk the ship.\n");
         }
         else {
           var shot = getInput();
           takeAShot(shot);
           
           if (shipSunk()) {
             print("You just sank the ship.\n");
           }
         }
      }

//============================================================================

      function printArray(a, delim) {
        if (delim == undefined) {
          delim = " ";
        }
        for(var i = 0; i < a.length; i++) {
           print(a[i] + delim);
        }
      }

      function test() {
         var arr = [1 ,2.4343, 3, true, "world", [6,[0,0,0],7,8], {name: "Bob", age: 14}];
         printArray(arr, ", ");
      }

      function test2() {
         var arr = [1,2,3,4,5];
         printArray(arr, ", ");
         print( "\nTotal is: " + sum(arr) );
      }

      function sum(a) {
        var total = 0;
        for(var i = 0; i < a.length; i++) {
           total = total + a[i];
        }
        return total;
      }
      
      function getEle(id) {
        return document.getElementById(id);
      }

      function print(txt) {
        var out = getEle("txtOutput");
        out.value = out.value + txt;
        out.scrollTop = out.scrollHeight;
      }

      function doInput() {
        var inEle = getEle("txtInput");
        var txt = inEle.value + "\n";
        print(txt);
        inEle.value = "";
      }

    </script>