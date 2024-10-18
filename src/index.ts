#!/usr/bin/env node

import {Command} from "commander";
import {readEraBackupToMarkdown} from "./extractor";

const program = new Command();

program
  .name("readera-extractor")
  .description("A CLI tool for converting your ReadEra backup file to markdown files.")
  .version("1.0.0");

program
  .command("run", {isDefault: true})
  .option("-f, --file <file>", "The name of the ReadEra backup file to convert.")
  .option("-o, --output [output]", "the path to output the files to", "")
  .action(async ({file, output}) => {
    readEraBackupToMarkdown({
      file: file,
      output: output,
    });
  });

(async () => {
  await program.parseAsync(process.argv);
})();
