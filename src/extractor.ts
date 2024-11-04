import * as AdmZip from "adm-zip";
import * as fs from "node:fs";
import * as path from "node:path";

interface Library {
  docs: Doc[];
}

interface Doc {
  data: DocData;
  citations: Citation[];
}

interface DocData {
  doc_file_name_title: string;
  doc_have_read_time: number;
  doc_last_read_time: number;
}

interface Citation {
  note_body: string;
  note_extra: string;
  note_page: number;
}

interface Comment {
  quote: string;
  comment: string;
  page: number;
}

interface Note {
  title: string;
  finishedAt?: Date;
  lastReadAt?: Date;
  comments: Comment[];
  numberOfComments: number;
}

interface ReadEraBackupToMarkdownArgs {
  file: string;
  output: string;
}

export function readEraBackupToMarkdown(args: ReadEraBackupToMarkdownArgs) {
  const notes = extractor(args.file);
  if (args.output !== "") {
    createFolder(args.output);
  }
  notes.forEach(note => {
    createFile(args.output, note.title + ".md", noteToMarkdown(note));
  });
}

// Function to create a folder if it doesn't exist.
function createFolder(folderPath: string): void {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, {recursive: true});
    console.log(`Folder created at: ${folderPath}`);
  } else {
    console.log(`Folder already exists at: ${folderPath}`);
  }
}

// Function to create a text file with content.
function createFile(folderPath: string, fileName: string, content: string): void {
  const filePath = path.join(folderPath, fileName);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`File created at: ${filePath}`);
}

function extractor(fileName: string): Note[] {
  // Unzip .bak file.
  const library = getFileFromZip(fileName, "library.json");
  if (!library) {
    throw new Error(`failed to read library from ${fileName}`);
  }

  // Transform JSON.
  const parsedLibrary = JSON.parse(library) as Library;
  return parsedLibrary.docs.map(mapDocToNote).filter(Boolean) as Note[];
}

function noteToMarkdown(note: Note): string {
  return `# ${note.title}

Finished at: ${note.finishedAt ? `${note.finishedAt!.toLocaleDateString()}` : "-"}
Last read at: ${note.lastReadAt ? `${note.lastReadAt!.toLocaleDateString()}` : "-"}

## Comments

${commentsToMarkdown(note.comments)}`;
}

function commentsToMarkdown(comments: Comment[]) {
  let markdown = "";
  comments.forEach((c, index) => {
    markdown += `Page: ${c.page}

*${c.quote}*
${c.comment ? `\n${fixMultiLineComment(c.comment)}` : ""}
${index < comments.length - 1 ? "\n---\n" : ""}`;
  });
  return markdown;
}

export function fixMultiLineComment(comment: string) {
  if (comment.includes("\n")) {
    const comments = comment.split("\n").filter(c => c !== "");
    let result = "";
    comments.forEach((c, index) => {
      result += `**${c}`;
      if (index < comments.length - 1) {
        // as long as it isn't the last comment, append two new lines.
        result += "\n\n";
      }
    });
    return result;
  }
  return `**${comment}`;
}

function mapDocToNote(data: Doc): Note | undefined {
  if (!data.citations?.length) {
    return undefined;
  }
  return {
    title: data.data.doc_file_name_title,
    finishedAt: data.data.doc_have_read_time ? new Date(data.data.doc_have_read_time) : undefined,
    lastReadAt: data.data.doc_last_read_time ? new Date(data.data.doc_last_read_time) : undefined,
    numberOfComments: data.citations?.length,
    comments: data.citations?.map(value => ({
      quote: value.note_body,
      comment: value.note_extra,
      page: value.note_page,
    })),
  };
}

function getFileFromZip(zipPath: string, fileName: string): string | null {
  try {
    // Load the zip file
    const zip = new AdmZip(zipPath);

    // Get the file entry by its name
    const zipEntry = zip.getEntry(fileName);

    // If the file is not found, return null
    if (!zipEntry) {
      console.error(`File '${fileName}' not found in the zip.`);
      return null;
    }

    // Extract the content of the file as a string (if it's a text file)
    // Return the file content as string or buffer, depending on the type of file
    return zipEntry.getData().toString("utf8");
  } catch (error) {
    console.error("Error while reading the zip file:", error);
    return null;
  }
}
