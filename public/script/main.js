var chars=0;
var text="";
var t;
var t1=-1;
var w=-1;
var word=1;
function start()
{var d = new Date();
    document.getElementById('Start').style.display='none';
    document.getElementById('Random').style.display='none';
    document.getElementById('Screen').contentEditable='false';
    text=document.getElementById('Screen').innerHTML;
    //alert('Test is starting ');
   // alert(text);
    document.getElementById('Outbox').style.height='400px';
    document.getElementById('Inbox').style.height='320px';
    document.getElementById('Screen').style.height='300px';
    document.getElementById('Sub').style.display='flex';
    document.getElementById('outTime').style.display='flex';
    document.getElementById('Insub').focus();
    t=d.getTime();
    setInterval(checktime,50);
    setInterval(check,50);
    document.getElementById('Insub').onchange=check;
}
function checktime()
{var d = new Date();
var t2=d.getTime();
console.log(t2);
var t3=t2-t;
document.getElementById('Timebox').innerHTML=t3/1000;
}
document.getElementById('Start').onclick=start;
function genrateRandom()
{  var result="";
     for(let i=0;i<30;i++)
    {
        result += Math.random().toString(36).substring(2,5+i%5);
        if(i!=29)
        result+=" ";
    }
    
    return result;
}
function Rand()
{   
     var c=genrateRandom();
    //document.write(c);
document.getElementById('Screen').innerHTML=c;
}
document.getElementById('Random').onclick=Rand;


function check()
{   
    var best="";
    var typed="";
    typed=document.getElementById('Insub').innerHTML;
    if(text==typed)
    {   var d=new Date();
        if(t1==-1)
        {document.getElementById('Insub').style.cursor='none';
        t1=d.getTime();
        for(let i=0;i<text.length;i++)
        {
            if(text.charAt(i)==' ')
            word++;
            
        }
    }
            chars=text.length;
            document.getElementById('outTime').style.display='none';
            document.getElementById('Outbox').style.display='none';
            document.getElementById('Sub').style.display='none';
            document.getElementById('ResultPage').style.display='flex';
            var dis="";
            document.getElementById('Try').style.display='flex';
            dis+="<font class='wpm'>Words per Minute : "+Math.round(word*1000*60/(t1-t))+"</font><br>"+"<font class='cpm'>Characters per minute : "+Math.round(chars*60*1000/(t1-t))+"</font>";
            document.getElementById('result').innerHTML=dis;
      
    }
    

    //console.log(typed);
    var l2=0;
    var l1=0;
  for(let i=0;i<typed.length;i++)
    {
        if(typed[i]!='&')
        best+=typed[i];
        else
        {best+=' ';
            i+=5;
        }
    }
    typed=best;
    l2=typed.length;
    for(let i=0;i<typed.length;i++)
    {
        if(typed.charAt(i)==text.charAt(i))
        l1++;
        else
        break;
    }
    var space=0;
    
    
    //document.getElementById('a').innerHTML=typed+" "+best+" "+l1+" "+l2+" "+space;
    var changetext="<font color='green'>";
    for(let i=0;i<l1;i++)
    changetext+=typed.charAt(i);
    changetext+="</font><font color='red'>";
    for(let i=l1;i<l2;i++)
    {
        changetext+=text.charAt(i);
    }
    changetext+="</font><font color='yellow'>|</font>";
    for(let i=l2;i<text.length;i++)
    changetext+=text.charAt(i);
    document.getElementById('Screen').innerHTML=changetext;
}

document.getElementById('Try').onclick=funt;
function funt()
{
    location.reload();
}