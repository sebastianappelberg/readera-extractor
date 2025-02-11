# ReadEra Extractor

A CLI tool for converting notes stored in ReadEra backup files to markdown files.

## Installation

With npm:
```
npm install -g readera-extractor
```

## Usage

First you need to get a hold of a ReadEra .bak file. You can do that by opening the ReadEra app, going to `Settings` -> `Backup & Restore`, and
select `Create a backup`. 

Once you have a .bak file you pass the path of that to `readera-extractor` as follows:

```
readera-extractor -f <path> -o <outputPath>
```

The `outputPath` refers to the folder you want all the markdown files to be created in. 

## License

MIT
