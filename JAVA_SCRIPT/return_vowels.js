function get(s){
    let c=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
        {
            c++;
        }
    }
    return c;
}

const arrowGet=(s)=>{
    let c=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='a'||s[i]=='e'||s[i]=='i'||s[i]=='o'||s[i]=='u')
        {
            c++;
        }
    }
    return c;
}
let h="Nidhi";
console.log(`Number of vowels is ${get(h)}`);
console.log(`Vowels using arrow funstion ${arrowGet(h)}`);