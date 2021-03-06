var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 370.', function () {
  test('issue-370-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/538.46 (KHTML, like Gecko) Mobile/12A4331d [FBAN/FBIOS;FBAV/12.1.0.24.20;FBBV/3214247;FBDV/iPhone5,2;FBMD/iPhone;FBSN/iPhone OS;FBSV/8.0;FBSS/2; FBCR/3DK;FBID/phone;FBLC/en_US;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.1');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '1');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '8.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/7.0.0.17.1;FBBV/1325030;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/TELIA;FBID/phone;FBLC/da_DK;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '7.0');
    assert.strictEqual(browser['MajorVer'], '7');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-C', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 [FBAN/FBIOS;FBAV/12.1.0.24.20;FBBV/3214247;FBDV/iPhone6,2;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.1.2;FBSS/2; FBCR/SFR;FBID/phone;FBLC/fr_FR;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.1');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '1');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-D', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_6 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/11B651 [FBAN/FBIOS;FBAV/9.0.0.25.31;FBBV/2102024;FBDV/iPhone4,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/7.0.6;FBSS/2; FBCR/TDC;FBID/phone;FBLC/da_DK;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '9.0');
    assert.strictEqual(browser['MajorVer'], '9');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-E', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 [FBAN/FBIOS;FBAV/9.0.0.25.31;FBBV/2102024;FBDV/iPhone4,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/6.1.3;FBSS/2; FBCR/Telenor;FBID/phone;FBLC/en_US;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '9.0');
    assert.strictEqual(browser['MajorVer'], '9');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '6.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-F', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206 [FBAN/FBIOS;FBAV/5.2.2;FBBV/82131;FBDV/iPhone3,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/5.1.1;FBSS/2; FBCR/TELIA;FBID/phone;FBLC/da_DK]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '5.2');
    assert.strictEqual(browser['MajorVer'], '5');
    assert.strictEqual(browser['MinorVer'], '2');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '5.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Phone');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPhone');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-G', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/538.46 (KHTML, like Gecko) Mobile/12A4331d [FBAN/FBIOS;FBAV/12.1.0.24.20;FBBV/3214247;FBDV/iPad4,1;FBMD/iPad;FBSN/iPhone OS;FBSV/8.0;FBSS/2; FBCR/;FBID/tablet;FBLC/en_US;FBOP/1]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.1');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '1');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '8.0');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], true);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPad');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPad');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-H', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPad; CPU OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 [FBAN/FBIOS;FBAV/6.5.1;FBBV/377040;FBDV/iPad3,6;FBMD/iPad;FBSN/iPhone OS;FBSV/7.1.1;FBSS/2; FBCR/TelenorDK;FBID/tablet;FBLC/da_DK;FBOP/1]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '6.5');
    assert.strictEqual(browser['MajorVer'], '6');
    assert.strictEqual(browser['MinorVer'], '5');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], true);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPad');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Tablet');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPad');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
  test('issue-370-I', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (iPod touch; CPU iPhone OS 7_1_1 like Mac OS X) AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D201 [FBAN/FBIOS;FBAV/12.1.0.24.20;FBBV/3214247;FBDV/iPod5,1;FBMD/iPod touch;FBSN/iPhone OS;FBSV/7.1.1;FBSS/2; FBCR/;FBID/phone;FBLC/en_US;FBOP/5]");

    assert.strictEqual(browser['Browser'], 'Facebook App');
    assert.strictEqual(browser['Browser_Type'], 'Application');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Facebook');
    assert.strictEqual(browser['Version'], '12.1');
    assert.strictEqual(browser['MajorVer'], '12');
    assert.strictEqual(browser['MinorVer'], '1');
    assert.strictEqual(browser['Platform'], 'iOS');
    assert.strictEqual(browser['Platform_Version'], '7.1');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], true);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['Device_Name'], 'iPod Touch');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Mobile Device');
    assert.strictEqual(browser['Device_Pointing_Method'], 'touchscreen');
    assert.strictEqual(browser['Device_Code_Name'], 'iPod Touch');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'WebKit');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Apple Inc');
  });
});
