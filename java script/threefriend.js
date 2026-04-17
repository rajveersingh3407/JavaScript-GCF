let day1=[5,9,4];
let day2=[7,0,8];
let day3=[10,12,11];

let jacknumberwins=day1[0]+day2[0]+day3[0];
let johnnumberwins=day1[1]+day2[1]+day3[1];
let maheshnumberwins=day1[2]+day2[2]+day3[2];
function display(){
    if(maheshnumberwins<jacknumberwins){
        if(maheshnumberwins<johnnumberwins){
            console.log("Mahesh will give party");
        }
        else{
            console.log("jack will give party");
        }
    }
    else{
        console.log("john will give party");
    }
}
display();