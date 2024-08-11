import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
  const myInput = core.getInput("myInput");
  console.log(`Hello, ${myInput}`);
}

async function main(): Promise<void> {
  try {
    await run();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(`Unknown error occurred: ${error}`);
    }
  }
}

main();
