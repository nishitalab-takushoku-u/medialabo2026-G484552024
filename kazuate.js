let kotae = Math.floor(Math.random()*10)+1;
console.log("答(デバッグ用 : " + kotae);

let kaisu = 0;



function hantei() {
    let g = document.querySelector('input[name="yosou"]');

    let yoso = Number(g.value);
    kaisu = kaisu +1;
    let c = document.querySelector('span#kaisu');
    let q = document.querySelector('span#answer');
    q.textContent = g.value;
    c.textContent = kaisu;
    console.log(kaisu+"回目の予想:"+yoso);
    let kekka;
    
    if(kaisu >= 4){
        console.log("答えは"+kotae+"でした。 すでにゲームは終わっています.");
        let f = document.querySelector('p#result');
        f.textContent = "答えは"+kotae+"でした。 すでにゲームは終わっています." 

    }

    else if(kaisu ===3){

        if(yoso === kotae){
            console.log("正解です。おめでとう！");
            let f = document.querySelector('p#result');
            f.textContent = "正解です。おめでとう！" 
        }

        else{
            console.log("まちがい、残念でした答えは"+kotae+"です。");
            let f = document.querySelector('p#result');
            f.textContent = "まちがい、残念でした答えは"+kotae+"です。" 

        }
    }
    
    else if (kaisu<=2){
        if(yoso === kotae){
            console.log("正解です。おめでとう！");
            kaisu = 4;
            let f = document.querySelector('p#result');
            f.textContent = "正解です。おめでとう！";


        }
        else if (kotae > yoso){
            console.log("まちがい、答えはもっと大きいですよ");
            let f = document.querySelector('p#result');
            f.textContent = "まちがい、答えはもっと大きいですよ";




        }
        else{
            console.log("まちがい、答えはもっと小さいですよ");
            let f = document.querySelector('p#result');
            f.textContent = "まちがい、答えはもっと小さいですよ";


        }





    }


}



let b = document.querySelector('button#kai');
 b.addEventListener('click', hantei);
