//help

 function Help(Topic){
    var HelpData={
        'TruncateChey':'truncate cheyan',
        'AddChey':'Numbers Add cheyan',
        'Equalano':'randu values equalano aleyon nokunu',
        'FirstLetterMathramValuthak':'adyathe letter upper casilek convert cheyunu',
        'StringReverseChey':'string reverse cheyunu',
        'SameWordEthrePravshyamVanitundEnNok':'same word ethra thavana und en nokunu',
        'PalindromeAnonNok':'wordo stringo palindromeanon nokunu',
        'EthraLetterOroninumUndennok':'ethra paravshyam same words repeat ayi vanitunden nokunu',
        'TruncateChey':'string truncate cheyan',
        'EthNumberAnValuthenNok':'eth number an valuthen nokunu',
        'EthNumberAnCheruthenNok':'eth number cheruthanen nokunu'



    }
    if(HelpData[Topic]){
        return HelpData[Topic]
    }else{
       "nothing found"
    }

 }


 function HelpAll(){

    const HelpAll = {
    'TruncateChey':'truncate cheyan',
    'AddChey':'Numbers Add cheyan',
    'Equalano':'randu values equalano aleyon nokunu',
    'FirstLetterMathramValuthak':'adyathe letter upper casilek convert cheyunu',
    'StringReverseChey':'string reverse cheyunu',
    'SameWordEthrePravshyamVanitundEnNok':'same word ethra thavana und en nokunu',
    'PalindromeAnonNok':'wordo stringo palindromeanon nokunu',
    'EthraLetterOroninumUndennok':'ethra paravshyam same words repeat ayi vanitunden nokunu',
    'TruncateChey':'string truncate cheyan',
    'EthNumberAnValuthenNok':'eth number an valuthen nokunu',
    'EthNumberAnValuth':'eth number cheruthanen nokunu'
    }
    return HelpAll
 }


 
 //Adding number
//Number add cheythu athinte total kanunu
 function AddChey(NumbersAdd){
   
    try{
        //try cheyunu array anon nokunu alel error nere catch il poyi print cheyunu
        if(!Array.isArray(NumbersAdd)){
            throw new Error("array ayi pass cheyenam")
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

 function Equalano(First,Second){

    //type randinte onanon nokunu

    if(typeof First !== typeof Second){
        throw new Error("same type ayirikenam ex:string anel string thanne ayirirkenm number aakruth randu vere vere type akaruth")

    
}
//strict type checking nadathunu anel mathram ith work akum
return First === Second
}


//converting first letter to upper case
//adyathe letter upper casilek convert cheyunu
 function FirstLetterMathramValuthak(stringUpper){
    //adyam first index edukunu and upper case akunu pinne last slice second index thot add cheyunu.
    return stringUpper.charAt(0).toUpperCase() + stringUpper.slice(1)

}

// reverse string
//string reverse cheyunu
  function StringReverseChey(stringReverse){
    //first array ayi split cheyunu ennit ath reverse order aki vekunu last ellam kode join cheyunu
    return stringReverse.split("").reverse().join("");
}
//count the number of times a specific word appears in a string
//same word ethra thavana und en nokunu

 function SameWordEthrePravshyamVanitundEnNok(MainString,SubString){
    var occurense=MainString.split(SubString).length -1
    return occurense
    
}
//checking word or string Palindrome
//wordo stringo palindromeanon nokunu
 function PalindromeAnonNok(Palindrome){
    var CleanString=Palindrome.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    var JoinAgain=CleanString.split('').reverse().join('')

    return CleanString === JoinAgain;

}
//checking how much time that word come repeat
//ethra paravshyam same words repeat ayi vanitunden nokunu
//@return  object
 function EthraLetterOroninumUndenNok(paragraph){
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
 function TruncateChey(text,limit,addEclipps=true){
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
 function EthNumberAnValuthenNok(numbers){
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
 function EthNumberAnCheruthenNok(numbers){
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

module.exports = {
        Help,
        HelpAll,
        TruncateChey,
        AddChey,
        Equalano,
        FirstLetterMathramValuthak,
        StringReverseChey,
        SameWordEthrePravshyamVanitundEnNok,
        PalindromeAnonNok,
        EthraLetterOroninumUndenNok,
        TruncateChey,
        EthNumberAnValuthenNok,
        EthNumberAnCheruthenNok,




  };

