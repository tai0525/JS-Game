document.getElementById("myButton").onclick =
            function () {
                let num = Math.random();//0~0.99999...
                num = num * 10;
                num = Math.floor(num);
                console.log(num);

                if (num == document.getElementById("myInput").value) {
                    alert("猜對了");
                }
                else if (num < document.getElementById("myInput").value){
                    alert("猜小一點");
                } else {
                    alert("猜大一點");
                }
            }


