import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
} from 'react-icons/si';

const techStyle = 'w-6 h-6';

export type tech =
  | 'nextjs'
  | 'react'
  | 'tailwindcss'
  | 'js'
  | 'ts'
  | 'nodejs'
  | 'git'
  | 'php';

type techIcons = {
  [t in tech]: [string, (idx: number) => JSX.Element];
};

const available: techIcons = {
  nextjs: ['Next.js', (idx) => <SiNextdotjs className={techStyle} key={idx} />],
  react: [
    'Create React App',
    (idx) => <SiReact className={techStyle} key={idx} />,
  ],
  tailwindcss: [
    'Tailwind CSS',
    (idx) => <SiTailwindcss className={techStyle} key={idx} />,
  ],
  js: [
    'Vanilla JavaScript',
    (idx) => <SiJavascript className={techStyle} key={idx} />,
  ],
  ts: ['TypeScript', (idx) => <SiTypescript className={techStyle} key={idx} />],
  nodejs: ['Node.js', (idx) => <SiNodedotjs className={techStyle} key={idx} />],
  git: ['Git', (idx) => <SiGit className={techStyle} key={idx} />],
  php: ['PHP', (idx) => <SiPhp className={techStyle} key={idx} />],
};

export default function TechStack({ techs }: { techs: tech[] }) {
  return (
    <div className={'flex space-x-2'}>
      {techs.map((tech, index) => available[tech][1](index))}
    </div>
  );
}
