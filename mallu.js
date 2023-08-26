 //Adding number
//Number add cheythu athinte total kanunu
export function AddCheyan(NumbersAdd){
   
    try{
        //try cheyunu array anon nokunu alel error nere catch il poyi print cheyunu
        if(!Array.isArray(NumbersAdd)){
            throw new Error("array ayi pass cheyenam")
        }else{
            //array anel ith work cheyum
            let sum=0
            for( const n of NumbersAdd){
                 //ivide kutnunu kitiyan numbers. sum 0 akivechitund add cheynan
                sum=sum+n
                //ivide varubol number anon nokunu alel error catchilek poyi print cheyunu
                if(typeof n !=='number'){
                    throw new Error("number ayi pass cheyenam")
                
                   
                    

                }
            }
            //error onum ilel mandayil kootiya sum aa functionelek thanne return cheyunu
            return sum;
         
         }

         //ividenyan aa erorrs vanu print cheyunad
    }catch(error){
        console.error(error)
        return 0;

    }
 }


//check if one value equal to another value
//randu values equalano aleyon nokunu

export function Equalano(First,Second){

    //type randinte onanon nokunu

    if(typeof First !== typeof Second){
        throw new Error("same type ayirikenam ex:string anel string thanne ayirirkenm number aakruth randu vere vere type akaruth")

    
}
//strict type checking nadathunu anel mathram ith work akum
return First === Second
}


//converting first letter to upper case
//adyathe letter upper casilek convert cheyunu
export function FirstLetterMathramValuthkan(stringUpper){
    //adyam first index edukunu and upper case akunu pinne last slice second index thot add cheyunu.
    return stringUpper.charAt(0).toUpperCase() + stringUpper.slice(1)

}

// reverse string
//string reverse cheyunu
export function StringReverseCheyan(stringReverse){
    //first array ayi split cheyunu ennit ath reverse order aki vekunu last ellam kode join cheyunu
    return stringReverse.split("").reverse().join("");
}
//count the number of times a specific word appears in a string
//same word ethra thavana und en nokunu

export function SameWordEthrePravshyamVanitundEnNokkan(MainString,SubString){
    var occurense=MainString.split(SubString).length -1
    return occurense
    
}
//checking word or string Palindrome
//wordo stringo palindromeanon nokunu
export function PalindromeAnonNokkan(Palindrome){
    var CleanString=Palindrome.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    var JoinAgain=CleanString.split('').reverse().join('')

    return CleanString === JoinAgain;

}


