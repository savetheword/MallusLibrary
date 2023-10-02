 //help

 export function GetHelp(Topic){
    var HelpData={
        'truncate':'truncate cheyan',
        'AddCheyan':'Numbers Add cheyan',
        'Equalano':'randu values equalano aleyon nokunu',
        'FirstLetterMathramValuthkan':'adyathe letter upper casilek convert cheyunu',
        'StringReverseCheyan':'string reverse cheyunu',
        'SameWordEthrePravshyamVanitundEnNokkan':'same word ethra thavana und en nokunu',
        'PalindromeAnonNokkan':'wordo stringo palindromeanon nokunu',
        'EthraLetterOroninumUndennokan':'ethra paravshyam same words repeat ayi vanitunden nokunu',
        'TruncateCheyyan':'string truncate cheyan',
        'EthNumberAnValuthenNokkan':'eth number an valuthen nokunu',
        'EthNumberAnCheruthenNokkan':'eth number cheruthanen nokunu'



    }
    if(HelpData[Topic]){
        return HelpData[Topic]
    }else{
        return 'nothing found for this'
    }

 }
 
 //Adding number
//Number add cheythu athinte total kanunu
export function AddCheyan(NumbersAdd){
   
    try{
        //try cheyunu array anon nokunu alel error nere catch il poyi print cheyunu
        if(!Array.isArray(NumbersAdd)){
            throw new Error("array ayi pass cheyenam")
        }
        if(typeof n !=='number'){
            throw new Error("number ayi pass cheyenam")
            

        }
            //array anel ith work cheyum
            let sum=0
            for( const n of NumbersAdd){
                 //ivide kutnunu kitiyan numbers. sum 0 akivechitund add cheynan
                sum=sum+n
                //ivide varubol number anon nokunu alel error catchilek poyi print cheyunu
            
            }
            //error onum ilel mandayil kootiya sum aa functionelek thanne return cheyunu
            return sum;
         
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
//checking how much time that word come repeat
//ethra paravshyam same words repeat ayi vanitunden nokunu
//@return  object
export function EthraLetterOroninumUndennokan(paragraph){
   const words=paragraph.toLowerCase().match(/\b\w+\b/g);
    const WordsObject={}
    if(words){
        for(const word of  words){
            if(WordsObject[word]){
                WordsObject[word]++


            }else{
                WordsObject[word]=1
            }
            
        }
            
        
    }
    return WordsObject
}

// string truncate cheyan
export function TruncateCheyyan(text,limit,addEclipps=true){
    if(text.length <= limit){
        return text;
    }
    const truncatedText=text.substring(0,limit);
    if(addEclipps){
        return truncatedText +'....'
    }else{
        return truncatedText;
    }



}
//eth number an valuthen nokunu
export function EthNumberAnValuthenNokkan(numbers){
    try{
        if(!Array.isArray(numbers)){
            throw new Error("Array ayi pass cheyenam")
        }

    

        if(numbers.length === 0){
            throw new Error("Array onnumilsathe pass cheyan padilla")
        }
        var max=numbers[0];
        for(var num of numbers){
            if(num > max){
                max=num
            }
           
        }
        return max



    }catch(erorr){
        console.log(erorr)

    }

}
//eth number an cheruthen nokunu
export function EthNumberAnCheruthenNokkan(numbers){
    try{
        if(!Array.isArray(numbers)){
            throw new Error("Array ayi pass cheyenam")
        }
        if(numbers.length === 0){
            throw new Error("Array empty akaruth")
        }

        var max=numbers[0]
        for( var num of numbers){
            if(num < max){
                max=num
            }
        }
        return max

    }catch(error){
        console.log(error)

    }
}


