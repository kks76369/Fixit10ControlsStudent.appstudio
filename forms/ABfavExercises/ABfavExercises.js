var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
let response = ' '
let favExercises = ' '

favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= exercises.length - 1; i++) {
       selExercises.addItem(exercises[i])
       }
}

selExercises.onfocusout=function(){
 let exercisesChoice = (selExercises)
     let stringChoice = exercisesChoice.toString()
     let splitString = stringChoice.split(",")
     let joinString = splitString.join(" and ")
     favExercises = joinString
}

submitExercise.onclick=function(){
      lblOutput.toggle()
     if (favExercises == "situps and plank") {
          lblOutput.toggle()
          lblOutput.value = "You chose " + favExercises
     } else {
          lblOutput.toggle()
          lblOutput.value = "You did not choose the correct exercises."
          }
}

btnMobileNav.onclick=function(){
  ChangeForm(mobileNav)
}


