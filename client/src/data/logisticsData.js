const logisticsData = {
    cards: [
        {
            id: 1,
            imgAddr : "./images/pages/logistics/logistics-card-1.png", 
            infoText : "Die German Capital Pharma GmbH bietet Ihren Kunden aus den Bereichen sowohl der Human- als auch der Tierarzneimittel qualitativ höchste Lagerdienstleistungen an. Dabei ist die Lagerung von Arzneimitteln und sonstigen medizinischen Produkten und Präparaten sowohl im Bereich der Normaltemperatur (ambient, 15 bis 25°C), gekühlt (inkl. Kühlkette bei 2 bis 8°C) als auch tiefgekühlt (-25 bis -20°C) möglich.",
            btnText : "Weiter lesen",
            linkAddr : "/logistics-storage",
        },
        {
            id: 2,
            imgAddr : "./images/pages/logistics/logistics-card-2.png", 
            infoText : "Die German Capital Pharma GmbH bietet Ihren Kunden aus den Bereichen sowohl der Human- als auch der Tierarzneimittel qualitativ höchste Lagerdienstleistungen an. Dabei ist die Lagerung von Arzneimitteln und sonstigen medizinischen Produkten und Präparaten sowohl im Bereich der Normaltemperatur (ambient, 15 bis 25°C), gekühlt (inkl. Kühlkette bei 2 bis 8°C) als auch tiefgekühlt (-25 bis -20°C) möglich. ",
            btnText : "Weiter lesen",
            linkAddr : "/logistics-shipment",
        },
        {
            id: 3,
            imgAddr : "./images/pages/logistics/logistics-card-3.png", 
            infoText : "Durch unser europaweites Netzwerk an Herstellern, Lieferanten und Großhandlungen sind wir von GC Pharma in der Lage, innerhalb kürzester Zeit den Bedarf an nahezu allen in Europa zugelassenen Humanarzneimitteln zu decken. Benötigen Sie Fertigarzneimittel aus dem Europäischen Wirtschaftsraum? ",
            btnText : "Weiter lesen",
            linkAddr : "/logistics-purchasing",
        },
    ],

    storage: [
        {
            id: 1,
            description: "Alle Lagerbereiche sind nach dem Stand der Technik qualifiziert, werden in regelmäßigen Abständen requalifiziert und sind mit modernsten Temperaturüberwachungssystemen ausgestattet, die kontinuierlich alle Daten aufzeichnen und bei Abweichungen unmittelbar Alarm auslösen.",
            slider: {
                delay: 2000,
                imgWidth: '187px',
                imgHeight: '190px',
                images: [
                    "./images/pages/logistics/logistics-storage-1-1.png",
                    "./images/pages/logistics/logistics-storage-1-2.png",
                    "./images/pages/logistics/logistics-storage-1-3.png",
                ]
            }
        },
        {
            id: 2,
            description: "Auch für die Sicherheit der Produkte unserer Kunden ist das Beste gerade gut genug.  Alle Firmen- und Lagerräume sind mittels einer Einbruchmeldeanlage mit Körperschallmeldern, Türkontakten, Brand- und Überschwemmungsmeldern und permanenter Videoüberwachung gesichert. ",
            slider: {
                delay: 2000,
                imgWidth: '188px',
                imgHeight: '190px',
                images: [
                    "./images/pages/logistics/logistics-storage-2-1.png",
                    "./images/pages/logistics/logistics-storage-2-2.png",
                ]
            }
        },
        {
            id: 3,
            description: "Bei Auslösen des Alarms wird dieser entweder direkt an die 24h besetzte Alarmzentrale (Feuer, Rauch, Überschwemmung) oder direkt an die Berliner Polizei (Einbruch) weitergeleitet.",
            slider: {
                delay: 2000,
                imgWidth: '189px',
                imgHeight: '188px',
                images: [
                    "./images/pages/logistics/logistics-storage-3-1.png",
                    "./images/pages/logistics/logistics-storage-3-2.png",
                ]
            }
        }
    ],

    purchasing: {
        slider: {
            delay: 2000,
            imgWidth: '1440px',
            imgHeight: '342px',
            images: [
                "./images/pages/logistics/logistics-purchasing-1.png",
                "./images/pages/logistics/logistics-purchasing-2.png",
                "./images/pages/logistics/logistics-purchasing-3.png",
                "./images/pages/logistics/logistics-purchasing-4.png",
                "./images/pages/logistics/logistics-purchasing-5.png",
            ]
        },
    }   ,

    shipment: [
        {
            id: 1,
            description: "Neben der Lagerung bieten wir unseren Kunden auch umfassend Dienstleistungen in den Bereichen Versand und Kommissionierung an.",
            image: "./images/pages/logistics/logistics-shipment-1"
        },
        {
            id: 2,
            description: "Wir verpacken die Produkte unsere Kunden in geeignete und zuvor umfassend qualifizierte Verpackungen und stellen diese dann dem gewünschten Logistikpartner zur Abholung bereit.",
            image: "./images/pages/logistics/logistics-shipment-2"
        },
        {
            id: 3,
            description: "Durch die speziellen Versandverpackungen unserer Partner können wir dabei die gewünschten Laufzeiten (von 24h bis 92 h oder länger) im gewünschten Temperaturbereich (ambient, 2 bis 8°C oder -25 bis -20°C) gewährleisten. ",
            image: "./images/pages/logistics/logistics-shipment-3"
        },
        {
            id: 4,
            description: "Durch unser europaweites Netzwerk an Herstellern, Lieferanten und Großhandlungen sind wir von GC Pharma in der Lage, innerhalb kürzester Zeit den Bedarf an nahezu allen in Europa zugelassenen Humanarzneimitteln zu decken. Benötigen Sie Fertigarzneimittel aus dem Europäischen Wirtschaftsraum? ",
            image: "./images/pages/logistics/logistics-shipment-4"
        },
    ]
};


export default logisticsData;