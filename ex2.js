
    let massa = 67
    let tinggi = 1.78
    let imt = massa / (tinggi **2)
    let notif = `Massa ${massa}kg & Tinggi ${tinggi}m \n`

    if (imt < 18.5) {
        notif += `IMT = ${imt}, kurang mangan`
    } else if (imt >= 18.5 && imt <= 24.9) {
        notif += `IMT = ${imt}, wes pas`
    } else if (imt >= 25.0 && imt <= 29.9) {
        notif += `IMT = ${imt}, rodok lemu titik`
    } else if (imt >= 30.0 && imt <= 39.9) {
        notif += `IMT = ${imt}, kakean mangan bos`
    } else {
        notif += `IMT = ${imt}, raksasa`
    }
 
    console.log(notif)