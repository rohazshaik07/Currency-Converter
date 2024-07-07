document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    dateElement.textContent = formattedDate;
    convertCurrency();
});

const countries = [
    { name: 'Afghanistan', code: 'AFN', flag: 'af' },
    { name: 'Albania', code: 'ALL', flag: 'al' },
    { name: 'Algeria', code: 'DZD', flag: 'dz' },
    { name: 'American Samoa', code: 'USD', flag: 'as' },
    { name: 'Andorra', code: 'EUR', flag: 'ad' },
    { name: 'Angola', code: 'AOA', flag: 'ao' },
    { name: 'Anguilla', code: 'XCD', flag: 'ai' },
    { name: 'Antarctica', code: '', flag: 'aq' },
    { name: 'Antigua and Barbuda', code: 'XCD', flag: 'ag' },
    { name: 'Argentina', code: 'ARS', flag: 'ar' },
    { name: 'Armenia', code: 'AMD', flag: 'am' },
    { name: 'Aruba', code: 'AWG', flag: 'aw' },
    { name: 'Australia', code: 'AUD', flag: 'au' },
    { name: 'Austria', code: 'EUR', flag: 'at' },
    { name: 'Azerbaijan', code: 'AZN', flag: 'az' },
    { name: 'Bahamas (The)', code: 'BSD', flag: 'bs' },
    { name: 'Bahrain', code: 'BHD', flag: 'bh' },
    { name: 'Bangladesh', code: 'BDT', flag: 'bd' },
    { name: 'Barbados', code: 'BBD', flag: 'bb' },
    { name: 'Belarus', code: 'BYN', flag: 'by' },
    { name: 'Belgium', code: 'EUR', flag: 'be' },
    { name: 'Belize', code: 'BZD', flag: 'bz' },
    { name: 'Benin', code: 'XOF', flag: 'bj' },
    { name: 'Bermuda', code: 'BMD', flag: 'bm' },
    { name: 'Bhutan', code: 'BTN', flag: 'bt' },
    { name: 'Bolivia (Plurinational State of)', code: 'BOB', flag: 'bo' },
    { name: 'Bosnia and Herzegovina', code: 'BAM', flag: 'ba' },
    { name: 'Botswana', code: 'BWP', flag: 'bw' },
    { name: 'Brazil', code: 'BRL', flag: 'br' },
    { name: 'British Indian Ocean Territory (The)', code: 'USD', flag: 'io' },
    { name: 'Brunei Darussalam', code: 'BND', flag: 'bn' },
    { name: 'Bulgaria', code: 'BGN', flag: 'bg' },
    { name: 'Burkina Faso', code: 'XOF', flag: 'bf' },
    { name: 'Burundi', code: 'BIF', flag: 'bi' },
    { name: 'Cabo Verde', code: 'CVE', flag: 'cv' },
    { name: 'Cambodia', code: 'KHR', flag: 'kh' },
    { name: 'Cameroon', code: 'XAF', flag: 'cm' },
    { name: 'Canada', code: 'CAD', flag: 'ca' },
    { name: 'Cayman Islands (The)', code: 'KYD', flag: 'ky' },
    { name: 'Central African Republic (The)', code: 'XAF', flag: 'cf' },
    { name: 'Chad', code: 'XAF', flag: 'td' },
    { name: 'Chile', code: 'CLP', flag: 'cl' },
    { name: 'China', code: 'CNY', flag: 'cn' },
    { name: 'Colombia', code: 'COP', flag: 'co' },
    { name: 'Comoros (The)', code: 'KMF', flag: 'km' },
    { name: 'Congo (The Democratic Republic of the)', code: 'CDF', flag: 'cd' },
    { name: 'Congo (The)', code: 'XAF', flag: 'cg' },
    { name: 'Cook Islands (The)', code: 'NZD', flag: 'ck' },
    { name: 'Costa Rica', code: 'CRC', flag: 'cr' },
    { name: 'Croatia', code: 'EUR', flag: 'hr' },
    { name: 'Cuba', code: 'CUP', flag: 'cu' },
    { name: 'Curaçao', code: 'ANG', flag: 'cw' },
    { name: 'Cyprus', code: 'EUR', flag: 'cy' },
    { name: 'Czech Republic (The)', code: 'CZK', flag: 'cz' },
    { name: 'Côte d\'Ivoire', code: 'XOF', flag: 'ci' },
    { name: 'Denmark', code: 'DKK', flag: 'dk' },
    { name: 'Djibouti', code: 'DJF', flag: 'dj' },
    { name: 'Dominica', code: 'XCD', flag: 'dm' },
    { name: 'Dominican Republic (The)', code: 'DOP', flag: 'do' },
    { name: 'Ecuador', code: 'USD', flag: 'ec' },
    { name: 'Egypt', code: 'EGP', flag: 'eg' },
    { name: 'El Salvador', code: 'USD', flag: 'sv' },
    { name: 'Equatorial Guinea', code: 'XAF', flag: 'gq' },
    { name: 'Eritrea', code: 'ERN', flag: 'er' },
    { name: 'Estonia', code: 'EUR', flag: 'ee' },
    { name: 'Eswatini', code: 'SZL', flag: 'sz' },
    { name: 'Ethiopia', code: 'ETB', flag: 'et' },
    { name: 'Fiji', code: 'FJD', flag: 'fj' },
    { name: 'Finland', code: 'EUR', flag: 'fi' },
    { name: 'France', code: 'EUR', flag: 'fr' },
    { name: 'Gabon', code: 'XAF', flag: 'ga' },
    { name: 'Gambia (The)', code: 'GMD', flag: 'gm' },
    { name: 'Georgia', code: 'GEL', flag: 'ge' },
    { name: 'Germany', code: 'EUR', flag: 'de' },
    { name: 'Ghana', code: 'GHS', flag: 'gh' },
    { name: 'Greece', code: 'EUR', flag: 'gr' },
    { name: 'Greenland', code: 'DKK', flag: 'gl' },
    { name: 'Grenada', code: 'XCD', flag: 'gd' },
    { name: 'Guadeloupe', code: 'EUR', flag: 'gp' },
    { name: 'Guam', code: 'USD', flag: 'gu' },
    { name: 'Guatemala', code: 'GTQ', flag: 'gt' },
    { name: 'Guinea', code: 'GNF', flag: 'gn' },
    { name: 'Guinea-Bissau', code: 'XOF', flag: 'gw' },
    { name: 'Guyana', code: 'GYD', flag: 'gy' },
    { name: 'Haiti', code: 'HTG', flag: 'ht' },
    { name: 'Honduras', code: 'HNL', flag: 'hn' },
    { name: 'Hong Kong', code: 'HKD', flag: 'hk' },
    { name: 'Hungary', code: 'HUF', flag: 'hu' },
    { name: 'Iceland', code: 'ISK', flag: 'is' },
    { name: 'India', code: 'INR', flag: 'in' },
    { name: 'Indonesia', code: 'IDR', flag: 'id' },
    { name: 'Iran (Islamic Republic of)', code: 'IRR', flag: 'ir' },
    { name: 'Iraq', code: 'IQD', flag: 'iq' },
    { name: 'Ireland', code: 'EUR', flag: 'ie' },
    { name: 'Israel', code: 'ILS', flag: 'il' },
    { name: 'Italy', code: 'EUR', flag: 'it' },
    { name: 'Jamaica', code: 'JMD', flag: 'jm' },
    { name: 'Japan', code: 'JPY', flag: 'jp' },
    { name: 'Jordan', code: 'JOD', flag: 'jo' },
    { name: 'Kazakhstan', code: 'KZT', flag: 'kz' },
    { name: 'Kenya', code: 'KES', flag: 'ke' },
    { name: 'Kiribati', code: 'AUD', flag: 'ki' },
    { name: 'Korea (The Democratic People\'s Republic of)', code: 'KPW', flag: 'kp' },
    { name: 'Korea (The Republic of)', code: 'KRW', flag: 'kr' },
    { name: 'Kuwait', code: 'KWD', flag: 'kw' },
    { name: 'Kyrgyzstan', code: 'KGS', flag: 'kg' },
    { name: 'Lao People\'s Democratic Republic (The)', code: 'LAK', flag: 'la' },
    { name: 'Latvia', code: 'EUR', flag: 'lv' },
    { name: 'Lebanon', code: 'LBP', flag: 'lb' },
    { name: 'Lesotho', code: 'LSL', flag: 'ls' },
    { name: 'Liberia', code: 'LRD', flag: 'lr' },
    { name: 'Libya', code: 'LYD', flag: 'ly' },
    { name: 'Liechtenstein', code: 'CHF', flag: 'li' },
    { name: 'Lithuania', code: 'EUR', flag: 'lt' },
    { name: 'Luxembourg', code: 'EUR', flag: 'lu' },
    { name: 'Macao', code: 'MOP', flag: 'mo' },
    { name: 'Madagascar', code: 'MGA', flag: 'mg' },
    { name: 'Malawi', code: 'MWK', flag: 'mw' },
    { name: 'Malaysia', code: 'MYR', flag: 'my' },
    { name: 'Maldives', code: 'MVR', flag: 'mv' },
    { name: 'Mali', code: 'XOF', flag: 'ml' },
    { name: 'Malta', code: 'EUR', flag: 'mt' },
    { name: 'Marshall Islands (The)', code: 'USD', flag: 'mh' },
    { name: 'Martinique', code: 'EUR', flag: 'mq' },
    { name: 'Mauritania', code: 'MRU', flag: 'mr' },
    { name: 'Mauritius', code: 'MUR', flag: 'mu' },
    { name: 'Mayotte', code: 'EUR', flag: 'yt' },
    { name: 'Mexico', code: 'MXN', flag: 'mx' },
    { name: 'Micronesia (Federated States of)', code: 'USD', flag: 'fm' },
    { name: 'Moldova (The Republic of)', code: 'MDL', flag: 'md' },
    { name: 'Monaco', code: 'EUR', flag: 'mc' },
    { name: 'Mongolia', code: 'MNT', flag: 'mn' },
    { name: 'Montenegro', code: 'EUR', flag: 'me' },
    { name: 'Montserrat', code: 'XCD', flag: 'ms' },
    { name: 'Morocco', code: 'MAD', flag: 'ma' },
    { name: 'Mozambique', code: 'MZN', flag: 'mz' },
    { name: 'Myanmar', code: 'MMK', flag: 'mm' },
    { name: 'Namibia', code: 'NAD', flag: 'na' },
    { name: 'Nauru', code: 'AUD', flag: 'nr' },
    { name: 'Nepal', code: 'NPR', flag: 'np' },
    { name: 'Netherlands (The)', code: 'EUR', flag: 'nl' },
    { name: 'New Caledonia', code: 'XPF', flag: 'nc' },
    { name: 'New Zealand', code: 'NZD', flag: 'nz' },
    { name: 'Nicaragua', code: 'NIO', flag: 'ni' },
    { name: 'Niger (The)', code: 'XOF', flag: 'ne' },
    { name: 'Nigeria', code: 'NGN', flag: 'ng' },
    { name: 'Niue', code: 'NZD', flag: 'nu' },
    { name: 'Norfolk Island', code: 'AUD', flag: 'nf' },
    { name: 'Northern Mariana Islands (The)', code: 'USD', flag: 'mp' },
    { name: 'Norway', code: 'NOK', flag: 'no' },
    { name: 'Oman', code: 'OMR', flag: 'om' },
    { name: 'Pakistan', code: 'PKR', flag: 'pk' },
    { name: 'Palau', code: 'USD', flag: 'pw' },
    { name: 'Palestine, State of', code: 'ILS', flag: 'ps' },
    { name: 'Panama', code: 'USD', flag: 'pa' },
    { name: 'Papua New Guinea', code: 'PGK', flag: 'pg' },
    { name: 'Paraguay', code: 'PYG', flag: 'py' },
    { name: 'Peru', code: 'PEN', flag: 'pe' },
    { name: 'Philippines (The)', code: 'PHP', flag: 'ph' },
    { name: 'Pitcairn', code: 'NZD', flag: 'pn' },
    { name: 'Poland', code: 'PLN', flag: 'pl' },
    { name: 'Portugal', code: 'EUR', flag: 'pt' },
    { name: 'Puerto Rico', code: 'USD', flag: 'pr' },
    { name: 'Qatar', code: 'QAR', flag: 'qa' },
    { name: 'Republic of North Macedonia', code: 'MKD', flag: 'mk' },
    { name: 'Romania', code: 'RON', flag: 'ro' },
    { name: 'Russian Federation (The)', code: 'RUB', flag: 'ru' },
    { name: 'Rwanda', code: 'RWF', flag: 'rw' },
    { name: 'Réunion', code: 'EUR', flag: 're' },
    { name: 'Saint Barthélemy', code: 'EUR', flag: 'bl' },
    { name: 'Saint Helena, Ascension and Tristan da Cunha', code: 'SHP', flag: 'sh' },
    { name: 'Saint Kitts and Nevis', code: 'XCD', flag: 'kn' },
    { name: 'Saint Lucia', code: 'XCD', flag: 'lc' },
    { name: 'Saint Martin (French part)', code: 'EUR', flag: 'mf' },
    { name: 'Saint Pierre and Miquelon', code: 'EUR', flag: 'pm' },
    { name: 'Saint Vincent and the Grenadines', code: 'XCD', flag: 'vc' },
    { name: 'Samoa', code: 'WST', flag: 'ws' },
    { name: 'San Marino', code: 'EUR', flag: 'sm' },
    { name: 'Sao Tome and Principe', code: 'STN', flag: 'st' },
    { name: 'Saudi Arabia', code: 'SAR', flag: 'sa' },
    { name: 'Senegal', code: 'XOF', flag: 'sn' },
    { name: 'Serbia', code: 'RSD', flag: 'rs' },
    { name: 'Seychelles', code: 'SCR', flag: 'sc' },
    { name: 'Sierra Leone', code: 'SLL', flag: 'sl' },
    { name: 'Singapore', code: 'SGD', flag: 'sg' },
    { name: 'Sint Maarten (Dutch part)', code: 'ANG', flag: 'sx' },
    { name: 'Slovakia', code: 'EUR', flag: 'sk' },
    { name: 'Slovenia', code: 'EUR', flag: 'si' },
    { name: 'Solomon Islands', code: 'SBD', flag: 'sb' },
    { name: 'Somalia', code: 'SOS', flag: 'so' },
    { name: 'South Africa', code: 'ZAR', flag: 'za' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GBP', flag: 'gs' },
    { name: 'South Sudan', code: 'SSP', flag: 'ss' },
    { name: 'Spain', code: 'EUR', flag: 'es' },
    { name: 'Sri Lanka', code: 'LKR', flag: 'lk' },
    { name: 'Sudan (The)', code: 'SDG', flag: 'sd' },
    { name: 'Suriname', code: 'SRD', flag: 'sr' },
    { name: 'Svalbard and Jan Mayen', code: 'NOK', flag: 'sj' },
    { name: 'Sweden', code: 'SEK', flag: 'se' },
    { name: 'Switzerland', code: 'CHF', flag: 'ch' },
    { name: 'Syrian Arab Republic', code: 'SYP', flag: 'sy' },
    { name: 'Taiwan (Province of China)', code: 'TWD', flag: 'tw' },
    { name: 'Tajikistan', code: 'TJS', flag: 'tj' },
    { name: 'Tanzania, United Republic of', code: 'TZS', flag: 'tz' },
    { name: 'Thailand', code: 'THB', flag: 'th' },
    { name: 'Timor-Leste', code: 'USD', flag: 'tl' },
    { name: 'Togo', code: 'XOF', flag: 'tg' },
    { name: 'Tokelau', code: 'NZD', flag: 'tk' },
    { name: 'Tonga', code: 'TOP', flag: 'to' },
    { name: 'Trinidad and Tobago', code: 'TTD', flag: 'tt' },
    { name: 'Tunisia', code: 'TND', flag: 'tn' },
    { name: 'Turkey', code: 'TRY', flag: 'tr' },
    { name: 'Turkmenistan', code: 'TMT', flag: 'tm' },
    { name: 'Tuvalu', code: 'AUD', flag: 'tv' },
    { name: 'Uganda', code: 'UGX', flag: 'ug' },
    { name: 'Ukraine', code: 'UAH', flag: 'ua' },
    { name: 'United Arab Emirates (The)', code: 'AED', flag: 'ae' },
    { name: 'United Kingdom of Great Britain and Northern Ireland (The)', code: 'GBP', flag: 'gb' },
    { name: 'United States Minor Outlying Islands (The)', code: 'USD', flag: 'um' },
    { name: 'United States of America (The)', code: 'USD', flag: 'us' },
    { name: 'Uruguay', code: 'UYU', flag: 'uy' },
    { name: 'Uzbekistan', code: 'UZS', flag: 'uz' },
    { name: 'Vanuatu', code: 'VUV', flag: 'vu' },
    { name: 'Venezuela (Bolivarian Republic of)', code: 'VES', flag: 've' },
    { name: 'Viet Nam', code: 'VND', flag: 'vn' },
    { name: 'Wallis and Futuna', code: 'XPF', flag: 'wf' },
    { name: 'Western Sahara', code: 'MAD', flag: 'eh' },
    { name: 'Yemen', code: 'YER', flag: 'ye' },
    { name: 'Zambia', code: 'ZMW', flag: 'zm' },
    { name: 'Zimbabwe', code: 'ZWL', flag: 'zw' },
    { name: 'Åland Islands', code: 'EUR', flag: 'ax' }
];

const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');
const fromFlagImg = document.getElementById('from-flag');
const toFlagImg = document.getElementById('to-flag');
const resultDiv = document.getElementById('result');
const resultFinal = document.getElementById('result_final');
const amountInput = document.getElementById('amount');

const apiKey = '1f5aea19af40ae4cb95bc7ba';

countries.forEach(country => {
    const optionFrom = document.createElement('option');
    optionFrom.value = country.code;
    optionFrom.textContent = country.name;
    optionFrom.dataset.flag = country.flag;
    fromCurrencySelect.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = country.code;
    optionTo.textContent = country.name;
    optionTo.dataset.flag = country.flag;
    toCurrencySelect.appendChild(optionTo);
});

function updateFlag(type) {
    const selectElement = type === 'from' ? fromCurrencySelect : toCurrencySelect;
    const imgElement = type === 'from' ? fromFlagImg : toFlagImg;
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const flagCode = selectedOption.dataset.flag;
    imgElement.src = `https://flagcdn.com/32x24/${flagCode}.png`;
    imgElement.alt = `${selectedOption.textContent} Flag`;
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount) || !fromCurrency || !toCurrency) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const result = (amount * rate).toFixed(2);

        resultDiv.textContent = `${result} ${toCurrency}`;
        resultFinal.textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        resultDiv.textContent = 'Error fetching exchange rate. Please try again later.';
    }
}

function switchCurrencies() {
    const fromIndex = fromCurrencySelect.selectedIndex;
    fromCurrencySelect.selectedIndex = toCurrencySelect.selectedIndex;
    toCurrencySelect.selectedIndex = fromIndex;
    updateFlag('from');
    updateFlag('to');
    convertCurrency();
}

updateFlag('from');
updateFlag('to');
