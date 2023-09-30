import githubLogo from '../assets/github.svg'

export function Footer () {
  return (
    <footer className="mt-2 text-center">
          <a href="https://github.com/ibaiAD/memery" target="_blank" rel="noreferrer" className="github-link inline-block rounded-md hover:bg-slate-300 hover:shadow-md hover:shadow-slate-600 hover:-translate-y-1 active:bg-slate-400 active:translate-y-0 active:shadow-none transition-all">
            <img src={githubLogo} alt="GitHub logo" className="w-10 h-10" />
          </a>
        </footer>
  )
}
