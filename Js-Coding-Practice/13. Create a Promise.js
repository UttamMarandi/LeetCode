// Create a Promise to accept car names as argument and send response once the argument matches with Maruti?

let cars = ["Maruti", "Suzuki"];
const checkIfMaruti = (cars) => {
  return new Promise((resolve, reject) => {
    const marutiCar = cars.find((car) => car === "Maruti");
    if (marutiCar) {
      resolve(marutiCar);
    } else {
      const err = new Error("Maruti not found");
      reject(err);
    }
  });
};

const pr = checkIfMaruti();

pr.then((carName) => {
  console.log("We found the car" + carName);
}).catch((err) => console.log(err.message));
