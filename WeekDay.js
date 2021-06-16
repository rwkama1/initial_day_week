class WeekDay
{
    constructor(pinitial)
    {
        this.initial=pinitial;
    }
    calculate=()=>
    {
     let i=this.initial;
     if(i==="m"||i==="M")
     {
         return "Monday"
     }
     else
     {
        if(i==="tu"||i==="Tu")
        {
            return "Tuesday"
        }
        else
        {
            if(i==="w"||i==="W")
            {
                return "Wednesday"
            }
            else
            {
                if(i==="th"||i==="Th")
                {
                    return "Thursday"
                }
                else
                 {
                    if(i==="f"||i==="F")
                    {
                        return "Friday"
                    } 
                    else
                    {
                        if(i==="sa"||i==="Sa")
                        {
                            return "Saturday"
                        } 
                        else
                        {
                            if(i==="su"||i==="Su")
                            {
                                return "Sunday"
                            }  
                            else
                            {
                                return "The day does not exist"
                            }
                        }
                    }
                 }
            }
        }
     }
    }
   
}
module.exports={WeekDay}