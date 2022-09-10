var tabs = document.querySelectorAll(".tabs ul li");
var tabsWrap = document.querySelectorAll(".tab-wrap");

tabs.forEach(function (tab, tabIndex) {
    tab.addEventListener('click', function () {

        tabs.forEach(function (tab) {
            tab.classList.remove('active')
        })

        tab.classList.add('active');

        tabsWrap.forEach(function (content, contentIndex) {
            if(contentIndex == tabIndex){
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }

        })
    })
})


