function recursiva(max){
    if(max >= 900) return;
    max++;
    console.log(max);
    recursiva(max)
}

recursiva(0);