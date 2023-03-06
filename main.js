let yearvalue = document.querySelector(".yearvalue")
let monthvalue = document.querySelector(".monthvalue")
let dayvalue = document.querySelector(".dayvalue")
let Btn = document.querySelector(".btn")
let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let week = document.querySelector(".week");
let dayname = document.querySelector(".dayname");
let monthname = document.querySelector(".monthname");


Btn.onclick = function() {
    if(yearvalue.value !== "" && monthvalue.value !=="" && dayvalue.value !== "" ) {
        let Dat= new Date(`${yearvalue.value} ${monthvalue.value} ${dayvalue.value}`);
        console.log( yearvalue.value ,monthvalue.value , dayvalue.value)
        let CurrentDate = new Date();
        let weekdays = ["الاحد", "الاثنين" , "الثلاثاء" , "الاربعاء" , "الخميس" , "الجمعة" , "السبت"];
        var months = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو","يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        dayname.innerHTML = `Day name :${weekdays[( Dat.getDay(((CurrentDate.getTime()) - (Dat.getTime()))) )]}`
        monthname.innerHTML = `Month name :${months[( Dat.getMonth(((CurrentDate.getTime()) - (Dat.getTime()))) )]}`
        year.innerHTML =  `year : ${Math.trunc((( (CurrentDate.getTime()) - (Dat.getTime()) ) / 1000 / 60 / 60 / 24 /30 / 12))}`
        month.innerHTML = `month : ${Math.trunc((( (CurrentDate.getTime()) - (Dat.getTime()) ) / 1000 / 60 / 60 / 24 /30 ))}`
        day.innerHTML =   `day : ${Math.trunc((( (CurrentDate.getTime()) - (Dat.getTime()) ) / 1000 / 60 / 60 / 24))}`
        week.innerHTML =   `week : ${Math.trunc(   (( (CurrentDate.getTime()) - (Dat.getTime()) ) / 1000 / 60 / 60 / 24) * 7)}`
    }
}