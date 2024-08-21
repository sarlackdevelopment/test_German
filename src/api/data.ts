const germanTest = [
    {
        section: 1,
        questions: [
            // Вариант 1
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
            },
            {
                question: {
                    de: 'Was ist kein Merkmal unserer Demokratie?',
                    ru: 'Что не является признаком нашей демократии?'
                },
                options: [
                    { de: 'regelmäßige Wahlen', ru: 'регулярные выборы' },
                    { de: 'Pressezensur', ru: 'Цензура прессы', correct: true },
                    { de: 'Meinungsfreiheit', ru: 'Свобода мнений' },
                    { de: 'verschiedene Parteien', ru: 'различные партии' }
                ],
                explanation: {
                    de: 'In der Demokratie werden regelmäßige und freie Wahlen und Meinungsfreiheit geschätzt. Zusätzlich ist es wichtig, dass verschiedene Parteien zu Wahlen zugelassen werden. Pressezensur gehört nicht zu unserer Demokratie.',
                    ru: 'В демократии ценятся регулярные и свободные выборы, а также свобода мнений. Кроме того, важно, чтобы разные партии могли участвовать в выборах. Цензура прессы не является частью нашей демократии.'
                }
            },
            {
                question: {
                    de: 'Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland ...',
                    ru: 'Сотрудничество партий для формирования правительства в Германии называется ...'
                },
                options: [
                    { de: 'Einheit', ru: 'Единство' },
                    { de: 'Koalition', ru: 'Коалиция', correct: true },
                    { de: 'Ministerium', ru: 'Министерство' },
                    { de: 'Fraktion', ru: 'Фракция' }
                ],
                explanation: {
                    de: 'Manchmal erhält eine Partei bei der Wahl keine ausreichend große Mehrheit, um die Regierung aus eigenen Reihen heraus zu bilden. Daher schließen sich Parteien zusammen, um gemeinsam eine Regierung zu bilden. Einen solchen Zusammenschluss nennt man Koalition.',
                    ru: 'Иногда партия не получает достаточного большинства на выборах, чтобы сформировать правительство самостоятельно. Поэтому партии объединяются для совместного формирования правительства. Такое объединение называется коалицией.'
                }
            },
            {
                question: {
                    de: 'Im Parlament steht der Begriff „Opposition“ für…',
                    ru: 'В парламенте термин «оппозиция» означает…'
                },
                options: [
                    { de: 'die regierenden Parteien', ru: 'правящие партии' },
                    { de: 'alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören', ru: 'всех депутатов, которые не принадлежат к правящей партии/правящим партиям', correct: true },
                    { de: 'die Fraktion mit den meisten Abgeordneten', ru: 'фракция с большинством депутатов' },
                    { de: 'alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten', ru: 'все партии, которые преодолели 5%-ный барьер на последних выборах' }
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
                    de: 'In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …',
                    ru: 'В Германии разрешается открыто выражать недовольство властью, потому что…'
                },
                options: [
                    { de: 'hier Religionsfreiheit gilt.', ru: 'здесь есть свобода вероисповедания' },
                    { de: 'die Menschen Steuern zahlen.', ru: 'люди платят налоги' },
                    { de: 'die Menschen das Wahlrecht haben.', ru: 'люди имеют право на голосование' },
                    { de: 'hier Meinungsfreiheit gilt.', ru: 'здесь есть свобода слова', correct: true }
                ],
                explanation: {
                    de: 'Die Möglichkeit etwas gegen die Regierung sagen zu können ohne sich in Gefahr zu bringen wird in Deutschland durch die Meinungsfreiheit im Grundgesetz in Artikel 5 garantiert.',
                    ru: 'Возможность высказываться против правительства, не подвергая себя опасности, гарантируется в Германии свободой слова, закрепленной в статье 5 Основного закона.'
                }
            },
            {
                question: {
                    de: 'Deutschland ist ein Rechtsstaat. Was ist damit gemeint?',
                    ru: 'Германия является правовым государством. Что это означает?'
                },
                options: [
                    { de: 'Der Staat muss sich nicht an die Gesetze halten.', ru: 'Государство не обязано соблюдать законы.' },
                    { de: 'Nur Deutsche müssen die Gesetze befolgen.', ru: 'Только немцы обязаны соблюдать законы.' },
                    { de: 'Die Gerichte machen die Gesetze.', ru: 'Суды создают законы.' },
                    { de: 'Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.', ru: 'Все жители и государство должны соблюдать законы.', correct: true }
                ],
                explanation: {
                    de: 'Die Religionsfreiheit und das Wahlrecht sind zwar ebenso die Rechte eines jeden deutschen Bürgers. Ebenso wie die Pflicht zur Steuerabgabe haben sie jedoch keinen Einfluss auf die Meinungsfreiheit.',
                    ru: 'Свобода вероисповедания и избирательное право являются правами каждого немецкого гражданина. Как и обязанность уплачивать налоги, они не влияют на свободу слова.'
                }
            },
            {
                question: {
                    de: 'Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …',
                    ru: 'Какое право относится к основным правам, гарантируемым немецкой Конституцией? Право на…'
                },
                options: [
                    { de: 'Glaubens- und Gewissensfreiheit.', ru: 'Свободу вероисповедания и совести.', correct: true },
                    { de: 'Unterhaltung.', ru: 'Развлечения.' },
                    { de: 'Arbeit.', ru: 'Работу.' },
                    { de: 'Wohnung.', ru: 'Жилье.' }
                ]
            },
            {
                question: {
                    de: 'Welches Recht gehört zu den Grundrechten in Deutschland?',
                    ru: 'Какое право относится к основным правам в Германии?'
                },
                options: [
                    { de: 'Waffenbesitz.', ru: 'Право на владение оружием.' },
                    { de: 'Faustrecht.', ru: 'Право на применение силы.' },
                    { de: 'Meinungsfreiheit.', ru: 'Свобода слова.', correct: true },
                    { de: 'Selbstjustiz.', ru: 'Самосуд.' }
                ]
            },
            {
                question: {
                    de: 'Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann ...',
                    ru: 'Партия в Германии стремится к установлению диктатуры. Тогда она ...'
                },
                'options': [
                    { de: 'tolerant.', ru: 'терпимая' },
                    { de: 'rechtsstaatlich orientiert.', ru: 'ориентированная на правовое государство' },
                    { de: 'gesetzestreu.', ru: 'законопослушная' },
                    { de: 'verfassungswidrig.', ru: 'противоречащая конституции', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches ist das Wappen der Bundesrepublik Deutschland?',
                    ru: 'Какой герб у Федеративной Республики Германии?'
                },
                'options': [
                    { de: '1', ru: '1', correct: true },
                    { de: '2', ru: '2' },
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4' }
                ]
            },
            {
                question: {
                    de: 'Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?',
                    ru: 'Что подразумевается под правом "свободы передвижения" в Германии?'
                },
                'options': [
                    { de: 'Man darf sich seinen Wohnort selbst aussuchen.', ru: 'Можно самостоятельно выбирать место жительства.', correct: true },
                    { de: 'Man kann seinen Beruf wechseln.', ru: 'Можно сменить профессию.' },
                    { de: 'Man darf sich für eine andere Religion entscheiden.', ru: 'Можно выбрать другую религию.' },
                    { de: 'Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.', ru: 'Можно передвигаться на публике только в легкой одежде.' }
                ]
            },
            {
                question: {
                    de: 'Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?',
                    ru: 'Какое основное право гарантируется статьей 1 Основного закона Федеративной Республики Германия?'
                },
                'options': [
                    { de: 'die Unantastbarkeit der Menschenwürde', ru: 'неприкосновенность человеческого достоинства', correct: true },
                    { de: 'das Recht auf Leben', ru: 'право на жизнь' },
                    { de: 'Religionsfreiheit', ru: 'свобода вероисповедания' },
                    { de: 'Meinungsfreiheit', ru: 'свобода мнений' }
                ]
            },
            {
                question: {
                    de: 'Wie viele Bundesländer hat die Bundesrepublik Deutschland?',
                    ru: 'Сколько федеральных земель в Федеративной Республике Германия?'
                },
                'options': [
                    { de: '14', ru: '14' },
                    { de: '15', ru: '15' },
                    { de: '16', ru: '16', correct: true },
                    { de: '17', ru: '17' }
                ]
            },
            {
                question: {
                    de: 'Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …',
                    ru: 'Какое основное право в Германии действует только для иностранцев? Право на …'
                },
                'options': [
                    { de: 'Schutz der Familie', ru: 'защиту семьи' },
                    { de: 'Menschenwürde', ru: 'человеческое достоинство' },
                    { de: 'Asyl', ru: 'убежище', correct: true },
                    { de: 'Meinungsfreiheit', ru: 'свободу мнений' }
                ]
            },
            {
                question: {
                    de: 'Die deutschen Gesetze verbieten …',
                    ru: 'Немецкие законы запрещают …'
                },
                'options': [
                    { de: 'Meinungsfreiheit der Einwohner und Einwohnerinnen.', ru: 'свободу мнений для жителей.' },
                    { de: 'Petitionen der Bürger und Bürgerinnen.', ru: 'петиции граждан.' },
                    { de: 'Versammlungsfreiheit der Einwohner und Einwohnerinnen.', ru: 'свободу собраний для жителей.' },
                    { de: 'Ungleichbehandlung der Bürger und Bürgerinnen durch den Staat.', ru: 'неравное обращение с гражданами со стороны государства.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welche Aussage ist richtig? In Deutschland …',
                    ru: 'Какое утверждение верно? В Германии …'
                },
                'options': [
                    { de: 'sind Staat und Religionsgemeinschaften voneinander getrennt.', ru: 'государство и религиозные общины отделены друг от друга.', correct: true },
                    { de: 'bilden die Religionsgemeinschaften den Staat.', ru: 'религиозные общины формируют государство.' },
                    { de: 'ist der Staat abhängig von den Religionsgemeinschaften.', ru: 'государство зависит от религиозных общин.' },
                    { de: 'bilden Staat und Religionsgemeinschaften eine Einheit.', ru: 'государство и религиозные общины образуют единое целое.' }
                ]
            },
            {
                question: {
                    de: 'Wie heißt die deutsche Verfassung?',
                    ru: 'Как называется конституция Германии?'
                },
                'options': [
                    { de: 'Volksgesetz', ru: 'Народный закон' },
                    { de: 'Bundesgesetz', ru: 'Федеральный закон' },
                    { de: 'Deutsches Gesetz', ru: 'Немецкий закон' },
                    { de: 'Grundgesetz', ru: 'Основной закон', correct: true }
                ]
            },
            {
                question: {
                    de: 'Deutschland ist ...',
                    ru: 'Германия является ...'
                },
                'options': [
                    { de: 'eine kommunistische Republik.', ru: 'коммунистической республикой.' },
                    { de: 'ein demokratischer und sozialer Bundesstaat.', ru: 'демократическим и социальным федеративным государством.', correct: true },
                    { de: 'eine kapitalistische und soziale Monarchie.', ru: 'капиталистической и социальной монархией.' },
                    { de: 'ein sozialer und sozialistischer Bundesstaat.', ru: 'социальным и социалистическим федеративным государством.' }
                ]
            },
            {
                question: {
                    de: 'Welche Aussage ist richtig? In Deutschland ...',
                    ru: 'Какое утверждение верно? В Германии ...'
                },
                options: [
                    { de: 'bilden die Religionsgemeinschaften den Staat.', ru: 'религиозные общины создают государство.' },
                    { de: 'ist der Staat abhängig von den Religionsgemeinschaften.', ru: 'государство зависит от религиозных общин.' },
                    { de: 'bilden Staat und Religionsgemeinschaften eine Einheit.', ru: 'государство и религиозные общины составляют единое целое.' },
                    { de: 'sind Staat und Religionsgemeinschaften voneinander getrennt.', ru: 'государство и религиозные общины отделены друг от друга.', correct: true }
                ]
            },
            {
                question: {
                    de: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ...',
                    ru: 'В Германии родители могут решать до 14-летнего возраста ребенка, посещает ли он в школе ...'
                },
                options: [
                    { de: 'Geschichtsunterricht teilnimmt.', ru: 'уроки истории.' },
                    { de: 'Religionsunterricht teilnimmt.', ru: 'уроки религии.', correct: true },
                    { de: 'Politikunterricht teilnimmt.', ru: 'уроки политики.' },
                    { de: 'Sprachunterricht teilnimmt.', ru: 'уроки языка.' }
                ]
            },
            {
                question: {
                    de: 'Was verbietet das deutsche Grundgesetz?',
                    ru: 'Что запрещает Основной закон Германии?'
                },
                options: [
                    { de: 'Militärdienst', ru: 'Военную службу' },
                    { de: 'Zwangsarbeit', ru: 'Принудительный труд', correct: true },
                    { de: 'freie Berufswahl', ru: 'Свободу выбора профессии' },
                    { de: 'Arbeit im Ausland', ru: 'Работу за границей' }
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
                    de: 'Was versteht man unter dem Recht der „Freizügigkeit“ in Deutschland?',
                    ru: 'Что означает право "свободы передвижения" в Германии?'
                },
                options: [
                    { de: 'Man darf sich seinen Wohnort selbst aussuchen.', ru: 'Можно самостоятельно выбирать место жительства.', correct: true },
                    { de: 'Man kann seinen Beruf wechseln.', ru: 'Можно менять профессию.' },
                    { de: 'Man darf sich für eine andere Religion entscheiden.', ru: 'Можно выбирать другую религию.' },
                    { de: 'Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.', ru: 'Можно передвигаться на публике только легко одетым.' }
                ]
            },
            {
                question: {
                    de: 'Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?',
                    ru: 'Партия в немецком Бундестаге хочет отменить свободу прессы. Это возможно?'
                },
                options: [
                    { de: 'Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.', ru: 'Да, если более половины депутатов в Бундестаге за это.' },
                    { de: 'Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.', ru: 'Да, но для этого две трети депутатов в Бундестаге должны быть за.' },
                    { de: 'Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.', ru: 'Нет, потому что свобода прессы является основным правом. Оно не может быть отменено.', correct: true },
                    { de: 'Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.', ru: 'Нет, потому что только Бундесрат может отменить свободу прессы.' }
                ]
            },
            {
                question: {
                    de: 'Wahlen in Deutschland sind frei. Was bedeutet das?',
                    ru: 'Выборы в Германии свободны. Что это значит?'
                },
                options: [
                    { de: 'Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.', ru: 'Можно принимать деньги, если за это голосуешь за определенного кандидата.' },
                    { de: 'Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.', ru: 'Избиратель не должен подвергаться влиянию или принуждению к голосованию за определенного кандидата и не должен иметь никаких недостатков из-за выборов.', correct: true },
                    { de: 'Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.', ru: 'Только те, кто никогда не был в тюрьме, могут голосовать.' },
                    { de: 'Alle wahlberechtigten Personen müssen wählen.', ru: 'Все лица, имеющие право голосовать, обязаны голосовать.' }
                ]
            },
            {
                question: {
                    de: 'Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?',
                    ru: 'Когда в Германии ограничивается свобода слова?'
                },
                options: [
                    { de: 'bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen', ru: 'при публичном распространении ложных утверждений о конкретных лицах', correct: true },
                    { de: 'bei Meinungsäußerungen über die Bundesregierung', ru: 'при выражении мнения о федеральном правительстве' },
                    { de: 'bei Diskussionen über Religionen', ru: 'при обсуждениях религий' },
                    { de: 'bei Kritik am Staat', ru: 'при критике государства' }
                ]
            },
            {
                question: {
                    de: 'Was ist keine staatliche Gewalt in Deutschland?',
                    ru: 'Что не является государственной властью в Германии?'
                },
                options: [
                    { de: 'Gesetzgebung', ru: 'Законодательная власть' },
                    { de: 'Regierung', ru: 'Правительство' },
                    { de: 'Presse', ru: 'Пресса', correct: true },
                    { de: 'Rechtsprechung', ru: 'Судебная власть' }
                ]
            },
            {
                question: {
                    de: 'Wie wird die Verfassung der Bundesrepublik Deutschland genannt?',
                    ru: 'Как называется конституция Федеративной Республики Германии?'
                },
                options: [
                    { de: 'Grundgesetz', ru: 'Основной закон', correct: true },
                    { de: 'Bundesverfassung', ru: 'Федеральная конституция' },
                    { de: 'Gesetzbuch', ru: 'Свод законов' },
                    { de: 'Verfassungsvertrag', ru: 'Конституционный договор' }
                ]
            },
            {
                question: {
                    de: 'Wie wird die Verfassung der Bundesrepublik Deutschland genannt?',
                    ru: 'Как называется Конституция Германии?'
                },
                options: [
                    { de: 'Bundesverfassung', ru: 'Федеративная конституция' },
                    { de: 'Gesetzbuch', ru: 'Кодекс законов' },
                    { de: 'Verfassungsvertrag', ru: 'Конституционный договор' },
                    { de: 'Grundgesetz', ru: 'Основной закон', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was für eine Staatsform hat Deutschland?',
                    ru: 'Какая форма правления в Германии?'
                },
                options: [
                    { de: 'Monarchie', ru: 'Монархия' },
                    { de: 'Diktatur', ru: 'Диктатура' },
                    { de: 'Republik', ru: 'Республика', correct: true },
                    { de: 'Fürstentum', ru: 'Княжество' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am ...',
                    ru: 'В Германии родители могут решать до 14 лет, посещает ли ребёнок в школе уроки...'
                },
                options: [
                    { de: 'Geschichtsunterricht teilnimmt.', ru: 'Истории' },
                    { de: 'Religionsunterricht teilnimmt.', ru: 'Религии', correct: true },
                    { de: 'Politikunterricht teilnimmt.', ru: 'Политики' },
                    { de: 'Sprachunterricht teilnimmt.', ru: 'Языков' }
                ]
            },
            {
                question: {
                    de: 'Was ist kein Bundesland der Bundesrepublik Deutschland?',
                    ru: 'Какая территория не является федеральной землёй Германии?'
                },
                options: [
                    { de: 'Nordrhein-Westfalen', ru: 'Северный Рейн-Вестфалия' },
                    { de: 'Elsass-Lothringen', ru: 'Эльзас-Лотарингия', correct: true },
                    { de: 'Mecklenburg-Vorpommern', ru: 'Мекленбург-Передняя Померания' },
                    { de: 'Sachsen-Anhalt', ru: 'Саксония-Анхальт' }
                ]
            },
            // Вариант 2
            {
                question: {
                    de: 'Warum gibt es in einer Demokratie mehr als eine Partei?',
                    ru: 'Почему в демократии существует более одной партии?'
                },
                options: [
                    { de: 'weil dadurch die unterschiedlichen Meinungen der Bürger und Bürgerinnen vertreten werden', ru: 'потому что благодаря этому выражаются разные мнения граждан', correct: true },
                    { de: 'damit Bestechung in der Politik begrenzt wird', ru: 'чтобы ограничить коррупцию в политике' },
                    { de: 'um politische Demonstrationen zu verhindern', ru: 'чтобы предотвратить политические демонстрации' },
                    { de: 'um wirtschaftlichen Wettbewerb anzuregen', ru: 'чтобы стимулировать экономическую конкуренцию' }
                ]
            },
            {
                question: {
                    de: "Was bedeutet 'Volkssouveränität'? Alle Staatsgewalt geht vom ...",
                    ru: "Что означает 'народный суверенитет'? Вся государственная власть исходит от ..."
                },
                options: [
                    { de: 'Volke aus.', ru: 'народа.', correct: true },
                    { de: 'Bundestag aus.', ru: 'Бундестага.' },
                    { de: 'preußischen König aus.', ru: 'прусского короля.' },
                    { de: 'Bundesverfassungsgericht aus.', ru: 'Федерального конституционного суда.' }
                ],
                explanation: {
                    de: 'Volkssouveränität bedeutet, dass das Volk der Inhaber der Staatsgewalt ist.',
                    ru: 'Народный суверенитет означает, что народ является обладателем государственной власти.'
                }
            },
            {
                question: {
                    de: 'Was zeigt dieses Bild?',
                    ru: 'Что изображено на этой картинке?'
                },
                options: [
                    { de: 'den Bundestagssitz in Berlin', ru: 'здание Бундестага в Берлине', correct: true },
                    { de: 'das Bundesverfassungsgericht in Karlsruhe', ru: 'Федеральный конституционный суд в Карлсруэ' },
                    { de: 'das Bundesratsgebäude in Berlin', ru: 'здание Бундесрата в Берлине' },
                    { de: 'das Bundeskanzleramt in Berlin', ru: 'канцлерский офис в Берлине' }
                ],
                explanation: {
                    de: 'Auf dem Bild zu sehen ist das Reichstagsgebäude am Platz der Republik in Berlin. Seit dem 8. September 1999 ist das Gebäude der Sitz des Deutschen Bundestages.',
                    ru: 'На картинке изображено здание Рейхстага на площади Республики в Берлине. С 8 сентября 1999 года здание является резиденцией Немецкого Бундестага.'
                }
            },
            {
                question: {
                    de: 'Wer bestimmt in Deutschland die Schulpolitik?',
                    ru: 'Кто определяет школьную политику в Германии?'
                },
                options: [
                    { de: 'die Lehrer und Lehrerinnen', ru: 'учителя и учительницы' },
                    { de: 'die Bundesländer', ru: 'федеральные земли', correct: true },
                    { de: 'das Familienministerium', ru: 'министерство по делам семьи' },
                    { de: 'die Universitäten', ru: 'университеты' }
                ]
            },
            {
                question: {
                    de: "Welche Parteien wurden in Deutschland 2007 zur Partei 'Die Linke'?",
                    ru: "Какие партии в Германии объединились в 2007 году в партию 'Die Linke'?"
                },
                options: [
                    { de: 'CDU und SSW', ru: 'ХДС и ССВ' },
                    { de: 'PDS und WASG', ru: 'ПДС и ВАСГ', correct: true },
                    { de: 'CSU und FDP', ru: 'ХСС и СвДП' },
                    { de: 'Bündnis 90/Die Grünen und SPD', ru: 'Союз 90/Зелёные и СДПГ' }
                ],
                explanation: {
                    de: "'Die Linke' entstand am 16. Juni 2007 durch Verschmelzung der Partei 'WASG' und der Partei 'Die Linkspartei.PDS'.",
                    ru: "'Die Linke' образовалась 16 июня 2007 года в результате слияния партии 'WASG' и партии 'Die Linkspartei.PDS'."
                }
            },
            {
                question: {
                    de: 'Wann kann in Deutschland eine Partei verboten werden?',
                    ru: 'Когда в Германии можно запретить партию?'
                },
                options: [
                    { de: 'wenn ihr Wahlkampf zu teuer ist', ru: 'если её предвыборная кампания слишком дорогая' },
                    { de: 'wenn sie gegen die Verfassung kämpft', ru: 'если она борется против Конституции', correct: true },
                    { de: 'wenn sie Kritik am Staatsoberhaupt äußert', ru: 'если она критикует главу государства' },
                    { de: 'wenn ihr Programm eine neue Richtung vorschlägt', ru: 'если её программа предлагает новое направление' }
                ]
            },
            {
                question: {
                    de: "Was bedeutet 'Volkssouveränität'?",
                    ru: "Что означает 'народный суверенитет'?"
                },
                options: [
                    { de: 'Der König / die Königin herrscht über das Volk.', ru: 'Король/королева правит народом.' },
                    { de: 'Das Bundesverfassungsgericht steht über der Verfassung.', ru: 'Федеральный конституционный суд стоит выше Конституции.' },
                    { de: 'Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.', ru: 'Интересы объединений осуществляют суверенитет вместе с правительством.' },
                    { de: 'Die Staatsgewalt geht vom Volke aus.', ru: 'Государственная власть исходит от народа.', correct: true }
                ],
                explanation: {
                    de: 'Volkssouveränität bedeutet, dass das Volk der Souverän ist. Das heißt, dass die Staatsgewalt vom Volk ausgeht.',
                    ru: 'Народный суверенитет означает, что народ является сувереном. Это значит, что государственная власть исходит от народа.'
                }
            },
            {
                question: {
                    de: 'Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?',
                    ru: 'У немецкого государства много задач. Какая из них является одной из задач?'
                },
                options: [
                    { de: 'Er baut Straßen und Schulen.', ru: 'Он строит дороги и школы.', correct: true },
                    { de: 'Er verkauft Lebensmittel und Kleidung.', ru: 'Он продаёт продукты питания и одежду.' },
                    { de: 'Er versorgt alle Einwohner und Einwohnerinnen kostenlos mit Zeitungen.', ru: 'Он бесплатно снабжает всех жителей газетами.' },
                    { de: 'Er produziert Autos und Busse.', ru: 'Он производит автомобили и автобусы.' }
                ]
            },
            {
                question: {
                    de: 'Wer wird meistens zum Präsidenten / zur Präsidentin des Deutschen Bundestages gewählt?',
                    ru: 'Кто чаще всего избирается президентом / президентом Немецкого Бундестага?'
                },
                options: [
                    { de: 'der / die älteste Abgeordnete im Parlament', ru: 'самый старший депутат в парламенте' },
                    { de: 'der Ministerpräsident / die Ministerpräsidentin des größten Bundeslandes', ru: 'премьер-министр самого большого федерального государства' },
                    { de: 'ein Abgeordneter / eine Abgeordnete der stärksten Fraktion', ru: 'депутат самой сильной фракции', correct: true },
                    { de: 'ein ehemaliger Bundeskanzler / eine ehemalige Bundeskanzlerin', ru: 'бывший федеральный канцлер' }
                ],
                explanation: {
                    de: 'Zum Präsidenten / zur Präsidentin des Deutschen Bundestages wird meistens ein Abgeordneter / eine Abgeordnete der stärksten Fraktion gewählt, da so eine Stimmenmehrheit sich leichter erreichen lässt.',
                    ru: 'Чаще всего президентом / президентом Немецкого Бундестага избирается депутат самой сильной фракции, так как так легче достичь большинства голосов.'
                }
            },
            {
                question: {
                    de: 'Die Bundesrepublik Deutschland ist ein demokratischer und sozialer ...',
                    ru: 'Федеративная Республика Германия - это демократическое и социальное ...'
                },
                options: [
                    { de: 'Staatenverbund.', ru: 'союз государств.' },
                    { de: 'Bundesstaat.', ru: 'федеративное государство.', correct: true },
                    { de: 'Staatenbund.', ru: 'конфедерация.' },
                    { de: 'Zentralstaat.', ru: 'унитарное государство.' }
                ]
            },
            {
                question: {
                    de: 'Wer beschließt in Deutschland ein neues Gesetz?',
                    ru: 'Кто принимает новый закон в Германии?'
                },
                options: [
                    { de: 'die Regierung', ru: 'правительство' },
                    { de: 'das Parlament', ru: 'парламент', correct: true },
                    { de: 'die Gerichte', ru: 'суды' },
                    { de: 'die Polizei', ru: 'полиция' }
                ]
            },
            {
                question: {
                    de: 'Mit welchen Worten beginnt die deutsche Nationalhymne?',
                    ru: 'С каких слов начинается немецкий национальный гимн?'
                },
                options: [
                    { de: 'Völker, hört die Signale ...', ru: 'Народы, слушайте сигналы ...' },
                    { de: 'Einigkeit und Recht und Freiheit ...', ru: 'Единство и право и свобода ...', correct: true },
                    { de: 'Freude schöner Götterfunken ...', ru: 'Радость прекрасных божественных искр ...' },
                    { de: 'Deutschland einig Vaterland ...', ru: 'Германия, единое отечество ...' }
                ]
            },
            {
                question: {
                    de: 'Was ist keine staatliche Gewalt in Deutschland?',
                    ru: 'Что не является государственной властью в Германии?'
                },
                options: [
                    { de: 'Legislative', ru: 'Законодательная' },
                    { de: 'Judikative', ru: 'Судебная' },
                    { de: 'Exekutive', ru: 'Исполнительная' },
                    { de: 'Direktive', ru: 'Директивная', correct: true }
                ],
                explanation: {
                    de: 'In Deutschland gibt es drei staatliche Gewalten: Legislative (Gesetzgebung), Judikative (Rechtsprechung) und Exekutive (ausführende Gewalt).',
                    ru: 'В Германии есть три государственной власти: законодательная (правотворческая), судебная (правосудие) и исполнительная (исполнительная власть).'
                }
            },
            {
                question: {
                    de: 'Es gehört nicht zu den Aufgaben des Deutschen Bundestages, ...',
                    ru: 'Что не входит в обязанности немецкого Бундестага, ...'
                },
                options: [
                    { de: 'Gesetze zu entwerfen.', ru: 'разрабатывать законы.' },
                    { de: 'die Bundesregierung zu kontrollieren.', ru: 'контролировать федеральное правительство.' },
                    { de: 'den Bundeskanzler / die Bundeskanzlerin zu wählen.', ru: 'избирать федерального канцлера.' },
                    { de: 'das Bundeskabinett zu bilden.', ru: 'формировать федеральный кабинет министров.', correct: true }
                ],
                explanation: {
                    de: 'Zu den Aufgaben des Bundestages gehört es, die Gesetze zu entwerfen (Artikel 76 Grundgesetz), die Bundesregierung zu kontrollieren (Grundgesetz, Artikel 43, 44, 67 und 110) und den Bundeskanzler / die Bundeskanzlerin zu wählen (Artikel 63 Grundgesetz). Das Bundeskabinett (auch Bundesregierung genannt) besteht aus dem Bundeskanzler und den Bundesministern. Die Bundesminister werden auf Vorschlag des Bundeskanzlers vom Bundespräsidenten ernannt.',
                    ru: 'Обязанности Бундестага включают разработку законов (статья 76 Основного закона), контроль федерального правительства (Основной закон, статьи 43, 44, 67 и 110) и избрание федерального канцлера (статья 63 Основного закона). Федеральный кабинет (также называемый федеральным правительством) состоит из федерального канцлера и федеральных министров. Федеральные министры назначаются по предложению федерального канцлера президентом.'
                }
            },
            {
                question: {
                    de: 'Zu welcher Versicherung gehört die Pflegeversicherung?',
                    ru: 'К какой категории страховок относится страховка по уходу?'
                },
                options: [
                    { de: 'Sozialversicherung', ru: 'Социальное страхование', correct: true },
                    { de: 'Unfallversicherung', ru: 'Страхование от несчастных случаев' },
                    { de: 'Hausratversicherung', ru: 'Страхование домашнего имущества' },
                    { de: 'Haftpflicht- und Feuerversicherung', ru: 'Страхование ответственности и от пожара' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland gehören der Bundestag und der Bundesrat zur ...',
                    ru: 'В Германии Бундестаг и Бундесрат относятся к ...'
                },
                options: [
                    { de: 'Exekutive.', ru: 'Исполнительной власти.' },
                    { de: 'Legislative.', ru: 'Законодательной власти.', correct: true },
                    { de: 'Direktive.', ru: 'Директивной власти.' },
                    { de: 'Judikative.', ru: 'Судебной власти.' }
                ],
                explanation: {
                    de: 'Der Bundestag und der Bundesrat gehören zur gesetzgebenden Gewalt in Deutschland und damit zur Legislative. Exekutive führt die Gesetze aus (z.B. Finanzamt), die Judikative ist die richterliche Gewalt. Direktive ist keine staatliche Gewalt in Deutschland.',
                    ru: 'Бундестаг и Бундесрат относятся к законодательной власти в Германии и, следовательно, к законодательной власти. Исполнительная власть исполняет законы (например, налоговая служба), судебная власть осуществляет правосудие. Директивная власть не является государственной властью в Германии.'
                }
            },
            {
                question: {
                    de: 'Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das ...',
                    ru: 'Когда избирается парламент немецкой федеральной земли, это называется ...'
                },
                options: [
                    { de: 'Kommunalwahl.', ru: 'муниципальные выборы.' },
                    { de: 'Landtagswahl.', ru: 'выборы в ландтаг.', correct: true },
                    { de: 'Europawahl.', ru: 'выборы в Европарламент.' },
                    { de: 'Bundestagswahl.', ru: 'выборы в Бундестаг.' }
                ],
                explanation: {
                    de: 'Das Parlament eines deutschen Bundeslandes heißt Landtag, seine Wahl entsprechend Landtagswahl.',
                    ru: 'Парламент немецкой федеральной земли называется ландтаг, его выборы соответственно - выборы в ландтаг.'
                }
            },
            {
                question: {
                    de: 'Wer schrieb den Text zur deutschen Nationalhymne?',
                    ru: 'Кто написал текст немецкого национального гимна?'
                },
                options: [
                    { de: 'Friedrich von Schiller', ru: 'Фридрих фон Шиллер' },
                    { de: 'Clemens Brentano', ru: 'Клеменс Брентано' },
                    { de: 'Johann Wolfgang von Goethe', ru: 'Иоганн Вольфганг фон Гёте' },
                    { de: 'Heinrich Hoffmann von Fallersleben', ru: 'Генрих Гофман фон Фаллерслебен', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was ist Deutschland nicht?',
                    ru: 'Чем не является Германия?'
                },
                options: [
                    { de: 'eine Demokratie', ru: 'демократия' },
                    { de: 'ein Rechtsstaat', ru: 'правовое государство' },
                    { de: 'eine Monarchie', ru: 'монархия', correct: true },
                    { de: 'ein Sozialstaat', ru: 'социальное государство' }
                ]
            },
            {
                question: {
                    de: 'Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?',
                    ru: 'Какой орган не относится к конституционным органам Германии?'
                },
                options: [
                    { de: 'der Bundesrat', ru: 'Бундесрат' },
                    { de: 'der Bundespräsident / die Bundespräsidentin', ru: 'Федеральный президент' },
                    { de: 'die Bürgerversammlung', ru: 'Гражданское собрание', correct: true },
                    { de: 'die Regierung', ru: 'Правительство' }
                ]
            },
            {
                question: {
                    de: 'Welche Maßnahme schafft in Deutschland soziale Sicherheit?',
                    ru: 'Какая мера обеспечивает социальную безопасность в Германии?'
                },
                options: [
                    { de: 'die Krankenversicherung', ru: 'медицинское страхование', correct: true },
                    { de: 'die Autoversicherung', ru: 'страхование автомобилей' },
                    { de: 'die Gebäudeversicherung', ru: 'страхование зданий' },
                    { de: 'die Haftpflichtversicherung', ru: 'страхование ответственности' }
                ]
            },
            {
                question: {
                    de: 'Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?',
                    ru: 'У немецкого государства много задач. Какая задача к ним не относится?'
                },
                options: [
                    { de: 'Er bezahlt für alle Staatsangehörigen Urlaubsreisen.', ru: 'Он оплачивает всем гражданам отпускные поездки.', correct: true },
                    { de: 'Er zahlt Kindergeld.', ru: 'Он выплачивает пособие на детей.' },
                    { de: 'Er unterstützt Museen.', ru: 'Он поддерживает музеи.' },
                    { de: 'Er fördert Sportler und Sportlerinnen.', ru: 'Он поддерживает спортсменов.' }
                ]
            },
            {
                question: {
                    de: 'Die Bundesrepublik Deutschland ist heute gegliedert in …',
                    ru: 'Федеративная Республика Германия сегодня делится на …'
                },
                options: [
                    { de: 'vier Besatzungszonen.', ru: 'четыре оккупационные зоны.' },
                    { de: 'einen Oststaat und einen Weststaat.', ru: 'восточное и западное государства.' },
                    { de: '16 Kantone.', ru: '16 кантонов.' },
                    { de: 'Bund, Länder und Kommunen.', ru: 'федерацию, земли и коммуны.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was hat jedes deutsche Bundesland?',
                    ru: 'Что есть у каждой федеральной земли Германии?'
                },
                options: [
                    { de: 'einen eigenen Außenminister / eine eigene Außenministerin', ru: 'собственного министра иностранных дел' },
                    { de: 'eine eigene Währung', ru: 'собственную валюту' },
                    { de: 'eine eigene Armee', ru: 'собственную армию' },
                    { de: 'eine eigene Regierung', ru: 'собственное правительство', correct: true }
                ]
            },
            {
                question: {
                    de: 'Womit finanziert der deutsche Staat die Sozialversicherung?',
                    ru: 'Каким образом немецкое государство финансирует социальное страхование?'
                },
                options: [
                    { de: 'Kirchensteuern', ru: 'церковные налоги' },
                    { de: 'Sozialabgaben', ru: 'социальные взносы', correct: true },
                    { de: 'Spendengeldern', ru: 'пожертвования' },
                    { de: 'Vereinsbeiträgen', ru: 'взносы членов организаций' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet „Rechtsstaat“ in Deutschland?',
                    ru: 'Что означает «правовое государство» в Германии?'
                },
                options: [
                    { de: 'Der Staat hat Recht.', ru: 'Государство право.' },
                    { de: 'Es gibt nur rechte Parteien.', ru: 'Существуют только правые партии.' },
                    { de: 'Die Bürger und Bürgerinnen entscheiden über Gesetze.', ru: 'Граждане решают законы.' },
                    { de: 'Der Staat muss die Gesetze einhalten.', ru: 'Государство должно соблюдать законы.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Zu einem demokratischen Rechtsstaat gehört es nicht, dass …',
                    ru: 'В демократическом правовом государстве не допускается, чтобы …'
                },
                options: [
                    { de: 'Menschen sich kritisch über die Regierung äußern können.', ru: 'Люди могут критически высказываться о правительстве.' },
                    { de: 'Bürger friedlich demonstrieren gehen dürfen.', ru: 'Граждане могут мирно протестовать.' },
                    { de: 'Menschen von einer Privatpolizei ohne Grund verhaftet werden.', ru: 'Люди арестованы частной полицией без оснований.', correct: true },
                    { de: 'jemand ein Verbrechen begeht und deshalb verhaftet wird.', ru: 'кто-то совершает преступление и поэтому арестован.' }
                ]
            },
            {
                question: {
                    de: 'Die Wirtschaftsform in Deutschland nennt man …',
                    ru: 'Экономическая система в Германии называется …'
                },
                options: [
                    { de: 'freie Zentralwirtschaft.', ru: 'свободная централизованная экономика.' },
                    { de: 'soziale Marktwirtschaft.', ru: 'социальная рыночная экономика.', correct: true },
                    { de: 'gelenkte Zentralwirtschaft.', ru: 'управляемая централизованная экономика.' },
                    { de: 'Planwirtschaft.', ru: 'плановая экономика.' }
                ]
            },
            {
                question: {
                    de: 'Wen kann man als Bürger / Bürgerin in Deutschland nicht direkt wählen?',
                    ru: 'Кого граждане Германии не могут выбирать напрямую?'
                },
                options: [
                    { de: 'Abgeordnete des EU-Parlaments', ru: 'депутаты Европарламента' },
                    { de: 'den Bundespräsidenten / die Bundespräsidentin', ru: 'федерального президента', correct: true },
                    { de: 'Landtagsabgeordnete', ru: 'депутаты ландтага' },
                    { de: 'Bundestagsabgeordnete', ru: 'депутаты Бундестага' }
                ],
                explanation: {
                    de: 'Die Abgeordneten des EU-Parlaments, des Bundestages und der Landtage werden von den Bürgern direkt gewählt. Der Bundespräsident / die Bundespräsidentin wird von der Bundesversammlung gewählt.',
                    ru: 'Депутаты Европейского парламента, Бундестага и ландтагов избираются гражданами напрямую. Федеральный президент избирается Федеральным собранием.'
                }
            },
            {
                question: {
                    de: 'Wie werden die Regierungschefs / Regierungschefinnen der meisten Bundesländer in Deutschland genannt?',
                    ru: 'Как называются главы правительств большинства федеральных земель в Германии?'
                },
                options: [
                    { de: 'Erster Minister / Erste Ministerin', ru: 'первый министр' },
                    { de: 'Premierminister / Premierministerin', ru: 'премьер-министр' },
                    { de: 'Senator / Senatorin', ru: 'сенатор' },
                    { de: 'Ministerpräsident / Ministerpräsidentin', ru: 'премьер-министр', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was gehört in Deutschland nicht zur Exekutive?',
                    ru: 'Что не относится к исполнительной власти в Германии?'
                },
                options: [
                    { de: 'die Polizei', ru: 'полиция' },
                    { de: 'die Gerichte', ru: 'суды', correct: true },
                    { de: 'das Finanzamt', ru: 'налоговая служба' },
                    { de: 'die Ministerien', ru: 'министерства' }
                ],
                explanation: {
                    de: 'Die Exekutive ist die ausführende Gewalt in Deutschland. Zu ihr gehören u.a. die Polizei, das Finanzamt und die Ministerien. Die Gerichte gehören zur Judikative.',
                    ru: 'Исполнительная власть в Германии - это выполняющая власть. К ней относятся полиция, налоговая служба и министерства. Суды относятся к судебной власти.'
                }
            },
            {
                question: {
                    de: 'Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?',
                    ru: 'Кто назначает министров в правительстве Германии?'
                },
                options: [
                    {
                        de: 'der Präsident / die Präsidentin des Bundesverfassungsgerichtes',
                        ru: 'президент Федерального конституционного суда'
                    },
                    { de: 'der Bundespräsident / die Bundespräsidentin', ru: 'федеральный президент', correct: true },
                    { de: 'der Bundesratspräsident / die Bundesratspräsidentin', ru: 'президент Бундесрата' },
                    { de: 'der Bundestagspräsident / die Bundestagspräsidentin', ru: 'президент Бундестага' }
                ]
            },
            {
                question: {
                    de: 'Welches Amt gehört in Deutschland zur Gemeindeverwaltung?',
                    ru: 'Какое учреждение относится к управлению общиной в Германии?'
                },
                options: [
                    { de: 'Pfarramt', ru: 'приходское управление' },
                    { de: 'Ordnungsamt', ru: 'управление порядка', correct: true },
                    { de: 'Finanzamt', ru: 'налоговая служба' },
                    { de: 'Auswärtiges Amt', ru: 'министерство иностранных дел' }
                ]
            },
            // Вариант 3
            {
                question: {
                    de: 'Was gehört in Deutschland nicht zur Exekutive?',
                    ru: 'Что не относится к исполнительной власти в Германии?'
                },
                options: [
                    { de: 'die Polizei', ru: 'полиция' },
                    { de: 'die Gerichte', ru: 'суды', correct: true },
                    { de: 'das Finanzamt', ru: 'налоговая служба' },
                    { de: 'die Ministerien', ru: 'министерства' }
                ],
                explanation: {
                    de: 'Die Exekutive ist die ausführende Gewalt in Deutschland. Zu ihr gehören u.a. die Polizei, das Finanzamt und die Ministerien. Die Gerichte gehören zur Judikative.',
                    ru: 'Исполнительная власть в Германии - это выполняющая власть. К ней относятся полиция, налоговая служба и министерства. Суды относятся к судебной власти.'
                }
            },
            {
                question: {
                    de: 'Wer ernennt in Deutschland die Minister / die Ministerinnen der Bundesregierung?',
                    ru: 'Кто назначает министров в правительстве Германии?'
                },
                options: [
                    {
                        de: 'der Präsident / die Präsidentin des Bundesverfassungsgerichtes',
                        ru: 'президент Федерального конституционного суда'
                    },
                    { de: 'der Bundespräsident / die Bundespräsidentin', ru: 'федеральный президент', correct: true },
                    { de: 'der Bundesratspräsident / die Bundesratspräsidentin', ru: 'президент Бундесрата' },
                    { de: 'der Bundestagspräsident / die Bundestagspräsidentin', ru: 'президент Бундестага' }
                ]
            },
            {
                question: {
                    de: 'Welches Amt gehört in Deutschland zur Gemeindeverwaltung?',
                    ru: 'Какое учреждение относится к управлению общиной в Германии?'
                },
                options: [
                    { de: 'Pfarramt', ru: 'приходское управление' },
                    { de: 'Ordnungsamt', ru: 'управление порядка', correct: true },
                    { de: 'Finanzamt', ru: 'налоговая служба' },
                    { de: 'Auswärtiges Amt', ru: 'министерство иностранных дел' }
                ]
            },
            {
                question: {
                    de: 'Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?',
                    ru: 'Федеральный президент Германии Густав Хайнеманн вручает Гельмуту Шмидту в 1974 году грамоту о назначении на должность федерального канцлера Германии. Какие задачи входят в обязанности федерального президента Германии?'
                },
                options: [
                    { de: 'Er / Sie führt die Regierungsgeschäfte.', ru: 'Он/Она ведет дела правительства.' },
                    { de: 'Er / Sie kontrolliert die Regierungspartei.', ru: 'Он/Она контролирует правящую партию.' },
                    { de: 'Er / Sie wählt die Minister / Ministerinnen aus.', ru: 'Он/Она выбирает министров.' },
                    { de: 'Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor.', ru: 'Он/Она предлагает кандидатуру канцлера для выборов.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?',
                    ru: 'Кто является главой государства в Федеративной Республике Германия?'
                },
                options: [
                    { de: 'der Bundeskanzler / die Bundeskanzlerin', ru: 'федеральный канцлер' },
                    { de: 'der Bundespräsident / die Bundespräsidentin', ru: 'федеральный президент', correct: true },
                    { de: 'der Bundesratspräsident / die Bundesratspräsidentin', ru: 'президент Бундесрата' },
                    { de: 'der Bundestagspräsident / die Bundestagspräsidentin', ru: 'президент Бундестага' }
                ],
                explanation: {
                    de: 'Der Bundespräsident / die Bundespräsidentin ist das Staatsoberhaupt der Bundesrepublik Deutschland.',
                    ru: 'Федеральный президент является главой государства в Федеративной Республике Германия.'
                }
            },
            {
                question: {
                    de: 'Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, ...',
                    ru: 'Если депутаты Бундестага Германии меняют свою фракцию, ...'
                },
                options: [
                    { de: 'kann die Regierung ihre Mehrheit verlieren.', ru: 'правительство может потерять свое большинство.', correct: true },
                    { de: 'dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.', ru: 'они больше не могут участвовать в заседаниях парламента.' },
                    { de: 'muss der Bundespräsident / die Bundespräsidentin zuvor sein / ihr Einverständnis geben.', ru: 'федеральный президент должен предварительно дать свое согласие.' },
                    { de: 'dürfen die Wähler / Wählerinnen dieser Abgeordneten noch einmal wählen.', ru: 'этих депутатов могут снова избирать избиратели.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung CDU in Deutschland?',
                    ru: 'Что означает аббревиатура CDU в Германии?'
                },
                options: [
                    { de: 'Christliche Deutsche Union', ru: 'Христианский немецкий союз' },
                    { de: 'Club Deutscher Unternehmer', ru: 'Клуб немецких предпринимателей' },
                    { de: 'Christlicher Deutscher Umweltschutz', ru: 'Христианская немецкая защита окружающей среды' },
                    { de: 'Christlich Demokratische Union', ru: 'Христианско-демократический союз', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wer bezahlt in Deutschland die Sozialversicherungen?',
                    ru: 'Кто оплачивает социальное страхование в Германии?'
                },
                options: [
                    { de: 'Arbeitgeber / Arbeitgeberinnen und Arbeitnehmer / Arbeitnehmerinnen', ru: 'работодатели и работники', correct: true },
                    { de: 'nur Arbeitnehmer / Arbeitnehmerinnen', ru: 'только работники' },
                    { de: 'alle Staatsangehörigen', ru: 'все граждане' },
                    { de: 'nur Arbeitgeber / Arbeitgeberinnen', ru: 'только работодатели' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung CSU in Deutschland?',
                    ru: 'Что означает аббревиатура CSU в Германии?'
                },
                options: [
                    { de: 'Christlich Sichere Union', ru: 'Христианский безопасный союз' },
                    { de: 'Christlich Süddeutsche Union', ru: 'Христианский южнонемецкий союз' },
                    { de: 'Christlich Sozialer Unternehmerverband', ru: 'Христианский социальный союз предпринимателей' },
                    { de: 'Christlich Soziale Union', ru: 'Христианско-социальный союз', correct: true }
                ]
            },
            {
                question: {
                    de: 'Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?',
                    ru: 'С какого возраста можно участвовать в выборах в Бундестаг Германии?'
                },
                options: [
                    { de: '16', ru: '16' },
                    { de: '18', ru: '18', correct: true },
                    { de: '21', ru: '21' },
                    { de: '23', ru: '23' }
                ]
            },
            {
                question: {
                    de: 'Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?',
                    ru: 'Какая задача в Германии в первую очередь возложена на федеральные земли?'
                },
                options: [
                    { de: 'Verteidigungspolitik', ru: 'политика обороны' },
                    { de: 'Außenpolitik', ru: 'внешняя политика' },
                    { de: 'Wirtschaftspolitik', ru: 'экономическая политика' },
                    { de: 'Schulpolitik', ru: 'школьная политика', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung SPD?',
                    ru: 'Что означает аббревиатура SPD?'
                },
                options: [
                    { de: 'Sozialistische Partei Deutschlands', ru: 'Социалистическая партия Германии' },
                    { de: 'Sozialpolitische Partei Deutschlands', ru: 'Социально-политическая партия Германии' },
                    { de: 'Sozialdemokratische Partei Deutschlands', ru: 'Социал-демократическая партия Германии', correct: true },
                    { de: 'Sozialgerechte Partei Deutschlands', ru: 'Социально-справедливая партия Германии' }
                ]
            },
            {
                question: {
                    de: 'Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit ...',
                    ru: 'На данный момент две крупнейшие фракции в Бундестаге Германии называются ...'
                },
                options: [
                    { de: 'CDU/CSU und SPD.', ru: 'ХДС/ХСС и СДПГ.', correct: true },
                    { de: 'Die Linke und Bündnis 90/Die Grünen.', ru: 'Левые и Союз 90/Зеленые.' },
                    { de: 'FDP und SPD.', ru: 'СвДП и СДПГ.' },
                    { de: 'Die Linke und FDP.', ru: 'Левые и СвДП.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung FDP in Deutschland?',
                    ru: 'Что означает аббревиатура FDP в Германии?'
                },
                options: [
                    { de: 'Friedliche Demonstrative Partei', ru: 'Мирная Демонстративная Партия' },
                    { de: 'Freie Deutschland Partei', ru: 'Партия Свободной Германии' },
                    { de: 'Führende Demokratische Partei', ru: 'Ведущая Демократическая Партия' },
                    { de: 'Freie Demokratische Partei', ru: 'Свободная Демократическая Партия', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was ist die Bundeswehr?',
                    ru: 'Что такое Бундесвер?'
                },
                options: [
                    { de: 'die deutsche Polizei', ru: 'немецкая полиция' },
                    { de: 'ein deutscher Hafen', ru: 'немецкий порт' },
                    { de: 'eine deutsche Bürgerinitiative', ru: 'немецкая гражданская инициатива' },
                    { de: 'die deutsche Armee', ru: 'немецкая армия', correct: true }
                ]
            },
            {
                question: {
                    de: 'Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch ...',
                    ru: 'Германские федеральные земли участвуют в законодательстве через ...'
                },
                options: [
                    { de: 'die Bundesversammlung', ru: 'Федеральное собрание' },
                    { de: 'den Bundestag', ru: 'Бундестаг' },
                    { de: 'die Bundesregierung', ru: 'Федеральное правительство' },
                    { de: 'den Bundesrat', ru: 'Бундесрат', correct: true }
                ],
                explanation: {
                    de: 'Der Bundesrat ist ein Verfassungsorgan der Bundesrepublik Deutschland und besteht aus Mitgliedern der Landesregierungen aller Bundesländer. Damit wirken die Bundesländer an der Gesetzgebung des Bundes mit.',
                    ru: 'Бундесрат является конституционным органом Федеративной Республики Германия и состоит из членов правительств всех федеральных земель. Таким образом, федеральные земли участвуют в законодательстве.'
                }
            },
            {
                question: {
                    de: 'Was gilt für die meisten Kinder in Deutschland?',
                    ru: 'Что действует для большинства детей в Германии?'
                },
                options: [
                    { de: 'Wahlpflicht', ru: 'обязанность голосовать' },
                    { de: 'Schulpflicht', ru: 'обязанность посещать школу', correct: true },
                    { de: 'Schweigepflicht', ru: 'обязанность хранить молчание' },
                    { de: 'Religionspflicht', ru: 'обязанность религиозного образования' }
                ]
            },
            {
                question: {
                    de: 'Wie nennt man den Regierungschef / die Regierungschefin der Bundesrepublik Deutschland?',
                    ru: 'Как называют главу правительства Федеративной Республики Германия?'
                },
                options: [
                    { de: 'Premierminister / Premierministerin', ru: 'премьер-министр' },
                    { de: 'Bundespräsident / Bundespräsidentin', ru: 'федеральный президент' },
                    { de: 'Bundeskanzler / Bundeskanzlerin', ru: 'федеральный канцлер', correct: true },
                    { de: 'Ministerpräsident / Ministerpräsidentin', ru: 'министр-президент' }
                ],
                explanation: {
                    de: 'Die Regierung bzw. das Bundeskabinett besteht aus dem Bundeskanzler und den Bundesministern. Der Chef der Regierung ist damit der Bundeskanzler / die Bundeskanzlerin.',
                    ru: 'Правительство или федеральный кабинет состоит из федерального канцлера и федеральных министров. Главой правительства является федеральный канцлер.'
                }
            },
            {
                question: {
                    de: 'Wo hält sich der deutsche Bundeskanzler / die deutsche Bundeskanzlerin am häufigsten auf? Am häufigsten ist er / sie …',
                    ru: 'Где чаще всего находится немецкий федеральный канцлер? Чаще всего он/она ...'
                },
                options: [
                    { de: 'in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.', ru: 'в Бонне, так как там находятся федеральная канцелярия и Бундестаг.' },
                    { de: 'in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.', ru: 'в Берлине, так как там находятся федеральная канцелярия и Бундестаг.', correct: true },
                    { de: 'auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.', ru: 'в замке Мезеберг, гостевом доме федерального правительства, чтобы принимать государственных гостей.' },
                    { de: 'auf Schloss Bellevue, dem Amtssitz des Bundespräsidenten / der Bundespräsidentin, um Staatsgäste zu empfangen.', ru: 'в замке Беллевю, резиденции федерального президента, чтобы принимать государственных гостей.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung CSU in Deutschland?',
                    ru: 'Что означает аббревиатура CSU в Германии?'
                },
                options: [
                    { de: 'Christlich Sichere Union', ru: 'Христианский безопасный союз' },
                    { de: 'Christlich Süddeutsche Union', ru: 'Христианский южно-немецкий союз' },
                    { de: 'Christlich Sozialer Unternehmerverband', ru: 'Христианская социальная ассоциация предпринимателей' },
                    { de: 'Christlich Soziale Union', ru: 'Христианско-социальный союз', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie heißt das Parlament für ganz Deutschland?',
                    ru: 'Как называется парламент всей Германии?'
                },
                options: [
                    { de: 'Bundesversammlung', ru: 'Федеральное собрание' },
                    { de: 'Volkskammer', ru: 'Народная палата' },
                    { de: 'Bundestag', ru: 'Бундестаг', correct: true },
                    { de: 'Bundesgerichtshof', ru: 'Федеральный верховный суд' }
                ]
            },
            {
                question: {
                    de: 'Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?',
                    ru: 'Какой суд в Германии отвечает за толкование Основного закона?'
                },
                options: [
                    { de: 'Oberlandesgericht', ru: 'Высший земельный суд' },
                    { de: 'Amtsgericht', ru: 'Участковый суд' },
                    { de: 'Bundesverfassungsgericht', ru: 'Федеральный конституционный суд', correct: true },
                    { de: 'Verwaltungsgericht', ru: 'Административный суд' }
                ],
                explanation: {
                    de: 'Das Bundesverfassungsgericht (BVerfG) wacht über die Einhaltung des Grundgesetzes der Bundesrepublik Deutschland. Es überprüft ob Gesetze und Urteile verfassungskonform sind und weist sie ggf. an die entsprechenden Instanzen zur erneuten Prüfung zurück.',
                    ru: 'Федеральный конституционный суд (BVerfG) следит за соблюдением Основного закона Федеративной Республики Германия. Он проверяет, соответствуют ли законы и приговоры конституции, и при необходимости направляет их в соответствующие инстанции для повторной проверки.'
                }
            },
            {
                question: {
                    de: 'Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?',
                    ru: 'Как называют в Германии объединение депутатов одной партии в парламенте?'
                },
                options: [
                    { de: 'Verband', ru: 'союз' },
                    { de: 'Ältestenrat', ru: 'совет старейшин' },
                    { de: 'Fraktion', ru: 'фракция', correct: true },
                    { de: 'Opposition', ru: 'оппозиция' }
                ]
            },
            {
                question: {
                    de: 'Wer wählt den Bundeskanzler / die Bundeskanzlerin in Deutschland?',
                    ru: 'Кто выбирает Федерального канцлера в Германии?'
                },
                options: [
                    { de: 'der Bundesrat', ru: 'Федеральный совет' },
                    { de: 'die Bundesversammlung', ru: 'Федеральное собрание' },
                    { de: 'das Volk', ru: 'Народ' },
                    { de: 'der Bundestag', ru: 'Бундестаг', correct: true }
                ],
                explanation: {
                    de: 'Der Bundeskanzler wird vom Bundestag gewählt. Der Bundestag wiederum wird vom Volk gewählt. Der Bundesrat ist eine Vertretung einer Landesregierung, um die Interessen des jeweiligen Bundeslandes auf Bundesebene zu vertreten. Die Bundesversammlung wählt den Bundespräsidenten.',
                    ru: 'Федерального канцлера выбирает Бундестаг. Бундестаг, в свою очередь, выбирается народом. Федеральный совет представляет правительство земель для защиты интересов соответствующих земель на федеральном уровне. Федеральное собрание выбирает Федерального президента.'
                }
            },
            {
                question: {
                    de: 'Welche Hauptaufgabe hat der deutsche Bundespräsident / die deutsche Bundespräsidentin? Er / Sie ...',
                    ru: 'Какова основная задача Федерального президента Германии? Он / Она ...'
                },
                options: [
                    { de: 'regiert das Land.', ru: 'управляет страной' },
                    { de: 'entwirft die Gesetze.', ru: 'разрабатывает законы' },
                    { de: 'repräsentiert das Land.', ru: 'представляет страну', correct: true },
                    { de: 'überwacht die Einhaltung der Gesetze.', ru: 'контролирует соблюдение законов' }
                ],
                explanation: {
                    de: 'Der deutsche Bundespräsident / die deutsche Bundespräsidentin hat eine repräsentative Rolle und repräsentiert damit das Land.',
                    ru: 'Федеральный президент Германии выполняет представительскую роль и представляет страну.'
                }
            },
            {
                question: {
                    de: 'Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?',
                    ru: 'Федеративная Республика Германия имеет трехуровневую административную структуру. Как называется нижний политический уровень?'
                },
                options: [
                    { de: 'Stadträte', ru: 'Городские советы' },
                    { de: 'Landräte', ru: 'Районные советы' },
                    { de: 'Gemeinden', ru: 'Общины', correct: true },
                    { de: 'Bezirksämter', ru: 'Районные управления' }
                ]
            },
            {
                question: {
                    de: 'Was muss jeder deutsche Staatsbürger / jede deutsche Staatsbürgerin ab dem 16. Lebensjahr besitzen?',
                    ru: 'Что должен иметь каждый гражданин Германии с 16 лет?'
                },
                options: [
                    { de: 'einen Reisepass', ru: 'Заграничный паспорт' },
                    { de: 'einen Personalausweis', ru: 'Удостоверение личности', correct: true },
                    { de: 'einen Sozialversicherungsausweis', ru: 'Социальное страховое свидетельство' },
                    { de: 'einen Führerschein', ru: 'Водительские права' }
                ]
            },
            {
                question: {
                    de: 'Wie heißt Deutschlands heutiges Staatsoberhaupt?',
                    ru: 'Как зовут нынешнего главу государства Германии?'
                },
                options: [
                    { de: 'Frank-Walter Steinmeier', ru: 'Франк-Вальтер Штайнмайер', correct: true },
                    { de: 'Joachim Gauck', ru: 'Йоахим Гаук' },
                    { de: 'Norbert Lammert', ru: 'Норберт Ламмерт' },
                    { de: 'Wolfgang Thierse', ru: 'Вольфганг Тирзе' }
                ],
                explanation: {
                    de: 'Der derzeitige (zwölfte) Bundespräsident der Bundesrepublik Deutschland Frank-Walter Steinmeier wurde am 22. März 2017 im Deutschen Bundestag als Bundespräsident vereidigt, nachdem er am 12. Februar 2017 von der Bundesversammlung gewählt wurde.',
                    ru: 'Нынешний (двенадцатый) федеральный президент Федеративной Республики Германия Франк-Вальтер Штайнмайер был приведен к присяге 22 марта 2017 года в Бундестаге, после того как он был избран Федеральным собранием 12 февраля 2017 года.'
                }
            },
            {
                question: {
                    de: 'Je mehr „Zweitstimmen“ eine Partei bei einer Bundestagswahl bekommt, desto …',
                    ru: 'Чем больше «вторых голосов» получает партия на выборах в Бундестаг, тем …'
                },
                options: [
                    { de: 'weniger Erststimmen kann sie haben.', ru: 'меньше первых голосов она может получить' },
                    { de: 'mehr Direktkandidaten der Partei ziehen ins Parlament ein.', ru: 'больше кандидатов от партии проходят в парламент напрямую' },
                    { de: 'größer ist das Risiko, eine Koalition bilden zu müssen.', ru: 'выше риск необходимости формирования коалиции' },
                    { de: 'mehr Sitze erhält die Partei im Parlament.', ru: 'больше мест партия получит в парламенте', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie heißt der jetzige Bundeskanzler / die jetzige Bundeskanzlerin von Deutschland?',
                    ru: 'Как зовут нынешнего Федерального канцлера Германии?'
                },
                options: [
                    { de: 'Gerhard Schröder', ru: 'Герхард Шредер' },
                    { de: 'Jürgen Rüttgers', ru: 'Юрген Рюттгерс' },
                    { de: 'Klaus Wowereit', ru: 'Клаус Воверайт' },
                    { de: 'Olaf Scholz', ru: 'Олаф Шольц', correct: true }
                ]
            },
            {
                question: {
                    de: 'In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …',
                    ru: 'В Германии смена правительства в одной из федеральных земель может повлиять на федеральную политику. Управление становится …'
                },
                options: [
                    { de: 'schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.', ru: 'труднее, если из-за этого изменится большинство в Бундестаге' },
                    { de: 'leichter, wenn dadurch neue Parteien in den Bundesrat kommen.', ru: 'легче, если новые партии войдут в Федеральный совет' },
                    { de: 'schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.', ru: 'труднее, если из-за этого изменится большинство в Федеральном совете', correct: true },
                    { de: 'leichter, wenn es sich um ein reiches Bundesland handelt.', ru: 'легче, если это богатая федеральная земля' }
                ],
                explanation: {
                    de: 'Die Vertretung der Landesregierung auf der Bundesebene ist der Bundesrat. Durch den Regierungswechsel in einem Bundesland können die Mehrheitsverhältnisse im Bundesrat sich verändern. Dadurch kann das Regieren schwieriger werden. Durch größere Anzahl der Parteienvertreter im Bundesrat kann das Regieren wahrscheinlich nicht leichter werden.',
                    ru: 'Представительством правительств земель на федеральном уровне является Федеральный совет. Смена правительства в одной из земель может изменить соотношение большинства в Федеральном совете. Это может усложнить управление. Увеличение числа представителей партий в Федеральном совете вряд ли облегчит управление.'
                }
            },
            {
                question: {
                    de: 'Warum kontrolliert der Staat in Deutschland das Schulwesen?',
                    ru: 'Почему государство в Германии контролирует школьную систему?'
                },
                options: [
                    { de: 'weil es in Deutschland nur staatliche Schulen gibt', ru: 'потому что в Германии есть только государственные школы' },
                    { de: 'weil alle Schüler und Schülerinnen einen Schulabschluss haben müssen', ru: 'потому что все ученики должны получить аттестат' },
                    { de: 'weil es in den Bundesländern verschiedene Schulen gibt', ru: 'потому что в федеральных землях есть разные школы' },
                    { de: 'weil es nach dem Grundgesetz seine Aufgabe ist', ru: 'потому что это его обязанность по Основному закону', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?',
                    ru: 'Что в Германии платят автоматически, если вы работаете по найму?'
                },
                options: [
                    { de: 'Sozialversicherung', ru: 'Социальное страхование', correct: true },
                    { de: 'Sozialhilfe', ru: 'Социальная помощь' },
                    { de: 'Kindergeld', ru: 'Детские пособия' },
                    { de: 'Wohngeld', ru: 'Жилищное пособие' }
                ]
            },
            {
                question: {
                    de: 'Wer wählt den deutschen Bundeskanzler / die deutsche Bundeskanzlerin?',
                    ru: 'Кто выбирает федерального канцлера Германии?'
                },
                options: [
                    { de: 'das Volk', ru: 'народ' },
                    { de: 'die Bundesversammlung', ru: 'федеральное собрание' },
                    { de: 'der Bundestag', ru: 'Бундестаг', correct: true },
                    { de: 'die Bundesregierung', ru: 'правительство' }
                ]
            },
            {
                question: {
                    de: 'Wer bildet den deutschen Bundesrat?',
                    ru: 'Кто формирует Бундесрат Германии?'
                },
                options: [
                    { de: 'die Abgeordneten des Bundestages', ru: 'депутаты Бундестага' },
                    { de: 'die Minister und Ministerinnen der Bundesregierung', ru: 'министры правительства' },
                    { de: 'die Regierungsvertreter der Bundesländer', ru: 'представители правительств земель', correct: true },
                    { de: 'die Parteimitglieder', ru: 'члены партии' }
                ],
                explanation: {
                    de: 'Der Bundesrat besteht aus Vertretern der einzelnen Landesregierungen. Damit sind sie weder Abgeordnete des Bundestages, noch Minister und Ministerinnen der Bundesregierung. Ebenso müssen die Mitglieder des Bundesrats nicht zwingend einer Partei angehören.',
                    ru: 'Бундесрат состоит из представителей отдельных земельных правительств. Таким образом, они не являются ни депутатами Бундестага, ни министрами федерального правительства. Члены Бундесрата также не обязательно должны принадлежать к какой-либо партии.'
                }
            },
            {
                question: {
                    de: 'Die parlamentarische Opposition im Deutschen Bundestag ...',
                    ru: 'Парламентская оппозиция в Бундестаге Германии ...'
                },
                options: [
                    { de: 'kontrolliert die Regierung.', ru: 'контролирует правительство', correct: true },
                    { de: 'entscheidet, wer Bundesminister / Bundesministerin wird.', ru: 'решает, кто станет федеральным министром' },
                    { de: 'bestimmt, wer im Bundesrat sitzt.', ru: 'определяет, кто будет заседать в Бундесрате' },
                    { de: 'schlägt die Regierungschefs / Regierungschefinnen der Länder vor.', ru: 'предлагает глав правительств земель' }
                ]
            },
            // Вариант 4
            {
                question: {
                    de: 'Was wird in Deutschland als „Ampelkoalition“ bezeichnet? Die Zusammenarbeit ...',
                    ru: 'Что в Германии называется «светофорной коалицией»? Сотрудничество ...'
                },
                options: [
                    { de: 'der Bundestagsfraktionen von CDU und CSU', ru: 'фракций ХДС и ХСС в Бундестаге' },
                    { de: 'von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung', ru: 'СДПГ, СвДП и Союз 90/Зеленые в правительстве', correct: true },
                    { de: 'von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung', ru: 'ХСС, Левые и Союз 90/Зеленые в правительстве' },
                    { de: 'der Bundestagsfraktionen von CDU und SPD', ru: 'фракций ХДС и СДПГ в Бундестаге' }
                ]
            },
            {
                question: {
                    de: 'Für wie viele Jahre wird der Bundestag in Deutschland gewählt?',
                    ru: 'На сколько лет избирается Бундестаг в Германии?'
                },
                options: [
                    { de: '2 Jahre', ru: '2 года' },
                    { de: '4 Jahre', ru: '4 года', correct: true },
                    { de: '6 Jahre', ru: '6 лет' },
                    { de: '8 Jahre', ru: '8 лет' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den Wahlen. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?',
                    ru: 'В Германии волонтеры помогают на выборах. Какова задача избирательных помощников?'
                },
                options: [
                    { de: 'Sie helfen Kindern und alten Menschen beim Wählen.', ru: 'Они помогают детям и пожилым людям голосовать.' },
                    { de: 'Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.', ru: 'Они пишут открытки и письма с указанием избирательного участка.' },
                    { de: 'Sie geben Zwischenergebnisse an Journalisten weiter.', ru: 'Они передают промежуточные результаты журналистам.' },
                    { de: 'Sie zählen die Stimmen nach dem Ende der Wahl.', ru: 'Они считают голоса после завершения выборов.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen in Deutschland?',
                    ru: 'Какова задача избирательных помощников в Германии?'
                },
                options: [
                    { de: 'Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.', ru: 'Они помогают пожилым людям голосовать в кабинке для голосования.' },
                    { de: 'Sie schreiben die Wahlbenachrichtigungen vor der Wahl.', ru: 'Они пишут уведомления о выборах до выборов.' },
                    { de: 'Sie geben Zwischenergebnisse an die Medien weiter.', ru: 'Они передают промежуточные результаты средствам массовой информации.' },
                    { de: 'Sie zählen die Stimmen nach dem Ende der Wahl.', ru: 'Они считают голоса после завершения выборов.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bekommen wahlberechtigte Bürger und Bürgerinnen in Deutschland vor einer Wahl?',
                    ru: 'Что получают имеющие право голоса граждане Германии перед выборами?'
                },
                options: [
                    { de: 'eine Wahlerlaubnis vom Bundespräsidenten / von der Bundespräsidentin', ru: 'разрешение на голосование от федерального президента' },
                    { de: 'eine Wahlbenachrichtigung von der Gemeinde', ru: 'уведомление о выборах от общины', correct: true },
                    { de: 'eine Benachrichtigung von der Bundesversammlung', ru: 'уведомление от федерального собрания' },
                    { de: 'eine Benachrichtigung vom Pfarramt', ru: 'уведомление от приходского управления' }
                ]
            },
            {
                question: {
                    de: 'Bei einer Bundestagswahl in Deutschland darf jeder wählen, der ...',
                    ru: 'На выборах в Бундестаг в Германии может голосовать каждый, кто ...'
                },
                options: [
                    { de: 'in der Bundesrepublik Deutschland wohnt und wählen möchte.', ru: 'живет в Германии и хочет голосовать.' },
                    { de: 'Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.', ru: 'является гражданином Германии и ему не менее 18 лет.', correct: true },
                    { de: 'seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.', ru: 'проживает в Германии не менее 3 лет.' },
                    { de: 'Bürger / Bürgerin der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.', ru: 'является гражданином Германии и ему не менее 21 года.' }
                ]
            },
            {
                question: {
                    de: 'Die Bundestagswahl in Deutschland ist die Wahl ...',
                    ru: 'Выборы в Бундестаг в Германии — это выборы ...'
                },
                options: [
                    { de: 'des Bundeskanzlers / der Bundeskanzlerin.', ru: 'федерального канцлера.' },
                    { de: 'der Parlamente der Länder.', ru: 'парламентов земель.' },
                    { de: 'des Parlaments für Deutschland.', ru: 'парламента Германии.', correct: true },
                    { de: 'des Bundespräsidenten / der Bundespräsidentin.', ru: 'федерального президента.' }
                ]
            },
            {
                question: {
                    de: 'Warum gibt es die 5 %-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil ...',
                    ru: 'Почему существует 5%-й барьер в избирательном законодательстве Германии? Он существует потому, что ...'
                },
                options: [
                    { de: 'die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.', ru: 'программы многих мелких партий имеют много общего.' },
                    { de: 'die Bürger und Bürgerinnen bei vielen kleinen Parteien die Orientierung verlieren können.', ru: 'граждане могут потерять ориентиры при наличии множества мелких партий.' },
                    { de: 'viele kleine Parteien die Regierungsbildung erschweren.', ru: 'множество мелких партий усложняют формирование правительства.', correct: true },
                    { de: 'die kleinen Parteien nicht so viel Geld haben, um die Politiker und Politikerinnen zu bezahlen.', ru: 'у мелких партий недостаточно средств для оплаты политиков.' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland ist ein Bürgermeister / eine Bürgermeisterin ...',
                    ru: 'В Германии мэр — это ...'
                },
                options: [
                    { de: 'der Leiter / die Leiterin einer Schule.', ru: 'руководитель школы.' },
                    { de: 'der Chef / die Chefin einer Bank.', ru: 'руководитель банка.' },
                    { de: 'das Oberhaupt einer Gemeinde.', ru: 'глава общины.', correct: true },
                    { de: 'der / die Vorsitzende einer Partei.', ru: 'председатель партии.' }
                ]
            },
            {
                question: {
                    de: 'Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?',
                    ru: 'Женщина в Германии теряет работу. Какой из этих причин не может быть основанием для увольнения?'
                },
                options: [
                    { de: 'Die Frau ist lange krank und arbeitsunfähig.', ru: 'Женщина долго болеет и не может работать.' },
                    { de: 'Die Frau kam oft zu spät zur Arbeit.', ru: 'Женщина часто опаздывала на работу.' },
                    { de: 'Die Frau erledigt private Sachen während der Arbeitszeit.', ru: 'Женщина занималась личными делами во время рабочего времени.' },
                    { de: 'Die Frau bekommt ein Kind und ihr Chef weiß das.', ru: 'Женщина беременна, и ее начальник знает об этом.', correct: true }
                ]
            },
            {
                question: {
                    de: 'In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, ...',
                    ru: 'В демократии функция регулярных выборов заключается в ...'
                },
                options: [
                    { de: 'die Bürger und Bürgerinnen zu zwingen, ihre Stimme abzugeben.', ru: 'заставить граждан голосовать.' },
                    { de: 'nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.', ru: 'обеспечить смену правительства по воле большинства избирателей.', correct: true },
                    { de: 'im Land bestehende Gesetze beizubehalten.', ru: 'сохранение существующих законов в стране.' },
                    { de: 'den Armen mehr Macht zu geben.', ru: 'дать больше власти бедным.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet „aktives Wahlrecht“ in Deutschland?',
                    ru: 'Что означает «активное избирательное право» в Германии?'
                },
                options: [
                    { de: 'Man kann gewählt werden.', ru: 'Можно быть избранным.' },
                    { de: 'Man muss wählen gehen.', ru: 'Необходимо идти на выборы.' },
                    { de: 'Man kann wählen.', ru: 'Можно голосовать.', correct: true },
                    { de: 'Man muss zur Auszählung der Stimmen gehen.', ru: 'Необходимо участвовать в подсчете голосов.' }
                ]
            },
            {
                question: {
                    de: 'Die Wahlen in Deutschland sind ...',
                    ru: 'Выборы в Германии ...'
                },
                options: [
                    { de: 'speziell.', ru: 'специальные.' },
                    { de: 'geheim.', ru: 'тайные.', correct: true },
                    { de: 'berufsbezogen.', ru: 'связаны с профессией.' },
                    { de: 'geschlechtsabhängig.', ru: 'зависят от пола.' }
                ]
            },
            {
                question: {
                    de: 'Was wird in Deutschland als „Ampelkoalition“ bezeichnet? Die Zusammenarbeit ...',
                    ru: 'Что в Германии называется «светофорной коалицией»? Сотрудничество ...'
                },
                options: [
                    { de: 'der Bundestagsfraktionen von CDU und CSU', ru: 'фракций ХДС и ХСС в Бундестаге' },
                    { de: 'von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung', ru: 'СДПГ, СвДП и Союз 90/Зеленые в правительстве', correct: true },
                    { de: 'von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung', ru: 'ХСС, Левые и Союз 90/Зеленые в правительстве' },
                    { de: 'der Bundestagsfraktionen von CDU und SPD', ru: 'фракций ХДС и СДПГ в Бундестаге' }
                ]
            },
            {
                question: {
                    de: 'Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem ...',
                    ru: 'Чем можно быть награжденным в Федеративной Республике Германия за выдающиеся достижения в политической, экономической, культурной, интеллектуальной или социальной сфере? С ...'
                },
                options: [
                    { de: 'Bundesadler', ru: 'Федеральный орел' },
                    { de: 'Bundesverdienstkreuz', ru: 'Крест за заслуги перед Федеративной Республикой Германия', correct: true },
                    { de: 'Vaterländischen Verdienstorden', ru: 'Отечественный орден за заслуги' },
                    { de: 'Ehrentitel „Held der Deutschen Demokratischen Republik“', ru: 'Почетное звание «Герой Германской Демократической Республики»' }
                ]
            },
            {
                question: {
                    de: 'Das Wahlsystem in Deutschland ist ein ...',
                    ru: 'Избирательная система в Германии - это ...'
                },
                options: [
                    { de: 'Zensuswahlrecht.', ru: 'цензовое избирательное право.' },
                    { de: 'Dreiklassenwahlrecht.', ru: 'трехклассовая избирательная система.' },
                    { de: 'Mehrheits- und Verhältniswahlrecht.', ru: 'мажоритарная и пропорциональная избирательная система.', correct: true },
                    { de: 'allgemeines Männerwahlrecht.', ru: 'всеобщее мужское избирательное право.' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland darf man wählen. Was bedeutet das?',
                    ru: 'В Германии можно голосовать. Что это значит?'
                },
                options: [
                    { de: 'Alle deutschen Staatsangehörigen dürfen wählen, wenn sie das Mindestalter erreicht haben.', ru: 'Все граждане Германии могут голосовать, если они достигли минимального возраста.', correct: true },
                    { de: 'Nur verheiratete Personen dürfen wählen.', ru: 'Голосовать могут только женатые/замужние лица.' },
                    { de: 'Nur Personen mit einem festen Arbeitsplatz dürfen wählen.', ru: 'Голосовать могут только лица с постоянным местом работы.' },
                    { de: 'Alle Einwohner und Einwohnerinnen in Deutschland müssen wählen.', ru: 'Все жители Германии обязаны голосовать.' }
                ]
            },
            {
                question: {
                    de: 'Gewerkschaften sind Interessenverbände der …',
                    ru: 'Профсоюзы - это ассоциации интересов …'
                },
                options: [
                    { de: 'Jugendlichen.', ru: 'молодежи.' },
                    { de: 'Arbeitnehmer und Arbeitnehmerinnen.', ru: 'работников и работниц.', correct: true },
                    { de: 'Rentner und Rentnerinnen.', ru: 'пенсионеров и пенсионерок.' },
                    { de: 'Arbeitgeber und Arbeitgeberinnen.', ru: 'работодателей и работодательниц.' }
                ]
            },
            {
                question: {
                    de: 'Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?',
                    ru: 'Многие люди в Германии работают на добровольных началах в свободное время. Что это значит?'
                },
                options: [
                    { de: 'Sie arbeiten als Soldaten / Soldatinnen.', ru: 'Они работают как солдаты / солдатки.' },
                    { de: 'Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.', ru: 'Они добровольно и без оплаты работают в клубах и ассоциациях.', correct: true },
                    { de: 'Sie arbeiten in der Bundesregierung.', ru: 'Они работают в федеральном правительстве.' },
                    { de: 'Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.', ru: 'Они работают в больнице и зарабатывают деньги.' }
                ]
            },
            {
                question: {
                    de: 'Vom Volk gewählt wird in Deutschland …',
                    ru: 'В Германии избирается народом ...'
                },
                options: [
                    { de: 'der Bundeskanzler / die Bundeskanzlerin.', ru: 'федеральный канцлер.' },
                    { de: 'der Ministerpräsident / die Ministerpräsidentin eines Bundeslandes.', ru: 'министр-президент федеральной земли.' },
                    { de: 'der Bundestag.', ru: 'бундестаг.', correct: true },
                    { de: 'der Bundespräsident / die Bundespräsidentin.', ru: 'федеральный президент.' }
                ],
                explanation: {
                    de: 'In Deutschland wird vom Volk nur der Bundestag gewählt. Der Bundeskanzler wird vom Bundestag gewählt. Der Ministerpräsident eines Bundeslandes wird vom jeweiligen Landesparlament gewählt. Der Bundespräsident wird der Bundesversammlung für fünf Jahre gewählt.',
                    ru: 'В Германии народом избирается только Бундестаг. Федеральный канцлер избирается Бундестагом. Министр-президент федеральной земли избирается соответствующим земельным парламентом. Федеральный президент избирается Федеральным собранием сроком на пять лет.'
                }
            },
            {
                question: {
                    de: 'Parlamentsmitglieder, die von den Bürgern und Bürgerinnen gewählt werden, nennt man …',
                    ru: 'Членов парламента, которых выбирают граждане, называют …'
                },
                options: [
                    { de: 'Abgeordnete', ru: 'депутаты', correct: true },
                    { de: 'Kanzler / Kanzlerinnen', ru: 'канцлеры' },
                    { de: 'Botschafter / Botschafterinnen', ru: 'послы' },
                    { de: 'Ministerpräsidenten / Ministerpräsidentinnen', ru: 'премьер-министры' }
                ],
                explanation: {
                    de: 'Die Mitglieder des Parlaments (Bundestag) werden als (Bundestags-)Abgeordnete bezeichnet.',
                    ru: 'Членов парламента (Бундестага) называют депутатами (депутатами Бундестага).'
                }
            },
            {
                question: {
                    de: 'Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …',
                    ru: 'Партия хочет попасть в Бундестаг. Однако ей нужно набрать минимальный процент голосов избирателей. Это называется …'
                },
                options: [
                    { de: '5 %-Hürde', ru: '5 %-барьер', correct: true },
                    { de: 'Zulassungsgrenze', ru: 'допустимый предел' },
                    { de: 'Basiswert', ru: 'базовая величина' },
                    { de: 'Richtlinie', ru: 'директива' }
                ],
                explanation: {
                    de: 'Die Fünf-Prozent-Hürde soll eine Zersplitterung des Parlaments (Bundestag) durch sehr viele kleine Parteien verhindern. Um im Parlament vertreten zu sein, muss eine Partei bei der Bundestagswahl in Deutschland mindestens 5% der Wählerstimmen gewinnen.',
                    ru: 'Пятипроцентный барьер предназначен для предотвращения раздробления парламента (Бундестага) из-за большого количества мелких партий. Чтобы быть представленным в парламенте, партия должна на выборах в Бундестаг в Германии получить не менее 5% голосов избирателей.'
                }
            },
            {
                question: {
                    de: 'Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?',
                    ru: 'Как часто проходят выборы в Бундестаг в Германии?'
                },
                options: [
                    { de: 'alle drei Jahre', ru: 'каждые три года' },
                    { de: 'alle vier Jahre', ru: 'каждые четыре года', correct: true },
                    { de: 'alle fünf Jahre', ru: 'каждые пять лет' },
                    { de: 'alle sechs Jahre', ru: 'каждые шесть лет' }
                ]
            },
            {
                question: {
                    de: 'An demokratischen Wahlen in Deutschland teilzunehmen ist …',
                    ru: 'Участие в демократических выборах в Германии является …'
                },
                options: [
                    { de: 'eine Pflicht.', ru: 'обязанностью' },
                    { de: 'ein Recht.', ru: 'правом', correct: true },
                    { de: 'ein Zwang.', ru: 'принуждением' },
                    { de: 'eine Last.', ru: 'бременем' }
                ]
            },
            {
                question: {
                    de: 'Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …',
                    ru: 'Каким принципам подчиняются выборы в Германии? Выборы в Германии …'
                },
                options: [
                    { de: 'frei, gleich, geheim.', ru: 'свободные, равные, тайные', correct: true },
                    { de: 'offen, sicher, frei.', ru: 'открытые, безопасные, свободные' },
                    { de: 'geschlossen, gleich, sicher.', ru: 'закрытые, равные, безопасные' },
                    { de: 'sicher, offen, freiwillig.', ru: 'безопасные, открытые, добровольные' }
                ],
                explanation: {
                    de: 'Die Wahlen in Deutschland sind u.a. frei, gleich, geheim, das bedeutet: frei: jeder nimmt an der Wahl freiwillig teil, ohne Druck, Verpflichtung oder Strafen, gleich: jede Stimme zählt gleich viel, geheim: die Stimmabgabe erfolgt in der Art, dass niemand nachvollziehen kann wie ein Anderer abgestimmt hat. Geregelt wird das im Artikel 38 des Grundgesetzes.',
                    ru: 'Выборы в Германии, среди прочего, свободные, равные, тайные, что означает: свободные: каждый участвует в выборах добровольно, без давления, обязательств или наказаний, равные: каждый голос имеет одинаковую силу, тайные: голосование проводится таким образом, что никто не может узнать, как проголосовал другой человек. Это регулируется статьей 38 Основного закона.'
                }
            },
            {
                question: {
                    de: 'Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?',
                    ru: 'Какие бюллетени были бы действительными на выборах в Бундестаг?'
                },
                options: [
                    { de: '1', ru: '1', correct: true },
                    { de: '2', ru: '2' },
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4' }
                ]
            },
            {
                question: {
                    de: 'Für wie viele Jahre wird der Bundestag in Deutschland gewählt?',
                    ru: 'На сколько лет избирается Бундестаг в Германии?'
                },
                options: [
                    { de: '2 Jahre', ru: '2 года' },
                    { de: '3 Jahre', ru: '3 года' },
                    { de: '4 Jahre', ru: '4 года', correct: true },
                    { de: '5 Jahre', ru: '5 лет' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland helfen ehrenamtliche Wahlhelfer und Wahlhelferinnen bei den Wahlen. Was ist eine Aufgabe von Wahlhelfern / Wahlhelferinnen?',
                    ru: 'В Германии добровольцы помогают с выборами. Какая задача у этих добровольцев?'
                },
                options: [
                    { de: 'Sie helfen Kindern und alten Menschen beim Wählen.', ru: 'Они помогают детям и пожилым людям голосовать.' },
                    { de: 'Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.', ru: 'Они пишут карты и письма с указанием избирательного участка.' },
                    { de: 'Sie geben Zwischenergebnisse an Journalisten weiter.', ru: 'Они передают промежуточные результаты журналистам.' },
                    { de: 'Sie zählen die Stimmen nach dem Ende der Wahl.', ru: 'Они подсчитывают голоса после завершения выборов.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wahlen in Deutschland sind frei. Was bedeutet das?',
                    ru: 'Выборы в Германии свободны. Что это означает?'
                },
                options: [
                    { de: 'Alle verurteilten Straftäter / Straftäterinnen dürfen nicht wählen.', ru: 'Все осужденные преступники не имеют права голоса.' },
                    { de: 'Wenn ich wählen gehen möchte, muss mein Arbeitgeber / meine Arbeitgeberin mir frei geben.', ru: 'Если я хочу пойти на выборы, мой работодатель должен меня отпустить.' },
                    {
                        de: 'Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.',
                        ru: 'Каждый человек может свободно решить, хочет ли он голосовать и за кого он хочет голосовать.',
                        correct: true
                    },
                    { de: 'Ich kann frei entscheiden, wo ich wählen gehen möchte.', ru: 'Я могу свободно решать, где хочу голосовать.' }
                ]
            },
            {
                question: {
                    de: 'Was ist in Deutschland die „5 %-Hürde“?',
                    ru: 'Что такое "5%-ный барьер" в Германии?'
                },
                options: [
                    { de: 'Abstimmungsregelung im Bundestag für kleine Parteien', ru: 'Правило голосования в Бундестаге для малых партий' },
                    { de: 'Anwesenheitskontrolle im Bundestag für Abstimmungen', ru: 'Контроль присутствия в Бундестаге для голосований' },
                    {
                        de: 'Mindestanteil an Wählerstimmen, um ins Parlament zu kommen',
                        ru: 'Минимальный процент голосов для прохождения в парламент',
                        correct: true
                    },
                    { de: 'Anwesenheitskontrolle im Bundesrat für Abstimmungen', ru: 'Контроль присутствия в Бундесрате для голосований' }
                ],
                explanation: {
                    de: 'Die Fünf-Prozent-Hürde soll eine Zersplitterung des Parlaments (Bundestag) durch sehr viele kleine Parteien verhindern. Um im Parlament vertreten zu sein, muss eine Partei bei der Bundestagswahl in Deutschland mindestens 5% der Wählerstimmen gewinnen.',
                    ru: 'Пятипроцентный барьер предназначен для предотвращения раздробления парламента (Бундестага) из-за большого количества мелких партий. Чтобы быть представленным в парламенте, партия должна на выборах в Бундестаг в Германии получить не менее 5% голосов избирателей.'
                }
            },
            {
                question: {
                    de: 'Was gehört nicht zur gesetzlichen Sozialversicherung?',
                    ru: 'Что не относится к обязательному социальному страхованию?'
                },
                options: [
                    { de: 'die gesetzliche Rentenversicherung', ru: 'обязательное пенсионное страхование' },
                    { de: 'die Lebensversicherung', ru: 'страхование жизни', correct: true },
                    { de: 'die Arbeitslosenversicherung', ru: 'страхование по безработице' },
                    { de: 'die Pflegeversicherung', ru: 'страхование по уходу' }
                ]
            },
            {
                question: {
                    de: 'Für wie viele Jahre wird der Bundestag in Deutschland gewählt?',
                    ru: 'На сколько лет избирается Бундестаг в Германии?'
                },
                options: [
                    { de: '2 Jahre', ru: '2 года' },
                    { de: '4 Jahre', ru: '4 года', correct: true },
                    { de: '6 Jahre', ru: '6 лет' },
                    { de: '8 Jahre', ru: '8 лет' }
                ]
            },
            {
                question: {
                    de: 'Wahlen in Deutschland gewinnt die Partei, die ...',
                    ru: 'Выборы в Германии выигрывает партия, которая ...'
                },
                options: [
                    { de: 'die meisten Stimmen bekommt.', ru: 'получила больше всего голосов', correct: true },
                    { de: 'die meisten Männer mehrheitlich gewählt haben.', ru: 'большинство мужчин проголосовали' },
                    { de: 'die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.', ru: 'получила больше всего голосов среди рабочих' },
                    { de: 'die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat.', ru: 'получила больше всего первых голосов за своего кандидата в канцлеры' }
                ]
            },
            // Вариант 5
            {
                question: {
                    de: 'Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?',
                    ru: 'Какой суд в Германии отвечает за конфликты в сфере труда?'
                },
                options: [
                    { de: 'das Familiengericht', ru: 'семейный суд' },
                    { de: 'das Strafgericht', ru: 'уголовный суд' },
                    { de: 'das Arbeitsgericht', ru: 'трудовой суд', correct: true },
                    { de: 'das Amtsgericht', ru: 'местный суд' }
                ]
            },
            {
                question: {
                    de: 'Wann waren die Nationalsozialisten in Deutschland an der Macht?',
                    ru: 'Когда национал-социалисты были у власти в Германии?'
                },
                options: [
                    { de: '1888 bis 1918', ru: 'с 1888 по 1918' },
                    { de: '1921 bis 1934', ru: 'с 1921 по 1934' },
                    { de: '1933 bis 1945', ru: 'с 1933 по 1945', correct: true },
                    { de: '1949 bis 1963', ru: 'с 1949 по 1963' }
                ]
            },
            {
                question: {
                    de: 'Wann war der Zweite Weltkrieg zu Ende?',
                    ru: 'Когда закончилась Вторая мировая война?'
                },
                options: [
                    { de: '1933', ru: '1933' },
                    { de: '1945', ru: '1945', correct: true },
                    { de: '1949', ru: '1949' },
                    { de: '1961', ru: '1961' }
                ]
            },
            {
                question: {
                    de: 'Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …',
                    ru: 'Когда в Германии дело доходит до суда? Когда кто-то …'
                },
                options: [
                    { de: 'zu einer anderen Religion übertritt.', ru: 'переходит в другую религию' },
                    {
                        de: 'eine Straftat begangen hat und angeklagt wird.',
                        ru: 'совершил преступление и был обвинен',
                        correct: true
                    },
                    { de: 'eine andere Meinung als die der Regierung vertritt.', ru: 'имеет мнение, отличное от мнения правительства' },
                    { de: 'sein Auto falsch geparkt hat und es abgeschleppt wird.', ru: 'неправильно припарковал машину и она была эвакуирована' }
                ]
            },
            {
                question: {
                    de: 'Ein Richter / eine Richterin in Deutschland gehört zur …',
                    ru: 'Судья в Германии относится к …'
                },
                options: [
                    { de: 'Judikative.', ru: 'судебной власти', correct: true },
                    { de: 'Exekutive.', ru: 'исполнительной власти' },
                    { de: 'Operative.', ru: 'оперативной власти' },
                    { de: 'Legislative.', ru: 'законодательной власти' }
                ]
            },
            {
                question: {
                    de: 'Was gehört nicht zur gesetzlichen Sozialversicherung?',
                    ru: 'Что не относится к обязательному социальному страхованию?'
                },
                options: [
                    { de: 'die gesetzliche Rentenversicherung', ru: 'обязательное пенсионное страхование' },
                    { de: 'die Lebensversicherung', ru: 'страхование жизни', correct: true },
                    { de: 'die Arbeitslosenversicherung', ru: 'страхование от безработицы' },
                    { de: 'die Pflegeversicherung', ru: 'страхование по уходу' }
                ]
            },
            {
                question: {
                    de: 'Für wie viele Jahre wird der Bundestag in Deutschland gewählt?',
                    ru: 'На сколько лет избирается Бундестаг в Германии?'
                },
                options: [
                    { de: '2 Jahre', ru: '2 года' },
                    { de: '4 Jahre', ru: '4 года', correct: true },
                    { de: '6 Jahre', ru: '6 лет' },
                    { de: '8 Jahre', ru: '8 лет' }
                ]
            },
            {
                question: {
                    de: 'Wahlen in Deutschland gewinnt die Partei, die …',
                    ru: 'В Германии выборы выигрывает партия, которая …'
                },
                options: [
                    { de: 'die meisten Männer mehrheitlich gewählt haben.', ru: 'большинство мужчин выбрали' },
                    { de: 'die meisten Stimmen bekommt.', ru: 'получила большинство голосов', correct: true },
                    { de: 'die meisten Stimmen bei den Arbeitern / Arbeiterinnen bekommen hat.', ru: 'получила большинство голосов среди рабочих' },
                    { de: 'die meisten Erststimmen für ihren Kanzlerkandidaten / ihre Kanzlerkandidatin erhalten hat.', ru: 'получила большинство первых голосов за своего кандидата в канцлеры' }
                ]
            },
            {
                question: {
                    de: 'Ein Gerichtsschöffe / eine Gerichtsschöffin in Deutschland ist …',
                    ru: 'Судья в Германии является …'
                },
                options: [
                    {
                        de: 'ein ehrenamtlicher Richter / eine ehrenamtliche Richterin.',
                        ru: 'почетным судьей',
                        correct: true
                    },
                    { de: 'der Stellvertreter / die Stellvertreterin des Stadtoberhaupts.', ru: 'заместитель главы города' },
                    { de: 'ein Mitglied eines Gemeinderats.', ru: 'член совета общины' },
                    { de: 'eine Person, die Jura studiert hat.', ru: 'человек, изучавший юриспруденцию' }
                ],
                explanation: {
                    de: 'Ein Gerichtsschöffe / eine Gerichtsschöffin ist in Deutschland ein ehrenamtlicher Richter / eine ehrenamtliche Richterin. Näheres wird im §31 Gerichtsverfassungsgesetz (GVG) geregelt.',
                    ru: 'Судья в Германии является почетным судьей. Это регулируется в §31 Закона о судебной системе (GVG).'
                }
            },
            {
                question: {
                    de: 'Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …',
                    ru: 'Национал-социалисты с Адольфом Гитлером в 1933 году установили в Германии …'
                },
                options: [
                    { de: 'einen demokratischen Staat.', ru: 'демократическое государство' },
                    { de: 'eine Diktatur.', ru: 'диктатуру', correct: true },
                    { de: 'eine Monarchie.', ru: 'монархию' },
                    { de: 'ein Fürstentum.', ru: 'княжество' }
                ]
            },
            {
                question: {
                    de: 'Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?',
                    ru: 'Как звали первого канцлера Федеративной Республики Германия?'
                },
                options: [
                    { de: 'Konrad Adenauer', ru: 'Конрад Аденауэр', correct: true },
                    { de: 'Kurt Georg Kiesinger', ru: 'Курт Георг Кизингер' },
                    { de: 'Helmut Schmidt', ru: 'Гельмут Шмидт' },
                    { de: 'Willy Brandt', ru: 'Вилли Брандт' }
                ]
            },
            {
                question: {
                    de: 'Claus Schenk Graf von Stauffenberg wurde bekannt durch …',
                    ru: 'Клаус Шенк граф фон Штауффенберг стал известен благодаря...'
                },
                options: [
                    { de: 'eine Goldmedaille bei den Olympischen Spielen 1936.', ru: 'золотая медаль на Олимпийских играх 1936 года' },
                    { de: 'den Bau des Reichstagsgebäudes.', ru: 'строительство здания Рейхстага' },
                    { de: 'den Aufbau der Wehrmacht.', ru: 'создание вермахта' },
                    { de: 'das Attentat auf Hitler am 20. Juli 1944.', ru: 'покушение на Гитлера 20 июля 1944 года', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wen vertreten die Gewerkschaften in Deutschland?',
                    ru: 'Кого представляют профсоюзы в Германии?'
                },
                options: [
                    { de: 'große Unternehmen', ru: 'крупные предприятия' },
                    { de: 'kleine Unternehmen', ru: 'малые предприятия' },
                    { de: 'Selbstständige', ru: 'самозанятые' },
                    { de: 'Arbeitnehmer und Arbeitnehmerinnen', ru: 'работники и работницы', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie nennt man in Deutschland ein Verfahren vor einem Gericht?',
                    ru: 'Как называется судебное разбирательство в Германии?'
                },
                options: [
                    { de: 'Programm', ru: 'программа' },
                    { de: 'Prozedur', ru: 'процедура' },
                    { de: 'Protokoll', ru: 'протокол' },
                    { de: 'Prozess', ru: 'процесс', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welcher Krieg dauerte von 1939 bis 1945?',
                    ru: 'Какая война длилась с 1939 по 1945 год?'
                },
                options: [
                    { de: 'der Erste Weltkrieg', ru: 'Первая мировая война' },
                    { de: 'der Zweite Weltkrieg', ru: 'Вторая мировая война', correct: true },
                    { de: 'der Vietnamkrieg', ru: 'Вьетнамская война' },
                    { de: 'der Golfkrieg', ru: 'Война в Персидском заливе' }
                ]
            },
            {
                question: {
                    de: 'Wer baute die Mauer in Berlin?',
                    ru: 'Кто построил стену в Берлине?'
                },
                options: [
                    { de: 'Großbritannien', ru: 'Великобритания' },
                    { de: 'die Bundesrepublik Deutschland', ru: 'Федеративная Республика Германия' },
                    { de: 'die DDR', ru: 'ГДР', correct: true },
                    { de: 'die USA', ru: 'США' }
                ]
            },
            {
                question: {
                    de: 'Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?',
                    ru: 'Кто консультирует людей в Германии по правовым вопросам и представляет их в суде?'
                },
                options: [
                    { de: 'ein Rechtsanwalt / eine Rechtsanwältin', ru: 'адвокат', correct: true },
                    { de: 'ein Richter / eine Richterin', ru: 'судья' },
                    { de: 'ein Schöffe / eine Schöffin', ru: 'присяжный заседатель' },
                    { de: 'ein Staatsanwalt / eine Staatsanwältin', ru: 'прокурор' }
                ]
            },
            {
                question: {
                    de: 'Was macht ein Schöffe / eine Schöffin in Deutschland? Er / Sie …',
                    ru: 'Что делает присяжный заседатель в Германии? Он/Она ...'
                },
                options: [
                    { de: 'entscheidet mit Richtern / Richterinnen über Schuld und Strafe.', ru: 'вместе с судьями решает вопросы вины и наказания', correct: true },
                    { de: 'gibt Bürgern / Bürgerinnen rechtlichen Rat.', ru: 'дает правовые советы гражданам' },
                    { de: 'stellt Urkunden aus.', ru: 'выдает документы' },
                    { de: 'verteidigt den Angeklagten / die Angeklagte.', ru: 'защищает обвиняемого/обвиняемую' }
                ],
                explanation: {
                    de: 'Ein Schöffe ist in Deutschland ein ehrenamtlicher Richter, gemäß §31 Gerichtsverfassungsgesetz (GVG). Damit entscheidet der Schöffe / die Schöffin mit Richtern / Richterinnen über Schuld und Strafe.',
                    ru: 'Присяжный заседатель в Германии является почетным судьей в соответствии с §31 Закона о судебной конституции (GVG). Поэтому он решает вопросы вины и наказания вместе с судьями.'
                }
            },
            {
                question: {
                    de: 'Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?',
                    ru: 'Когда национал-социалисты с Адольфом Гитлером были у власти в Германии?'
                },
                options: [
                    { de: '1918 bis 1923', ru: '1918-1923' },
                    { de: '1932 bis 1950', ru: '1932-1950' },
                    { de: '1933 bis 1945', ru: '1933-1945', correct: true },
                    { de: '1945 bis 1989', ru: '1945-1989' }
                ]
            },
            {
                question: {
                    de: 'Was kann ich in Deutschland machen, wenn mir mein Arbeitgeber / meine Arbeitgeberin zu Unrecht gekündigt hat?',
                    ru: 'Что я могу сделать в Германии, если мой работодатель уволил меня незаконно?'
                },
                options: [
                    { de: 'weiter arbeiten und freundlich zum Chef / zur Chefin sein', ru: 'продолжать работать и быть дружелюбным с начальником' },
                    { de: 'ein Mahnverfahren gegen den Arbeitgeber / die Arbeitgeberin führen', ru: 'подать жалобу на работодателя' },
                    { de: 'Kündigungsschutzklage erheben', ru: 'подать иск о защите от увольнения', correct: true },
                    { de: 'den Arbeitgeber / die Arbeitgeberin bei der Polizei anzeigen', ru: 'подать жалобу на работодателя в полицию' }
                ]
            },
            {
                question: {
                    de: 'Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?',
                    ru: 'Что разрешено при выборах в Бундестаг и земельные парламенты в Германии?'
                },
                options: [
                    { de: 'Der Ehemann wählt für seine Frau mit.', ru: 'Муж голосует за свою жену.' },
                    { de: 'Man kann durch Briefwahl seine Stimme abgeben.', ru: 'Можно проголосовать по почте.', correct: true },
                    { de: 'Man kann am Wahltag telefonisch seine Stimme abgeben.', ru: 'Можно проголосовать по телефону в день выборов.' },
                    { de: 'Kinder ab dem Alter von 14 Jahren dürfen wählen.', ru: 'Дети с 14 лет могут голосовать.' }
                ]
            },
            {
                question: {
                    de: 'Wer kann Gerichtsschöffe / Gerichtsschöffin in Deutschland werden?',
                    ru: 'Кто может стать народным заседателем в суде в Германии?'
                },
                options: [
                    { de: 'alle in Deutschland geborenen Einwohner / Einwohnerinnen über 18 Jahre', ru: 'все жители Германии, рожденные в Германии, старше 18 лет.' },
                    { de: 'alle deutschen Staatsangehörigen älter als 24 und jünger als 70 Jahre', ru: 'все граждане Германии старше 24 и младше 70 лет.', correct: true },
                    { de: 'alle Personen, die seit mindestens 5 Jahren in Deutschland leben', ru: 'все люди, которые проживают в Германии не менее 5 лет.' },
                    { de: 'nur Personen mit einem abgeschlossenen Jurastudium', ru: 'только люди с юридическим образованием.' }
                ],
                explanation: {
                    de: 'Ein Schöffe ist in Deutschland ein ehrenamtlicher Richter. Entsprechend §31 Gerichtsverfassungsgesetz (GVG) kann nur ein deutscher Staatsbürger zum Schöffen gewählt werden.',
                    ru: 'Народный заседатель в Германии - это добровольный судья. Согласно §31 Закона о судебном устройстве (GVG), только гражданин Германии может быть избран народным заседателем.'
                }
            },
            {
                question: {
                    de: 'Sie gehen in Deutschland zum Arbeitsgericht bei …',
                    ru: 'Вы идете в трудовой суд в Германии, если...'
                },
                options: [
                    { de: 'falscher Nebenkostenabrechnung.', ru: 'неверный расчет дополнительных расходов.' },
                    { de: 'ungerechtfertigter Kündigung durch Ihren Chef / Ihre Chefin.', ru: 'несправедливая отставка по инициативе начальника.', correct: true },
                    { de: 'Problemen mit den Nachbarn / Nachbarinnen.', ru: 'проблемы с соседями.' },
                    { de: 'Schwierigkeiten nach einem Verkehrsunfall.', ru: 'трудности после ДТП.' }
                ]
            },
            {
                question: {
                    de: 'In welchem Jahr wurde Hitler Reichskanzler?',
                    ru: 'В каком году Гитлер стал рейхсканцлером?'
                },
                options: [
                    { de: '1923', ru: '1923' },
                    { de: '1927', ru: '1927' },
                    { de: '1933', ru: '1933', correct: true },
                    { de: '1936', ru: '1936' }
                ]
            },
            {
                question: {
                    de: 'Was ist die Arbeit eines Richters / einer Richterin in Deutschland?',
                    ru: 'Какая работа у судьи в Германии?'
                },
                options: [
                    { de: 'Deutschland regieren', ru: 'Управлять Германией' },
                    { de: 'Recht sprechen', ru: 'Отправлять правосудие', correct: true },
                    { de: 'Pläne erstellen', ru: 'Составлять планы' },
                    { de: 'Gesetze erlassen', ru: 'Принимать законы' }
                ]
            },
            {
                question: {
                    de: 'In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?',
                    ru: 'В каком году нацисты разрушили синагоги и еврейские магазины в Германии?'
                },
                options: [
                    { de: '1925', ru: '1925' },
                    { de: '1930', ru: '1930' },
                    { de: '1938', ru: '1938', correct: true },
                    { de: '1945', ru: '1945' }
                ]
            },
            {
                question: {
                    de: 'Was ist eine Aufgabe der Polizei in Deutschland?',
                    ru: 'Какая задача полиции в Германии?'
                },
                options: [
                    { de: 'das Land zu verteidigen', ru: 'защищать страну' },
                    { de: 'die Bürgerinnen und Bürger abzuhören', ru: 'прослушивать граждан' },
                    { de: 'die Gesetze zu beschließen', ru: 'принимать законы' },
                    { de: 'die Einhaltung von Gesetzen zu überwachen', ru: 'следить за соблюдением законов', correct: true }
                ]
            },
            {
                question: {
                    de: 'Das „Dritte Reich“ war eine …',
                    ru: 'Третий Рейх был...'
                },
                options: [
                    { de: 'Diktatur.', ru: 'диктатура', correct: true },
                    { de: 'Demokratie.', ru: 'демократия' },
                    { de: 'Monarchie.', ru: 'монархия' },
                    { de: 'Räterepublik.', ru: 'советская республика' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet ein Richter / eine Richterin? Für die …',
                    ru: 'В Германии власть разделена. К какой власти относится работа судьи? К...'
                },
                options: [
                    { de: 'Judikative.', ru: 'судебная власть', correct: true },
                    { de: 'Exekutive.', ru: 'исполнительная власть' },
                    { de: 'Presse.', ru: 'пресса' },
                    { de: 'Legislative.', ru: 'законодательная власть' }
                ],
                explanation: {
                    de: 'Der Begriff Judikative kommt aus dem Lateinischen iudicare und bedeutet Recht sprechen und bezeichnet die richterliche Gewalt in Deutschland.',
                    ru: 'Термин "судебная власть" происходит от латинского iudicare и означает "отправлять правосудие", обозначая судебную власть в Германии.'
                }
            },
            {
                question: {
                    de: 'Was kennzeichnete den NS-Staat? Eine Politik …',
                    ru: 'Что характеризовало нацистское государство? Политика...'
                },
                options: [
                    { de: 'des staatlichen Rassismus', ru: 'государственного расизма', correct: true },
                    { de: 'der Meinungsfreiheit', ru: 'свободы слова' },
                    { de: 'der allgemeinen Religionsfreiheit', ru: 'религиозной свободы' },
                    { de: 'der Entwicklung der Demokratie', ru: 'развития демократии' }
                ]
            },
            {
                question: {
                    de: 'Was ist die Hauptaufgabe eines Richters / einer Richterin in Deutschland? Ein Richter / eine Richterin …',
                    ru: 'Какова основная задача судьи в Германии? Судья …'
                },
                options: [
                    { de: 'vertritt Bürger und Bürgerinnen vor einem Gericht.', ru: 'представляет граждан в суде.' },
                    { de: 'arbeitet an einem Gericht und spricht Urteile.', ru: 'работает в суде и выносит приговоры.', correct: true },
                    { de: 'ändert Gesetze.', ru: 'меняет законы.' },
                    { de: 'betreut Jugendliche vor Gericht.', ru: 'ведет дела с участием несовершеннолетних в суде.' }
                ]
            },
            {
                question: {
                    de: 'Was war am 8. Mai 1945?',
                    ru: 'Что произошло 8 мая 1945 года?'
                },
                options: [
                    { de: 'Tod Adolf Hitlers', ru: 'Смерть Адольфа Гитлера' },
                    { de: 'Beginn des Berliner Mauerbaus', ru: 'Начало строительства Берлинской стены' },
                    { de: 'Wahl von Konrad Adenauer zum Bundeskanzler', ru: 'Избрание Конрада Аденауэра федеральным канцлером' },
                    { de: 'Ende des Zweiten Weltkriegs in Europa', ru: 'Конец Второй мировой войны в Европе', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?',
                    ru: 'Что отсутствовало в Германии во времена национал-социализма?'
                },
                options: [
                    { de: 'freie Wahlen', ru: 'свободные выборы', correct: true },
                    { de: 'Pressezensur', ru: 'цензура прессы' },
                    { de: 'willkürliche Verhaftungen', ru: 'произвольные аресты' },
                    { de: 'Verfolgung der Juden', ru: 'преследование евреев' }
                ]
            },
            // Вариант 6
            {
                question: {
                    de: 'In welcher Besatzungszone wurde die DDR gegründet? In der ...',
                    ru: 'В какой оккупационной зоне была основана ГДР? В...'
                },
                options: [
                    { de: 'amerikanischen Besatzungszone', ru: 'американская оккупационная зона' },
                    { de: 'französischen Besatzungszone', ru: 'французская оккупационная зона' },
                    { de: 'britischen Besatzungszone', ru: 'британская оккупационная зона' },
                    { de: 'sowjetischen Besatzungszone', ru: 'советская оккупационная зона', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wann war in der Bundesrepublik Deutschland das "Wirtschaftswunder"?',
                    ru: 'Когда в Федеративной Республике Германия произошло "экономическое чудо"?'
                },
                options: [
                    { de: '40er Jahre', ru: '40-е годы' },
                    { de: '50er Jahre', ru: '50-е годы', correct: true },
                    { de: '70er Jahre', ru: '70-е годы' },
                    { de: '80er Jahre', ru: '80-е годы' }
                ]
            },
            {
                question: {
                    de: 'In welcher Besatzungszone wurde die DDR gegründet? In der ...',
                    ru: 'В какой оккупационной зоне была основана ГДР? В...'
                },
                options: [
                    { de: 'amerikanischen Besatzungszone', ru: 'американская оккупационная зона' },
                    { de: 'französischen Besatzungszone', ru: 'французская оккупационная зона' },
                    { de: 'britischen Besatzungszone', ru: 'британская оккупационная зона' },
                    { de: 'sowjetischen Besatzungszone', ru: 'советская оккупационная зона', correct: true }
                ]
            },
            {
                question: {
                    de: 'Der erste Bundeskanzler der Bundesrepublik Deutschland war ...',
                    ru: 'Первым федеральным канцлером Федеративной Республики Германия был...'
                },
                options: [
                    { de: 'Ludwig Erhard', ru: 'Людвиг Эрхард' },
                    { de: 'Willy Brandt', ru: 'Вилли Брандт' },
                    { de: 'Konrad Adenauer', ru: 'Конрад Аденауэр', correct: true },
                    { de: 'Gerhard Schröder', ru: 'Герхард Шрёдер' }
                ]
            },
            {
                question: {
                    de: 'Wann wurde die Mauer in Berlin für alle geöffnet?',
                    ru: 'Когда Берлинская стена была открыта для всех?'
                },
                options: [
                    { de: '1987', ru: '1987 год' },
                    { de: '1989', ru: '1989 год', correct: true },
                    { de: '1992', ru: '1992 год' },
                    { de: '1995', ru: '1995 год' }
                ]
            },
            {
                question: {
                    de: 'Wann wurde die Bundesrepublik Deutschland gegründet?',
                    ru: 'Когда была основана Федеративная Республика Германия?'
                },
                options: [
                    { de: '1939', ru: '1939 год' },
                    { de: '1945', ru: '1945 год' },
                    { de: '1949', ru: '1949 год', correct: true },
                    { de: '1951', ru: '1951 год' }
                ]
            },
            {
                question: {
                    de: 'Die Bundesrepublik Deutschland ist ein Gründungsmitglied ...',
                    ru: 'Федеративная Республика Германия является учредителем...'
                },
                options: [
                    { de: 'des Nordatlantikpakts (NATO)', ru: 'Североатлантического альянса (НАТО)' },
                    { de: 'der Vereinten Nationen (VN)', ru: 'Организации Объединенных Наций (ООН)' },
                    { de: 'der Europäischen Union (EU)', ru: 'Европейского Союза (ЕС)', correct: true },
                    { de: 'des Warschauer Pakts', ru: 'Варшавского договора' }
                ]
            },
            {
                question: {
                    de: 'Soziale Marktwirtschaft bedeutet, die Wirtschaft ...',
                    ru: 'Социальная рыночная экономика означает, что экономика...'
                },
                options: [
                    { de: 'steuert sich allein nach Angebot und Nachfrage', ru: 'управляется исключительно спросом и предложением' },
                    { de: 'wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt', ru: 'планируется и управляется государством, спрос и предложение не учитываются' },
                    { de: 'richtet sich nach der Nachfrage im Ausland', ru: 'ориентируется на спрос за рубежом' },
                    { de: 'richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich', ru: 'управляется спросом и предложением, но государство обеспечивает социальное равновесие', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches Land war keine "Alliierte Besatzungsmacht" in Deutschland?',
                    ru: 'Какая страна не была "союзной оккупационной державой" в Германии?'
                },
                options: [
                    { de: 'USA', ru: 'США' },
                    { de: 'Sowjetunion', ru: 'Советский Союз' },
                    { de: 'Frankreich', ru: 'Франция' },
                    { de: 'Japan', ru: 'Япония', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als "Alliierte Besatzungsmächte" bezeichnet?',
                    ru: 'Какие страны после Второй мировой войны в Германии назывались "союзными оккупационными державами"?'
                },
                options: [
                    { de: 'Sowjetunion, Großbritannien, Polen, Schweden', ru: 'Советский Союз, Великобритания, Польша, Швеция' },
                    { de: 'Frankreich, Sowjetunion, Italien, Japan', ru: 'Франция, Советский Союз, Италия, Япония' },
                    { de: 'USA, Sowjetunion, Spanien, Portugal', ru: 'США, Советский Союз, Испания, Португалия' },
                    { de: 'USA, Sowjetunion, Großbritannien, Frankreich', ru: 'США, Советский Союз, Великобритания, Франция', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was nannten die Menschen in Deutschland sehr lange „Die Stunde Null“?',
                    ru: 'Как немцы долго называли «Час ноль»?'
                },
                options: [
                    { de: 'Damit wird die Zeit nach der Wende im Jahr 1989 bezeichnet.', ru: 'Так называется время после объединения в 1989 году.' },
                    { de: 'Damit wurde der Beginn des Zweiten Weltkrieges bezeichnet.', ru: 'Так называли начало Второй мировой войны.' },
                    { de: 'Darunter verstand man das Ende des Zweiten Weltkrieges und den Beginn des Wiederaufbaus.', ru: 'Так называли окончание Второй мировой войны и начало восстановления.', correct: true },
                    { de: 'Damit ist die Stunde gemeint, in der die Uhr von der Sommerzeit auf die Winterzeit umgestellt wird.', ru: 'Так называют момент, когда часы переводятся с летнего на зимнее время.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung DDR?',
                    ru: 'Что означает аббревиатура ГДР?'
                },
                options: [
                    { de: 'Dritter Deutscher Rundfunk', ru: 'Третье немецкое радио' },
                    { de: 'Die Deutsche Republik', ru: 'Немецкая Республика' },
                    { de: 'Dritte Deutsche Republik', ru: 'Третья Немецкая Республика' },
                    { de: 'Deutsche Demokratische Republik', ru: 'Германская Демократическая Республика', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?',
                    ru: 'Какая современная немецкая федеральная земля ранее принадлежала ГДР?'
                },
                options: [
                    { de: 'Brandenburg', ru: 'Бранденбург', correct: true },
                    { de: 'Bayern', ru: 'Бавария' },
                    { de: 'Saarland', ru: 'Саар' },
                    { de: 'Hessen', ru: 'Гессен' }
                ]
            },
            {
                question: {
                    de: 'Wie endete der Zweite Weltkrieg in Europa offiziell?',
                    ru: 'Как официально закончилась Вторая мировая война в Европе?'
                },
                options: [
                    { de: 'mit dem Tod Adolf Hitlers', ru: 'смертью Адольфа Гитлера' },
                    { de: 'durch die bedingungslose Kapitulation Deutschlands', ru: 'безоговорочной капитуляцией Германии', correct: true },
                    { de: 'mit dem Rückzug der Deutschen aus den besetzten Gebieten', ru: 'с отступлением немцев из оккупированных территорий' },
                    { de: 'durch eine Revolution in Deutschland', ru: 'в результате революции в Германии' }
                ],
                explanation: {
                    de: 'Der Zweite Weltkrieg endete in Europa mit der bedingungslosen Kapitulation Deutschlands am 8. Mai 1945.',
                    ru: 'Вторая мировая война в Европе завершилась безоговорочной капитуляцией Германии 8 мая 1945 года.'
                }
            },
            {
                question: {
                    de: 'Wann wurde die DDR gegründet?',
                    ru: 'Когда была основана ГДР?'
                },
                options: [
                    { de: '1947', ru: '1947 год' },
                    { de: '1949', ru: '1949 год', correct: true },
                    { de: '1953', ru: '1953 год' },
                    { de: '1956', ru: '1956 год' }
                ],
                explanation: {
                    de: 'Die Deutsche Demokratische Republik (DDR) wurde am 7. Oktober 1949 gegründet.',
                    ru: 'Германская Демократическая Республика (ГДР) была основана 7 октября 1949 года.'
                }
            },
            {
                question: {
                    de: 'Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?',
                    ru: 'Какая современная немецкая федеральная земля ранее принадлежала ГДР?'
                },
                options: [
                    { de: 'Thüringen', ru: 'Тюрингия', correct: true },
                    { de: 'Hessen', ru: 'Гессен' },
                    { de: 'Bayern', ru: 'Бавария' },
                    { de: 'Bremen', ru: 'Бремен' }
                ]
            },
            {
                question: {
                    de: 'Am 3. Oktober feiert man in Deutschland den Tag der Deutschen ...',
                    ru: '3 октября в Германии отмечается День немецкого ...'
                },
                options: [
                    { de: 'Einheit.', ru: 'Единства.', correct: true },
                    { de: 'Nation.', ru: 'Нации.' },
                    { de: 'Bundesländer.', ru: 'Федеральных земель.' },
                    { de: 'Städte.', ru: 'Городов.' }
                ]
            },
            {
                question: {
                    de: 'Warum nennt man die Zeit im Herbst 1989 in der DDR „Die Wende“? In dieser Zeit veränderte sich die DDR politisch ...',
                    ru: 'Почему осень 1989 года в ГДР называют «Поворот»? В это время политически изменилась ГДР ...'
                },
                options: [
                    { de: 'von einer Diktatur zur Demokratie.', ru: 'от диктатуры к демократии.', correct: true },
                    { de: 'von einer liberalen Marktwirtschaft zum Sozialismus.', ru: 'от либеральной рыночной экономики к социализму.' },
                    { de: 'von einer Monarchie zur Sozialdemokratie.', ru: 'от монархии к социал-демократии.' },
                    { de: 'von einem religiösen Staat zu einem kommunistischen Staat.', ru: 'от религиозного государства к коммунистическому государству.' }
                ]
            },
            {
                question: {
                    de: 'Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?',
                    ru: 'Что хотел выразить Вилли Брандт своим коленопреклонением в 1970 году в бывшем еврейском гетто в Варшаве?'
                },
                options: [
                    { de: 'Er hat sich den ehemaligen Alliierten unterworfen.', ru: 'Он подчинился бывшим союзникам.' },
                    { de: 'Er bat Polen und die polnischen Juden um Vergebung.', ru: 'Он попросил прощения у Польши и польских евреев.', correct: true },
                    { de: 'Er zeigte seine Demut vor dem Warschauer Pakt.', ru: 'Он показал своё смирение перед Варшавским договором.' },
                    { de: 'Er sprach ein Gebet am Grab des Unbekannten Soldaten.', ru: 'Он произнёс молитву у могилы Неизвестного Солдата.' }
                ]
            },
            {
                question: {
                    de: 'Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?',
                    ru: 'В 1953 году в ГДР произошёл восстание, которое долгое время вспоминали в Федеративной Республике Германия как праздник. Когда это было?'
                },
                options: [
                    { de: '1. Mai', ru: '1 мая' },
                    { de: '17. Juni', ru: '17 июня', correct: true },
                    { de: '20. Juli', ru: '20 июля' },
                    { de: '9. November', ru: '9 ноября' }
                ]
            },
            {
                question: {
                    de: 'Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?',
                    ru: 'Какой немецкий город был разделен на четыре сектора после Второй мировой войны?'
                },
                options: [
                    { de: 'München', ru: 'Мюнхен' },
                    { de: 'Berlin', ru: 'Берлин', correct: true },
                    { de: 'Dresden', ru: 'Дрезден' },
                    { de: 'Frankfurt/Oder', ru: 'Франкфурт-на-Одере' }
                ]
            },
            {
                question: {
                    de: 'Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?',
                    ru: 'Какое немецкое государство имело черно-красно-золотой флаг с молотом, циркулем и венком из колосьев?'
                },
                options: [
                    { de: 'Preußen', ru: 'Пруссия' },
                    { de: 'Bundesrepublik Deutschland', ru: 'Федеративная Республика Германия' },
                    { de: 'DDR', ru: 'ГДР', correct: true },
                    { de: '„Drittes Reich“', ru: '«Третий рейх»' }
                ]
            },
            {
                question: {
                    de: 'In welchem Jahr wurde die Mauer in Berlin gebaut?',
                    ru: 'В каком году была построена Берлинская стена?'
                },
                options: [
                    { de: '1953', ru: '1953' },
                    { de: '1956', ru: '1956' },
                    { de: '1959', ru: '1959' },
                    { de: '1961', ru: '1961', correct: true }
                ],
                explanation: {
                    de: 'Die Berliner Mauer wurde ab August 1961 errichtet.',
                    ru: 'Берлинская стена была построена в августе 1961 года.'
                }
            },
            {
                question: {
                    de: 'Welche Parteien wurden 1946 zwangsweise zur SED vereint, der Einheitspartei der späteren DDR?',
                    ru: 'Какие партии были в 1946 году насильственно объединены в СЕПГ, единую партию будущей ГДР?'
                },
                options: [
                    { de: 'KPD und SPD', ru: 'КПГ и СДПГ', correct: true },
                    { de: 'SPD und CDU', ru: 'СДПГ и ХДС' },
                    { de: 'CDU und FDP', ru: 'ХДС и СвДП' },
                    { de: 'KPD und CSU', ru: 'КПГ и ХСС' }
                ],
                explanation: {
                    de: 'Am 21./22. April 1946 fusionierten in der Sowjetischen Besatzungszone die Kommunistische Partei Deutschlands (KPD) und die Sozialdemokratische Partei Deutschlands (SPD) unter Druck der sowjetischen Besatzung zur Sozialistischen Einheitspartei Deutschlands (SED).',
                    ru: '21/22 апреля 1946 года в Советской оккупационной зоне произошло слияние Коммунистической партии Германии (КПГ) и Социал-демократической партии Германии (СДПГ) под давлением советской оккупации в Социалистическую единую партию Германии (СЕПГ).'
                }
            },
            {
                question: {
                    de: 'Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?',
                    ru: 'Сколько оккупационных зон было в Германии после Второй мировой войны?'
                },
                options: [
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4', correct: true },
                    { de: '5', ru: '5' },
                    { de: '6', ru: '6' }
                ]
            },
            {
                question: {
                    de: 'Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?',
                    ru: 'Какой современный немецкий федеральный штат раньше принадлежал к территории ГДР?'
                },
                options: [
                    { de: 'Bayern', ru: 'Бавария' },
                    { de: 'Niedersachsen', ru: 'Нижняя Саксония' },
                    { de: 'Sachsen', ru: 'Саксония', correct: true },
                    { de: 'Baden-Württemberg', ru: 'Баден-Вюртемберг' }
                ]
            },
            {
                question: {
                    de: 'Wofür stand der Ausdruck „Eiserner Vorhang“? Für die Abschottung …',
                    ru: 'Что означало выражение «Железный занавес»? Для изоляции ...'
                },
                options: [
                    { de: 'Norddeutschlands gegen Süddeutschland.', ru: 'Северной Германии от Южной Германии.' },
                    { de: 'Nazi-Deutschlands gegen die Alliierten.', ru: 'Нацистской Германии от союзников.' },
                    { de: 'Europas gegen die USA.', ru: 'Европы от США.' },
                    { de: 'des Warschauer Pakts gegen den Westen.', ru: 'Варшавского пакта от Запада.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was gab es während der Zeit des Nationalsozialismus in Deutschland?',
                    ru: 'Что было в Германии во времена национал-социализма?'
                },
                options: [
                    { de: 'das Recht zur freien Entfaltung der Persönlichkeit', ru: 'право на свободное развитие личности' },
                    { de: 'Pressefreiheit', ru: 'свобода прессы' },
                    { de: 'das Verbot von Parteien', ru: 'запрет партий', correct: true },
                    { de: 'den Schutz der Menschenwürde', ru: 'защита человеческого достоинства' }
                ]
            },
            {
                question: {
                    de: 'Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?',
                    ru: 'Какой современный немецкий федеральный штат раньше принадлежал к территории ГДР?'
                },
                options: [
                    { de: 'Hessen', ru: 'Гессен' },
                    { de: 'Nordrhein-Westfalen', ru: 'Северный Рейн-Вестфалия' },
                    { de: 'Sachsen-Anhalt', ru: 'Саксония-Анхальт', correct: true },
                    { de: 'Saarland', ru: 'Саар' }
                ]
            },
            {
                question: {
                    de: 'Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?',
                    ru: 'Как были распределены оккупационные зоны Германии после 1945 года?'
                },
                options: [
                    { de: '1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA', ru: '1=Великобритания, 2=Советский Союз, 3=Франция, 4=США' },
                    { de: '1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich', ru: '1=Советский Союз, 2=Великобритания, 3=США, 4=Франция' },
                    { de: '1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich', ru: '1=Великобритания, 2=Советский Союз, 3=США, 4=Франция', correct: true },
                    { de: '1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich', ru: '1=Великобритания, 2=США, 3=Советский Союз, 4=Франция' }
                ]
            },
            {
                question: {
                    de: 'Bei welchen Demonstrationen in Deutschland riefen die Menschen „Wir sind das Volk“?',
                    ru: 'На каких демонстрациях в Германии люди скандировали «Мы — народ»?'
                },
                options: [
                    { de: 'beim Arbeiteraufstand 1953 in der DDR', ru: 'во время рабочего восстания 1953 года в ГДР' },
                    { de: 'bei den Demonstrationen 1968 in der Bundesrepublik Deutschland', ru: 'на демонстрациях 1968 года в Федеративной Республике Германия' },
                    { de: 'bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland', ru: 'на антиатомных демонстрациях 1985 года в Федеративной Республике Германия' },
                    { de: 'bei den Montagsdemonstrationen 1989 in der DDR', ru: 'на понедельничных демонстрациях 1989 года в ГДР', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wann baute die DDR die Mauer in Berlin?',
                    ru: 'Когда ГДР построила Берлинскую стену?'
                },
                options: [
                    { de: '1919', ru: '1919' },
                    { de: '1933', ru: '1933' },
                    { de: '1961', ru: '1961', correct: true },
                    { de: '1990', ru: '1990' }
                ]
            },
            {
                question: {
                    de: 'Von 1961 bis 1989 war Berlin ...',
                    ru: 'С 1961 по 1989 год Берлин был ...'
                },
                options: [
                    { de: 'ohne Bürgermeister', ru: 'без бургомистра' },
                    { de: 'ein eigener Staat', ru: 'отдельным государством' },
                    { de: 'durch eine Mauer geteilt', ru: 'разделён стеной', correct: true },
                    { de: 'nur mit dem Flugzeug erreichbar', ru: 'доступен только самолётом' }
                ]
            },
            // Вариант 7
            {
                question: {
                    de: 'Wie hieß das Wirtschaftssystem der DDR?',
                    ru: 'Как называлась экономическая система ГДР?'
                },
                options: [
                    { de: 'Marktwirtschaft', ru: 'Рыночная экономика' },
                    { de: 'Planwirtschaft', ru: 'Плановая экономика', correct: true },
                    { de: 'Angebot und Nachfrage', ru: 'Спрос и предложение' },
                    { de: 'Kapitalismus', ru: 'Капитализм' }
                ],
                explanation: {
                    de: 'In der DDR wurden die wirtschaftlichen Entwicklungen ausgehend von gesellschaftlichen Bedürfnissen für die Folgejahre geplant, meist für 1 oder 5 Jahre.',
                    ru: 'В ГДР экономическое развитие планировалось на основе общественных потребностей на следующие годы, чаще всего на 1 или 5 лет.'
                }
            },
            {
                question: {
                    de: 'Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?',
                    ru: '27 января в Германии является официальным днем памяти. Какое событие вспоминается в этот день?'
                },
                options: [
                    { de: 'an das Ende des Zweiten Weltkrieges', ru: 'Окончание Второй мировой войны' },
                    { de: 'an die Verabschiedung des Grundgesetzes', ru: 'Принятие Основного закона' },
                    { de: 'an die Wiedervereinigung Deutschlands', ru: 'Объединение Германии' },
                    { de: 'an die Opfer des Nationalsozialismus', ru: 'Жертвы национал-социализма', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches Land ist ein Nachbarland von Deutschland?',
                    ru: 'Какая страна является соседкой Германии?'
                },
                options: [
                    { de: 'Ungarn', ru: 'Венгрия' },
                    { de: 'Portugal', ru: 'Португалия' },
                    { de: 'Spanien', ru: 'Испания' },
                    { de: 'Schweiz', ru: 'Швейцария', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?',
                    ru: 'Какая нынешняя немецкая земля раньше была частью ГДР?'
                },
                options: [
                    { de: 'Hessen', ru: 'Гессен' },
                    { de: 'Schleswig-Holstein', ru: 'Шлезвиг-Гольштейн' },
                    { de: 'Mecklenburg-Vorpommern', ru: 'Мекленбург-Передняя Померания', correct: true },
                    { de: 'Saarland', ru: 'Саар' }
                ]
            },
            {
                question: {
                    de: 'In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?',
                    ru: 'В какой период существовала Германская Демократическая Республика (ГДР)?'
                },
                options: [
                    { de: '1919 bis 1927', ru: '1919 по 1927' },
                    { de: '1933 bis 1945', ru: '1933 по 1945' },
                    { de: '1949 bis 1990', ru: '1949 по 1990', correct: true },
                    { de: '1945 bis 1961', ru: '1945 по 1961' }
                ],
                explanation: {
                    de: 'Die DDR wurde 1949 gegründet und existierte bis zur Wiedervereinigung im Jahre 1990.',
                    ru: 'ГДР была основана в 1949 году и существовала до объединения Германии в 1990 году.'
                }
            },
            {
                question: {
                    de: 'Mit der Abkürzung „Stasi“ meinte man in der DDR ...',
                    ru: 'Сокращение "Штази" в ГДР обозначало ...'
                },
                options: [
                    { de: 'das Parlament', ru: 'парламент' },
                    { de: 'das Ministerium für Staatssicherheit', ru: 'Министерство государственной безопасности', correct: true },
                    { de: 'eine regierende Partei', ru: 'правящая партия' },
                    { de: 'das Ministerium für Volksbildung', ru: 'Министерство народного образования' }
                ]
            },
            {
                question: {
                    de: 'Welches war das Wappen der Deutschen Demokratischen Republik?',
                    ru: 'Какой был герб Германской Демократической Республики?'
                },
                options: [
                    { de: 'Option 1', ru: 'Вариант 1' },
                    { de: 'Option 2', ru: 'Вариант 2' },
                    { de: 'Option 3', ru: 'Вариант 3' },
                    { de: 'Option 4', ru: 'Вариант 4', correct: true }
                ]
            },
            {
                question: {
                    de: 'Das Europäische Parlament wird regelmäßig gewählt, nämlich alle ...',
                    ru: 'Европейский парламент избирается регулярно, а именно каждые ...'
                },
                options: [
                    { de: '5 Jahre', ru: '5 лет', correct: true },
                    { de: '6 Jahre', ru: '6 лет' },
                    { de: '7 Jahre', ru: '7 лет' },
                    { de: '8 Jahre', ru: '8 лет' }
                ]
            },
            {
                question: {
                    de: 'Welche Farben hat die deutsche Flagge?',
                    ru: 'Какие цвета у немецкого флага?'
                },
                options: [
                    { de: 'schwarz-rot-gold', ru: 'черно-красно-золотой', correct: true },
                    { de: 'rot-weiß-schwarz', ru: 'красно-бело-черный' },
                    { de: 'schwarz-rot-grün', ru: 'черно-красно-зеленый' },
                    { de: 'schwarz-gelb-rot', ru: 'черно-желто-красный' }
                ]
            },
            {
                question: {
                    de: 'Welches Land ist ein Nachbarland von Deutschland?',
                    ru: 'Какая страна является соседкой Германии?'
                },
                options: [
                    { de: 'Finnland', ru: 'Финляндия' },
                    { de: 'Dänemark', ru: 'Дания', correct: true },
                    { de: 'Norwegen', ru: 'Норвегия' },
                    { de: 'Schweden', ru: 'Швеция' }
                ]
            },
            {
                question: {
                    de: 'Welches Land ist ein Nachbarland von Deutschland?',
                    ru: 'Какая страна является соседней для Германии?'
                },
                options: [
                    { de: 'Rumänien', ru: 'Румыния' },
                    { de: 'Bulgarien', ru: 'Болгария' },
                    { de: 'Polen', ru: 'Польша', correct: true },
                    { de: 'Griechenland', ru: 'Греция' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung EU?',
                    ru: 'Что означает аббревиатура ЕС?'
                },
                options: [
                    { de: 'Europäische Unternehmen', ru: 'Европейские предприятия' },
                    { de: 'Europäische Union', ru: 'Европейский Союз', correct: true },
                    { de: 'Einheitliche Union', ru: 'Единый Союз' },
                    { de: 'Euro Union', ru: 'Евро Союз' }
                ]
            },
            {
                question: {
                    de: 'Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?',
                    ru: 'Какой символ виден в зале пленарных заседаний Бундестага?'
                },
                options: [
                    { de: 'die Fahne der Stadt Berlin', ru: 'Флаг города Берлин' },
                    { de: 'der Bundesadler', ru: 'Федеральный орёл', correct: true },
                    { de: 'der Reichsadler', ru: 'Имперский орел' },
                    { de: 'die Reichskrone', ru: 'Имперская корона' }
                ]
            },
            {
                question: {
                    de: 'Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?',
                    ru: 'Как называется присоединение ГДР к Федеративной Республике Германии в 1990 году?'
                },
                options: [
                    { de: 'NATO-Osterweiterung', ru: 'Расширение НАТО на восток' },
                    { de: 'EU-Osterweiterung', ru: 'Расширение ЕС на восток' },
                    { de: 'Europäische Gemeinschaft', ru: 'Европейское сообщество' },
                    { de: 'Deutsche Wiedervereinigung', ru: 'Объединение Германии', correct: true }
                ]
            },
            {
                question: {
                    de: 'Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?',
                    ru: 'Германия является участником Шенгенского соглашения. Что это означает?'
                },
                options: [
                    {
                        de: 'Deutsche können in viele Länder Europas ohne Passkontrolle reisen.',
                        ru: 'Немцы могут путешествовать в многие страны Европы без паспортного контроля.',
                        correct: true
                    },
                    {
                        de: 'Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.',
                        ru: 'Все люди могут въехать в Германию без контроля личности.'
                    },
                    {
                        de: 'Deutsche können ohne Passkontrolle in jedes Land reisen.',
                        ru: 'Немцы могут путешествовать в любую страну без паспортного контроля.'
                    },
                    {
                        de: 'Deutsche können in jedem Land mit dem Euro bezahlen.',
                        ru: 'Немцы могут расплачиваться евро в любой стране.'
                    }
                ]
            },
            {
                question: {
                    de: 'Wer wird als „Kanzler der Deutschen Einheit“ bezeichnet?',
                    ru: 'Кто называется «Канцлером германского единства»?'
                },
                options: [
                    { de: 'Gerhard Schröder', ru: 'Герхард Шредер' },
                    { de: 'Helmut Kohl', ru: 'Гельмут Коль', correct: true },
                    { de: 'Konrad Adenauer', ru: 'Конрад Аденауэр' },
                    { de: 'Helmut Schmidt', ru: 'Гельмут Шмидт' }
                ],
                explanation: {
                    de: 'Helmut Kohl wird häufig als „Kanzler der Deutschen Einheit“ bezeichnet. Er setzte sich stark für die Wiedervereinigung Deutschlands ein. Unter anderem reichte er das „Zehn-Punkte-Programm zur Überwindung der Teilung Deutschlands und Europas“ im Bundestag ein.',
                    ru: 'Гельмут Коль часто называется «Канцлером германского единства». Он активно продвигал объединение Германии. В частности, он представил в Бундестаге «Программу из десяти пунктов для преодоления разделения Германии и Европы».'
                }
            },
            {
                question: {
                    de: 'Wie viele Einwohner hat Deutschland?',
                    ru: 'Сколько жителей в Германии?'
                },
                options: [
                    { de: '70 Millionen', ru: '70 миллионов' },
                    { de: '78 Millionen', ru: '78 миллионов' },
                    { de: '80 Millionen', ru: '80 миллионов', correct: true },
                    { de: '90 Millionen', ru: '90 миллионов' }
                ]
            },
            {
                question: {
                    de: 'Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?',
                    ru: 'Как ФРГ и ГДР стали одним государством?'
                },
                options: [
                    { de: 'Die Bundesrepublik Deutschland hat die DDR besetzt.', ru: 'Федеративная Республика Германия оккупировала ГДР.' },
                    {
                        de: 'Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.',
                        ru: 'Пять восточных земель присоединились к Федеративной Республике Германия.',
                        correct: true
                    },
                    { de: 'Die westlichen Bundesländer sind der DDR beigetreten.', ru: 'Западные земли присоединились к ГДР.' },
                    { de: 'Die DDR hat die Bundesrepublik Deutschland besetzt.', ru: 'ГДР оккупировала Федеративную Республику Германия.' }
                ]
            },
            {
                question: {
                    de: 'Welche ist die Flagge der Europäischen Union?',
                    ru: 'Каким является флаг Европейского Союза?'
                },
                options: [
                    { de: '1', ru: '1' },
                    { de: '2', ru: '2', correct: true },
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4' }
                ]
            },
            {
                question: {
                    de: 'In welchem Militärbündnis war die DDR Mitglied?',
                    ru: 'Членом какого военного союза была ГДР?'
                },
                options: [
                    { de: 'in der NATO', ru: 'в НАТО' },
                    { de: 'im Rheinbund', ru: 'в Рейнском союзе' },
                    { de: 'im Warschauer Pakt', ru: 'в Варшавском договоре', correct: true },
                    { de: 'im Europabündnis', ru: 'в Европейском союзе' }
                ]
            },
            {
                question: {
                    de: 'In welchem Militärbündnis war die DDR Mitglied?',
                    ru: 'В каком военном союзе состояла ГДР?'
                },
                options: [
                    { de: 'in der NATO', ru: 'в НАТО' },
                    { de: 'im Rheinbund', ru: 'в Рейнском союзе' },
                    { de: 'im Warschauer Pakt', ru: 'в Варшавском договоре', correct: true },
                    { de: 'im Europabündnis', ru: 'в Европейском союзе' }
                ]
            },
            {
                question: {
                    de: 'In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?',
                    ru: 'В какой другой стране есть большое количество немецкоговорящего населения?'
                },
                options: [
                    { de: 'Tschechien', ru: 'Чехия' },
                    { de: 'Norwegen', ru: 'Норвегия' },
                    { de: 'Spanien', ru: 'Испания' },
                    { de: 'Österreich', ru: 'Австрия', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bedeutete im Jahr 1989 in Deutschland das Wort „Montagsdemonstration“?',
                    ru: 'Что означало слово «понедельничная демонстрация» в 1989 году в Германии?'
                },
                options: [
                    { de: 'In der Bundesrepublik waren Demonstrationen nur am Montag erlaubt.', ru: 'В Федеративной Республике Германии демонстрации были разрешены только по понедельникам.' },
                    { de: 'Montags waren Demonstrationen gegen das DDR-Regime.', ru: 'По понедельникам проходили демонстрации против режима ГДР.', correct: true },
                    { de: 'Am ersten Montag im Monat trafen sich in der Bundesrepublik Deutschland Demonstranten.', ru: 'В первый понедельник месяца в Федеративной Республике Германия собирались демонстранты.' },
                    { de: 'Montags demonstrierte man in der DDR gegen den Westen.', ru: 'По понедельникам в ГДР проводили демонстрации против Запада.' }
                ]
            },
            {
                question: {
                    de: 'Was ereignete sich am 17. Juni 1953 in der DDR?',
                    ru: 'Что произошло 17 июня 1953 года в ГДР?'
                },
                options: [
                    { de: 'der feierliche Beitritt zum Warschauer Pakt', ru: 'торжественное вступление в Варшавский договор' },
                    { de: 'landesweite Streiks und ein Volksaufstand', ru: 'общенациональные забастовки и народное восстание', correct: true },
                    { de: 'der 1. SED-Parteitag', ru: '1-й съезд СЕПГ' },
                    { de: 'der erste Besuch Fidel Castros', ru: 'первый визит Фиделя Кастро' }
                ]
            },
            {
                question: {
                    de: 'Was war die „Stasi“?',
                    ru: 'Что такое «Штази»?'
                },
                options: [
                    { de: 'der Geheimdienst im „Dritten Reich“', ru: 'разведывательная служба в «Третьем рейхе»' },
                    { de: 'eine berühmte deutsche Gedenkstätte', ru: 'знаменитый немецкий мемориал' },
                    { de: 'der Geheimdienst der DDR', ru: 'разведывательная служба ГДР', correct: true },
                    { de: 'ein deutscher Sportverein während des Zweiten Weltkrieges', ru: 'немецкий спортивный клуб во время Второй мировой войны' }
                ]
            },
            {
                question: {
                    de: 'Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch ...',
                    ru: 'С вступлением ГДР в Федеративную Республику Германия новые федеральные земли теперь также ...'
                },
                options: [
                    { de: 'zur Europäischen Union.', ru: 'в Европейский союз.', correct: true },
                    { de: 'zum Warschauer Pakt.', ru: 'в Варшавский договор.' },
                    { de: 'zur OPEC.', ru: 'в ОПЕК.' },
                    { de: 'zur Europäischen Verteidigungsgemeinschaft.', ru: 'в Европейское оборонное сообщество.' }
                ]
            },
            {
                question: {
                    de: 'Die Bundesrepublik Deutschland hat die Grenzen von heute seit ...',
                    ru: 'Федеративная Республика Германия имеет нынешние границы с ...'
                },
                options: [
                    { de: '1933', ru: '1933' },
                    { de: '1949', ru: '1949' },
                    { de: '1971', ru: '1971' },
                    { de: '1990', ru: '1990', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie heißt Deutschland mit vollem Namen?',
                    ru: 'Как называется Германия полным именем?'
                },
                options: [
                    { de: 'Bundesstaat Deutschland', ru: 'Федеральное государство Германия' },
                    { de: 'Bundesländer Deutschland', ru: 'Федеральные земли Германии' },
                    { de: 'Bundesrepublik Deutschland', ru: 'Федеративная Республика Германия', correct: true },
                    { de: 'Bundesbezirk Deutschland', ru: 'Федеральный округ Германия' }
                ]
            },
            {
                question: {
                    de: 'Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?',
                    ru: 'Какой из следующих списков содержит только федеральные земли, которые входили в состав бывшей ГДР?'
                },
                options: [
                    { de: 'Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg', ru: 'Нижняя Саксония, Северный Рейн-Вестфалия, Гессен, Шлезвиг-Гольштейн, Бранденбург' },
                    { de: 'Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen', ru: 'Бавария, Баден-Вюртемберг, Рейнланд-Пфальц, Тюрингия, Саксония' },
                    { de: 'Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen', ru: 'Мекленбург-Передняя Померания, Бранденбург, Саксония, Саксония-Анхальт, Тюрингия', correct: true },
                    { de: 'Sachsen, Thüringen, Hessen, Niedersachsen, Brandenburg', ru: 'Саксония, Тюрингия, Гессен, Нижняя Саксония, Бранденбург' }
                ]
            },
            {
                question: {
                    de: 'Welches Land ist ein Nachbarland von Deutschland?',
                    ru: 'Какая страна является соседкой Германии?'
                },
                options: [
                    { de: 'Spanien', ru: 'Испания' },
                    { de: 'Bulgarien', ru: 'Болгария' },
                    { de: 'Norwegen', ru: 'Норвегия' },
                    { de: 'Luxemburg', ru: 'Люксембург', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet der Begriff „europäische Integration“?',
                    ru: 'Что означает термин «европейская интеграция»?'
                },
                options: [
                    { de: 'Damit sind amerikanische Einwanderer in Europa gemeint.', ru: 'Под этим подразумеваются американские иммигранты в Европе.' },
                    { de: 'Der Begriff meint den Einwanderungsstopp nach Europa.', ru: 'Термин означает прекращение иммиграции в Европу.' },
                    { de: 'Damit sind europäische Auswanderer in den USA gemeint.', ru: 'Под этим подразумеваются европейские эмигранты в США.' },
                    { de: 'Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.', ru: 'Термин означает объединение европейских государств в ЕС.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch ...',
                    ru: 'С вступлением ГДР в Федеративную Республику Германия новые федеральные земли теперь также ...'
                },
                options: [
                    { de: 'zur Europäischen Union.', ru: 'в Европейский союз.', correct: true },
                    { de: 'zum Warschauer Pakt.', ru: 'в Варшавский договор.' },
                    { de: 'zur OPEC.', ru: 'в ОПЕК.' },
                    { de: 'zur Europäischen Verteidigungsgemeinschaft.', ru: 'в Европейское оборонное сообщество.' }
                ]
            },
            {
                question: {
                    de: 'Was bedeutet die Abkürzung EU?',
                    ru: 'Что означает аббревиатура ЕС?'
                },
                options: [
                    { de: 'Europäische Unternehmen', ru: 'Европейские предприятия' },
                    { de: 'Europäische Union', ru: 'Европейский Союз', correct: true },
                    { de: 'Einheitliche Union', ru: 'Единый союз' },
                    { de: 'Euro Union', ru: 'Евро союз' }
                ]
            },
            // Вариант 8
            {
                question: {
                    de: 'In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …',
                    ru: 'В Германии у вас наилучшие шансы на хорошо оплачиваемую работу, если вы ...'
                },
                options: [
                    { de: 'katholisch ist.', ru: 'католик.' },
                    { de: 'gut ausgebildet ist.', ru: 'хорошо образован.', correct: true },
                    { de: 'eine Frau ist.', ru: 'женщина.' },
                    { de: 'Mitglied einer Partei ist.', ru: 'член партии.' }
                ]
            },
            {
                question: {
                    de: 'Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …',
                    ru: 'Взрослая женщина хочет получить аттестат зрелости в Германии. Она может сделать это в ...'
                },
                options: [
                    { de: 'einer Hochschule.', ru: 'в университете.' },
                    { de: 'einem Abendgymnasium.', ru: 'вечерней гимназии.', correct: true },
                    { de: 'einer Hauptschule.', ru: 'основной школе.' },
                    { de: 'einer Privatuniversität.', ru: 'частном университете.' }
                ]
            },
            {
                question: {
                    de: 'Wo ist der Sitz des Europäischen Parlaments?',
                    ru: 'Где находится резиденция Европейского парламента?'
                },
                options: [
                    { de: 'London', ru: 'Лондон' },
                    { de: 'Paris', ru: 'Париж' },
                    { de: 'Berlin', ru: 'Берлин' },
                    { de: 'Straßburg', ru: 'Страсбург', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches Land ist ein Nachbarland von Deutschland?',
                    ru: 'Какая страна является соседом Германии?'
                },
                options: [
                    { de: 'Bulgarien', ru: 'Болгария' },
                    { de: 'Griechenland', ru: 'Греция' },
                    { de: 'Portugal', ru: 'Португалия' },
                    { de: 'Tschechien', ru: 'Чехия', correct: true }
                ]
            },
            {
                question: {
                    de: 'Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?',
                    ru: 'На каком празднике в Германии люди носят яркие костюмы и маски?'
                },
                options: [
                    { de: 'am Maifeiertag', ru: 'на Первомай' },
                    { de: 'beim Oktoberfest', ru: 'на Октоберфесте' },
                    { de: 'an Pfingsten', ru: 'на Троицу' },
                    { de: 'am Rosenmontag', ru: 'на Розовый понедельник', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wer wird bei der Europawahl gewählt?',
                    ru: 'Кто избирается на выборах в Европарламент?'
                },
                options: [
                    { de: 'die Europäische Kommission', ru: 'Европейская комиссия' },
                    { de: 'die Länder, die in die EU eintreten dürfen', ru: 'Страны, которые могут вступить в ЕС' },
                    { de: 'die europäische Verfassung', ru: 'Европейская конституция' },
                    { de: 'die Abgeordneten des Europäischen Parlaments', ru: 'Депутаты Европейского парламента', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?',
                    ru: 'Где вы должны зарегистрироваться, если вы переезжаете в Германии?'
                },
                options: [
                    { de: 'beim Standesamt', ru: 'в ЗАГСе' },
                    { de: 'beim Ordnungsamt', ru: 'в ведомстве порядка' },
                    { de: 'beim Gewerbeamt', ru: 'в торговом ведомстве' },
                    { de: 'beim Einwohnermeldeamt', ru: 'в регистрационном ведомстве', correct: true }
                ]
            },
            {
                question: {
                    de: 'Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …',
                    ru: 'При воспитательных проблемах родители в Германии могут получить помощь от ...'
                },
                options: [
                    { de: 'Ordnungsamt.', ru: 'ведомства порядка.' },
                    { de: 'Schulamt.', ru: 'школьного ведомства.' },
                    { de: 'Jugendamt.', ru: 'ведомства по делам молодежи.', correct: true },
                    { de: 'Gesundheitsamt.', ru: 'ведомства здравоохранения.' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland …',
                    ru: 'В Германии ...'
                },
                options: [
                    { de: 'kann man mehrere Ehepartner / Ehepartnerinnen gleichzeitig haben.', ru: 'можно иметь несколько супругов/супруг одновременно.' },
                    { de: 'darf man nicht wieder heiraten, wenn man einmal verheiratet war.', ru: 'нельзя снова жениться/выйти замуж, если уже был в браке.' },
                    { de: 'darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.', ru: 'женщина не может снова выйти замуж, если ее муж умер.' },
                    { de: 'darf man zur gleichen Zeit nur mit einem Partner / einer Partnerin verheiratet sein.', ru: 'можно быть женатым/замужем только за одним партнером/партнершей одновременно.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Die Erziehung der Kinder ist in Deutschland vor allem Aufgabe …',
                    ru: 'Воспитание детей в Германии прежде всего является обязанностью ...'
                },
                options: [
                    { de: 'des Staates.', ru: 'государства.' },
                    { de: 'der Großeltern.', ru: 'бабушек и дедушек.' },
                    { de: 'der Schulen.', ru: 'школ.' },
                    { de: 'der Eltern.', ru: 'родителей.', correct: true }
                ]
            },
            {
                question: {
                    de: 'Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders geschützt. Wie heißt dieser Schutz?',
                    ru: 'Женщина беременна. Вскоре до и после рождения ребенка она особо защищена законом. Как называется эта защита?'
                },
                options: [
                    { de: 'Elternzeit', ru: 'Отпуск по уходу за ребенком' },
                    { de: 'Geburtsvorbereitung', ru: 'Подготовка к родам' },
                    { de: 'Mutterschutz', ru: 'Защита материнства', correct: true },
                    { de: 'Wochenbett', ru: 'Послеродовой период' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man ...',
                    ru: 'В Германии у вас лучшие шансы на хорошо оплачиваемую работу, если вы ...'
                },
                options: [
                    { de: 'katholisch ist.', ru: 'являетесь католиком' },
                    { de: 'gut ausgebildet ist.', ru: 'хорошо образованы', correct: true },
                    { de: 'eine Frau ist.', ru: 'женщина' },
                    { de: 'Mitglied einer Partei ist.', ru: 'являетесь членом партии' }
                ]
            },
            {
                question: {
                    de: 'Ab welchem Alter ist man in Deutschland volljährig?',
                    ru: 'С какого возраста в Германии человек считается совершеннолетним?'
                },
                options: [
                    { de: '16', ru: '16 лет' },
                    { de: '18', ru: '18 лет', correct: true },
                    { de: '19', ru: '19 лет' },
                    { de: '21', ru: '21 год' }
                ]
            },
            {
                question: {
                    de: 'Wie viele Mitgliedstaaten hat die EU heute?',
                    ru: 'Сколько стран являются членами ЕС на сегодняшний день?'
                },
                options: [
                    { de: '21', ru: '21' },
                    { de: '23', ru: '23' },
                    { de: '25', ru: '25' },
                    { de: '28', ru: '28', correct: true }
                ],
                explanation: {
                    de: 'Die Europäische Union (EU) besteht seit dem 1. Juli 2013 aus 28 Mitgliedstaaten: Belgien, Bulgarien, Dänemark, Deutschland, Estland, Finnland, Frankreich, Griechenland, Irland, Italien, Kroatien, Lettland, Litauen, Luxemburg, Malta, Niederlande, Österreich, Polen, Portugal, Rumänien, Schweden, Slowakei, Slowenien, Spanien, Tschechien, Ungarn, Vereinigtes Königreich, & Zypern.',
                    ru: 'С 1 июля 2013 года Европейский Союз (ЕС) состоит из 28 государств-членов: Бельгия, Болгария, Дания, Германия, Эстония, Финляндия, Франция, Греция, Ирландия, Италия, Хорватия, Латвия, Литва, Люксембург, Мальта, Нидерланды, Австрия, Польша, Португалия, Румыния, Швеция, Словакия, Словения, Испания, Чехия, Венгрия, Великобритания и Кипр.'
                }
            },
            {
                question: {
                    de: 'Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?',
                    ru: 'Кто в Германии несет основную ответственность за воспитание детей?'
                },
                options: [
                    { de: 'der Staat', ru: 'государство' },
                    { de: 'die Eltern', ru: 'родители', correct: true },
                    { de: 'die Verwandten', ru: 'родственники' },
                    { de: 'die Schulen', ru: 'школы' }
                ]
            },
            {
                question: {
                    de: 'Der französische Staatspräsident François Mitterrand und der deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?',
                    ru: 'Французский президент Франсуа Миттеран и немецкий канцлер Гельмут Коль вместе почтили память погибших в двух мировых войнах в Вердене. Какая цель Европейского Союза становится ясной на этой встрече?'
                },
                options: [
                    { de: 'Freundschaft zwischen England und Deutschland', ru: 'Дружба между Англией и Германией' },
                    { de: 'Reisefreiheit in alle Länder der EU', ru: 'Свобода передвижения во всех странах ЕС' },
                    { de: 'Frieden und Sicherheit in den Ländern der EU', ru: 'Мир и безопасность в странах ЕС', correct: true },
                    { de: 'einheitliche Feiertage in den Ländern der EU', ru: 'Единые праздничные дни в странах ЕС' }
                ]
            },
            {
                question: {
                    de: 'Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?',
                    ru: 'Госпожа Зегер рожает ребенка. Что ей нужно сделать, чтобы получить пособие по уходу за ребенком?'
                },
                options: [
                    { de: 'Sie muss an ihre Krankenkasse schreiben.', ru: 'Ей нужно написать в свою медицинскую страховую компанию.' },
                    { de: 'Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.', ru: 'Ей не нужно ничего делать, так как она автоматически получит пособие.' },
                    { de: 'Sie muss einen Antrag bei der Elterngeldstelle stellen.', ru: 'Ей нужно подать заявление в управление по выплате пособий на детей.', correct: true },
                    { de: 'Sie muss das Arbeitsamt um Erlaubnis bitten.', ru: 'Ей нужно попросить разрешение в службе занятости.' }
                ]
            },
            {
                question: {
                    de: 'Seit wann bezahlt man in Deutschland mit dem Euro in bar?',
                    ru: 'С какого года в Германии расплачиваются евро наличными?'
                },
                options: [
                    { de: '1995', ru: '1995' },
                    { de: '1998', ru: '1998' },
                    { de: '2002', ru: '2002', correct: true },
                    { de: '2005', ru: '2005' }
                ]
            },
            {
                question: {
                    de: 'Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an ...',
                    ru: 'Взрослая женщина хочет получить аттестат в Германии. Где она может это сделать?'
                },
                options: [
                    { de: 'einer Hochschule.', ru: 'в высшем учебном заведении' },
                    { de: 'einem Abendgymnasium.', ru: 'в вечерней гимназии', correct: true },
                    { de: 'einer Hauptschule.', ru: 'в основной школе' },
                    { de: 'einer Privatuniversität.', ru: 'в частном университете' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland hat ein Kind in der Schule ...',
                    ru: 'В Германии ребенок в школе имеет ...'
                },
                options: [
                    { de: 'Recht auf unbegrenzte Freizeit.', ru: 'право на неограниченное свободное время' },
                    { de: 'Wahlfreiheit für alle Fächer.', ru: 'свободу выбора всех предметов' },
                    { de: 'Anspruch auf Schulgeld.', ru: 'право на школьные сборы' },
                    { de: 'Anwesenheitspflicht.', ru: 'обязанность посещать занятия', correct: true }
                ]
            },
            {
                question: {
                    de: 'An welchen Orten arbeitet das Europäische Parlament?',
                    ru: 'В каких местах работает Европейский парламент?'
                },
                options: [
                    { de: 'Paris, London und Den Haag', ru: 'Париж, Лондон и Гаага' },
                    { de: 'Straßburg, Luxemburg und Brüssel', ru: 'Страсбург, Люксембург и Брюссель', correct: true },
                    { de: 'Rom, Bern und Wien', ru: 'Рим, Берн и Вена' },
                    { de: 'Bonn, Zürich und Mailand', ru: 'Бонн, Цюрих и Милан' }
                ]
            },
            {
                question: {
                    de: '2007 wurde das 50-jährige Jubiläum der „Römischen Verträge“ gefeiert. Was war der Inhalt der Verträge?',
                    ru: 'В 2007 году отмечалось 50-летие «Римских договоров». Каков был предмет договоров?'
                },
                options: [
                    { de: 'Beitritt Deutschlands zur NATO', ru: 'Вступление Германии в НАТО' },
                    { de: 'Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)', ru: 'Создание Европейского экономического сообщества (ЕЭС)', correct: true },
                    { de: 'Verpflichtung Deutschlands zu Reparationsleistungen', ru: 'Обязательство Германии по репарациям' },
                    { de: 'Festlegung der Oder-Neiße-Linie als Ostgrenze', ru: 'Определение линии Одер-Нейсе как восточной границы' }
                ],
                explanation: {
                    de: 'Durch die Römischen Verträge (bzw. den Vertrag von Rom) wurden am 25. März 1957 u.a. die Europäischen Wirtschaftsgemeinschaft (EWG) und Europäische Atomgemeinschaft (EURATOM) gegründet.',
                    ru: 'С помощью Римских договоров (или Римского договора) 25 марта 1957 года были созданы Европейское экономическое сообщество (ЕЭС) и Европейское сообщество по атомной энергии (Евратом).'
                }
            },
            {
                question: {
                    de: 'Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …',
                    ru: 'Мужчина хочет в 30 лет в Германии получить аттестат зрелости. Где он может это сделать? В...'
                },
                options: [
                    { de: 'einer Hochschule', ru: 'в университете' },
                    { de: 'einem Abendgymnasium', ru: 'в вечерней гимназии', correct: true },
                    { de: 'einer Hauptschule', ru: 'в основной школе' },
                    { de: 'einer Privatuniversität', ru: 'в частном университете' }
                ]
            },
            {
                question: {
                    de: 'Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?',
                    ru: 'Майк и Сибилла хотят устроить демонстрацию на улице в своем немецком городе с друзьями. Что они должны сделать заранее?'
                },
                options: [
                    { de: 'Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.', ru: 'Они ничего не должны делать. В Германии можно демонстрировать в любое время и в любом месте.' },
                    { de: 'Sie müssen die Demonstration anmelden.', ru: 'Они должны зарегистрировать демонстрацию.', correct: true },
                    { de: 'Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.', ru: 'Они ничего не могут сделать, потому что демонстрации в Германии в принципе запрещены.' },
                    { de: 'Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.', ru: 'Майку и Сибилле нужно создать новое объединение, потому что только объединения могут проводить демонстрации.' }
                ]
            },
            {
                question: {
                    de: 'Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?',
                    ru: 'Пара хочет открыть ресторан в Германии. Что им для этого нужно?'
                },
                options: [
                    { de: 'eine Erlaubnis der Polizei', ru: 'разрешение полиции' },
                    { de: 'eine Genehmigung einer Partei', ru: 'разрешение партии' },
                    { de: 'eine Genehmigung des Einwohnermeldeamts', ru: 'разрешение регистрационного офиса' },
                    { de: 'eine Gaststättenerlaubnis von der zuständigen Behörde', ru: 'лицензия на ресторан от соответствующего органа', correct: true }
                ]
            },
            {
                question: {
                    de: 'Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …',
                    ru: 'Центр профессиональной информации (BIZ) при Федеральном агентстве занятости в Германии помогает с...'
                },
                options: [
                    { de: 'Rentenberechnung.', ru: 'расчетом пенсий' },
                    { de: 'Lehrstellensuche.', ru: 'поиском учебного места', correct: true },
                    { de: 'Steuererklärung.', ru: 'налоговой декларацией' },
                    { de: 'Krankenversicherung.', ru: 'медицинским страхованием' }
                ]
            },
            {
                question: {
                    de: 'Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?',
                    ru: 'Какими договорами Федеративная Республика Германия присоединилась к Европейскому экономическому сообществу с другими государствами?'
                },
                options: [
                    { de: 'durch die „Hamburger Verträge“', ru: 'по "Гамбургским договорам"' },
                    { de: 'durch die „Römischen Verträge“', ru: 'по "Римским договорам"', correct: true },
                    { de: 'durch die „Pariser Verträge“', ru: 'по "Парижским договорам"' },
                    { de: 'durch die „Londoner Verträge“', ru: 'по "Лондонским договорам"' }
                ],
                explanation: {
                    de: 'Die Römischen Verträge (bzw. der Vertrag von Rom) wurden am 25. März 1957 von Belgien, der Bundesrepublik Deutschland, Frankreich, Italien, Luxemburg und den Niederlanden in Rom unterzeichnet und traten am 1. Januar 1958 in Kraft. Durch die Verträge wurden u.a. die Europäische Wirtschaftsgemeinschaft (EWG) und Europäische Atomgemeinschaft (EURATOM) gegründet.',
                    ru: 'Римские договоры (или Римский договор) были подписаны 25 марта 1957 года Бельгией, Федеративной Республикой Германией, Францией, Италией, Люксембургом и Нидерландами в Риме и вступили в силу 1 января 1958 года. С помощью этих договоров были созданы Европейское экономическое сообщество (ЕЭС) и Европейское сообщество по атомной энергии (Евратом).'
                }
            },
            {
                question: {
                    de: 'Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?',
                    ru: 'Кто решает, пойдет ли ребенок в детский сад в Германии?'
                },
                options: [
                    { de: 'der Staat', ru: 'государство' },
                    { de: 'die Bundesländer', ru: 'федеральные земли' },
                    { de: 'die Eltern/die Erziehungsberechtigten', ru: 'родители/опекуны', correct: true },
                    { de: 'die Schulen', ru: 'школы' }
                ]
            },
            {
                question: {
                    de: 'Wer darf in Deutschland nicht als Paar zusammenleben?',
                    ru: 'Кому в Германии запрещено жить как пара?'
                },
                options: [
                    { de: 'Hans (20 Jahre) und Marie (19 Jahre)', ru: 'Ганс (20 лет) и Мари (19 лет)' },
                    { de: 'Tom (20 Jahre) und Klaus (45 Jahre)', ru: 'Том (20 лет) и Клаус (45 лет)' },
                    { de: 'Sofie (35 Jahre) und Lisa (40 Jahre)', ru: 'Софи (35 лет) и Лиза (40 лет)' },
                    { de: 'Anne (13 Jahre) und Tim (25 Jahre)', ru: 'Анна (13 лет) и Тим (25 лет)', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?',
                    ru: 'Какое школьное образование обычно необходимо для поступления в университет в Германии?'
                },
                options: [
                    { de: 'das Abitur', ru: 'аттестат зрелости', correct: true },
                    { de: 'ein Diplom', ru: 'диплом' },
                    { de: 'die Prokura', ru: 'прокура' },
                    { de: 'eine Gesellenprüfung', ru: 'квалификационный экзамен' }
                ]
            },
            {
                question: {
                    de: 'Wenn man in Deutschland ein Kind schlägt, ...',
                    ru: 'Если ударить ребенка в Германии, ...'
                },
                options: [
                    { de: 'geht das niemanden etwas an.', ru: 'это никого не касается' },
                    { de: 'geht das nur die Familie etwas an.', ru: 'это касается только семьи' },
                    { de: 'kann man dafür nicht bestraft werden.', ru: 'за это не могут наказать' },
                    { de: 'kann man dafür bestraft werden.', ru: 'за это могут наказать', correct: true }
                ]
            },
            {
                question: {
                    de: 'Was darf das Jugendamt in Deutschland?',
                    ru: 'Что имеет право делать служба по делам молодежи в Германии?'
                },
                options: [
                    { de: 'Es entscheidet, welche Schule das Kind besucht.', ru: 'Она решает, в какую школу пойдет ребенок' },
                    { de: 'Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.', ru: 'Она может забрать ребенка из семьи, если его бьют или он голодает', correct: true },
                    { de: 'Es bezahlt das Kindergeld an die Eltern.', ru: 'Она выплачивает пособие на ребенка родителям' },
                    { de: 'Es kontrolliert, ob das Kind einen Kindergarten besucht.', ru: 'Она контролирует посещение ребенком детского сада' }
                ]
            },
            {
                question: {
                    de: 'In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, ...',
                    ru: 'В Германии несовершеннолетние с 14 лет могут быть привлечены к уголовной ответственности. Это означает: подростки от 14 лет и старше, нарушившие законы, ...'
                },
                options: [
                    { de: 'werden wie Erwachsene behandelt.', ru: 'их рассматривают как взрослых' },
                    { de: 'teilen die Strafe mit ihren Eltern.', ru: 'делят наказание с родителями' },
                    { de: 'werden nicht bestraft.', ru: 'не наказываются' },
                    { de: 'werden bestraft.', ru: 'наказываются', correct: true }
                ]
            },
            // Вариант 9
            {
                question: {
                    de: 'Was braucht man in Deutschland für eine Ehescheidung?',
                    ru: 'Что нужно для развода в Германии?'
                },
                options: [
                    { de: 'die Einwilligung der Eltern', ru: 'согласие родителей' },
                    { de: 'ein Attest eines Arztes / einer Ärztin', ru: 'справка от врача' },
                    { de: 'die Einwilligung der Kinder', ru: 'согласие детей' },
                    { de: 'die Unterstützung eines Anwalts / einer Anwältin', ru: 'поддержка адвоката', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welche Religion hat die europäische und deutsche Kultur geprägt?',
                    ru: 'Какая религия оказала влияние на европейскую и немецкую культуру?'
                },
                options: [
                    { de: 'der Hinduismus', ru: 'индуизм' },
                    { de: 'das Christentum', ru: 'христианство', correct: true },
                    { de: 'der Buddhismus', ru: 'буддизм' },
                    { de: 'der Islam', ru: 'ислам' }
                ]
            },
            {
                question: {
                    de: 'In den meisten Mietshäusern in Deutschland gibt es eine „Hausordnung“. Was steht in einer solchen „Hausordnung“? Sie nennt …',
                    ru: 'В большинстве жилых домов в Германии есть «домашний порядок». Что указано в таком «домашнем порядке»? Указывается ...'
                },
                options: [
                    { de: 'Regeln für die Benutzung öffentlicher Verkehrsmittel.', ru: 'правила использования общественного транспорта' },
                    { de: 'alle Mieter und Mieterinnen im Haus.', ru: 'все арендаторы в доме' },
                    {
                        de: 'Regeln, an die sich alle Bewohner und Bewohnerinnen halten müssen.',
                        ru: 'правила, которых должны придерживаться все жильцы',
                        correct: true
                    },
                    { de: 'die Adresse des nächsten Ordnungsamtes.', ru: 'адрес ближайшего административного органа' }
                ]
            },
            {
                question: {
                    de: 'Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?',
                    ru: 'Молодая женщина хочет получить водительские права. Она боится экзамена, потому что её родной язык не немецкий. Что правильно?'
                },
                options: [
                    {
                        de: 'Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.',
                        ru: 'Она должна прожить в Германии не менее десяти лет, прежде чем сможет получить водительские права.'
                    },
                    {
                        de: 'Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.',
                        ru: 'Она может сдать теоретический экзамен на своем родном языке. Доступно более десяти языков.',
                        correct: true
                    },
                    {
                        de: 'Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.',
                        ru: 'Если она не знает немецкого, ей не разрешат иметь водительские права.'
                    },
                    {
                        de: 'Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.',
                        ru: 'Она должна получать права в той стране, где говорят на её языке.'
                    }
                ]
            },
            {
                question: {
                    de: 'Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …',
                    ru: 'Женщина с двухлетним ребёнком подала заявление на работу в Германии. Что является примером дискриминации? Она не получает работу только потому, что она …'
                },
                options: [
                    { de: 'kein Englisch spricht.', ru: 'не говорит по-английски' },
                    { de: 'zu hohe Gehaltsvorstellungen hat.', ru: 'имеет слишком высокие ожидания по зарплате' },
                    { de: 'keine Erfahrungen in diesem Beruf hat.', ru: 'не имеет опыта в этой профессии' },
                    {
                        de: 'Mutter ist.',
                        ru: 'мать',
                        correct: true
                    }
                ]
            },
            {
                question: {
                    de: 'Bei Erziehungsproblemen gehen Sie in Deutschland …',
                    ru: 'При проблемах с воспитанием детей в Германии вы идете …'
                },
                options: [
                    { de: 'zum Arzt / zur Ärztin.', ru: 'к врачу' },
                    { de: 'zum Gesundheitsamt.', ru: 'в департамент здравоохранения' },
                    { de: 'zum Einwohnermeldeamt.', ru: 'в регистрационное ведомство' },
                    {
                        de: 'zum Jugendamt.',
                        ru: 'в ведомство по делам молодежи',
                        correct: true
                    }
                ]
            },
            {
                question: {
                    de: 'Welches Ehrenamt müssen deutsche Staatsbürger / Staatsbürgerinnen übernehmen, wenn sie dazu aufgefordert werden?',
                    ru: 'Какую волонтерскую работу обязаны выполнять граждане Германии, если их об этом попросят?'
                },
                options: [
                    { de: 'Vereinstrainer / Vereinstrainerin', ru: 'тренер в клубе' },
                    { de: 'Bibliotheksaufsicht', ru: 'библиотекарь' },
                    {
                        de: 'Wahlhelfer / Wahlhelferin',
                        ru: 'помощник на выборах',
                        correct: true
                    },
                    { de: 'Lehrer / Lehrerin', ru: 'учитель' }
                ]
            },
            {
                question: {
                    de: 'Was man für die Arbeit können muss, ändert sich in der Zukunft sehr schnell. Was kann man tun?',
                    ru: 'Навыки, необходимые для работы, быстро меняются в будущем. Что можно сделать?'
                },
                options: [
                    { de: 'Es ist egal, was man lernt.', ru: 'Не важно, чему учиться.' },
                    {
                        de: 'Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.',
                        ru: 'Дети учатся в школе всему, что важно для работы. После школы учиться не нужно.'
                    },
                    {
                        de: 'Erwachsene müssen auch nach der Ausbildung immer weiter lernen.',
                        ru: 'Взрослые должны продолжать учиться даже после окончания образования.',
                        correct: true
                    },
                    {
                        de: 'Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.',
                        ru: 'Все должны раньше завершать работу, потому что всё меняется.'
                    }
                ]
            },
            {
                question: {
                    de: 'Bei welchem Amt muss man in Deutschland in der Regel seinen Hund anmelden?',
                    ru: 'В каком ведомстве обычно регистрируют собаку в Германии?'
                },
                options: [
                    { de: 'beim Finanzamt', ru: 'в налоговом управлении' },
                    { de: 'beim Einwohnermeldeamt', ru: 'в регистрационном ведомстве' },
                    {
                        de: 'bei der Kommune (Stadt oder Gemeinde)',
                        ru: 'в коммунальном управлении (город или община)',
                        correct: true
                    },
                    { de: 'beim Gesundheitsamt', ru: 'в департаменте здравоохранения' }
                ]
            },
            {
                question: {
                    de: 'Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?',
                    ru: 'Фрау Фрост работает в офисе на постоянной основе. Что ей не нужно оплачивать из своей зарплаты?'
                },
                options: [
                    {
                        de: 'Umsatzsteuer',
                        ru: 'налог с оборота',
                        correct: true
                    },
                    { de: 'Lohnsteuer', ru: 'подоходный налог' },
                    {
                        de: 'Beiträge zur Arbeitslosenversicherung',
                        ru: 'взносы в страхование по безработице'
                    },
                    {
                        de: 'Beiträge zur Renten- und Krankenversicherung',
                        ru: 'взносы в пенсионное и медицинское страхование'
                    }
                ]
            },
            {
                question: {
                    de: 'Wann beginnt die gesetzliche Nachtruhe in Deutschland?',
                    ru: 'Когда начинается установленное законом время тишины в Германии?'
                },
                options: [
                    { de: 'wenn die Sonne untergeht', ru: 'когда заходит солнце' },
                    { de: 'um 22 Uhr', ru: 'в 22 часа', correct: true },
                    { de: 'wenn die Nachbarn schlafen gehen', ru: 'когда соседи ложатся спать' },
                    { de: 'um 0 Uhr, Mitternacht', ru: 'в полночь' }
                ]
            },
            {
                question: {
                    de: 'Welche Organisation in einer Firma hilft den Arbeitnehmern und Arbeitnehmerinnen bei Problemen mit dem Arbeitgeber / der Arbeitgeberin?',
                    ru: 'Какая организация в компании помогает работникам при проблемах с работодателем?'
                },
                options: [
                    { de: 'der Betriebsrat', ru: 'производственный совет', correct: true },
                    { de: 'der Betriebsprüfer / die Betriebsprüferin', ru: 'аудитор компании' },
                    { de: 'die Betriebsgruppe', ru: 'производственная группа' },
                    { de: 'das Betriebsmanagement', ru: 'управление компании' }
                ]
            },
            {
                question: {
                    de: 'Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …',
                    ru: 'Два друга хотят посетить общественный бассейн в Германии. Оба имеют темный цвет кожи и их не пускают. Какое право нарушено в данной ситуации? Право на ...'
                },
                options: [
                    { de: 'Meinungsfreiheit', ru: 'свободу слова' },
                    { de: 'Gleichbehandlung', ru: 'равное обращение', correct: true },
                    { de: 'Versammlungsfreiheit', ru: 'свободу собраний' },
                    { de: 'Freizügigkeit', ru: 'свободу передвижения' }
                ]
            },
            {
                question: {
                    de: 'Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?',
                    ru: 'Что вы сделаете, если получите неправильный счет от немецкого учреждения?'
                },
                options: [
                    { de: 'Ich lasse die Rechnung liegen.', ru: 'Я оставлю счет как есть.' },
                    { de: 'Ich lege Widerspruch bei der Behörde ein.', ru: 'Я подам возражение в учреждение.', correct: true },
                    { de: 'Ich schicke die Rechnung an die Behörde zurück.', ru: 'Я отправлю счет обратно в учреждение.' },
                    { de: 'Ich gehe mit der Rechnung zum Finanzamt.', ru: 'Я пойду с этим счетом в налоговую службу.' }
                ]
            },
            {
                question: {
                    de: 'Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …',
                    ru: 'Мужчина в инвалидной коляске подал заявку на работу бухгалтером. Что является примером дискриминации? Он не получает работу только потому, что он ...'
                },
                options: [
                    { de: 'im Rollstuhl sitzt.', ru: 'сидит в инвалидной коляске.', correct: true },
                    { de: 'keine Erfahrung hat.', ru: 'не имеет опыта.' },
                    { de: 'zu hohe Gehaltsvorstellungen hat.', ru: 'имеет слишком высокие ожидания по зарплате.' },
                    { de: 'kein Englisch spricht.', ru: 'не говорит по-английски.' }
                ]
            },
            {
                question: {
                    de: 'Aus welchem Land sind die meisten Migranten / Migrantinnen nach Deutschland gekommen?',
                    ru: 'Из какой страны в Германию прибыло больше всего мигрантов?'
                },
                options: [
                    { de: 'Italien', ru: 'Италия' },
                    { de: 'Polen', ru: 'Польша' },
                    { de: 'Marokko', ru: 'Марокко' },
                    { de: 'Türkei', ru: 'Турция', correct: true }
                ]
            },
            {
                question: {
                    de: 'Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?',
                    ru: 'Вы умышленно открыли письмо в Германии, которое было адресовано другому человеку. Что вы нарушили?'
                },
                options: [
                    { de: 'das Schweigerecht', ru: 'право на молчание' },
                    { de: 'das Briefgeheimnis', ru: 'тайну переписки', correct: true },
                    { de: 'die Schweigepflicht', ru: 'обязательство сохранять молчание' },
                    { de: 'die Meinungsfreiheit', ru: 'свободу слова' }
                ]
            },
            {
                question: {
                    de: 'Die Volkshochschule in Deutschland ist eine Einrichtung …',
                    ru: 'Народный университет в Германии - это учреждение ...'
                },
                options: [
                    { de: 'für den Religionsunterricht.', ru: 'для религиозного обучения.' },
                    { de: 'nur für Jugendliche.', ru: 'только для подростков.' },
                    { de: 'zur Weiterbildung.', ru: 'для повышения квалификации.', correct: true },
                    { de: 'nur für Rentner und Rentnerinnen.', ru: 'только для пенсионеров.' }
                ]
            },
            {
                question: {
                    de: 'Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?',
                    ru: 'Вы купили телевизор в Германии. Дома распаковываете телевизор, но он не работает. Телевизор сломан. Что вы можете сделать?'
                },
                options: [
                    { de: 'eine Anzeige schreiben', ru: 'написать жалобу' },
                    { de: 'den Fernseher reklamieren', ru: 'подать рекламацию на телевизор', correct: true },
                    { de: 'das Gerät ungefragt austauschen', ru: 'заменить устройство без уведомления' },
                    { de: 'die Garantie verlängern', ru: 'продлить гарантию' }
                ]
            },
            {
                question: {
                    de: 'Wann beginnt die gesetzliche Nachtruhe in Deutschland?',
                    ru: 'Когда начинается установленное законом время тишины в Германии?'
                },
                options: [
                    { de: 'wenn die Sonne untergeht', ru: 'когда заходит солнце' },
                    { de: 'um 22 Uhr', ru: 'в 22 часа', correct: true },
                    { de: 'wenn die Nachbarn schlafen gehen', ru: 'когда соседи ложатся спать' },
                    { de: 'um 0 Uhr, Mitternacht', ru: 'в полночь' }
                ]
            },
            {
                question: {
                    de: 'Wann beginnt die gesetzliche Nachtruhe in Deutschland?',
                    ru: 'Когда начинается установленный законом ночной покой в Германии?'
                },
                options: [
                    { de: 'wenn die Sonne untergeht', ru: 'когда заходит солнце' },
                    { de: 'um 22 Uhr', ru: 'в 22 часа', correct: true },
                    { de: 'wenn die Nachbarn schlafen gehen', ru: 'когда соседи ложатся спать' },
                    { de: 'um 0 Uhr, Mitternacht', ru: 'в 0 часов, полночь' }
                ]
            },
            {
                question: {
                    de: 'Welche Organisation in einer Firma hilft den Arbeitnehmern und Arbeitnehmerinnen bei Problemen mit dem Arbeitgeber / der Arbeitgeberin?',
                    ru: 'Какая организация в компании помогает работникам в решении проблем с работодателем?'
                },
                options: [
                    { de: 'der Betriebsrat', ru: 'производственный совет', correct: true },
                    { de: 'der Betriebsprüfer / die Betriebsprüferin', ru: 'проверяющий по предприятиям' },
                    { de: 'die Betriebsgruppe', ru: 'группировка по предприятиям' },
                    { de: 'das Betriebsmanagement', ru: 'управление предприятия' }
                ]
            },
            {
                question: {
                    de: 'Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …',
                    ru: 'Два друга хотят посетить общественный бассейн в Германии. Оба имеют темный цвет кожи и поэтому не допущены внутрь. Какое право нарушено в этой ситуации? Право на …'
                },
                options: [
                    { de: 'Meinungsfreiheit', ru: 'свобода слова' },
                    { de: 'Gleichbehandlung', ru: 'равное обращение', correct: true },
                    { de: 'Versammlungsfreiheit', ru: 'свобода собраний' },
                    { de: 'Freizügigkeit', ru: 'свобода передвижения' }
                ]
            },
            {
                question: {
                    de: 'Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?',
                    ru: 'Вы купили телевизор в Германии. Дома вы распаковали телевизор, но он не работает. Телевизор сломан. Что вы можете сделать?'
                },
                options: [
                    { de: 'eine Anzeige schreiben', ru: 'написать заявление' },
                    { de: 'den Fernseher reklamieren', ru: 'рекламировать телевизор', correct: true },
                    { de: 'das Gerät ungefragt austauschen', ru: 'заменить устройство без согласия' },
                    { de: 'die Garantie verlängern', ru: 'продлить гарантию' }
                ]
            },
            {
                question: {
                    de: 'Die Volkshochschule in Deutschland ist eine Einrichtung …',
                    ru: 'Народный университет в Германии - это учреждение …'
                },
                options: [
                    { de: 'für den Religionsunterricht', ru: 'для религиозного образования' },
                    { de: 'nur für Jugendliche', ru: 'только для молодежи' },
                    { de: 'zur Weiterbildung', ru: 'для повышения квалификации', correct: true },
                    { de: 'nur für Rentner und Rentnerinnen', ru: 'только для пенсионеров' }
                ]
            },
            {
                question: {
                    de: 'Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?',
                    ru: 'Что вы делаете, если получаете неправильный счет от немецкого ведомства?'
                },
                options: [
                    { de: 'Ich lasse die Rechnung liegen', ru: 'Я оставлю счет без внимания' },
                    { de: 'Ich lege Widerspruch bei der Behörde ein', ru: 'Я подам возражение в ведомство', correct: true },
                    { de: 'Ich schicke die Rechnung an die Behörde zurück', ru: 'Я верну счет в ведомство' },
                    { de: 'Ich gehe mit der Rechnung zum Finanzamt', ru: 'Я пойду с счетом в налоговую службу' }
                ]
            },
            {
                question: {
                    de: 'Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …',
                    ru: 'Мужчина в инвалидной коляске подал заявку на должность бухгалтера. Какой пример дискриминации? Он не получил работу только потому, что он …'
                },
                options: [
                    { de: 'keine Erfahrung hat', ru: 'не имеет опыта' },
                    { de: 'zu hohe Gehaltsvorstellungen hat', ru: 'имеет слишком высокие ожидания по зарплате' },
                    { de: 'kein Englisch spricht', ru: 'не говорит по-английски' },
                    { de: 'im Rollstuhl sitzt', ru: 'сидит в инвалидной коляске', correct: true }
                ]
            },
            {
                question: {
                    de: 'Aus welchem Land sind die meisten Migranten / Migrantinnen nach Deutschland gekommen?',
                    ru: 'Из какой страны прибыло большинство мигрантов в Германию?'
                },
                options: [
                    { de: 'Italien', ru: 'Италия' },
                    { de: 'Polen', ru: 'Польша' },
                    { de: 'Marokko', ru: 'Марокко' },
                    { de: 'Türkei', ru: 'Турция', correct: true }
                ]
            },
            {
                question: {
                    de: 'Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?',
                    ru: 'Вы сознательно открыли письмо в Германии, адресованное другому человеку. Что вы не учли?'
                },
                options: [
                    { de: 'das Schweigerecht', ru: 'право на молчание' },
                    { de: 'das Briefgeheimnis', ru: 'тайна переписки', correct: true },
                    { de: 'die Schweigepflicht', ru: 'обязанность молчания' },
                    { de: 'die Meinungsfreiheit', ru: 'свобода слова' }
                ]
            },
            {
                question: {
                    de: 'Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …',
                    ru: 'Если вы хотите оспорить неверное налоговое уведомление в Германии, вы должны …'
                },
                options: [
                    { de: 'nichts machen', ru: 'ничего не делать' },
                    { de: 'den Bescheid wegwerfen', ru: 'выбросить уведомление' },
                    { de: 'Einspruch einlegen', ru: 'подать возражение', correct: true },
                    { de: 'warten, bis ein anderer Bescheid kommt', ru: 'ждать, пока придет другое уведомление' }
                ]
            },
            {
                question: {
                    de: 'Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?',
                    ru: 'Куда нужно пойти в первую очередь в Германии, если хотите пожениться?'
                },
                options: [
                    { de: 'zum Einwohnermeldeamt', ru: 'в паспортный стол' },
                    { de: 'zum Ordnungsamt', ru: 'в управление порядка' },
                    { de: 'zur Agentur für Arbeit', ru: 'в агентство по труду' },
                    { de: 'zum Standesamt', ru: 'в ЗАГС', correct: true }
                ]
            },
            {
                question: {
                    de: 'In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Einschulung einen Anspruch auf ...',
                    ru: 'В Германии дети в возрасте от трех лет до поступления в школу имеют право на...'
                },
                options: [
                    { de: 'monatliches Taschengeld.', ru: 'ежемесячные карманные деньги.' },
                    { de: 'einen Kindergartenplatz.', ru: 'место в детском саду', correct: true },
                    { de: 'einen Platz in einem Sportverein.', ru: 'место в спортивном клубе.' },
                    { de: 'einen Ferienpass.', ru: 'путевку на каникулы.' }
                ]
            },
            {
                question: {
                    de: 'Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?',
                    ru: 'Куда нужно пойти в первую очередь в Германии, если хотите пожениться?'
                },
                options: [
                    { de: 'zum Einwohnermeldeamt', ru: 'в паспортный стол' },
                    { de: 'zum Ordnungsamt', ru: 'в управление порядка' },
                    { de: 'zur Agentur für Arbeit', ru: 'в агентство по труду' },
                    { de: 'zum Standesamt', ru: 'в ЗАГС', correct: true }
                ]
            },
            // Вариант 10
            {
                question: {
                    de: 'Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?',
                    ru: 'Куда нужно сначала пойти в Германии, если хотите пожениться?'
                },
                options: [
                    { de: 'zum Einwohnermeldeamt', ru: 'в паспортный стол' },
                    { de: 'zum Ordnungsamt', ru: 'в управление порядка' },
                    { de: 'zur Agentur für Arbeit', ru: 'в агентство по труду' },
                    { de: 'zum Standesamt', ru: 'в ЗАГС', correct: true }
                ]
            },
            {
                question: {
                    de: 'In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Einschulung einen Anspruch auf ...',
                    ru: 'В Германии дети от трех лет до поступления в школу имеют право на ...'
                },
                options: [
                    { de: 'monatliches Taschengeld', ru: 'ежемесячные карманные деньги' },
                    { de: 'einen Kindergartenplatz', ru: 'место в детском саду', correct: true },
                    { de: 'einen Platz in einem Sportverein', ru: 'место в спортивной секции' },
                    { de: 'einen Ferienpass', ru: 'путевку на каникулы' }
                ]
            },
            {
                question: {
                    de: 'Welches Bundesland ist ein Stadtstaat?',
                    ru: 'Какой федеральный регион является городом-государством?'
                },
                options: [
                    { de: 'Saarland', ru: 'Саар' },
                    { de: 'Brandenburg', ru: 'Бранденбург' },
                    { de: 'Hessen', ru: 'Гессен' },
                    { de: 'Berlin', ru: 'Берлин', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wo können Sie sich in Berlin über politische Themen informieren?',
                    ru: 'Где можно узнать о политических темах в Берлине?'
                },
                options: [
                    { de: 'beim Ordnungsamt der Gemeinde', ru: 'в управлении порядка общины' },
                    { de: 'bei den Kirchen', ru: 'в церкви' },
                    { de: 'bei der Verbraucherzentrale', ru: 'в центре защиты прав потребителей' },
                    { de: 'bei der Landeszentrale für politische Bildung', ru: 'в региональном центре политического образования', correct: true }
                ]
            },
            {
                question: {
                    de: 'Welches Wappen gehört zum Bundesland Berlin?',
                    ru: 'Какой герб принадлежит федеральной земле Берлин?'
                },
                options: [
                    { de: '1', ru: '1' },
                    { de: '2', ru: '2' },
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4', correct: true }
                ]
            },
            {
                question: {
                    de: 'Aus welchem Land kamen die ersten Gastarbeiter / Gastarbeiterinnen nach Deutschland?',
                    ru: 'Из какой страны прибыли первые гостевые рабочие в Германию?'
                },
                options: [
                    { de: 'Spanien', ru: 'Испания' },
                    { de: 'Portugal', ru: 'Португалия' },
                    { de: 'Türkei', ru: 'Турция' },
                    { de: 'Italien', ru: 'Италия', correct: true }
                ],
                explanation: {
                    de: 'Die ersten Gastarbeiter / Gastarbeiterinnen kamen nach Deutschland aus Italien.',
                    ru: 'Первые гостевые рабочие прибыли в Германию из Италии.'
                }
            },
            {
                question: {
                    de: 'Welchen Senator / welche Senatorin hat Berlin nicht?',
                    ru: 'Какого сенатора нет в Берлине?'
                },
                options: [
                    { de: 'Finanzsenator / Finanzsenatorin', ru: 'Сенатор по финансам' },
                    { de: 'Innensenator / Innensenatorin', ru: 'Сенатор по внутренним делам' },
                    { de: 'Justizsenator / Justizsenatorin', ru: 'Сенатор по юстиции' },
                    { de: 'Senator / Senatorin für Außenbeziehungen', ru: 'Сенатор по внешним связям', correct: true }
                ]
            },
            {
                question: {
                    de: 'Für wie viele Jahre wird das Landesparlament in Berlin gewählt?',
                    ru: 'На сколько лет избирается региональный парламент в Берлине?'
                },
                options: [
                    { de: '3', ru: '3' },
                    { de: '4', ru: '4' },
                    { de: '5', ru: '5', correct: true },
                    { de: '6', ru: '6' }
                ]
            },
            {
                question: {
                    de: 'Welches ist ein Bezirk von Berlin?',
                    ru: 'Каким является район Берлина?'
                },
                options: [
                    { de: 'Altona', ru: 'Альтона' },
                    { de: 'Prignitz', ru: 'Принниц' },
                    { de: 'Demmin', ru: 'Деммин' },
                    { de: 'Pankow', ru: 'Панков', correct: true }
                ]
            },
            {
                question: {
                    de: 'Ab welchem Alter darf man in Berlin bei Kommunalwahlen (Wahl der Bezirksverordnetenversammlung) wählen?',
                    ru: 'С какого возраста можно голосовать на муниципальных выборах в Берлине?'
                },
                options: [
                    { de: '14', ru: '14' },
                    { de: '18', ru: '18' },
                    { de: '20', ru: '20' },
                    { de: '16', ru: '16', correct: true }
                ]
            },
            {
                question: {
                    de: 'Wie nennt man den Regierungschef / die Regierungschefin des Stadtstaates Berlin?',
                    ru: 'Как называется глава правительства городского государства Берлин?'
                },
                options: [
                    { de: 'Ministerpräsident / Ministerpräsidentin', ru: 'Министр-президент' },
                    { de: 'Oberbürgermeister / Oberbürgermeisterin', ru: 'Обербургомистр' },
                    { de: 'Präsident / Präsidentin des Senats', ru: 'Президент сената' },
                    {
                        de: 'Regierender Bürgermeister / Regierende Bürgermeisterin',
                        ru: 'Правящий бургомистр',
                        correct: true
                    }
                ]
            },
            {
                question: {
                    de: 'Welche Farben hat die Landesflagge von Berlin?',
                    ru: 'Какие цвета у государственного флага Берлина?'
                },
                options: [
                    { de: 'blau-weiß-rot', ru: 'сине-бело-красный' },
                    {
                        de: 'weiß-rot',
                        ru: 'бело-красный',
                        correct: true
                    },
                    { de: 'grün-weiß-rot', ru: 'зелено-бело-красный' },
                    { de: 'schwarz-gold', ru: 'черно-золотой' }
                ]
            },
            {
                question: {
                    de: 'Welches Bundesland ist Berlin?',
                    ru: 'Какой федеральный округ - Берлин?'
                },
                options: [
                    { de: '1', ru: '1' },
                    { de: '2', ru: '2' },
                    { de: '3', ru: '3' },
                    {
                        de: '4',
                        ru: '4',
                        correct: true
                    }
                ]
            }
        ]
    }
];

export default germanTest;
