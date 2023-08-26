<?php
//Adding number
//Number add cheythu athinte total kanunu
class NumbersAddCheyan{
    public function AddCheyanullad($numbers){
         //try cheyunu array anon nokunu alel error nere catch il poyi print cheyunu
        try{
            if(!is_array($numbers)){
                throw new InvalidArgumentException("array ayi pass cheyenam");

            }else{
                $sum=0;
                foreach($numbers as $n){
                    //ivide kutnunu kitiyan numbers. sum 0 akivechitund add cheynan
                    $sum=$sum+$n;
                    //ivide varubol number anon nokunu alel error catchilek poyi print cheyunu
                    if(!is_numeric($n)){
                        throw new InvalidArgumentException("number ayi pass cheyenam");
                    }
                    

                }
                return $sum;
            }
             //error onum ilel mandayil kootiya sum aa functionelek thanne return cheyunu
        }catch(InvalidArgumentException $exception){
            throw $exception;
           


        }

    }

}
//check if one value equal to another value
//randu values equalano aleyon nokunu

class Equlano{
    public function EqulanonNokanUllad($first,$second){
           //type randinte onanon nokunu
        if(gettype($first) !== gettype($second)){
            throw new InvalidArgumentException("same type ayirikenam ex:string anel string thanne ayirirkenm number aakruth randu vere vere type akaruth");

        }else{
            //strict type checking nadathunu anel mathram ith work akum
            return $first === $second;
        }


    }
}

//converting first letter to upper case
//adyathe letter upper casilek convert cheyunu
class FirstLetterMathramValuthakan{
    public function FirstLetterMathramValuthakanUllad($string){
        return ucfirst($string);

    }
}


// reverse string
//string reverse cheyunu
class StringReverseCheyan{
    public function StringReverseCheyanUllad($string){
        return strrev($string);
    }
}
//count the number of times a specific word appears in a string
//same word ethra thavana und en nokunu
class SameWordEthrePravshyamVanitundEnNokkan{
    
    public function SameWordEthrePravshyamVanitundEnNokkanullad($MainString,$SubString){
        $occurense=substr_count($MainString,$SubString);
        return $occurense;

    }

}











?>

