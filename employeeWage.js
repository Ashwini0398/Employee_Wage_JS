
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
        let empDailyWAgeMap = new Map();
        while(totalEmpHrs <= MAX_HR_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
            
            totalWorkingDays++;
            let empCheck = Math.floor(Math.random()*10) % 3;
            let empHrs = getWorkingHours(empCheck);
            totalEmpHrs += empHrs;
            empDailyWAgeArr.push(calDailyWage(empHrs));
            empDailyWAgeMap.set(totalWorkingDays,calDailyWage(empHrs));
        }

        console.log(empDailyWAgeMap);
        let totalWages = (totalWage,dailyWage) => totalWage + dailyWage;
        console.log("UC8 - Emp Wage with reduce " +
                     Array.from(empDailyWAgeMap.values()).reduce(totalWages,0));
