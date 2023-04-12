import { useSetState, useThrottleFn } from 'ahooks';
import { useState, useEffect, useRef } from 'react';
import Iframe from 'react-iframe';
import HTML from '@/components/HTML/Renderer';
import { useScript } from '@/hooks/useScript';

type Props = {};
type State = {
  title: string;
  description: '文件' | '目录';
  url: string;
  isFile: boolean;
};

// TODO  配置 fd/fdfind 路径
const useFind = () => {
  const { fs, longExec } = window.preload;

  const [result, setResult] = useState<State[]>([]);

  const handleData = (data: string = '') => {
    const files = data.split('\n').filter(Boolean);
    const parsedFiles: State[] = files.map((file) => {
      const url = file.trim();
      const isFile = !fs.statSync(url).isFile();
      const title = url;
      const description = isFile ? '文件' : '目录';
      return { title, description, url, isFile };
    });
    setResult(parsedFiles);
  };
  const handleError = (error: Error) => {
    console.error('Command execution failed:', error.message);
  };

  const handleEnd = (code: number) => {
    if (code !== 0) {
      console.error(`Command execution failed with code ${code}`);
    }
  };

  const { run: find } = useThrottleFn(
    (text: string) => {
      const fd = longExec(`/opt/homebrew/bin/fd -Fa ${text} ~/Downloads`);

      fd.stdout.on('data', (data: Buffer) => handleData(data.toString()));

      fd.stderr.on('data', (data: Buffer) => {
        handleError(new Error(data.toString()));
      });

      fd.on('close', (code: number) => {
        handleEnd(code);
      });
    },
    { wait: 1000 }
  );

  return [result, find] as [State[], (text: string) => void];
};

export default function Find({}: Props) {
  const iframeRef = useRef<HTMLDivElement | null>(null);
  const [files, search] = useFind();
  console.log(files);

  useEffect(() => {
    utools.setSubInput(
      // @ts-ignore
      ({ text }: { text: string }) => {
        if (text !== '') search(text);
      },
      '查找文件',
      true
    );

    /*  const iframeWindow =
      iframeRef.current!.querySelector('iframe')!.contentWindow;
    if (iframeWindow) {
      // @ts-ignore
      iframeWindow['utools'] = utools;
      console.log(iframeWindow['utools']);
    } */
  }, []);

  if (files.length > 0) utools.setExpendHeight(660);

  // const status = useScript({
  //   src: lib,
  //   parent: iframeRef.current
  // });

  return (
    <div ref={iframeRef}>
      <HTML html={window.preload.getIndexHTML()}></HTML>
    </div>
  );

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {files.map((file) => (
          <div
            key={file.url}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #ccc'
            }}
          >
            <div style={{ fontWeight: 'bold', marginRight: '10px' }}>
              {file.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//   // @ts-ignore
//   utools.setSubInput(search, '查找文件', true);

//   async function search({ text }: { text: string }) {
//     let output = '';

//     const command = `/opt/homebrew/bin/fd`;

//     const [result, setResult] = useSetState([]);
//     const [isSearching, setIsSearching] = useState(false);

//     setIsSearching(true);
//     const searchProcess = longExec(command + ` -Fa ${text} ~/`);
//     const outputHandler = useThrottle(
//       (data: Buffer) => {
//         setResult(data.toString()]);
//       },
//       { wait: 600 }
//     );

//     searchProcess.stdout.on('data', outputHandler);
//     searchProcess.stderr.on('data', outputHandler);
//     searchProcess.on('error', (error) => {
//       console.error(`Failed to execute command: ${command}`, error);
//     });
//     searchProcess.on('end', () => {
//       setIsSearching(false);
//     });

//     // const { data, success } = await run(`/opt/homebrew/bin/fd -Fa ${text} ~/`, {
//     //   maxBuffer: 1024 * 12048
//     // });
//     // console.log(data, success);
//     // 执行 callbackSetList 显示出来
//     for (const item of output.split('\n')) {
//       if (item !== '') {
//         utools.setExpendHeight(660);
//         setState((state) => {
//           return [
//             ...state,
//             {
//               title: item,
//               description: fs.statSync(item).isFile() ? '文件' : '目录',
//               url: item,
//               isFile: fs.statSync(item).isFile()
//             }
//           ];
//         });
//       }
//     }
//   }
//   /*
//         select: (action, itemData, callbackSetList) => {
//            window.utools.hideMainWindow()
//           // const url = itemData.url
//            //require('electron').shell.openExternal(url)
//            //window.utools.outPlugin()
//           if(itemData.isFile) utools.shellOpenPath(itemData.url)
//           else utools.shellShowItemInFolder(itemData.url)
//         }, */

//   return (
//     <div>
//       {state.map(({ title, description, url }) => (
//         <>
//           <div>{title}</div>
//           <div>{description}</div>
//           <div>{url}</div>
//         </>
//       ))}
//     </div>
//   );
// }
// }
