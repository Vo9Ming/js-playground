var repeat = function(text, num){
    for(var i = 0; i < num; i++){
        console.log(i + " : " + text);
    }
}

repeat("hello", 10);

// 0 : hello , 1 : hello , ..... , 9 : hello 가 도출됨

