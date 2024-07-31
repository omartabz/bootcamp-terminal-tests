export default function mostProfitableDepartment(sales_data){
    const salesMap = {};
    for(var i=0; i<sales_data.length; i++){
        const sale = sales_data[i];
        salesMap[sale.department] = 0;
    }
    for(var i=0; i<sales_data.length; i++){
        const sale = sales_data[i];
        var currentDepartTotal = salesMap[sale.department];
        currentDepartTotal += sale.sales;
        salesMap[sale.department] = currentDepartTotal;
    }
    var currentMaxSales = 0;
    var currentDepart = "";
    for(const departSale in salesMap){
        const currentDepartSales = salesMap[departSale];
        if(currentDepartSales > currentMaxSales){
            currentMaxSales = currentDepartSales;
            currentDepart = departSale;
        }
    }
    return currentDepart;
  }