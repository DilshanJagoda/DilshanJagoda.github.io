# JagodaOS

JagodaOS is a tiny 32-bit x86 hobby OS that boots to a text terminal.

## Features

- 32-bit protected-mode kernel
- VGA text output
- PS/2 keyboard input
- Shell prompt with editable command line
- Commands:
  - `help`
  - `info`
  - `mkdir <name>` / `create <name>`
  - `rmdir <name>` / `delete <name>`
  - `ls`
  - `clear`

Folders are stored in memory for now, so they reset when the OS reboots.

## Build Requirements

Install these tools:

- `i686-elf-gcc`
- `i686-elf-as`
- `i686-elf-ld`
- `grub-mkrescue`
- `xorriso`
- `qemu-system-i386`

## Build

```sh
make
```

## Run

```sh
make run
```

## Add A Command

Open `kernel/shell.c`.

1. Add a handler:

```c
static void cmd_mycommand(const char *args)
{
    terminal_writestring("Hello from my command!\n");
}
```

2. Add it to `commands[]`:

```c
{"mycommand", "Prints a custom message", cmd_mycommand},
```

# Developer

## Dilshan Jagoda

Independent Developer

Areas of Interest:

- Software Engineering
- Cybersecurity
- Computer Systems
- Artificial Intelligence

___