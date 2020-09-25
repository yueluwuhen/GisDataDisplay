function getZwdtProperty(jdata,id,proName) {
    var retData=null;
    for (var i = 0; i < jdata.data.length; i++) {
        var data = jdata.data[i].list;
        //console.log(data);
        for (var j = 0; j < data.length; j++) {
            if (data[j].id == id) {
                retData=data[j][proName];
                break;
            }
        }           
    }
    return retData;
}