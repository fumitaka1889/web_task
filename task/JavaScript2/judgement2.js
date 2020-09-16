function get_pass_or_failure(x,y,z){
  if (x >= 60 && y >= 60 && z >= 60){
    return "合格";
  }else {
    return "不合格";
  }
}
console.log(get_pass_or_failure(60,100,60));
