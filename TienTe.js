function chuyendoiTien() {
    let a = document.getElementById("nhapSoTien").value;
    let b = document.getElementById("select1").value;
    let c = document.getElementById("select2").value;
    let d;
    if ((b === "VND") && (c === "USD")) {
        d = a/23000;
        document.getElementById("chuyendoi").innerHTML = "so tien la: " + d;
    }
    if ((b==="USD") && (c==="VND")) {
        d = a * 23000;
        document.getElementById("chuyendoi").innerHTML = "so tien la: " + d;
    }
}