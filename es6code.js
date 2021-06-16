// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["red", "blue","orange","brown","purple","white","black","green","grey","pink","indigo","violet"];

const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*0123456789";

// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    james,bob,mary,susan,mathew,katy,brent
    
];


const person=class{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
};

const james=new person("James","Jones");
const bob=new person("Bob","Myres");
const mary=new person("Mary","Smith");
const susan=new person("Susan","Mathers");
const mathew=new person("Mathew","Jones");
const katy=new person("Katy","Cha");
const brent=new person("Brent","Puth");

const randomNumberGenerator=(start=1,end=100)=>{ 
    start=Math.round(start);
    end=Math.round(end);
    return Math.floor((Math.random() * (end-start))+start);
}

document.getElementById("btn1").addEventListener("click",()=>{
    const rand=randomNumberGenerator(1,100);
    document.getElementById("randomNum").innerHTML=rand;
});

document.getElementById("btn2").addEventListener("click",()=>{
    const start=document.getElementsByName("rand1")[0].value;
    const end=document.getElementsByName("rand2")[0].value;
    const rand=randomNumberGenerator(start,end);
    document.getElementById("randomNumStartEnd").innerHTML=rand;
    
});


document.getElementById("btn3").addEventListener("click",()=>{
    document.getElementById("loremString").innerHTML=lorem;
});


document.getElementById("btn4").addEventListener("click",()=>{
    const sentences=document.getElementsByName("rand")[0].value;
    const loremSentences=loremString(sentences);
    document.getElementById("loremSentences").innerHTML=loremSentences;
});

const loremString=(sentences)=>{
    const finalLorem=lorem.split(".").map((value)=>`${value}.`);
    return finalLorem;
}


document.getElementById("btn5").addEventListener("click",()=>{
    const chars=document.getElementsByName("rand")[1].value;
    document.getElementById("loremChars").innerHTML=lorem.substr(0,chars);;
});



document.getElementById("btn6").addEventListener("click",()=>{
    const date=new Date();
    document.getElementById("date").innerHTML=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
});


document.getElementById("btn7").addEventListener("click",()=>{
    const date=new Date();
    document.getElementById("time").innerHTML=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"."+date.getMilliseconds();
});

document.getElementById("btn8").addEventListener("click",()=>{
    const inch=document.getElementsByName("rand")[2].value;
    document.getElementById("inchToFeet").innerHTML=(inch*(0.0833)).toFixed(2);
});

document.getElementById("btn9").addEventListener("click",()=>{
    const feet=document.getElementsByName("rand")[3].value;
    document.getElementById("feetToInch").innerHTML=(feet*12).toFixed(2);
});

document.getElementById("btn10").addEventListener("click",()=>{
    const word1=document.getElementsByName("rand1")[1].value;
    const word2=document.getElementsByName("rand2")[1].value;
    ()=>{
        (word1.length===word2.length)?
        document.getElementById("sameLength").innerHTML=word1+" and "+word2+" are of same length":
        document.getElementById("sameLength").innerHTML=word1+" and "+word2+" are of different length"}

});

document.getElementById("btn11").addEventListener("click",()=>{
    let password="";
    for(let i=0;i<8;i++){
        const rand=Math.floor((Math.random() * chars.length)+1);
        password+=chars[rand];
    }
    document.getElementById("password").innerHTML=password;
});


document.getElementById("btn12").addEventListener("click",()=>{
    const num=document.getElementsByName("rand")[4].value;
    ()=>{(num%2===0)?document.getElementById("evenOdd").innerHTML="Even": document.getElementById("evenOdd").innerHTML="Odd";};
});

document.getElementById("btn13").addEventListener("click",()=>{
    const rand=Math.floor(Math.random() * colors.length);
    document.getElementById("color").innerHTML=colors[rand];
});

document.getElementById("btn14").addEventListener("click",()=>{
    const rand=Math.floor(Math.random() * names.length);
    document.getElementById("firstLast").innerHTML=names[rand].firstName+" "+names[rand].lastName;
});
