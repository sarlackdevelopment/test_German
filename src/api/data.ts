const germanTest = [
    {
        section: 1,
        questions: [
            {
                question: {
                    de: 'Wie viele Bundesländer hat die Bundesrepublik Deutschland?',
                    ru: 'Сколько земель в составе Германии?'
                },
                options: [
                    { de: '14', ru: '14' },
                    { de: '15', ru: '15' },
                    { de: '16', ru: '16', correct: true },
                    { de: '17', ru: '17' }
                ]
            },
            {
                question: {
                    de: 'Welches Tier ist das Wappentier der Bundesrepublik Deutschland?',
                    ru: 'Какое животное изображено на гербе Германии?'
                },
                options: [
                    { de: 'Löwe', ru: 'Лев' },
                    { de: 'Adler', ru: 'Орёл', correct: true },
                    { de: 'Bär', ru: 'Медведь' },
                    { de: 'Pferd', ru: 'Конь' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil...',
                    ru: 'В Германии разрешается открыто выражать недовольство властью, потому что...'
                },
                options: [
                    { de: 'hier Religionsfreiheit gilt.', ru: 'здесь есть свобода вероисповедания' },
                    { de: 'die Menschen Steuern zahlen.', ru: 'люди платят налоги' },
                    { de: 'die Menschen das Wahlrecht haben.', ru: 'люди имеют право на голосование' },
                    { de: 'hier Meinungsfreiheit gilt.', ru: 'здесь есть свобода слова', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie heißt der jetzige Bundeskanzler / die jetzige Bundeskanzlerin von Deutschland?',
                    ru: 'Как зовут действующего канцлера/канцлершу Германии?'
                },
                options: [
                    { de: 'Gerhard Schröder', ru: 'Герхард Шрёдер' },
                    { de: 'Jurgen Ruttgers', ru: 'Юрген Рюттерс' },
                    { de: 'Klaus Wowereit', ru: 'Клаус Воверайт' },
                    { de: 'Angela Merkel', ru: 'Ангела Меркель', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie heißt die deutsche Verfassung?',
                    ru: 'Как называется Конституция Германии?'
                },
                options: [
                    { de: 'Volksgesetz', ru: 'Народный закон' },
                    { de: 'Bundesgesetz', ru: 'Федеративный закон' },
                    { de: 'Deutsches Gesetz', ru: 'Закон немцев' },
                    { de: 'Grundgesetz', ru: 'Основной закон', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?',
                    ru: 'Что в Германии автоматически платят, если имеют постоянное рабочее место?'
                },
                options: [
                    { de: 'Sozialversicherung', ru: 'Социальную страховку', correct: true },
                    { de: 'Sozialhilfe', ru: 'Социальную помощь' },
                    { de: 'Kindergeld', ru: 'Пособие на ребёнка' },
                    { de: 'Wohngeld', ru: 'Пособие на оплату жилья' }
                ]
            },
            {
                question: {
                    de: 'Was steht nicht im Grundgesetz von Deutschland?',
                    ru: 'Чего нет в Конституции Германии?'
                },
                options: [
                    { de: 'Die Würde des Menschen ist unantastbar.', ru: 'Достоинство людей неприкосновенно.' },
                    { de: 'Alle sollen gleich viel Geld haben.', ru: 'Все должны иметь равное количество денег.', correct: true },
                    { de: 'Jeder Mensch darf seine Meinung sagen.', ru: 'Каждый может выражать своё мнение.' },
                    { de: 'Alle sind vor dem Gesetz gleich.', ru: 'Все равны перед законом.' }
                ]
            },
            {
                question: {
                    de: "Welche Parteien wurden in Deutschland 2007 zur Partei 'Die Linke'?",
                    ru: "Какие партии вошли в 2007 в партию 'Левых'?"
                },
                options: [
                    { de: 'CDU und SSW', ru: 'CDU и SSW' },
                    { de: 'PDS und WASG', ru: 'PDS и WASG', correct: true },
                    { de: 'CSU und FDP', ru: 'CSU и FDP' },
                    { de: 'Bündnis 90/Die Grünen und SPD', ru: 'Bündnis 90/Die Grünen и SPD' }
                ]
            },
            {
                question: {
                    de: 'Wie heißt Deutschlands heutiges Staatsoberhaupt?',
                    ru: 'Как зовут главу государства Германия?'
                },
                options: [
                    { de: 'Horst Kohler', ru: 'Хорст Кёлер', correct: true },
                    { de: 'Norbert Lammert', ru: 'Норберт Ламмерт' },
                    { de: 'Wolfgang Thierse', ru: 'Вольфганг Тирзе' },
                    { de: 'Edmund Stoiber', ru: 'Эдмунд Штойбер' }
                ]
            },
            {
                question: {
                    de: 'Was ist mit dem deutschen Grundgesetz vereinbar?',
                    ru: 'Что определяется в Основном законе?'
                },
                options: [
                    { de: 'die Prügelstrafe', ru: 'Телесные наказания' },
                    { de: 'die Folter', ru: 'Пытки' },
                    { de: 'die Todesstrafe', ru: 'Смертная казнь' },
                    { de: 'die Geldstrafe', ru: 'Денежные штрафы', correct: true }
                ]
            }
        ]
    }
];

export default germanTest;
