function GetQueryString(value){
    var reg = new RegExp("(^|&)"+value+"=([^&]*)(&|$)");
    var result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
}