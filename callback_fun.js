function greet(name)
{
    console.log("Hello,"+name+"!");
}
function sayhellowithdelay(callback)
{
    setTimeout(function()
    {
        callback("John");
    },2000);
}
sayhellowithdelay(greet);