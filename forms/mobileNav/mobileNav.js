
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
  else {
    switch(s) {
case "Log In":
    ChangeForm(loginCU)
    break
case "Favorite Food Voting":
  ChangeForm(favFoods)
  break
case "Dessert Voting":
  ChangeForm(dessertVoting)
  break
case "Describing You":
  ChangeForm(describeYou)
  break
case "Exercise Knowledge":
  ChangeForm(ABfavExercises)
  break
  }
    }
}
