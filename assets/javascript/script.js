var tabs = document.querySelectorAll(".tabs ul li");
var tabsWrap = document.querySelectorAll(".tab-wrap");

tabs.forEach(function (tab, tabIndex) {
    tab.addEventListener('click', function () {

        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        });

        tab.classList.add('active');

        tabsWrap.forEach(function (content, contentIndex) {
            if(contentIndex == tabIndex){
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }

        });
    });
});

var monthTabs = document.querySelectorAll(".month-tabs ul li");
var monthsWrap = document.querySelectorAll(".flower-container");

monthTabs.forEach(function (month, monthIndex) {
    month.addEventListener('click', function () {

        monthTabs.forEach(function (month) {
            month.classList.remove('active');
        });

        month.classList.add('active');

        monthsWrap.forEach(function(flower, flowerIndex){
            if(flowerIndex == monthIndex){
                flower.style.display = "block";
            } else{
                flower.style.display = "none";
            }
        });
    });
});
