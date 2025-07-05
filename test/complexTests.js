import { runTest } from "./utils.js";

runTest("NaCl", "halogen", true);
runTest("LiF", "halogen", true);
runTest("H2O", "halogen", false);

// Catch Co != CO
runTest("CO2", "nonmetal", true);
runTest("NH3", "nonmetal", true);
runTest("FeO", "nonmetal", true);
runTest("Cu", "nonmetal", false);

// alkali checks
runTest("LiCl", "alkali", true);
runTest("NaOH", "alkali", true);
runTest("KBr", "alkali", true);
runTest("MgCl2", "alkali", false);

// d-block checks
runTest("Fe2O3", "d-block", true);
runTest("ZnCl2", "d-block", true);
runTest("NaCl", "d-block", false);

// and and not and
runTest("FeCl3", "d-block and halogen", true);
runTest("NaF", "alkali and halogen", true);
runTest("LiF", "alkali and not d-block", true);
runTest("FeCl3", "halogen and not nonmetal", false);

// brackets with complex not ors
runTest("LiF", "(alkali or d-block) and halogen", true);
runTest("NaCl", "not (d-block or nonmetal)", false);

// metalloid vs non metals
runTest("Ge", "nonmetal", false);
runTest("As", "nonmetal", false);
runTest("Se", "nonmetal", true);

// nested para
runTest("NaCl", "(alkali and (halogen or nonmetal))", true);
runTest("Fe2O3", "((d-block or alkali) and not (halogen))", true);
runTest("H2O", "not (alkali or (d-block and halogen))", true);
