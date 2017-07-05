module.exports = (arr, filed) => {
    var sum = arr.length;
    for (var i = 0; i < sum; ++i) {
        for (var j = 0; j < sum; ++j) {
            //要注意，不能自己跟自己比
            if (i != j) {
                if (arr[i][filed].indexOf(arr[j][filed]) != -1)  {
                    arr.splice(j,1);
                    sum--; 
                }
            }
                
        }
    } 
}