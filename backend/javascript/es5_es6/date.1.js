var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
var d = new Date("20160523133000".replace(pattern, "$1-$2-$3T$4:$5:$6"))

console.log(d);