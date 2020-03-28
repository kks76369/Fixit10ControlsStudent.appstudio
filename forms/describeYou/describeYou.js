
rdoVerbs.onclick=function(){
  lblVerb.value = (`I would agree that you are a ${$("input[name=rdoVerbs]:checked").prop("value")} person too! `)
}

btnfavExercises.onclick=function(){
  ChangeForm(ABfavExercises)
}
