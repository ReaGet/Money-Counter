export function parseHtmlToArray(html) {
    const datas = [];
    const main = document.createElement('div');
    main.innerHTML = html;

    const calendarList = main.querySelectorAll('.calendar-list__item');
    calendarList.forEach((item) => {
        datas.push(htmlToObject(item));
    });

    return datas;
}

function htmlToObject(block) {
    const month = block.querySelector('.calendar-list__item-body:first-child .calendar-list__item-title');
    const hours = block.querySelector('.calendar-list__overview-item:nth-child(4) p:last-child');
    const days = getDaysIfNotEmpty(block,'.calendar-list__numbers .calendar-list__numbers__item:not(.calendar-list__numbers__item_other)');
    const daysOff = getDaysIfNotEmpty(block,'.calendar-list__numbers .calendar-list__numbers__item_day-off');
    return {
        month: month.innerText,
        hours: parseInt(hours.innerText),
        days: days,
        daysOff: daysOff,
    };
}

function getDaysIfNotEmpty(el, selector) {
    return Array.from(el.querySelectorAll(selector))
        .map((item) => parseInt(item.innerText))
        .filter(Number);
}