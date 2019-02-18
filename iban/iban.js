// country specific formatting
var ibanCountries = {
	"AD": { "length": 24, "format": "F04F04A12", "example": "AD1200012030200359100100"},
	"AE": { "length": 23, "format": "F03F16", "example": "AE070331234567890123456"},
	"AL": { "length": 28, "format": "F08A16", "example": "AL47212110090000000235698741"},
	"AT": { "length": 20, "format": "F05F11", "example": "AT611904300234573201"},
	"AZ": { "length": 28, "format": "U04A20", "example": "AZ21NABZ00000000137010001944"},
	"BA": { "length": 20, "format": "F03F03F08F02", "example": "BA391290079401028494"},
	"BE": { "length": 16, "format": "F03F07F02", "example": "BE68539007547034"},
	"BG": { "length": 22, "format": "U04F04F02A08", "example": "BG80BNBG96611020345678"},
	"BH": { "length": 22, "format": "U04A14", "example": "BH67BMAG00001299123456"},
	"BR": { "length": 29, "format": "F08F05F10U01A01", "example": "BR9700360305000010009795493P1"},
	"CH": { "length": 21, "format": "F05A12", "example": "CH9300762011623852957"},
	"CR": { "length": 22, "format": "F04F14", "example": "CR05015202001026284066"},
	"CY": { "length": 28, "format": "F03F05A16", "example": "CY17002001280000001200527600"},
	"CZ": { "length": 24, "format": "F04F06F10", "example": "CZ6508000000192000145399"},
	"DE": { "length": 22, "format": "F08F10", "example": "DE89370400440532013000"},
	"DK": { "length": 18, "format": "F04F09F01", "example": "DK5000400440116243"},
	"DO": { "length": 28, "format": "U04F20", "example": "DO28BAGR00000001212453611324"},
	"EE": { "length": 20, "format": "F02F02F11F01", "example": "EE382200221020145685"},
	"ES": { "length": 24, "format": "F04F04F01F01F10", "example": "ES9121000418450200051332"},
	"FI": { "length": 18, "format": "F06F07F01", "example": "FI2112345600000785"},
	"FO": { "length": 18, "format": "F04F09F01", "example": "FO6264600001631634"},
	"FR": { "length": 27, "format": "F05F05A11F02", "example": "FR1420041010050500013M02606"},
	"GB": { "length": 22, "format": "U04F06F08", "example": "GB29NWBK60161331926819"},
	"GE": { "length": 22, "format": "U02F16", "example": "GE29NB0000000101904917"},
	"GI": { "length": 23, "format": "U04A15", "example": "GI75NWBK000000007099453"},
	"GL": { "length": 18, "format": "F04F09F01", "example": "GL8964710001000206"},
	"GR": { "length": 27, "format": "F03F04A16", "example": "GR1601101250000000012300695"},
	"GT": { "length": 28, "format": "A04A20", "example": "GT82TRAJ01020000001210029690"},
	"HR": { "length": 21, "format": "F07F10", "example": "HR1210010051863000160"},
	"HU": { "length": 28, "format": "F03F04F01F15F01", "example": "HU42117730161111101800000000"},
	"IE": { "length": 22, "format": "U04F06F08", "example": "IE29AIBK93115212345678"},
	"IL": { "length": 23, "format": "F03F03F13", "example": "IL620108000000099999999"},
	"IS": { "length": 26, "format": "F04F02F06F10", "example": "IS140159260076545510730339"},
	"IT": { "length": 27, "format": "U01F05F05A12", "example": "IT60X0542811101000000123456"},
	"JO": { "length": 30, "format": "U04F04A18", "example": "JO94CBJO0010000000000131000302"},
	"KW": { "length": 30, "format": "U04A22", "example": "KW81CBKU0000000000001234560101"},
	"KZ": { "length": 20, "format": "F03A13", "example": "KZ86125KZT5004100100"},
	"LB": { "length": 28, "format": "F04A20", "example": "LB62099900000001001901229114"},
	"LC": { "length": 32, "format": "U04A24", "example": "LC55HEMM000100010012001200023015"},
	"LI": { "length": 21, "format": "F05A12", "example": "LI21088100002324013AA"},
	"LT": { "length": 20, "format": "F05F11", "example": "LT121000011101001000"},
	"LU": { "length": 20, "format": "F03A13", "example": "LU280019400644750000"},
	"LV": { "length": 21, "format": "U04A13", "example": "LV80BANK0000435195001"},
	"MC": { "length": 27, "format": "F05F05A11F02", "example": "MC5811222000010123456789030"},
	"MD": { "length": 24, "format": "A02A18", "example": "MD24AG000225100013104168"},
	"ME": { "length": 22, "format": "F03F13F02", "example": "ME25505000012345678951"},
	"MK": { "length": 19, "format": "F03A10F02", "example": "MK07250120000058984"},
	"MR": { "length": 27, "format": "F05F05F11F02", "example": "MR1300020001010000123456753"},
	"MT": { "length": 31, "format": "U04F05A18", "example": "MT84MALT011000012345MTLCAST001S"},
	"MU": { "length": 30, "format": "U04F02F02F12F03U03", "example": "MU17BOMM0101101030300200000MUR"},
	"NL": { "length": 18, "format": "U04F10", "example": "NL91ABNA0417164300"},
	"NO": { "length": 15, "format": "F04F06F01", "example": "NO9386011117947"},
	"PK": { "length": 24, "format": "U04A16", "example": "PK36SCBL0000001123456702"},
	"PL": { "length": 28, "format": "F08F16", "example": "PL61109010140000071219812874"},
	"PS": { "length": 29, "format": "U04A21", "example": "PS92PALS000000000400123456702"},
	"PT": { "length": 25, "format": "F04F04F11F02", "example": "PT50000201231234567890154"},
	"QA": { "length": 29, "format": "U04A21", "example": "QA58DOHB00001234567890ABCDEFG"},
	"RO": { "length": 24, "format": "U04A16", "example": "RO49AAAA1B31007593840000"},
	"RS": { "length": 22, "format": "F03F13F02", "example": "RS35260005601001611379"},
	"SA": { "length": 24, "format": "F02A18", "example": "SA0380000000608010167519"},
	"SC": { "length": 31, "format": "U04F02F02F16U03", "example": "SC18SSCB11010000000000001497USD"},
	"SE": { "length": 24, "format": "F03F16F01", "example": "SE4550000000058398257466"},
	"SI": { "length": 19, "format": "F05F08F02", "example": "SI56263300012039086"},
	"SK": { "length": 24, "format": "F04F06F10", "example": "SK3112000000198742637541"},
	"SM": { "length": 27, "format": "U01F05F05A12", "example": "SM86U0322509800000000270100"},
	"ST": { "length": 25, "format": "F08F11F02", "example": "ST68000100010051845310112"},
	"TL": { "length": 23, "format": "F03F14F02", "example": "TL380080012345678910157"},
	"TN": { "length": 24, "format": "F02F03F13F02", "example": "TN5910006035183598478831"},
	"TR": { "length": 26, "format": "F05A01A16", "example": "TR330006100519786457841326"},
	"UA": { "length": 29, "format": "F06A19", "example": "UA213996220000026007233566001"},
	"VG": { "length": 24, "format": "U04F16", "example": "VG96VPVG0000012345678901"},
	"XK": { "length": 20, "format": "F04F10F02", "example": "XK051212012345678906"}
};


function checkFormat(iban) {

	// check for invalid chars
	if(/[^\w]/.test(iban)) throw "IBANs can only contain letters and numbers";

	var country = iban.substr(0,2);
	var formatData = ibanCountries[country];
	if(!formatData) throw "Country Code '" + country + "' is invalid";
	// check length
	if(iban.length != formatData.length) throw country+" IBAN numbers should be " + formatData.length + " characters long";
	// @todo check against regex thing

	// ok
	return true;
}

function convertToInteger(iban) {
	// remove any spaces
	iban = iban.replace(/\s/g,'');
	// put first 4 chars on the end
	iban = iban.substr(4) + iban.substr(0,4);
	// replace characters with digits as per IBAN spec
	return iban.toLowerCase().split('').map(function(c){
    	return isNaN(c) ? 'abcdefghijklmnopqrstuvwxyz'.indexOf(c)+10 : c;
    }).join('');
}

function calcMod97(input){
	// check is numeric
	var isNum = /^\d+$/.test(input);
	if(!isNum) {
		throw "Input must be numeric for modulus calculation";
	}
	// calc modulus
	return bigInt(input).mod("97").valueOf();
}

function validateIban(iban) {

	// check format
	checkFormat(iban);

	// check checkdigits are not impossible
	if(['00','01','99'].indexOf(iban.substring(2,4)) != -1){
		throw "Impossible checkdigits. Please check!";
	}

	// check modulus
	if(calcMod97(convertToInteger(iban)) != 1){
		throw "Invalid checkdigits. Please check!";
	}

	// ok
	return true;
}

function generateIban(countryCode,bankCode,sortcode,accountNumber) {

	// construct IBAN with dummy checkdigits
	var iban_prep = countryCode + "00" +bankCode + sortcode + accountNumber;
	
	// check format
	checkFormat(iban_prep);

	// convert to integer version
	var iban_converted = convertToInteger(iban_prep);

	// calc quotient & remainder
	var divmod = bigInt(iban_converted).divmod(97);

	// checkdigits = 98 - remainder of /97
	var checkdigits = 98 - divmod.remainder.valueOf();

	// rebuild IBAN with new checkdigits
	var iban = countryCode + checkdigits + bankCode + sortcode + accountNumber;

	// return
	return iban;

}