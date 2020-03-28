let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
    llstGoodFoods.clear()   
    for (i = 0; i <= goodFoods.length - 1; i++) 
        lstFood.addItem(goodFoods[i])
}

lstGoodFoods.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else {
  let opinion = NSB.$("lstFood_" + s).textContent
  lblGoodFoods.value = (`You picked ${opinion} - that is a great choice!`)
  }
}

btndessertVoting.onclick=function(){
  ChangeForm(dessertVoting)
}
