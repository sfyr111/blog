function   arrcopy(num){
    var lala;
    if(num instanceof Array){
        lala = [];
    } else{
        lala={};
    }
    for(var key in num){
        if(num[key] instanceof Array){
            lala[key] = arrcopy(num[key]);
        }
        else{
            lala[key] = num[key];
        }
    }
    return lala;
}
var lala= arrcopy(arr);