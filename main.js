function compute_kwh() {

    let kwh_input = Number(document.getElementById("kwh_input").value);

    switch (true) {
        case (kwh_input >= 0 && kwh_input <= 100):
            alert("Very Low Consumer");
            break;

        case (kwh_input >= 101 && kwh_input <= 200):
            alert("Low Consumption");
            break;

        case (kwh_input >= 201 && kwh_input <= 300):
            alert("Average consumer");
            break;

        case (kwh_input >= 301 && kwh_input <= 500):
            alert("High consumer");
            break;

        case (kwh_input > 500):
            alert("Very High Consumer");
            break;

        default:
            alert("Invalid input. Please enter a valid number.");
    }
}
