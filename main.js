function setToc(tocOn){
  if(tocOn){
    document.body.setAttribute("id", "tocAktif")
  }
  else{
    document.body.setAttribute("id", "")
  }
}
