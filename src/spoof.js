// temp file to spoof data to test front end

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const hospitals = ["Apollo Hospital", "Jaypee Hospital", "Yatharth Hospital", "Raju Clinic", "Janta Hospital", "Patient First Clinic", "Ram Sri Hospital"];

export const spoofQueueItem = () => {
    return {
        "name": hospitals[Math.floor(Math.random() * hospitals.length)],
        "number": random(1, 10),
        "waitingTime": random(5, 60),
    };
}