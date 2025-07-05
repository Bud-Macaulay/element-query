import { runTest, runTestExpectError } from "./utils.js";

// === runTest: Normal tests expecting true/false results ===

// case-insensitive operators
runTest("Fe2O3", "Fe AnD O", true);
runTestExpectError("NaCl", "na Or o");

// case-insensitive operators & predicates
runTest("Br2", "Br AnD Halogen", true);
runTestExpectError("Br2", "br aNd HALOGEN");
runTest("Br2", "Br AND halogen", true);
runTest("Br2", "Br AND HaLoGeN", true);

// operators case-insensitive, predicates case-insensitive, spaces
runTest("Cl2", "Cl Or haLoGeN", true);
runTest("Cl2", "Cl oR HALOGEN", true);
runTest("Cl2", "  Cl    OR    halogen ", true);

// predicates case-insensitive combined with not
runTest("F2", "not HALOGEN", false);
runTest("F2", "NOT halogen", false);
runTest("F2", "NoT HaLoGeN", false);

// trailing/multiple spaces
runTest("Fe2O3", " Fe     and     O ", true);
runTest("Fe2O3", "  Fe      or     Cl   ", true);

// === runTestExpectError: tests expected to throw ===

runTestExpectError("Fe2O3", "fe", false); // lowercase symbol should fail unless normalized
runTestExpectError("Fe2O3", "Fe and"); // incomplete query
runTestExpectError("Fe2O3", "and Fe"); // starts with operator

runTestExpectError("Fe2O3", "Fee"); // unknown element
