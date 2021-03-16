
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;
    const WORKING_HOURS = 20;
    const MAX_HR_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS =20;

    
        function getWorkingHours(empCheck)
        {
           switch(empCheck)
            {
                case IS_PART_TIME:
                    return empHrs = PART_TIME_HOUR;
                
                case IS_FULL_TIME:
                    return empHrs = FULL_TIME_HOUR;
                                default:
                    return 0;
            }
        }

        function calDailyWage(empHrs)
        {
            return empHrs * WAGE_PER_HOUR;
        }

        let totalEmpHrs = 0;
        let totalWorkingDays = 0;
        let empDailyWAgeArr = new Array();
        while(totalEmpHrs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random()*10) % 3;
            let empHrs = getWorkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWAgeArr.push(calDailyWage(empHrs));
        
        }

        let empWage = calDailyWage(totalEmpHrs);
        console.log("Total Days: " + totalWorkingDays +" Employee Hours: " + totalEmpHrs +" Emp Wage: "+ empWage);
    

//Array HElper Function

    let totalEmpWage = 0;
    function sum(dailyWage){
        totalEmpWage += dailyWage;
    }

    empDailyWAgeArr.forEach(sum);
    console.log("UC7A - Total Days: "+ totalWorkingDays + 
                " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);


    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("UC7A - Emp Wage with reduce " +
                     empDailyWAgeArr.reduce(totalWages,0));