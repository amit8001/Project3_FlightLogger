const user = [
    {
        firstName: "Amitav",
        lastName: "Panda",
        licenseNo: "",
        licenseType: ""
    },
    {
        firstName: "Richardson",
        lastName: "Damian",
        licenseNo: "23456",
        licenseType: "private"
    },
    {
        firstName: "Shira",
        lastName: "Applebaum",
        licenseNo: "34567",
        licenseType: "student"
    },
    {
        firstName: "Cody",
        lastName: "Granger",
        licenseNo: "45678",
        licenseType: "airline transport pilot"
    },
    {
        firstName: "Houssam",
        lastName: "Moustafa",
        licenseNo: "56789",
        licenseType: "commercial"
    },
];

const aircraft = [
    {
        ID: "N757QJ",
        type: "C152",
        make: "Cessna",
        categoryClass: "Airplane Single Engine Land",       // dropdown (ASEL, AMEL, ASES, AMES)
        categoryClassShort: "ASEL",                         // auto-populated
        complex: "false"
    },
    {
        ID: "N19777",
        type: "C172",
        make: "Cessna",
        categoryClass: "Airplane Single Engine Land",
        categoryClassShort: "ASEL",
        complex: "false"
    },
    {
        ID: "N55220",
        type: "PA-28R-200",
        make: "Piper",
        categoryClass: "Airplane Single Engine Land",
        categoryClassShort: "ASEL",
        complex: true
    },
];

const flights = [
    {
        id: 1,
        date: "2017-12-02",     // date dropdown ?
        aircraftType: "C152",   // auto-populated from aircraft data
        aircraftId: "N757QJ",   // dropdown from aircraft data
        from: "47N",
        to: "47N",
        route: "",
        remarks: "practice landings",
        landingsDay: 1,
        landingsNight: 0,
        landingsTotal: 1,
        aircraftCategoryClass: {   // auto-populated from aircraft data and total time
            category: "ASEL",
            time: 1.1
        },
        conditionsOfFlight: [
            {
                type: "day",    // dropdown (day, night, actualInstrument, simulatedInstrument)
                time: 1.1
            }
        ],
        typeOfPilotTime: [
            {
                type: "PIC",    // dropdown (crossCountry, dual, PIC)
                time: 1.1
            }
        ],
        totalTime: 1.1
    },
    {
        id: 2,
        date: "2017-12-04",
        aircraftType: "C152",
        aircraftId: "N757QJ",
        from: "47N",
        to: "47N",
        route: "",
        remarks: "get night current",
        landingsDay: 0,
        landingsNight: 4,
        landingsTotal: 4,
        aircraftCategoryClass: {
            category: "ASEL",
            time: 0.7
        },
        conditionsOfFlight: [
            {
                type: "night",
                time: 0.7
            }
        ],
        typeOfPilotTime: [
            {
                type: "PIC",
                time: 0.7
            }
        ],
        totalTime: 0.7
    },
    {
        id: 3,
        date: "2018-01-10",
        aircraftType: "PA-28R-200",
        aircraftId: "N55220",
        from: "47N",
        to: "47N",
        route: "KEWR KMMU",
        remarks: "Basic attitude flying under the hood",
        landingsDay: 2,
        landingsNight: 1,
        landingsTotal: 3,
        aircraftCategoryClass: {
            category: "ASEL",
            time: 1.0
        },
        conditionsOfFlight: [
            {
                type: "night",
                time: 0.4
            },
            {
                type: "simulatedInstrument",
                time: 0.8
            }
        ],
        typeOfPilotTime: [
            {
                type: "PIC",
                time: 1.0
            },
            {
                type: "dual",
                time: 1.0,
                instructorName: "John Smith",
                instructorCertNo: "54321CFI"
            }
        ],
        totalTime: 1.0
    },
];
