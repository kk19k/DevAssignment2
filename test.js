console.log("Running application test...");

const message = "DevOps CI/CD Pipeline is Working!";

if (message.length > 0) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.log("Test Failed!");
  process.exit(1);
}