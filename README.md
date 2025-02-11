# ReadEra Extractor

A CLI tool for converting notes from your ReadEra backup file to markdown files.

## Installation

With npm:
```
npm install -g readera-extractor
```

## Usage

First you need to get a hold of a ReadEra .bak file. You can do that by opening the ReadEra app, going to settings -> backup, and
select create new backup. 

Once you have a .bak file you pass the path of that to `readera-extractor` as follows:

```
readera-extractor -f <path> -o <outputPath>
```

The `outputPath` refers to the folder you want all the markdown files to be created in. 

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
