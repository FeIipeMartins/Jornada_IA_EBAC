export default{
    jump: new KeyboardEvent(`Keydom`,{Key:`Space`, keyCode: 32}),
    dispatchEvent(event){
        document.dispatchEvent(this[event]);
    }
}