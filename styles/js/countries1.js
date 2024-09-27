const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
const startbtn = document.getElementById('startWord')
const searchbtn = document.getElementById('search')
const filterbtn = document.getElementById('filter')
const searchInput = document.getElementById('searchInput')
const viewbd = document.getElementById('view')
const totalStartingCountries = document.getElementById('totalStartingCountries')
const totalCountries = document.getElementById('totalCountries')


startbtn.addEventListener('click', function () {
  const search = searchInput.value.toLowerCase()
  const totalStartsWithCountries = countries.filter(country => country.toLowerCase().startsWith(search)).length
  totalStartingCountries.textContent = `Số quốc gia bắt đầu bằng ký tự "${search}" là: ${totalStartsWithCountries}`
  const filterItem = countries.filter(country => country.toLowerCase().startsWith(search))
  let countriesHTML = ''
  filterItem.forEach(country => {
    countriesHTML += `
         <div class="view">
           <div class="label" style="width: 200px;">${country}</div>
         </div>
       `
  })
  viewbd.innerHTML = countriesHTML
})
searchbtn.addEventListener('click', function () {
  const search = searchInput.value.toLowerCase()
  const totalContainingCountries = countries.filter(country => country.toLowerCase().includes(search)).length
  totalCountries.textContent = `Số quốc gia có chứa ký tự "${search}" là: ${totalContainingCountries}`
  const filterItem = countries.filter(country => country.toLowerCase().includes(search))
  let countriesHTML = ''
  filterItem.forEach(country => {
    countriesHTML += `
         <div class="view">
           <div class="label" style="width: 200px;">${country}</div>
         </div>
       `
  })
  viewbd.innerHTML = countriesHTML
})
filterbtn.addEventListener('click', function () {
  const sortedCountries = countries.sort(); 

  let countriesHTML = '';
  sortedCountries.forEach(country => {
    countriesHTML += `
         <div class="view">
           <div class="label" style="width: 200px;">${country}</div>
         </div>
       `;
  });
  viewbd.innerHTML = countriesHTML;
});
