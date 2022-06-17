var response = JSON.parse($response.body);
response.status = "ok";
response.days = 999;
response.lazy_id = "XXXX2L";

$done({body: JSON.stringify(response)});
