export default function regCheck(reg_num,location_indicator) {
    return reg_num.endsWith(location_indicator);  
  }
  var isGP = regCheck('DV 23 NB GP', 'GP');		

  