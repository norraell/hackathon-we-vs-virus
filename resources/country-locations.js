const regionsGeoPositions = [
  {
    name: "Grand Princess",
    latlng: [36.13475, -126.6219]
  },
  {
    name: "Diamond Princess",
    latlng : [35.455833, 139.68185]
  },
  {
    name: "From Diamond Princess",
    latlng : [35, 139]
  },
  {
    name: "Saint Martin (Dutch part)",
    latlng: [18.08333333, -63.95]
  },
  {
    name: "Hubei",
    latlng : [30.9756403482891, 112.270692167452]
  },
  {
    name: "Guangdong",
    latlng : [23.3417337092088, 113.424401710676]
  },
  {
    name: "Henan",
    latlng : [33.8820061472366, 113.613964115943]
  },
  {
    name: "Zhejiang",
    latlng : [29.1831892798285, 120.093412774886]
  },
  {
    name: "Hunan",
    latlng : [27.6104072903766, 111.708835644484]
  },
  {
    name: "Anhui",
    latlng : [31.8257120511073, 117.226363790413]
  },
  {
    name: "Jiangxi",
    latlng : [27.614008270636, 115.722093542185]
  },
  {
    name: "Shandong",
    latlng : [36.3426714789712, 118.149838795037]
  },
  {
    name: "Jiangsu",
    latlng : [33, 119.8333]
  },
  {
    name: "Chongqing",
    latlng : [30.0571758751839, 107.87398583171]
  },
  {
    name: "Sichuan",
    latlng : [30.6171383897493, 102.710322085654]
  },
  {
    name: "Heilongjiang",
    latlng : [47.8619962256745, 127.761544149451]
  },
  {
    name: "Beijing",
    latlng : [40.1823809324133, 116.414172956705]
  },
  {
    name: "Shanghai",
    latlng : [31.2019853691089, 121.449111848821]
  },
  {
    name: "Hebei",
    latlng : [38.0428, 114.5149]
  },
  {
    name: "Fujian",
    latlng : [26.0788658351203, 117.987371739429]
  },
  {
    name: "Guangxi",
    latlng : [23.8298403568635, 108.78812722508]
  },
  {
    name: "Shaanxi",
    latlng : [35.1916533064219, 108.870143735105]
  },
  {
    name: "Yunnan",
    latlng : [24.9740090515417, 101.486994477533]
  },
  {
    name: "Hainan",
    latlng : [19.1958639124575, 109.745335576195]
  },
  {
    name: "Guizhou",
    latlng : [26.8153610246946, 106.874783781561]
  },
  {
    name: "Tianjin",
    latlng : [39.3053612117002, 117.322972903268]
  },
  {
    name: "Shanxi",
    latlng : [35.1833, 109.0667]
  },
  {
    name: "Gansu",
    latlng : [36.0611, 103.8343]
  },
  {
    name: "Liaoning",
    latlng : [41.2956478642686, 122.60854186375]
  },
  {
    name: "Jilin",
    latlng : [43.6661021395126, 126.192329763813]
  },
  {
    name: "Xinjiang",
    latlng : [41.1128513419168, 85.240102435218]
  },
  {
    name: "Inner Mongolia",
    latlng : [44.0935009913267, 113.944789458154]
  },
  {
    name: "Ningxia",
    latlng : [36.6, 105.32]
  },
  {
    name: "Qinghai",
    latlng : [36, 96]
  },
  {
    name: "Macau",
    latlng : [22.210928, 113.552971]
  },
  {
    name: "Tibet",
    latlng : [28.717, 91.717]
  },
  {
    name: "Curacao",
    latlng: [12.169570, -68.990021]
  },
  {
    name: "Channel Islands",
    latlng : [49.372284, -2.364351]
  },
  {
    name: "Australian Capital Territory",
    latlng: [-35.473469, 149.012375]
  },
  {
    name: "Tanzania",
    latlng: [-6.802353, 39.279556]
  },
  {
    name: "Northern Territory",
    latlng : [49.372284, -2.364351]
  },
  {
    name: "Victoria",
    latlng : [-37.0201, 144.9646]
  },
  {
    name: "New South Wales",
    latlng : [-31.840233, 145.612793]
  },
  {
    name: "Queensland",
    latlng: [-20.917574, 142.702789]
  },
  {
    name: "South Australia",
    latlng: [-30.000233, 136.209152]
  },
  {
    name: "Western Australia",
    latlng: [-31.953512, 115.857048]
  },
  {
    name: "Tasmania",
    latlng : [-41.640079, 146.315918]
  },
  {
    name: "Reunion",
    latlng : [-21.1307, 55.5265]
  },
  {
    name: "British Columbia",
    latlng : [53.726669, -127.647621]
  },
  {
    name: "Saskatchewan",
    latlng: [55, -106]
  },
  {
    name: "Manitoba",
    latlng: [53.760860, -98.813873]
  },
  {
    name: "Newfoundland and Labrador",
    latlng: [53.135509, -57.660435]
  },
  {
    name: "Nova Scotia",
    latlng: [45, -63]
  },
  {
    name: "Prince Edward Island",
    latlng: [46.25, -63]
  },
  {
    name: "Alberta",
    latlng : [55, -115]
  },
  {
    name: "Ontario",
    latlng : [34.068871, -117.651215]
  },
  {
    name: "Quebec",
    latlng: [46.829853, -71.254028]
  },
  {
    name: "Alabama",
    latlng: [32.318230, -86.902298]
  },
  {
    name: "Washington",
    latlng : [47.751076, -120.740135]
  },
  {
    name: "New York",
    latlng : [40.730610, -73.935242]
  },
  {
    name: "California",
    latlng : [36.778259, -119.417931]
  },
  {
    name: "Massachusetts",
    latlng : [42.407211, -71.382439]
  },
  {
    name: "Colorado",
    latlng : [39.113014, -105.358887]
  },
  {
    name: "Florida",
    latlng : [27.994402, -81.760254]
  },
  {
    name: "Illinois",
    latlng : [40, -89]
  },
  {
    name: "New Jersey",
    latlng : [39.833851, -74.871826]
  },
  {
    name: "Texas",
    latlng : [31, -100]
  },
  {
    name: "Oregon",
    latlng : [44, -120.5]
  },
  {
    name: "Pennsylvania",
    latlng : [41.203323, -77.194527]
  },
  {
    name: "Louisiana",
    latlng : [31, -92]
  },
  {
    name: "Tennessee",
    latlng : [35.860119, -86.660156]
  },
  {
    name: "Virginia",
    latlng : [37.926868, -78.024902]
  },
  {
    name: "Iowa",
    latlng : [42.032974, -93.581543]
  },
  {
    name: "North Carolina",
    latlng : [42.032974, -93.581543]
  },
  {
    name: "Nevada",
    latlng : [39.876019, -117.224121]
  },
  {
    name: "Indiana",
    latlng : [40.273502, -86.126976]
  },
  {
    name: "Maryland",
    latlng : [39.045753,	-76.641273]
  },
  {
    name: "South Carolina",
    latlng : [33.836082,	-81.163727]
  },
  {
    name: "District of Columbia",//Washington D.C.
    latlng : [38.8951, -77.0364]
  },
  {
    name: "Kentucky",
    latlng : [37.839333, -84.270020]
  },
  {
    name: "Nebraska",
    latlng : [41.5, -100]
  },
  {
    name: "Arizona",
    latlng : [34.048927, -111.093735]
  },
  {
    name: "Minnesota",
    latlng : [46.392410, -94.636230]
  },
  {
    name: "South Dakota",
    latlng : [44.5, -100]
  },
  {
    name: "Wisconsin",
    latlng : [44.5, -89.5]
  },
  {
    name: "Arkansas",
    latlng : [34.799999, -92.199997]
  },
  {
    name: "New Hampshire",
    latlng : [44, -71.5]
  },
  {
    name: "Connecticut",
    latlng : [41.599998, -72.699997]
  },
  {
    name: "New Mexico",
    latlng : [34.307144, -106.018066]
  },
  {
    name: "Ohio",
    latlng : [40.367474, -82.996216]
  },
  {
    name: "Rhode Island",
    latlng : [41.700001, -71.5]
  },
  {
    name: "Utah",
    latlng : [39.419220, -111.950684]
  },
  {
    name: "Hawaii",
    latlng : [19.741755, -155.844437]
  },
  {
    name: "Michigan",
    latlng : [44.182205, -84.506836]
  },
  {
    name: "Oklahoma",
    latlng : [36.084621, -96.921387]
  },
  {
    name: "Vermont",
    latlng : [44, -72.699997]
  },
  {
    name: "New Brunswick",
    latlng : [46.498390, -66.159668]
  },
  {
    name: "Delaware",
    latlng : [39, -75.5]
  },
  {
    name: "Kansas",
    latlng : [38.5, -98]
  },
  {
    name: "Mississippi",
    latlng : [33, -90]
  },
  {
    name: "Missouri",
    latlng : [38.573936, -92.603760]
  },
  {
    name: "Montana",
    latlng : [46.965260,	-109.533691]
  },
  {
    name: "North Dakota",
    latlng : [47.650589, -100.437012]
  },
  {
    name: "Wyoming",
    latlng : [43.075970, -107.290283]
  },
  {
    name: "Alaska",
    latlng : [66.160507, -153.369141]
  },
  {
    name: "Idaho",
    latlng : [44.068203, -114.742043]
  },
  {
    name: "Maine",
    latlng : [45.367584, -68.972168]
  },
  {
    name: "West Virginia",
    latlng : [39, -80.5]
  },
  {
    name: "Congo (Kinshasa)",
    latlng: [-4.322447, 15.307045]
  },
  {
    name: "Congo (Brazzaville)",
    latlng: [-4.2661, 15.2832]
  },
{
name: "Afghanistan",
latlng: [
33,
65
]
},
{
name: "Åland Islands",
latlng: [
60.116667,
19.9
]
},
{
name: "Albania",
latlng: [
41,
20
]
},
{
name: "Algeria",
latlng: [
28,
3
]
},
{
name: "American Samoa",
latlng: [
-14.33333333,
-170
]
},
{
name: "Andorra",
latlng: [
42.5,
1.5
]
},
{
name: "Angola",
latlng: [
-12.5,
18.5
]
},
{
name: "Anguilla",
latlng: [
18.25,
-63.16666666
]
},
{
name: "Antarctica",
latlng: [
-74.65,
4.48
]
},
{
name: "Antigua and Barbuda",
latlng: [
17.05,
-61.8
]
},
{
name: "Argentina",
latlng: [
-34,
-64
]
},
{
name: "Armenia",
latlng: [
40,
45
]
},
{
name: "Aruba",
latlng: [
12.5,
-69.96666666
]
},
{
name: "Australia",
latlng: [
-27,
133
]
},
{
name: "Austria",
latlng: [
47.33333333,
13.33333333
]
},
{
name: "Azerbaijan",
latlng: [
40.5,
47.5
]
},
{
name: "Bahamas",
latlng: [
24.25,
-76
]
},
{
name: "Bahrain",
latlng: [
26,
50.55
]
},
{
name: "Bangladesh",
latlng: [
24,
90
]
},
{
name: "Barbados",
latlng: [
13.16666666,
-59.53333333
]
},
{
name: "Belarus",
latlng: [
53,
28
]
},
{
name: "Belgium",
latlng: [
50.83333333,
4
]
},
{
name: "Belize",
latlng: [
17.25,
-88.75
]
},
{
name: "Benin",
latlng: [
9.5,
2.25
]
},
{
name: "Bermuda",
latlng: [
32.33333333,
-64.75
]
},
{
name: "Bhutan",
latlng: [
27.5,
90.5
]
},
{
name: "Bolivia (Plurinational State of)",
latlng: [
-17,
-65
]
},
{
name: "Bonaire, Sint Eustatius and Saba",
latlng: [
12.15,
-68.266667
]
},
{
name: "Bosnia and Herzegovina",
latlng: [
44,
18
]
},
{
name: "Botswana",
latlng: [
-22,
24
]
},
{
name: "Bouvet Island",
latlng: [
-54.43333333,
3.4
]
},
{
name: "Brazil",
latlng: [
-10,
-55
]
},
{
name: "British Indian Ocean Territory",
latlng: [
-6,
71.5
]
},
{
name: "United States Minor Outlying Islands",
latlng: [ ]
},
{
name: "Virgin Islands (British)",
latlng: [
18.431383,
-64.62305
]
},
{
name: "Virgin Islands (U.S.)",
latlng: [
18.34,
-64.93
]
},
{
name: "Brunei Darussalam",
latlng: [
4.5,
114.66666666
]
},
{
name: "Bulgaria",
latlng: [
43,
25
]
},
{
name: "Burkina Faso",
latlng: [
13,
-2
]
},
{
name: "Burundi",
latlng: [
-3.5,
30
]
},
{
name: "Cambodia",
latlng: [
13,
105
]
},
{
name: "Cameroon",
latlng: [
6,
12
]
},
{
name: "Canada",
latlng: [
60,
-95
]
},
{
name: "Cabo Verde",
latlng: [
16,
-24
]
},
{
name: "Cayman Islands",
latlng: [
19.5,
-80.5
]
},
{
name: "Central African Republic",
latlng: [
7,
21
]
},
{
name: "Chad",
latlng: [
15,
19
]
},
{
name: "Chile",
latlng: [
-30,
-71
]
},
{
name: "China",
latlng: [
35,
105
]
},
{
name: "Christmas Island",
latlng: [
-10.5,
105.66666666
]
},
{
name: "Cocos (Keeling) Islands",
latlng: [
-12.5,
96.83333333
]
},
{
name: "Colombia",
latlng: [
4,
-72
]
},
{
name: "Comoros",
latlng: [
-12.16666666,
44.25
]
},
{
name: "Congo",
latlng: [
-1,
15
]
},
{
name: "Congo (Democratic Republic of the)",
latlng: [
0,
25
]
},
{
name: "Cook Islands",
latlng: [
-21.23333333,
-159.76666666
]
},
{
name: "Costa Rica",
latlng: [
10,
-84
]
},
{
name: "Croatia",
latlng: [
45.16666666,
15.5
]
},
{
name: "Cuba",
latlng: [
21.5,
-80
]
},
{
name: "Curaçao",
latlng: [
12.116667,
-68.933333
]
},
{
name: "Cyprus",
latlng: [
35,
33
]
},
{
name: "Czech Republic",
latlng: [
49.75,
15.5
]
},
{
name: "Denmark",
latlng: [
56,
10
]
},
{
name: "Djibouti",
latlng: [
11.5,
43
]
},
{
name: "Dominica",
latlng: [
15.41666666,
-61.33333333
]
},
{
name: "Dominican Republic",
latlng: [
19,
-70.66666666
]
},
{
name: "Ecuador",
latlng: [
-2,
-77.5
]
},
{
name: "Egypt",
latlng: [
27,
30
]
},
{
name: "El Salvador",
latlng: [
13.83333333,
-88.91666666
]
},
{
name: "Equatorial Guinea",
latlng: [
2,
10
]
},
{
name: "Eritrea",
latlng: [
15,
39
]
},
{
name: "Estonia",
latlng: [
59,
26
]
},
{
name: "Ethiopia",
latlng: [
8,
38
]
},
{
name: "Falkland Islands (Malvinas)",
latlng: [
-51.75,
-59
]
},
{
name: "Faroe Islands",
latlng: [
62,
-7
]
},
{
name: "Fiji",
latlng: [
-18,
175
]
},
{
name: "Finland",
latlng: [
64,
26
]
},
{
name: "France",
latlng: [
46,
2
]
},
{
name: "French Guiana",
latlng: [
4,
-53
]
},
{
name: "French Polynesia",
latlng: [
-15,
-140
]
},
{
name: "French Southern Territories",
latlng: [
-49.25,
69.167
]
},
{
name: "Gabon",
latlng: [
-1,
11.75
]
},
{
name: "Gambia",
latlng: [
13.46666666,
-16.56666666
]
},
{
name: "Georgia",
latlng: [
42,
43.5
]
},
{
name: "Germany",
latlng: [
51,
9
]
},
{
name: "Ghana",
latlng: [
8,
-2
]
},
{
name: "Gibraltar",
latlng: [
36.13333333,
-5.35
]
},
{
name: "Greece",
latlng: [
39,
22
]
},
{
name: "Greenland",
latlng: [
72,
-40
]
},
{
name: "Grenada",
latlng: [
12.11666666,
-61.66666666
]
},
{
name: "Guadeloupe",
latlng: [
16.25,
-61.583333
]
},
{
name: "Guam",
latlng: [
13.46666666,
144.78333333
]
},
{
name: "Guatemala",
latlng: [
15.5,
-90.25
]
},
{
name: "Guernsey",
latlng: [
49.46666666,
-2.58333333
]
},
{
name: "Guinea",
latlng: [
11,
-10
]
},
{
name: "Guinea-Bissau",
latlng: [
12,
-15
]
},
{
name: "Guyana",
latlng: [
5,
-59
]
},
{
name: "Haiti",
latlng: [
19,
-72.41666666
]
},
{
name: "Heard Island and McDonald Islands",
latlng: [
-53.1,
72.51666666
]
},
{
name: "Holy See",
latlng: [
41.9,
12.45
]
},
{
name: "Honduras",
latlng: [
15,
-86.5
]
},
{
name: "Hong Kong",
latlng: [
22.25,
114.16666666
]
},
{
name: "Hungary",
latlng: [
47,
20
]
},
{
name: "Iceland",
latlng: [
65,
-18
]
},
{
name: "India",
latlng: [
20,
77
]
},
{
name: "Indonesia",
latlng: [
-5,
120
]
},
{
name: "Côte d'Ivoire",
latlng: [
8,
-5
]
},
{
name: "Iran (Islamic Republic of)",
latlng: [
32,
53
]
},
{
name: "Iraq",
latlng: [
33,
44
]
},
{
name: "Ireland",
latlng: [
53,
-8
]
},
{
name: "Isle of Man",
latlng: [
54.25,
-4.5
]
},
{
name: "Israel",
latlng: [
31.5,
34.75
]
},
{
name: "Italy",
latlng: [
42.83333333,
12.83333333
]
},
{
name: "Jamaica",
latlng: [
18.25,
-77.5
]
},
{
name: "Japan",
latlng: [
36,
138
]
},
{
name: "Jersey",
latlng: [
49.25,
-2.16666666
]
},
{
name: "Jordan",
latlng: [
31,
36
]
},
{
name: "Kazakhstan",
latlng: [
48,
68
]
},
{
name: "Kenya",
latlng: [
1,
38
]
},
{
name: "Kiribati",
latlng: [
1.41666666,
173
]
},
{
name: "Kuwait",
latlng: [
29.5,
45.75
]
},
{
name: "Kyrgyzstan",
latlng: [
41,
75
]
},
{
name: "Lao People's Democratic Republic",
latlng: [
18,
105
]
},
{
name: "Latvia",
latlng: [
57,
25
]
},
{
name: "Lebanon",
latlng: [
33.83333333,
35.83333333
]
},
{
name: "Lesotho",
latlng: [
-29.5,
28.5
]
},
{
name: "Liberia",
latlng: [
6.5,
-9.5
]
},
{
name: "Libya",
latlng: [
25,
17
]
},
{
name: "Liechtenstein",
latlng: [
47.26666666,
9.53333333
]
},
{
name: "Lithuania",
latlng: [
56,
24
]
},
{
name: "Luxembourg",
latlng: [
49.75,
6.16666666
]
},
{
name: "Macao",
latlng: [
22.16666666,
113.55
]
},
{
name: "Macedonia (the former Yugoslav Republic of)",
latlng: [
41.83333333,
22
]
},
{
name: "Madagascar",
latlng: [
-20,
47
]
},
{
name: "Malawi",
latlng: [
-13.5,
34
]
},
{
name: "Malaysia",
latlng: [
2.5,
112.5
]
},
{
name: "Maldives",
latlng: [
3.25,
73
]
},
{
name: "Mali",
latlng: [
17,
-4
]
},
{
name: "Malta",
latlng: [
35.83333333,
14.58333333
]
},
{
name: "Marshall Islands",
latlng: [
9,
168
]
},
{
name: "Martinique",
latlng: [
14.666667,
-61
]
},
{
name: "Mauritania",
latlng: [
20,
-12
]
},
{
name: "Mauritius",
latlng: [
-20.28333333,
57.55
]
},
{
name: "Mayotte",
latlng: [
-12.83333333,
45.16666666
]
},
{
name: "Mexico",
latlng: [
23,
-102
]
},
{
name: "Micronesia (Federated States of)",
latlng: [
6.91666666,
158.25
]
},
{
name: "Moldova (Republic of)",
latlng: [
47,
29
]
},
{
name: "Monaco",
latlng: [
43.73333333,
7.4
]
},
{
name: "Mongolia",
latlng: [
46,
105
]
},
{
name: "Montenegro",
latlng: [
42.5,
19.3
]
},
{
name: "Montserrat",
latlng: [
16.75,
-62.2
]
},
{
name: "Morocco",
latlng: [
32,
-5
]
},
{
name: "Mozambique",
latlng: [
-18.25,
35
]
},
{
name: "Myanmar",
latlng: [
22,
98
]
},
{
name: "Namibia",
latlng: [
-22,
17
]
},
{
name: "Nauru",
latlng: [
-0.53333333,
166.91666666
]
},
{
name: "Nepal",
latlng: [
28,
84
]
},
{
name: "Netherlands",
latlng: [
52.5,
5.75
]
},
{
name: "New Caledonia",
latlng: [
-21.5,
165.5
]
},
{
name: "New Zealand",
latlng: [
-41,
174
]
},
{
name: "Nicaragua",
latlng: [
13,
-85
]
},
{
name: "Niger",
latlng: [
16,
8
]
},
{
name: "Nigeria",
latlng: [
10,
8
]
},
{
name: "Niue",
latlng: [
-19.03333333,
-169.86666666
]
},
{
name: "Norfolk Island",
latlng: [
-29.03333333,
167.95
]
},
{
name: "Korea (Democratic People's Republic of)",
latlng: [
40,
127
]
},
{
name: "Northern Mariana Islands",
latlng: [
15.2,
145.75
]
},
{
name: "Norway",
latlng: [
62,
10
]
},
{
name: "Oman",
latlng: [
21,
57
]
},
{
name: "Pakistan",
latlng: [
30,
70
]
},
{
name: "Palau",
latlng: [
7.5,
134.5
]
},
{
name: "Palestine, State of",
latlng: [
31.9,
35.2
]
},
{
name: "Panama",
latlng: [
9,
-80
]
},
{
name: "Papua New Guinea",
latlng: [
-6,
147
]
},
{
name: "Paraguay",
latlng: [
-23,
-58
]
},
{
name: "Peru",
latlng: [
-10,
-76
]
},
{
name: "Philippines",
latlng: [
13,
122
]
},
{
name: "Pitcairn",
latlng: [
-25.06666666,
-130.1
]
},
{
name: "Poland",
latlng: [
52,
20
]
},
{
name: "Portugal",
latlng: [
39.5,
-8
]
},
{
name: "Puerto Rico",
latlng: [
18.25,
-66.5
]
},
{
name: "Qatar",
latlng: [
25.5,
51.25
]
},
{
name: "Republic of Kosovo",
latlng: [
42.666667,
21.166667
]
},
{
name: "Réunion",
latlng: [
-21.15,
55.5
]
},
{
name: "Romania",
latlng: [
46,
25
]
},
{
name: "Russian Federation",
latlng: [
60,
100
]
},
{
name: "Rwanda",
latlng: [
-2,
30
]
},
{
name: "Saint Barthélemy",
latlng: [
18.5,
-63.41666666
]
},
{
name: "Saint Helena, Ascension and Tristan da Cunha",
latlng: [
-15.95,
-5.7
]
},
{
name: "Saint Kitts and Nevis",
latlng: [
17.33333333,
-62.75
]
},
{
name: "Saint Lucia",
latlng: [
13.88333333,
-60.96666666
]
},
{
name: "Saint Martin (French part)",
latlng: [
18.08333333,
-63.95
]
},
{
name: "Saint Pierre and Miquelon",
latlng: [
46.83333333,
-56.33333333
]
},
{
name: "Saint Vincent and the Grenadines",
latlng: [
13.25,
-61.2
]
},
{
name: "Samoa",
latlng: [
-13.58333333,
-172.33333333
]
},
{
name: "San Marino",
latlng: [
43.76666666,
12.41666666
]
},
{
name: "Sao Tome and Principe",
latlng: [
1,
7
]
},
{
name: "Saudi Arabia",
latlng: [
25,
45
]
},
{
name: "Senegal",
latlng: [
14,
-14
]
},
{
name: "Serbia",
latlng: [
44,
21
]
},
{
name: "Seychelles",
latlng: [
-4.58333333,
55.66666666
]
},
{
name: "Sierra Leone",
latlng: [
8.5,
-11.5
]
},
{
name: "Singapore",
latlng: [
1.36666666,
103.8
]
},
{
name: "Sint Maarten (Dutch part)",
latlng: [
18.033333,
-63.05
]
},
{
name: "Slovakia",
latlng: [
48.66666666,
19.5
]
},
{
name: "Slovenia",
latlng: [
46.11666666,
14.81666666
]
},
{
name: "Solomon Islands",
latlng: [
-8,
159
]
},
{
name: "Somalia",
latlng: [
10,
49
]
},
{
name: "South Africa",
latlng: [
-29,
24
]
},
{
name: "South Georgia and the South Sandwich Islands",
latlng: [
-54.5,
-37
]
},
{
name: "Korea (Republic of)",
latlng: [
37,
127.5
]
},
{
name: "South Sudan",
latlng: [
7,
30
]
},
{
name: "Spain",
latlng: [
40,
-4
]
},
{
name: "Sri Lanka",
latlng: [
7,
81
]
},
{
name: "Sudan",
latlng: [
15,
30
]
},
{
name: "Suriname",
latlng: [
4,
-56
]
},
{
name: "Svalbard and Jan Mayen",
latlng: [
78,
20
]
},
{
name: "Swaziland",
latlng: [
-26.5,
31.5
]
},
{
name: "Sweden",
latlng: [
62,
15
]
},
{
name: "Switzerland",
latlng: [
47,
8
]
},
{
name: "Syrian Arab Republic",
latlng: [
35,
38
]
},
{
name: "Taiwan",
latlng: [
23.5,
121
]
},
{
name: "Tajikistan",
latlng: [
39,
71
]
},
{
name: "Tanzania, United Republic of",
latlng: [
-6,
35
]
},
{
name: "Thailand",
latlng: [
15,
100
]
},
{
name: "Timor-Leste",
latlng: [
-8.83333333,
125.91666666
]
},
{
name: "Togo",
latlng: [
8,
1.16666666
]
},
{
name: "Tokelau",
latlng: [
-9,
-172
]
},
{
name: "Tonga",
latlng: [
-20,
-175
]
},
{
name: "Trinidad and Tobago",
latlng: [
11,
-61
]
},
{
name: "Tunisia",
latlng: [
34,
9
]
},
{
name: "Turkey",
latlng: [
39,
35
]
},
{
name: "Turkmenistan",
latlng: [
40,
60
]
},
{
name: "Turks and Caicos Islands",
latlng: [
21.75,
-71.58333333
]
},
{
name: "Tuvalu",
latlng: [
-8,
178
]
},
{
name: "Uganda",
latlng: [
1,
32
]
},
{
name: "Ukraine",
latlng: [
49,
32
]
},
{
name: "United Arab Emirates",
latlng: [
24,
54
]
},
{
name: "United Kingdom of Great Britain and Northern Ireland",
latlng: [
54,
-2
]
},
{
name: "United States of America",
latlng: [
38,
-97
]
},
{
name: "Uruguay",
latlng: [
-33,
-56
]
},
{
name: "Uzbekistan",
latlng: [
41,
64
]
},
{
name: "Vanuatu",
latlng: [
-16,
167
]
},
{
name: "Venezuela (Bolivarian Republic of)",
latlng: [
8,
-66
]
},
{
name: "Viet Nam",
latlng: [
16.16666666,
107.83333333
]
},
{
name: "Wallis and Futuna",
latlng: [
-13.3,
-176.2
]
},
{
name: "Western Sahara",
latlng: [
24.5,
-13
]
},
{
name: "Yemen",
latlng: [
15,
48
]
},
{
name: "Zambia",
latlng: [
-15,
30
]
},
{
name: "Zimbabwe",
latlng: [
-20,
30
]
}
];

const countryMapToLMAO = (name) => {
  switch(name) {
    case 'Bolivia (Plurinational State of)':
      return 'Bolivia';
    case 'Brunei Darussalam':
      return 'Brunei';
    case 'Czech Republic':
      return 'Czechia';
    case 'Faroe Islands':
      return 'Faeroe Islands';
    case 'Iran (Islamic Republic of)':
      return 'Iran';
    case 'Korea (Republic of)':
      return 'S. Korea';
    case 'Macedonia (the former Yugoslav Republic of)':
      return 'North Macedonia';
    case 'Moldova (Republic of)':
      return 'Moldova';
    case 'Palestine, State of':
      return 'Palestine';
    case 'Russian Federation':
      return 'Russia';
    case 'Saint Martin (French part)':
      return 'Saint Martin';
    case 'United Arab Emirates':
      return 'UAE';
    case 'United Kingdom of Great Britain and Northern Ireland':
      return 'UK';
    case 'United States of America':
      return 'USA';
    case 'Viet Nam':
      return 'Vietnam';
    default:
      return name;
  }
}

const countryMapToRapid = (name) => {
  switch(name) {
    case 'Bahamas':
      return 'Bahamas, The';
    case 'Bolivia (Plurinational State of)':
      return 'Bolivia';
    case 'Brunei Darussalam':
      return 'Brunei';
    case 'China':
      return 'Mainland China';
    case 'Congo (Democratic Republic of the)':
      return 'Republic of the Congo';
    case `Côte d'Ivoire`:
      return `Cote d'Ivoire`;
    case 'Czech Republic':
      return 'Czechia';
    //case 'Faroe Islands':
    //  return 'Faeroe Islands';
    case 'Gambia':
      return 'Gambia, The';
    case 'Iran (Islamic Republic of)':
      return 'Iran';
    case 'Korea (Republic of)':
      return 'Korea, South';
    case 'Macedonia (the former Yugoslav Republic of)':
      return 'North Macedonia';
    case 'Moldova (Republic of)':
      return 'Moldova';
    case 'Palestine, State of':
      return 'occupied Palestinian territory';
    case 'Republic of Kosovo':
      return 'Kosovo';
    case 'Russian Federation':
      return 'Russia';
    case 'Saint Barthélemy':
      return 'Saint Barthelemy';
    case 'Saint Martin (Dutch part)':
      return 'Sint Maarten';
    case 'Saint Martin (French part)':
      return 'St Martin';
    case 'Swaziland':
      return 'Eswatini';
    //case 'United Arab Emirates':
    //  return 'UAE';
    case 'Taiwan':
      return 'Taiwan*'
    case 'United Kingdom of Great Britain and Northern Ireland':
      return 'United Kingdom';
    case 'United States of America':
      return 'US';
    case 'Venezuela (Bolivarian Republic of)':
      return 'Venezuela';
    case 'Viet Nam':
      return 'Vietnam';
    case 'Virgin Islands (U.S.)':
      return 'United States Virgin Islands';
    default:
      return name;
  }
}

const countryLocationsLMAO = {}

for(const { name, latlng } of regionsGeoPositions) {// try: const { name, latlng: [lat, lng] }
  const [lat, lng] = latlng;
  countryLocationsLMAO[countryMapToLMAO(name)] = { lat, lng }
}

const countryLocationsRapid = {}

for(const { name, latlng } of regionsGeoPositions) {// try: const { name, latlng: [lat, lng] }
  const [lat, lng] = latlng;
  countryLocationsRapid[countryMapToRapid(name)] = { lat, lng }
}

export { countryLocationsLMAO, countryLocationsRapid };
