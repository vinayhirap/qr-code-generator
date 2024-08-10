const qrcode = new QRCode(document.getElementById("qrcode"));

qrcode.makeCode("Why did you scan me?");

document.getElementById("generateBtn").addEventListener("click", () => {
    const inputValue = document.getElementById("inputData").value.trim();
    if (inputValue === "") {
        alert("Input field cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
    }
});

document.getElementById("inputData").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById("generateBtn").click();
    }
});
