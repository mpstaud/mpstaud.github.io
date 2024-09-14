let height;
let weight;
let age;
let sex;
let activity_level;
let bmr;

function calculateBMR()
{
    if (sex == 'male')
        {
            return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
            
        }
    else if(sex == 'female')
        {
            return 655 + (4.35 * weight) + (4.7 * weight) - (4.7 * age);
        }
} 

function harris_benedict_calculation(bmr)
{
    if (activity_level == 'inactive')
        {
            return bmr * 1.2;
        }
    else if (activity_level == 'somewhat_active')
        {
            return bmr * 1.375;
        }
    else if (activity_level == 'active')
        {
            return bmr * 1.55;
        }
    else if (activity_level == 'athlete')
        {
            return bmr * 1.725;
        }
}

function goal_adjustment()
{
    //get values from HTML document
    sex                =                document.getElementById('sex').value;
    weight             =             document.getElementById('weight').value;
    height             =             document.getElementById('height').value;
    age                =                document.getElementById('age').value;
    activity_level     =     document.getElementById('activity_level').value;
    
    bmr = calculateBMR();
    alert(bmr + ' Calories')
    activity_adjusted_calories = harris_benedict_calculation(bmr);
    alert(activity_adjusted_calories + 'Calories')


}

