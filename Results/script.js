function calculator() {
    let p = document.getElementById("p");
    let i = document.getElementById("i");
    let t = document.getElementById("t");
    let k = document.getElementById("k");
    let rezlt = 0;

    switch (t.value) {
        case "Месяц":
            t = 30;
            break;
        case "3 Месяца":
            t = 90;
            break;
        case "Полгода":
            t = 180;

            break;
        case "Год":
            t = 365;
            break;
    }

    if (document.getElementsByName("rate")[0].checked) {
        rezlt =
            Number(p.value) + Number((p.value * i.value * t) / k.value / 100);
        document.getElementById("result").innerText =
            "Сумма с процентами за год " + Math.floor(rezlt);
    } else {
        let t1 = document.getElementById("t");
        switch (t1.value) {
            case "Месяц":
                t1 = 1;
                break;
            case "3 Месяца":
                t1 = 3;
                break;
            case "Полгода":
                t1 = 6;
                break;
            case "Год":
                t1 = 12;
                break;
        }
        let Temp = "";
        let p1 = Number(p.value);
        for (i1 = 0; i1 < t1; i1++) {
            rezlt = Math.floor(
                (p1 * Number(i.value) * 30) / Number(k.value) / 100
            );
            p1 = p1 + rezlt;
            console.log(rezlt);
            Temp += "\n" + "Месяц " + (i1 + 1) + ": " + rezlt;
        }
        // rezlt = Number(p.value * ((1 + i.value / t1 + 100) * Math.sqrt(t1)));
        document.getElementById("result").innerText =
            "Сумма с процентами: " + Temp;
    }
}
document.getElementById("rangeSize").addEventListener("change", function () {
    document.getElementById("p").value = this.value;
});



