# InnoDB Recovery Suite

InnoDB Recovery Suite is a Python/Tkinter desktop application for best-effort recovery from MySQL InnoDB `.ibd` individual tablespace files.

It scans `.ibd` files page by page, identifies InnoDB index pages, skips damaged pages, reconstructs schema from nearby hints when possible, previews recovered row candidates, and exports data as `.sql` or `.csv` files that can be imported with phpMyAdmin.

## Important recovery note

InnoDB `.ibd` recovery is difficult without the matching MySQL data dictionary, table definition, MySQL version, row format, encryption/compression settings, and clean tablespace metadata. This tool is designed as a practical desktop recovery assistant, not a replacement for a full forensic InnoDB parser. When a matching `CREATE TABLE` SQL file is available, place it beside the `.ibd` file with the same base name, for example:

```text
customers.ibd
customers.sql
```

A matching `.frm` file can also provide column-name hints on older MySQL/MariaDB installations:

```text
customers.ibd
customers.frm
```

## Features

- Tkinter desktop GUI with Select Source, Preview Data, and Export tabs.
- Database-folder recovery mode for recovering related `.ibd` files together.
- Reads `.ibd` files in 16 KB InnoDB pages.
- Classifies common page types and focuses on leaf index pages when available.
- Gracefully skips unreadable or short pages.
- Reconstructs schema from a neighboring `.sql` file containing `CREATE TABLE`.
- Uses `.frm` strings as fallback column-name hints.
- Infers generic columns when no schema file exists.
- Follows the active InnoDB record chain first so deleted/free-list fragments are not mixed into normal exports.
- Falls back to printable row-like data and raw payload samples when no active record chain is recoverable.
- Keeps ID-like columns numeric during fallback recovery and decodes common InnoDB biased integer fields near recovered text.
- Exports recovered rows to `recovered/<table>.sql`.
- Exports recovered rows to `recovered/<table>.csv`.
- Writes logs and per-file summaries to the `logs` folder.
- Writes audit CSV files for uncertain rows such as missing phone fields.

## Requirements

- Python 3.10 or newer recommended.
- Tkinter, included with most Python desktop installations.

Install optional dependencies:

```powershell
pip install -r requirements.txt
```

The app runs without `sqlparse`; it is listed as optional tooling for SQL formatting workflows.

## Run

From this folder:

```powershell
python main.py
```

## Usage

1. Open the app.
2. Go to the **Select Source** tab.
3. Prefer **Choose Database Folder** and select a folder such as `C:\xampp\mysql\pvone\data\imag10`.
4. Or click **Choose .ibd File(s)** and select one or more `.ibd` files.
5. Place same-name `.sql` or `.frm` files beside the `.ibd` files before recovery if you have them.
6. Click **Recover Selected**.
7. Review recovered rows in the **Preview Data** tab.
8. Go to the **Export** tab.
9. Click **Export as SQL** or **Export as CSV**.

You can also recover one database folder from the command line:

```powershell
python recover_database.py C:\xampp\mysql\pvone\data\imag10
```

Recovered files are saved in:

```text
recovered/
```

Logs and recovery summaries are saved in:

```text
logs/
```

## Import via phpMyAdmin

For SQL exports:

1. Open phpMyAdmin.
2. Select the target database.
3. Create the destination table first if it does not already exist.
4. Open the **Import** tab.
5. Choose the exported `.sql` file from the `recovered` folder.
6. Click **Import**.

For CSV exports:

1. Open phpMyAdmin.
2. Select the target database and table.
3. Open the **Import** tab.
4. Choose the exported `.csv` file.
5. Select CSV format and confirm delimiter/header options.
6. Click **Import**.

## Project structure

```text
main.py
innodb_recovery_suite/
  gui.py
  tablespace_reader.py
  schema_reconstruction.py
  row_extraction.py
  exporter.py
  logger_config.py
  models.py
requirements.txt
README.md
```

## Recovery tips

- Work on copies of `.ibd`, `.frm`, and schema files.
- Prefer using a matching `CREATE TABLE` statement when available.
- Disable encryption/compression at the source before backup whenever possible.
- Expect partial recovery from corrupted, orphaned, or dictionary-less tablespaces.
