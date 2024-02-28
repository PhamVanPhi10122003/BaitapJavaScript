//Baitap js 17/1
//Bai 1
document.writeln(("hello  world <br>"));
var x = 5;
switch(x) { 
  case 2 :
    document.writeln("Thu hai");
    break;
  case 3 :
    document.writeln("thu ba");
    break;
  case 4 :
    document.writeln("thu tu");
    break;
  case 5 :
    document.writeln("thu nam");
    break;
  case 6 :
    document.writeln("thu sau");
    break;
  case 7 :
    document.writeln("thu bay");
    break;  
  case 8 :
    document.writeln("chu nhat");
    break;
    default: 
      break; 
         
} 
document.writeln("<br>"); 
//bai 2//
var y = ["Thu hai","thu ba", "thu tu", "thu nam" , "thu sau", "thu bay" ,"chu nhat"];
switch (x) {
  case 2 :
    document.writeln(y[x-2]);
    break;
  case 3 :
    document.writeln(y[x-2]);
    break;
  case 4 :
    document.writeln(y[x-2]);
    break;
  case 5 :
    document.writeln(y[x-2]);
    break;
  case 6 :
    document.writeln(y[x-2]);
    break;
  case 7 :
    document.writeln(y[x-2]);
    break;
  case 8 :
    document.writeln(y[x-2]);
    break;
    
}
document.writeln("<br>"); 

//bai 3
function snt(number) {

  if (number <= 1) {
      return false;
  }
  if (number <= 3 ) {
      return true;
    
  }

  
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i++) {
      if (number % i === 0) {
          return false;
      }
  }

  
  return true;
}


document.writeln(snt(3))
document.writeln("<br>");  


//bai 4
var a =
  [
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1],
  ];
for (var i = 0; i < a.length; i++) {
  for (var j = 0; j < a[i].length; j++) {
    document.writeln(a[i][j] + " ");
  }
  document.writeln("<br>");
}

//bai 5
// kiem tra email, kiểm tra password , khi người dùng gõ email thì tra lên email
//submit kiểm tra email ,passwword đạt hay không đạt
//
//bai 6 đổi email
//bai 7 giao diện
//bai 8 submit


  //Kiểm tra regex
function kiemtraPassword(password) {
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (regex.test(password)) {
      document.getElementById("r_password").innerHTML = "Password oke!";
      return true;
    } else {
      document.getElementById("r_password").innerHTML =
        "Password phải có ít nhất một chữ cái in hoa, ít nhất một số, ít nhất một chữ cái thường, và có ít nhất tám ký tự";
      return false;
    }
  }
  function kiemtraEmail(email) {
    var regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).*@gmail\.com$/;
    if (regex.test(email)) {
      document.getElementById("r_email").innerHTML = "Email oke!";
      return true;
    } else {
      document.getElementById("r_email").innerHTML =
        "Email phải chứa ít nhất một số, một chữ cái, và kết thúc bằng @gmail.com";
      return false;
    }
  }
  
  function submitForm() {
    var hotenValue = document.getElementById("hoten").value;
    var emailValue = document.getElementById("email").value;
    var tendangnhapValue = document.getElementById("tendangnhap").value;
    var passwordValue = document.getElementById("password").value;
  
    if (hotenValue === "") {
      alert("Họ tên không được để trống");
      return;
    }
    if (emailValue === "") {
      alert("Email không được để trống");
      return;
    }
    if (tendangnhapValue === "") {
      alert("Tên đăng nhập không được để trống");
      return;
    }
    if (passwordValue === "") {
      alert("Mật khẩu không được để trống");
      return;
    }
    if (kiemtraEmail(emailValue) && kiemtraPassword(passwordValue) === false) {
      return;
    } else {
      document.getElementById("hoten").innerHTML = "";
      document.getElementById("email").innerHTML = "";
      document.getElementById("tendangnhap").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      document.getElementById("r_email").innerHTML = "";
      document.getElementById("r_password").innerHTML = "";
    }
    const info = {
      hoten: hotenValue,
      email: emailValue,
      tendangnhap: tendangnhapValue,
      matkhau: passwordValue,
    };
    var result =
      "Họ và tên: " +
      info.hoten +
      "<br>" +
      "Email: " +
      info.email +
      "<br>" +
      "Tên đăng nhập: " +
      info.tendangnhap +
      "<br>" +
      "Mật khẩu: " +
      info.matkhau;
    // var result = JSON.stringify(info);
  
    document.getElementById("ketqua").innerHTML = result;
  }