// 定义要调用的 WebService 地址
import axios from 'axios';
const url = 'http://www.webxml.com.cn/WebServices/WeatherWebService.asmx';

// 构建 SOAP 请求体，将<theCityName>标签中的城市名称替换为你所在的城市
const soapRequest = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <getWeatherbyCityName xmlns="http://WebXml.com.cn/">
      <theCityName>惠州</theCityName>
    </getWeatherbyCityName>
  </soap:Body>
</soap:Envelope>`;

// 定义 Fetch 请求参数


// 发起 axios 请求
axios.post(url, soapRequest, {
    headers: {
        'Content-Type': 'text/xml',

    }
}).then(res => {
    console.log(res.data);
    console.log('2114100314_21软工2班_蓝凯')
}).catch(err => {
    console.error(err);
});
