import { runTest } from "./utils.js";

// <element>
runTest("Fe2O3", "Fe", true);
runTest("Fe2O3", "O", true);
runTest("Fe2O3", "Na", false);

// not
runTest("Fe2O3", "not Na", true);
runTest("NaCl", "not Cl", false);

// and
runTest("Fe2O3", "Fe and O", true);
runTest("NaCl", "Na and O", false);

// or
runTest("NaCl", "Na or O", true);
runTest("Fe2O3", "Na or K", false);

// parentheses
runTest("Fe2O3", "Fe and (O or Na)", true);
runTest("NaCl", "(O or K) and Na", false);
