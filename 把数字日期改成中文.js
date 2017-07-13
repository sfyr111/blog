function getChsDate(lala){
    num=['零','一','二','三','四','五','六','七','八','九','十','十一','十二','十三',
        '十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五',
        '二十六','二十七','二十八','二十九','三十','三十一']
    var damo = lala.split('-')
    var b = damo[0].split('')
    for( var e =0 ;e< damo.length; e++) {
        for(var i = 0 ;i< b.length ; i++) {
            for(var f = 0 ;f< num.length ;f++) {
                if( damo[e] == f.toString() ) {
                    damo[e] = num[f]
                }
                if( b[i] == f.toString() ) {
                    b[i] = num[f]
                }
            }
        }
    }
    return ( b.join("")+"年"+damo[1]+"月"+damo[2]+"日" )
}

var str = getChsDate("2015-11-31")
console.log(str)