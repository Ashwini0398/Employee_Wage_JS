
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOUR = 4;
    const FULL_TIME_HOUR = 8;
    const WAGE_PER_HOUR = 20;
    const WORKING_HOURS = 20;
    {
        

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
        
        

        let totalEmpHrs = 0;
        for (let day = 0 ; day < WORKING_HOURS; day++)
        {
            let empCheck = Math.floor(Math.random()*10) % 3;
            totalEmpHrs += getWorkingHours(empCheck);
        }
        let empWage = totalEmpHrs * WAGE_PER_HOUR;
        console.log("EmployeeHours: " + totalEmpHrs +"Emp Wage: "+empWage);
    }


