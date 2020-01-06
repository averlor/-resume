var tab, tabContent;

window.onload = function() {
    tabContent = document.getElementsByClassName('tab-content');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(el) {
    for (var i =0; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.querySelector('#tabs').onclick = function(event) {
    var target = event.target;
    if (target.className === 'tab') {
        for (var i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(el) {
    if (tabContent[el].classList.contains('hide')) {
        hideTabsContent(0);
        tab[el].classList.add('whiteborder');
        tabContent[el].classList.remove('hide');
        tabContent[el].classList.add('show');
    }
}