//Uc1 employee is present or absent
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10 ) % 2;
    if(empCheck == IS_ABSENT)
    {
        console.log("UC1-Employee is ABSENT");
    }
    else{
        console.log("UC1-Employee is PRESENT");
    }
}
