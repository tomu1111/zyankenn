$(function () {
    $(".gu-").on("click", function () {    
    console.log("グーー");
    $(".zibun").html('<img src="img/image_2.png">');
    var number=Math.floor( Math.random() *3);
if(number==0){
    console.log("チョキ");
    $(".result").html('<img src="img/image_1.png">');
    console.log("勝ち");
    $(".syobu").html('勝ち');
}
else if(number==1){
    console.log("グー");
    $(".result").html('<img src="img/image_2.png">');
    console.log("同点");
    $(".syobu").html('同点');
}
else if(number==2){
    console.log("パー");
    $(".result").html('<img src="img/image_3.png">');
    console.log("負け");
    $(".syobu").html('負け');
}
      });
      $(".pa-").on("click", function () {   
        console.log("グーー");
        $(".zibun").html('<img src="img/image_3.png">'); 
        var number=Math.floor( Math.random() *3);
    if(number==0){
        console.log("チョキ");
        $(".result").html('<img src="img/image_1.png">');
        console.log("負け");
        $(".syobu").html('負け');
    }
    else if(number==1){
        console.log("ぐー");
        $(".result").html('<img src="img/image_2.png">');
        console.log("勝ち");
        $(".syobu").html('勝ち');
    }
    else if(number==2){
        console.log("パー");
        $(".result").html('<img src="img/image_3.png">');
        console.log("同点");
        $(".syobu").html('同点');
    }
          });
          $(".cyoki").on("click", function () {    
            console.log("グーー");
            $(".zibun").html('<img src="img/image_1.png">');
            var number=Math.floor( Math.random() *3);
        if(number==0){
            console.log("チョキ");
            $(".result").html('<img src="img/image_1.png">');
            console.log("同点");
            $(".syobu").html('同点');
        }
        else if(number==1){
            console.log("ぐー");
            $(".result").html('<img src="img/image_2.png">');
            console.log("負け");
            $(".syobu").html('負け');
        }
        else if(number==2){
            console.log("パー");
            $(".result").html('<img src="img/image_3.png">');
            console.log("勝ち");
            $(".syobu").html('勝ち');
        }
              });
    });
