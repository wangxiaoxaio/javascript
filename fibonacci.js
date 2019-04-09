function* fibonacci(){
    let [prev,curr] = [0,1];

    for(;;){
        yield prev;
        [prev,curr] = [curr,curr+prev];
        // yield prev;
    }
}

for (let x of fibonacci()){
    if(x>100){
        break;
    }
    console.log(x)
}