const INITIAL_PEOPLE = [
  {
    "id": "@I3@",
    "name": "Jose Maria Matas Vilanova",
    "sex": "M",
    "birth": "3 JUN 1922",
    "birthPlace": "Prats de Lluçanes (Girona)",
    "death": "29 AUG 2008",
    "deathPlace": "",
    "occupation": "COmpra Pje Dr.Torent a Juan Enrique Becker",
    "famc": [],
    "fams": [
      "@F2@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I32@",
    "name": "Maria Jesús Larrucea Valdemoros",
    "sex": "F",
    "birth": "25 DEC 1925",
    "birthPlace": "Bilbao",
    "death": "29 DEC 2023",
    "deathPlace": "Barcelona, España",
    "occupation": "",
    "famc": [
      "@F10@"
    ],
    "fams": [
      "@F2@"
    ],
    "notes": "Bautizada en San Nicolás",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I33@",
    "name": "Jenaro Larrucea Yarritu",
    "sex": "M",
    "birth": "25 JUL 1897",
    "birthPlace": "Bilbao -Santa Maria de Begoña",
    "death": "25 FEB 1986",
    "deathPlace": "Barcelona, España",
    "occupation": "fabricacion motor LARRAN nº 6",
    "famc": [],
    "fams": [
      "@F10@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I34@",
    "name": "Juana Valdemoros Ibarra",
    "sex": "F",
    "birth": "6 MAY 1897",
    "birthPlace": "Logroño, España",
    "death": "16 FEB 1972",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F10@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I40@",
    "name": "Celestina Ibarra Gonzalez",
    "sex": "F",
    "birth": "7 APR 1864",
    "birthPlace": "Logroño, España",
    "death": "15 JAN 1951",
    "deathPlace": "Logroño, España",
    "occupation": "",
    "famc": [
      "@F33@"
    ],
    "fams": [
      "@F13@"
    ],
    "notes": "La llamaban la buena moza.",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I43@",
    "name": "Cruz Valdemoros Saenz",
    "sex": "M",
    "birth": "1862",
    "birthPlace": "Logroño, España",
    "death": "5 DEC 1906",
    "deathPlace": "El Cortijo",
    "occupation": "Jornalero",
    "famc": [],
    "fams": [
      "@F13@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I105@",
    "name": "Maria Teresa Larrucea",
    "sex": "F",
    "birth": "6 MAR 1924",
    "birthPlace": "Bilbao",
    "death": "27 JUN 2007",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F10@"
    ],
    "fams": [
      "@F31@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I106@",
    "name": "Pelegrin Rita Taltavull",
    "sex": "M",
    "birth": "1916",
    "birthPlace": "Mahón, Menorca",
    "death": "21 NOV 2005",
    "deathPlace": "Mahon",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F31@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I111@",
    "name": "Evarista Gonzalez Villar",
    "sex": "F",
    "birth": "28 OCT 1841",
    "birthPlace": "El Cortijo",
    "death": "11 NOV 1906",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F176@"
    ],
    "fams": [
      "@F33@",
      "@F180@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I112@",
    "name": "Carmen Larrucea Valdemoros",
    "sex": "F",
    "birth": "8 SEP 1928",
    "birthPlace": "",
    "death": "8 SEP 2020",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F10@"
    ],
    "fams": [
      "@F34@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I113@",
    "name": "Jaime Rodrigo Pons",
    "sex": "M",
    "birth": "1924",
    "birthPlace": "",
    "death": "13 FEB 1964",
    "deathPlace": "Barcelona, España",
    "occupation": "Jefe Maquinas Marina",
    "famc": [],
    "fams": [
      "@F34@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I114@",
    "name": "Tomasita Larrucea",
    "sex": "F",
    "birth": "28 AUG 1933",
    "birthPlace": "",
    "death": "28 APR 1964",
    "deathPlace": "Madrid",
    "occupation": "",
    "famc": [
      "@F10@"
    ],
    "fams": [
      "@F35@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I115@",
    "name": "Fernado Aguilar Aznar",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "8 FEB 2014",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F35@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I156@",
    "name": "Gonzalo Valdemoros Ibarra",
    "sex": "M",
    "birth": "1888",
    "birthPlace": "",
    "death": "2 AUG 1959",
    "deathPlace": "El Cortijo, Logroño, España",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F52@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I157@",
    "name": "Anastasio Valdemoros Ibarra",
    "sex": "M",
    "birth": "17 AUG 1904",
    "birthPlace": "Logroño, España",
    "death": "15 JUN 1978",
    "deathPlace": "Bilbao",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F66@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I158@",
    "name": "Celestino Valdemoros Ibarra",
    "sex": "M",
    "birth": "1901",
    "birthPlace": "Logroño, España",
    "death": "14 SEP 1976",
    "deathPlace": "Logroño, España",
    "occupation": "labrador",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F51@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I159@",
    "name": "Librado Valdemoros Ibarra",
    "sex": "M",
    "birth": "18 AUG 1891",
    "birthPlace": "El Cortijo, Logroño, España",
    "death": "9 SEP 1936",
    "deathPlace": "Logroño, España",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F117@"
    ],
    "notes": "Fue a EEUU  /New York) 18/4/1912",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I160@",
    "name": "Eustasio Valdemoros Ibarra",
    "sex": "M",
    "birth": "1896",
    "birthPlace": "",
    "death": "31 DEC 1972",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F54@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I161@",
    "name": "Basilia Treviño Valdemoros",
    "sex": "F",
    "birth": "1902",
    "birthPlace": "",
    "death": "16 MAR 1980",
    "deathPlace": "El Cortijo, Logroño, España",
    "occupation": "",
    "famc": [
      "@F53@"
    ],
    "fams": [
      "@F51@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I162@",
    "name": "Rosario Treviño Valdemoros",
    "sex": "F",
    "birth": "1890",
    "birthPlace": "",
    "death": "28 MAR 1971",
    "deathPlace": "El Cortijo",
    "occupation": "",
    "famc": [
      "@F53@"
    ],
    "fams": [
      "@F52@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I164@",
    "name": "Enrique Valdemoros Ybarra",
    "sex": "M",
    "birth": "1894",
    "birthPlace": "El Cortijo, Logroño, España",
    "death": "6 MAR 1956",
    "deathPlace": "el Cortijo, Logroño, España",
    "occupation": "",
    "famc": [
      "@F13@"
    ],
    "fams": [
      "@F142@"
    ],
    "notes": "Fue socio del abuelo en el taller \"Larucea\" de Logroño de coches. Al ir Genaro a la guerra le regalo el taller.",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I165@",
    "name": "Leonisa",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "AFT 1972",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F54@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I196@",
    "name": "Pilar",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F66@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I197@",
    "name": "Jose Luis Valdemoros",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F66@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I198@",
    "name": "Encarnación Valdemoros",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F66@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I342@",
    "name": "Angel Valdemoros Treviño",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F51@"
    ],
    "fams": [
      "@F109@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I343@",
    "name": "Lidia Grijalba Saenz",
    "sex": "F",
    "birth": "4 OCT 1934",
    "birthPlace": "",
    "death": "10 MAY 2022",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F109@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I349@",
    "name": "Antonio Valdemoros Treviño",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F52@"
    ],
    "fams": [
      "@F112@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I350@",
    "name": "Francisca Treviño LLach",
    "sex": "F",
    "birth": "1922",
    "birthPlace": "El Cortijo",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F112@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I352@",
    "name": "Cruz Valdemoros Treviño",
    "sex": "M",
    "birth": "5 MAY 1918",
    "birthPlace": "EL Cortijo",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F52@"
    ],
    "fams": [
      "@F113@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I353@",
    "name": "Carmen Grijalba del Valle",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F113@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I361@",
    "name": "Benigna Saenz  Martinez",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F117@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I362@",
    "name": "Librado Valdemoros Saenz",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F117@"
    ],
    "fams": [
      "@F126@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I363@",
    "name": "Invencion Gloria Valdemoros Saenz",
    "sex": "F",
    "birth": "3 AUG 1920",
    "birthPlace": "logroño, España",
    "death": "28 APR 2014",
    "deathPlace": "Logroño",
    "occupation": "",
    "famc": [
      "@F117@"
    ],
    "fams": [
      "@F118@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I364@",
    "name": "Pedro Saenz Velez",
    "sex": "M",
    "birth": "17 SEP 1921",
    "birthPlace": "",
    "death": "6 SEP 2000",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F118@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I365@",
    "name": "Julio Valdemoros",
    "sex": "M",
    "birth": "1923",
    "birthPlace": "el Cortijo",
    "death": "18 OCT 1927",
    "deathPlace": "El Cortijo",
    "occupation": "",
    "famc": [
      "@F117@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I376@",
    "name": "Begoña Treviño",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F126@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I407@",
    "name": "Vicenta Mendezona Cendagortagalarza",
    "sex": "F",
    "birth": "1908",
    "birthPlace": "",
    "death": "1 APR 2009",
    "deathPlace": "Logroño",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F142@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I408@",
    "name": "Purificación Valdemoros Mendezona",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F142@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I409@",
    "name": "Enrique Valdemoros Mendoza",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F142@"
    ],
    "fams": [
      "@F276@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I410@",
    "name": "Lidia Valdemoros",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F142@"
    ],
    "fams": [
      "@F277@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I411@",
    "name": "José Valdemoros",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F142@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I412@",
    "name": "Maria Asunción Valdemoros",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F142@"
    ],
    "fams": [
      "@F284@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I497@",
    "name": "Gregorio Ibarra Treviño",
    "sex": "M",
    "birth": "1836",
    "birthPlace": "",
    "death": "13 AUG 1867",
    "deathPlace": "El Cortijo",
    "occupation": "",
    "famc": [
      "@F481@"
    ],
    "fams": [
      "@F33@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I498@",
    "name": "Pedro Gonzalez Fernandez Nalda",
    "sex": "M",
    "birth": "1799",
    "birthPlace": "Aleson (la Rioja)",
    "death": "2 JUL 1879",
    "deathPlace": "Logroño, España",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F176@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I499@",
    "name": "Petra Villar Martinez",
    "sex": "F",
    "birth": "1803",
    "birthPlace": "Logroño, España",
    "death": "AFT 8 JUN 1880",
    "deathPlace": "",
    "occupation": "Labradora",
    "famc": [],
    "fams": [
      "@F176@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I506@",
    "name": "Andres Pardal Perez",
    "sex": "M",
    "birth": "1841",
    "birthPlace": "Pino de Oro",
    "death": "16 NOV 1897",
    "deathPlace": "El Cortijo",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F180@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I841@",
    "name": "Alicia Ruiz Alonso",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F276@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I842@",
    "name": "Andrés Elguezabal Uriarte",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "marino",
    "famc": [],
    "fams": [
      "@F277@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I863@",
    "name": "Antonio Vidasolo",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "BEF 2009",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F284@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I1177@",
    "name": "Maria del Carmen Larrucea Valdemoros",
    "sex": "F",
    "birth": "1 MAR 1927",
    "birthPlace": "Logroño, España",
    "death": "24 AUG 1928",
    "deathPlace": "Logroño, España",
    "occupation": "",
    "famc": [
      "@F10@"
    ],
    "fams": [],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I1190@",
    "name": "Maximo Valdemoros Diaz",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [
      "@F54@"
    ],
    "fams": [
      "@F400@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I1191@",
    "name": "Azucena Vicente",
    "sex": "F",
    "birth": "",
    "birthPlace": "",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F400@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  },
  {
    "id": "@I1446@",
    "name": "Marcelo Ibarra",
    "sex": "M",
    "birth": "",
    "birthPlace": "",
    "death": "BEF 1857",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F481@"
    ],
    "notes": "",
    "genderLabel": "Hombre"
  },
  {
    "id": "@I1447@",
    "name": "Heramenga o Hermenegilda Treviño Torres",
    "sex": "F",
    "birth": "1797",
    "birthPlace": "El Cortijo",
    "death": "",
    "deathPlace": "",
    "occupation": "",
    "famc": [],
    "fams": [
      "@F481@"
    ],
    "notes": "",
    "genderLabel": "Mujer"
  }
];
const INITIAL_FAMILIES = [
  {
    "id": "@F2@",
    "husb": "@I3@",
    "wife": "@I32@",
    "children": [],
    "marriage": "16 AUG 1963",
    "marriagePlace": "Barcelona, España"
  },
  {
    "id": "@F10@",
    "husb": "@I33@",
    "wife": "@I34@",
    "children": [
      "@I105@",
      "@I32@",
      "@I1177@",
      "@I112@",
      "@I114@"
    ],
    "marriage": "5 APR 1923",
    "marriagePlace": ""
  },
  {
    "id": "@F13@",
    "husb": "@I43@",
    "wife": "@I40@",
    "children": [
      "@I156@",
      "@I159@",
      "@I164@",
      "@I160@",
      "@I34@",
      "@I158@",
      "@I157@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F31@",
    "husb": "@I106@",
    "wife": "@I105@",
    "children": [],
    "marriage": "20 MAR 1943",
    "marriagePlace": ""
  },
  {
    "id": "@F33@",
    "husb": "@I497@",
    "wife": "@I111@",
    "children": [
      "@I40@"
    ],
    "marriage": "CAL 1863",
    "marriagePlace": "El Cortijo"
  },
  {
    "id": "@F34@",
    "husb": "@I113@",
    "wife": "@I112@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F35@",
    "husb": "@I115@",
    "wife": "@I114@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F51@",
    "husb": "@I158@",
    "wife": "@I161@",
    "children": [
      "@I342@"
    ],
    "marriage": "29 DEC 1932",
    "marriagePlace": ""
  },
  {
    "id": "@F52@",
    "husb": "@I156@",
    "wife": "@I162@",
    "children": [
      "@I349@",
      "@I352@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F53@",
    "husb": "",
    "wife": "",
    "children": [
      "@I162@",
      "@I161@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F54@",
    "husb": "@I160@",
    "wife": "@I165@",
    "children": [
      "@I1190@"
    ],
    "marriage": "29 OCT 1957",
    "marriagePlace": ""
  },
  {
    "id": "@F66@",
    "husb": "@I157@",
    "wife": "@I196@",
    "children": [
      "@I197@",
      "@I198@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F109@",
    "husb": "@I342@",
    "wife": "@I343@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F112@",
    "husb": "@I349@",
    "wife": "@I350@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F113@",
    "husb": "@I352@",
    "wife": "@I353@",
    "children": [],
    "marriage": "5 NOV 1944",
    "marriagePlace": "el Cortijo"
  },
  {
    "id": "@F117@",
    "husb": "@I159@",
    "wife": "@I361@",
    "children": [
      "@I363@",
      "@I365@",
      "@I362@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F118@",
    "husb": "@I364@",
    "wife": "@I363@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F126@",
    "husb": "@I362@",
    "wife": "@I376@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F142@",
    "husb": "@I164@",
    "wife": "@I407@",
    "children": [
      "@I408@",
      "@I409@",
      "@I410@",
      "@I411@",
      "@I412@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F176@",
    "husb": "@I498@",
    "wife": "@I499@",
    "children": [
      "@I111@"
    ],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F180@",
    "husb": "@I506@",
    "wife": "@I111@",
    "children": [],
    "marriage": "20 NOV 1879",
    "marriagePlace": ""
  },
  {
    "id": "@F276@",
    "husb": "@I409@",
    "wife": "@I841@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F277@",
    "husb": "@I842@",
    "wife": "@I410@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F284@",
    "husb": "@I863@",
    "wife": "@I412@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F400@",
    "husb": "@I1190@",
    "wife": "@I1191@",
    "children": [],
    "marriage": "",
    "marriagePlace": ""
  },
  {
    "id": "@F481@",
    "husb": "@I1446@",
    "wife": "@I1447@",
    "children": [
      "@I497@"
    ],
    "marriage": "",
    "marriagePlace": ""
  }
];
