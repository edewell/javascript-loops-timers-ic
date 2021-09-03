// Use a for loop to print from 0 to 50. Once it gets to 10, print "TEN!!!" instead of the number.

for (idx = 0; idx <= 50; idx++)
{
    if (idx === 10)
    {
       ( console.log(`TEN`));
    }
    console.log(`New iteration ${idx}`);
}