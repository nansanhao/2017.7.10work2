/**
 * Created by chj on 17-7-11.
 */
function buildBillArray(inputArray) {
    for(var i in inputArray)
    inputArray[i].sum=0;
    var billArray=inputArray;
    return billArray;

}
function calSum(billArray) {
    for(var i in billArray){
        billArray[i].sum=billarray[i].price*billArray[i].count;
    }
    var newBillArray=billArray;
    return newBillArray;

}
function calTotalPrice(newBillArray) {
    var totalPrice=0;
    for(var i in newBillArray){
        totalPrice+=newBillArray[i].sum;
    }
    return totalPrice;
}
function printBill(newBillArray,totalPrice) {
    console.log("***<没钱赚商店>收据***");
    for(var i in newBillArray){
        console.log("名称："+newBillArray[i].name+",数量："+newBillArray[i].count+newBillArray[i].unit+",单价："+newBillArray[i].price.toFixed(2)+"(元)"+",小计："+newBillArray[i].sum.toFixed(2)+"(元)");
    }
    console.log("--------------------------------");
    console.log("总计： "+totalPrice.toFixed(2)+"(元)");
    console.log("********************************");

}










var input=[
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];
var billarray=buildBillArray(input);
var newbillarray=calSum(billarray);
var totalprice=calTotalPrice(newbillarray);
printBill(newbillarray,totalprice);