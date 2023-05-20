const jobs = [
  {
    title: 'Human Resource Manager',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 1',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 1',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 1',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 1',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 2',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 2',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 2',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 2',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 3',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 3',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 3',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 3',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 4',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 4',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 4',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 4',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 5',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 5',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 5',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 5',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Human Resource Manager 6',
    type: 'Vollzeit',
    location: 'Berlin',
    field: `Verwaltung,Produktmanagement`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Human Resource Manager 6',
    type_gb: 'Full-Time',
    location_gb: 'Berlin',
    field_gb: `Adminstration,Product Management`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  },
  {
    title: 'Wiederholer 6',
    type: 'Teilzeit',
    location: 'Hamburg',
    field: `Finanzen/Kontrolle,Technologieentwicklung`,
    about: `{
        "introduction": "Für unser Team „TVöD“ im Bereich Content & Product Creation suchen wir zum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "DAS ERWARTET DICH:",
                
                "subtitle": "",
                
                "detail": [
                    "Du bist fachlich kompetente:r Ansprechpartner:in und Coach für Dein Team (8 Mitarbeiter:innen)",
                    "Du unterstützt dein Team und bist auch selbst maßgeblich für operative Aufgaben z.B. für Produkte, Inhalte und Projekte verantwortlich",
                    "Du koordinierst ein externes Herausgeber- und Autoren-Netzwerk aus Fachexpert:innen und stellt so Aktualität und Praxisrelevanz unserer Fachinhalte sicher",
                    "Du analysierst und priorisierst Markt- und Kundenanforderungen, entwickelst gemeinsam mit dem Team Ideen für neue Formate oder Initiativen, z.B. im Bereich Legal-Tech und treibst deren Umsetzung voran",
                    "Du bewertest Rechtsentwicklungen im Arbeits- und Personalrecht der öffentlichen Verwaltung und deren Implikationen für unser Geschäft und setzt diese gemeinsam mit Deinem Team um"
                ]
            },
            {
                "title": "DAS BRINGST DU MIT:",
                
                "subtitle": "",
                
                "detail": [
                    "Du hast praktische Erfahrung in der Führung eines Teams und förderst einen wertschätzenden und offenen Umgang im Team und über Teamgrenzen hinaus",
                    "Du bist Jurist:in oder hast ein vergleichbares Studium mit Schwerpunkt Arbeitsrecht, erfolgreich abgeschlossen und bringst erste Erfahrungen aus den Bereichen TVöD oder TV-L",
                    "Als Vorreiter für Digitalisierung suchen wir jemanden, der komplexe juristische Sachverhalte gerne auch in neuen digitalen Lösungsansätzen denkt",
                    "Du bist kommunikationsstark und hast große Freude daran, mit verschiedenen Fachdisziplinen und Stakeholdern zu agieren"
                ]
            },
            {
                "title": "DAS BIETEN WIR DIR:",
                
                "subtitle": "Einen Einblick in unser Produktportfolio findest du hier:  GC Pharma Captial Unternehmensprofil. bei GC Pharma Capital GmbH glauben wir daran, dass wir genau dort am besten arbeiten können, wo wir uns am wohlsten fühlen. Deshalb bieten wir dir ein hybrides Arbeitsmodell mit flexiblen Arbeitszeiten, das die Vorteile aus mobiler, ortsunabhängiger Arbeit und persönlichem Austausch vor Ort vereint. Außerdem erwartet dich Folgendes:",
                
                "detail": [
                    "Umfangreiche Benefits von Events über Sport- und Gesundheitsangebote bis zur gesunden Work-Life-Balance",
                    "Breites Angebot an Seminaren und E-Learnings der GC Pharma Akademie sowie viele weitere Lerngelegenheiten und Entwicklungsmöglichkeiten",
                    "Eine Kultur, die geprägt ist von Verantwortung, Freiraum und einem Miteinander auf Augenhöhe",
                    "Moderne technische Ausstattung und attraktive Arbeitsplatzgestaltung"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Kennziffer: 6767",
                "Max Mustermann",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Noch nicht ganz überzeugt? Wir bieten dir zahlreiche Benefits von Hansefit, JobRad, über flexibles Arbeiten bis hin zu finanziellen Leistungen sowie Lern-und Entwicklungsmöglichkeiten. Hast du Interesse, in einem hoch motivierten Team zu arbeiten? Dann bewirb dich jetzt! Wir freuen uns dich kennenzulernen!",

                "GC Pharma GmbH ist eine international führende Dienstleistungs-und Beratungsgesellschaft im pharmazeutischen Bereich, die maßgeschneiderte Service-Pakete für ihre Outsourcing Partner bereitstellt. Unsere Kunden und Partner können aus einer breiten Angebotspalette von der Entwicklung von Wirksubstanzen über Entwicklungsdienstleistungen für fertig formulierte Medikamente, deren Zulassung und Produktion bis hin zur Verpackung und Logistik profitieren."
            ]
        }
    }`,
    title_gb: 'Recuriter 6',
    type_gb: 'Part-Time',
    location_gb: 'Hamburg',
    field_gb: `Finance/Controlling,Technology Developement`,
    about_gb: `{
        "introduction": "For our “TVöD“ team in the area of Content & Product Creation we are looking for Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

        "content": [
            {
                "title": "WHAT YOU CAN EXPECT:",                
                "subtitle": "",                
                "detail": [
                    "You are a technically competent contact person and coach for your team (8 employees)",
                    "You support your team and are also largely responsible for operational tasks, e.g. for products, content and projects",
                    "You will coordinate an external network of editors and authors made up of experts, thereby ensuring that our specialist content is up-to-date and relevant to practice",
                    "You analyze and prioritize market and customer requirements, develop ideas for new formats or initiatives together with the team, e.g. in the area of legal tech, and drive their implementation",
                    "You evaluate legal developments in labor and personnel law in public administration and their implications for our business and implement them together with your team"
                ]
            },
            {
                "title": "YOUR QUALIFICATIONS:",                
                "subtitle": "",                
                "detail": [
                    "You have practical experience in leading a team and promote appreciative and open interaction within the team and beyond team boundaries",
                    "You are a lawyer or have successfully completed a comparable degree with a focus on labor law and have initial experience in the areas of TVöD or TV-L",
                    "As a pioneer in digitization, we are looking for someone who likes to think about complex legal issues in terms of new digital solutions",
                    "You have strong communication skills and enjoy working with different disciplines and stakeholders"
                ]
            },
            {
                "title": "WE OFFER YOU:",                
                "subtitle": "You can find an insight into our product portfolio here: GC Pharma Capital company profile. At GC Pharma Capital GmbH we believe that we can work best exactly where we feel most comfortable. That's why we offer you a hybrid working model with flexible working hours that combines the advantages of mobile, location-independent work and personal exchange on site. You can also expect the following:",
                "detail": [
                    "Extensive benefits from events to sports and health offers to a healthy work-life balance",
                    "Wide range of seminars and e-learning courses from the GC Pharma Academy as well as many other learning and development opportunities",
                    "A culture characterized by responsibility, freedom and working together as equals",
                    "Modern technical equipment and attractive workplace design"
                ]
            }
        ],

        "info" : {
            "contact": [
                "Reference number: 6767",
                "John Doe",
                "www.gcpharma/Karriere.de"
            ],

            "comment": [
                "Not quite convinced yet? We offer you numerous benefits from Hansefit, JobRad, flexible working and financial benefits as well as learning and development opportunities. Are you interested in working in a highly motivated team? Then apply now! We are pleased to meet you!",

                "GC Pharma GmbH is a leading international service and consulting company in the pharmaceutical sector that provides tailor-made service packages for its outsourcing partners. Our customers and partners can benefit from a wide range of services, from the development of active substances and development services for finished drugs, their approval and production to packaging and logistics."
            ]
        }
    }`
  }
];

export default jobs;