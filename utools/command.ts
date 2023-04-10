// Copyright (c) 2022 ChandlerVer5
import { exec, execFile, spawn } from 'node:child_process';

const logPrefix = '[command]';

const shell = process.platform === 'darwin' ? '/bin/bash' : 'cmd.exe';

export interface CommandResult {
    command: string;
    success: boolean;
    data: string;
    message: string | undefined;
}

function run(command: string, options?: Object): Promise<CommandResult> {
    return new Promise((resolve, reject) => {
        execFile(command,
            // execFile(command, 
            Object.assign(
                {
                    shell
                },
                options,
                { timeout: 3600 * 1000 }
            ),
            (error, stdout, _stderr) => {
                if (error) {
                    console.error(`${logPrefix} ${error.stack}`);
                    return resolve({
                        command,
                        success: false,
                        data: '',
                        message: error.stack
                    });
                }

                return resolve({
                    command,
                    success: true,
                    data: stdout,
                    message: '执行命令成功'
                });
            }
        );
    });
}

function longExec(command: string, options?: Object): typeof childProcess {
    const commandParseArr = command.split(' ').filter(item => item);
    const childProcess = spawn(commandParseArr[0], commandParseArr.slice(1), {
        shell,
        ...options
    });

    return childProcess;
}

export { run, longExec };
