import React from 'react';
import { useSetState } from 'ahooks';

type Props = {};
type State = {
  title: string;
  description: '文件' | '目录';
  url: string;
  isFile: boolean;
};

// TODO  配置 fd/fdfind 路径

export default function Find({}: Props) {
  const { fs, run } = window.preload;

  const [state, setState] = useSetState<State[]>([]);

  // @ts-ignore
  utools.setSubInput(search, '查找文件', true);

  async function search({ text }: { text: string }) {
    const { data, success } = await run(`/opt/homebrew/bin/fd -Fa ${text}`, {
      maxBuffer: 1024 * 500
    });
    console.log(data, success);
    // 执行 callbackSetList 显示出来
    for (const item of data.split('\n')) {
      if (item !== '') {
        utools.setExpendHeight(660);
        setState((state) => {
          return [
            ...state,
            {
              title: item,
              description: fs.statSync(item).isFile() ? '文件' : '目录',
              url: item,
              isFile: fs.statSync(item).isFile()
            }
          ];
        });
      }
    }
  }
  /* 
        select: (action, itemData, callbackSetList) => {
           window.utools.hideMainWindow()
          // const url = itemData.url
           //require('electron').shell.openExternal(url)
           //window.utools.outPlugin()
          if(itemData.isFile) utools.shellOpenPath(itemData.url)
          else utools.shellShowItemInFolder(itemData.url)
        }, */

  return (
    <div>
      {state.map(({ title, description, url }) => (
        <>
          <div>{title}</div>
          <div>{description}</div>
          <div>{url}</div>
        </>
      ))}
    </div>
  );
}
