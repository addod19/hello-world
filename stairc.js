var arr = [[1,2,3], [4,5,6], [7,8,9]]
var n = arr.length
var d1 = 0
var d2 = 0

for ( var i = 0; i < n; i++) {
    for ( var j = 0; j < n; j++) {
        console.log(arr[i][j].indexOf(arr[i][j]))    
    }
    
}