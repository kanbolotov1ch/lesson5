
document.querySelector("#back").addEventListener("click", () => {
   generate();
});
document.querySelector("#generate").addEventListener("click", () => {
   generate();
});
document.querySelector("#next").addEventListener("click", () => {
   generate();
});

let index = -1;
generate = (arg = "generate") => {
    let quotes = {
        "- indira gandi": '"«История – самый лучший учитель, у которого самые плохие ученики»."',
        "- Andrei": '"«Ядерную войну невозможно выиграть»."',
        "- ilon": '"«Характер – это и есть судьба»."',
        "- Tomas": '"«У тебя есть враги? Хорошо. Значит, в своей жизни ты что-то когда-то отстаивал."',
        "- lendrush": '"«Ненавижу всяческую мертвечину! Обожаю всяческую жизнь!."',
        "- genri": '"«Комедия – это очень серьёзное дело!."',
        "- Brus li": '"«Тренируйся с теми, кто сильнее. Не сдавайся там, где сдаются другие. И победишь там, где победить нельзя»."',
        "- mark": '"«Человечество обладает одним поистине мощным оружием, и это смех»."',
        "- margarit": '"«Поражение? Я не понимаю значения этого слова»."',
        "- Napaleon ": '"«Дай человеку власть, и ты узнаешь, кто он»"',
        "- Bernard ": '"«Мой способ шутить – это говорить правду. На свете нет ничего смешнее»"',
        "- luter King": '"«Если человек не нашёл, за что может умереть, он не способен жить»"',
        "- Ruzvelt ": '"«Никогда не ошибается тот, кто ничего не делает»."',
        "- Koko Shanel ": '"«Мода проходит, стиль остаётся»."',
        "- Ford ": '"«Чем умнее человек, тем легче он признает себя дураком». ."',

}
let authors = Object.keys(quotes);
if (arg === "back") {
    if (index >= 1) {
        index--
    }else {
        index = authors.length -1;
    }
} else if (arg === "next") {
    if (index < authors.length -1) {
        index++
    } else {
        index = 0
    }
} else if (arg === "generate") {
    index = Math.floor(Math.random() * authors.length)
}

let author = authors[index]
let quote = quotes[author]

document.querySelector("#quote").textContent = quote
document.querySelector("#author").textContent = author
}